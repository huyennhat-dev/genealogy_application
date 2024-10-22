import 'package:flutter/material.dart';
import 'Tree.dart';

class ZoomableScreen extends StatefulWidget {
  const ZoomableScreen({super.key});

  @override
  _ZoomableScreenState createState() => _ZoomableScreenState();
}

class _ZoomableScreenState extends State<ZoomableScreen> {
  double _scaleFactor = 1.0;
  double _previousScaleFactor = 1.0;
  Offset _offset = Offset.zero;
  Offset _previousOffset = Offset.zero;

  void _onScaleStart(ScaleStartDetails details) {
    _previousScaleFactor = _scaleFactor;
    _previousOffset = details.focalPoint;
  }

  void _onScaleUpdate(ScaleUpdateDetails details) {
    setState(() {
      _scaleFactor = _previousScaleFactor * details.scale;
      _offset += (details.focalPoint - _previousOffset) / _scaleFactor;
      _previousOffset = details.focalPoint;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Zoomable Family Tree'),
      ),
      body: GestureDetector(
          onScaleStart: _onScaleStart,
          onScaleUpdate: _onScaleUpdate,
          child: SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: SingleChildScrollView(
              scrollDirection: Axis.vertical,
              child: Transform(
                transform: Matrix4.identity()
                  ..translate(_offset.dx, _offset.dy)
                  ..scale(_scaleFactor),
                alignment: FractionalOffset.center,
                child: const TreeViewPage(),
              ),
            ),
          )),
      // body: FamilyTree(),
    );
  }
}
