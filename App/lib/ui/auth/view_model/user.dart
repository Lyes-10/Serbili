class User {
  final String firstname;
  final String lastname;
  final String email;
  final String password;
  final String userType;
  final String phoneNumber;
  final String? paper; // Optional field for the uploaded file (Base64 string)
  final String? category; // Optional field for the user's category

  User({
    required this.firstname,
    required this.lastname,
    required this.email,
    required this.password,
    required this.userType,
    required this.phoneNumber,
    this.paper,
    this.category,
  });

  Map<String, dynamic> toJson() {
    return {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'password': password,
      'userType': userType,
      'phoneNumber': phoneNumber,
      if (paper != null) 'paper': paper, // Include only if not null
      if (category != null) 'category': category, // Include only if not null
    };
  }
}