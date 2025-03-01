import 'package:dio/dio.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:serbili/const.dart';
import 'user.dart';

class AuthService {
  final dio = Dio(BaseOptions(
    sendTimeout: Duration(seconds: 5),
    receiveTimeout: Duration(seconds: 10), // 10 seconds
    // 3 seconds
  ));
  final FlutterSecureStorage secureStorage = FlutterSecureStorage();

  Future<void> register(User user) async {
    try {
      final dio = Dio(BaseOptions(
        connectTimeout: Duration(seconds: 10),
         // 10 seconds
        receiveTimeout: Duration(seconds: 5), // 5 seconds
      ));

      final response = await dio.post(
        'http://192.168.100.46:3000/auth/register',
        data: user.toJson(),
        options: Options(
          headers: {
            'Content-Type': 'application/json',
          },
        ),
      );

      if (response.statusCode == 201) {
        // Go back to the previous screen
        print('User registered successfully');
        print(user.toJson());
      } else {
        print('Failed to register user');
      }
    } catch (e) {
      print(e);
    }
  }

  Future<void> login(data) async {
    try {
      final response = await dio.post('https://dummyjson.com/auth/login',
          data: data,
          options: Options(
            headers: {
              'Content-Type': 'application/json',
            },
          ));

      if (response.statusCode == 200) {
        // Go back to the previous screen
        print('User registered successfully');
        print(data);
      } else {
        print('Failed to register user');
      }
    } catch (e) {
      print('Error: $e');
    }
  }
}
