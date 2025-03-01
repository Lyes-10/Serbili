class User {
  final String firstname;
  final String lastname;
  final String email;
  final String password;
  final String userType;
  final String phoneNumber;

  User({
    required this.firstname,
    required this.lastname,
    required this.email,
    required this.password,
    required this.userType,
    required this.phoneNumber,
  });

  Map<String, dynamic> toJson() {
    return {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'password': password,
      'userType': userType,
      'phoneNumber': phoneNumber,
    };
  }
}