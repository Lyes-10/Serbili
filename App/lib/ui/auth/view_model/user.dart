class User {
  final String? fullName;
  final String? email;
  final String? password;
  final String? phoneNumber;
  final String? userType;
  final String? familyname;

  User( {
    this.familyname,
     this.fullName,
     this.email,
     this.password,
     
     this.phoneNumber,
     this.userType,
  });

  // Convert User object to JSON (for Firebase, APIs, etc.)
  Map<String, dynamic> toJson() {
    return {
      'fullName': fullName,
      'lastname':familyname,
      'email': email,
      'password': password,
      
      'phoneNumber': phoneNumber,
      'userType': userType,
    };
  }

  // Create User object from JSON (for Firebase, APIs, etc.)
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      fullName: json['firstname'],
      familyname:json['lastname'],
      email: json['email'],
      password: json['password'],
      phoneNumber: json['phoneNumber'],
      userType: json['userType'],
    );
  }
}
