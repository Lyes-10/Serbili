

class Olduser {
  final String identifier;
  final String password;

  Olduser({required this.identifier, required this.password});

  Map<String, dynamic> toJson() {
    return {
      'identifier': identifier,
      'password': password,
    };
  }
}