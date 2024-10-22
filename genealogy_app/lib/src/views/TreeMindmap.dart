import 'package:flutter/material.dart';

import '../model/tree_model.dart';

class FamilyTreeMindMap extends StatelessWidget {
  final Member rootMember;

  const FamilyTreeMindMap({Key? key, required this.rootMember})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return InteractiveViewer(
      boundaryMargin: const EdgeInsets.all(double.infinity),
      minScale: 0.1,
      maxScale: 5.0,
      child: Container(
          width: double.infinity,
          decoration: const BoxDecoration(
              image: DecorationImage(
                  image: AssetImage('assets/images/img_3.jpg'),
                  fit: BoxFit.cover)),
          child: Center(child: _buildTree(rootMember))),
    );
  }

  Widget _buildTree(Member member) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildMemberCard(member),
        if (member.children.isNotEmpty)
          Padding(
            padding: const EdgeInsets.only(top: 50.0),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.start,
              children:
                  member.children.map((child) => _buildTree(child)).toList(),
            ),
          ),
      ],
    );
  }

  Widget _buildMemberCard(Member member) {
    return Container(
      width: 200,
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        border: Border.all(color: Colors.blue),
        borderRadius: BorderRadius.circular(8),
        color: Colors.white,
      ),
      child: Column(
        children: [
          if (member.data != null && member.data!.img.isNotEmpty)
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: Image.network(
                member.data!.img,
                width: 60,
                height: 60,
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) =>
                    const Icon(Icons.person, size: 60),
              ),
            ),
          const SizedBox(height: 8),
          Text(member.name,
              style: const TextStyle(fontWeight: FontWeight.bold)),
          if (member.data != null) ...[
            Text('Chức vụ: ${member.data!.chucVu}'),
            Text('Sinh: ${member.data!.sinh}'),
            Text('Mất: ${member.data!.mat}'),
          ],
        ],
      ),
    );
  }
}
