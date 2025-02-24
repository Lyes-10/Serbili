import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:serbili/const.dart';
import 'user.dart';

class AuthService {
  final Dio dio = Dio();
  final FlutterSecureStorage secureStorage = FlutterSecureStorage();

  Future<void> register(User user) async {
    try {
      final response = await dio.post(
        "http://localhost:5000/auth/register",
        data: user.toJson(),
      );

      if (response.statusCode == 201) {
        final token = response.data['accessToken'];
        await secureStorage.write(key: 'access_token', value: token);
        print('User registered successfully');
        print(user.fullName);
      } else {
        print('Failed to register user');
      }
    } catch (e) {
      print('Error: $e');
    }
  }
}
