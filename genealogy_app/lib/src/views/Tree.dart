import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_screenutil/flutter_screenutil.dart';
import 'package:graphview/GraphView.dart';

import '../model/tree_model.dart';

class TreeViewPage extends StatefulWidget {
  const TreeViewPage({super.key});

  @override
  _TreeViewPageState createState() => _TreeViewPageState();
}

class _TreeViewPageState extends State<TreeViewPage> {
  Member? member; // Biến member để chứa dữ liệu

  final Graph graph = Graph()..isTree = true; // Khởi tạo graph
  BuchheimWalkerConfiguration builder = BuchheimWalkerConfiguration();

  @override
  void initState() {
    super.initState();
    _loadJsonData(); // Tải dữ liệu JSON
  }

  Future<void> _loadJsonData() async {
    final String response =
        await rootBundle.loadString('assets/json/default.json');
    final Map<String, dynamic> parsedJson = json.decode(response);

    setState(() {
      member = Member.fromJson(parsedJson); // Gán dữ liệu cho member
      addNodesToGraph(member!); // Thêm các nút vào graph
      builder
        ..siblingSeparation = (100)
        ..levelSeparation = (100)
        ..subtreeSeparation = (150)
        ..orientation = (BuchheimWalkerConfiguration.ORIENTATION_TOP_BOTTOM);
    });
  }

  void addNodesToGraph(Member member) {
    final nodeGraph = Node.Id(member.id);
    for (var child in member.children) {
      final childGraph = Node.Id(child.id);
      graph.addNode(childGraph);
      graph.addEdge(nodeGraph, childGraph);
      addNodesToGraph(child);
    }
  }

  double _scaleFactor = 0.1;
  double _previousScaleFactor = 0.1;
  Offset _offset = const Offset(-1000, 0);
  Offset _previousOffset = Offset.zero;

  void _onScaleStart(ScaleStartDetails details) {
    _previousScaleFactor = _scaleFactor;
    _previousOffset = details.focalPoint;
  }

  void _onScaleUpdate(ScaleUpdateDetails details) {
    setState(() {
      _scaleFactor = (_previousScaleFactor * details.scale).clamp(0.1, 10);
      _offset += (details.focalPoint - _previousOffset) / _scaleFactor;
      _previousOffset = details.focalPoint;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (member == null) {
      return const Scaffold(
        body: Center(
            child: CircularProgressIndicator()), // Hiển thị loading indicator
      );
    }
    return Scaffold(
      appBar: AppBar(
        title: const Text('Family Tree'),
        actions: [
          IconButton(
            icon: const Icon(Icons.refresh),
            onPressed: () {
              setState(() {
                _scaleFactor = 0.1;
                _previousScaleFactor = 0.1;
                _offset = const Offset(-1000, 0);
                _previousOffset = Offset.zero;
              });
            },
          ),
        ],
      ),
      body: LayoutBuilder(
        builder: (context, constraints) {
          double initialOffsetX = constraints.maxWidth / 4;
          double initialOffsetY = -constraints.maxHeight; // Dịch lên một chút

          return InteractiveViewer(
            constrained: false,
            minScale: 0.1,
            maxScale: 10.0,
            boundaryMargin: const EdgeInsets.all(50),
            child: GestureDetector(
              onScaleStart: _onScaleStart,
              onScaleUpdate: _onScaleUpdate,
              child: Transform(
                transform: Matrix4.identity()
                  ..translate(
                      initialOffsetX + _offset.dx, initialOffsetY + _offset.dy)
                  ..scale(_scaleFactor),
                alignment: FractionalOffset.center,
                child: GraphView(
                  graph: graph,
                  algorithm: BuchheimWalkerAlgorithm(
                      builder, TreeEdgeRenderer(builder)),
                  paint: Paint()
                    ..color = Colors.green
                    ..strokeWidth = 1
                    ..style = PaintingStyle.stroke,
                  builder: (Node node) {
                    var a = node.key!.value as int;
                    return rectangleWidget(a); // Trả về widget cho từng node
                  },
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  Widget rectangleWidget(int id) {
    // Tìm member tương ứng với id để lấy name
    Member? member = _getMemberById(id);

    if (member == null) {
      return const Text('Member not found');
    }

    return InkWell(
      onTap: () {
        print(
            'clicked on node $id: ${member.name}'); // In ra id của node và tên
      },
      child: Container(
        width: 100,
        height: 300,
        alignment: Alignment.topCenter,
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(4),
          border: Border.all(color: Colors.black),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.start,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(100),
              child: SizedBox(
                width: 60,
                height: 60,
                child: Image.network(
                  member.data!.img,
                  fit: BoxFit.cover,
                ),
              ),
            ),
            const SizedBox(height: 8), // Khoảng cách giữa hình và tên
            Center(
              // Sử dụng Center widget để căn giữa text
              child: Text(
                member.name,
                style: const TextStyle(
                  fontSize: 16,
                ),
                textAlign: TextAlign.center, // Căn giữa nội dung của text
              ),
            )
          ],
        ),
      ),
    );
  }

  Member? _getMemberById(int id) {
    // Hàm để tìm kiếm member theo id
    return _findMember(member, id);
  }

  Member? _findMember(Member? currentMember, int id) {
    // Nếu member hiện tại null, trả về null
    if (currentMember == null) return null;
    // Nếu tìm thấy id, trả về currentMember
    if (currentMember.id == id) return currentMember;

    // Tìm kiếm trong các children
    for (var child in currentMember.children) {
      final foundMember = _findMember(child, id);
      if (foundMember != null)
        return foundMember; // Nếu tìm thấy member trong children
    }

    return null; // Nếu không tìm thấy
  }
}
