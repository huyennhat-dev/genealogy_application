class Member {
  final int id;
  final String name;
  final List<Member> children;
  final Data? data;

  Member({
    required this.id,
    required this.name,
    required this.children,
    this.data,
  });

  factory Member.fromJson(Map<String, dynamic> json) {
    return Member(
      id: json['id'],
      name: json['name'] ?? 'Unknown', // Cung cấp giá trị mặc định nếu là null
      children: (json['children'] as List<dynamic>?)
              ?.map((childJson) => Member.fromJson(childJson))
              .toList() ??
          [],
      data: json['data'] != null ? Data.fromJson(json['data']) : null,
    );
  }
}

class Data {
  final String hoTen;
  final String chucVu;
  final String sinh;
  final String mat;
  final String img;

  Data({
    required this.hoTen,
    required this.chucVu,
    required this.sinh,
    required this.mat,
    required this.img,
  });

  factory Data.fromJson(Map<String, dynamic> json) {
    return Data(
      hoTen: json['ho_ten'] ?? 'Không rõ',
      chucVu: json['chuc_vu'] ?? 'Không rõ',
      sinh: json['sinh'] ?? 'Không rõ',
      mat: json['mat'] ?? 'Không rõ',
      img: json['img'] ??
          'https://cdn.aicschool.edu.vn/wp-content/uploads/2024/05/xem-hinh-con-gai-de-thuong.webp', // Ảnh mặc định nếu thiếu
    );
  }
}
