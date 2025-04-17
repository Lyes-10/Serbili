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
  Future<void> refreshToken() async {
    try {
      String? tokenRefresh = await secureStorage.read(key: 'refreshToken');
      if (tokenRefresh == null) {
        throw Exception('No refresh token found');
      }

      final response = await dio.post(
        'http://localhost:3000/auth/refresh-token',
        data: {'tokenRefresh': tokenRefresh},
      );

      if (response.statusCode == 200) {
        final data = response.data;
        await secureStorage.write(
            key: 'accessToken', value: data['accessToken']);
        await secureStorage.write(
            key: 'refreshToken', value: data['refreshToken']);
      }
    } catch (e) {
      print('Error refreshing token: $e');
    }
  }

  Future<void> register(User user) async {
    try {
      final dio = Dio(BaseOptions(
        connectTimeout: Duration(seconds: 10),
        // 10 seconds
        receiveTimeout: Duration(seconds: 5), // 5 seconds
      ));

      final response = await dio.post(
        'http://192.168.104.46:3000/auth/register',
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
      final response = await dio.post('http://192.168.100.8:5000/auth/login',
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
        await secureStorage.write(
            key: 'accessToken', value: data['accessToken']);
        await secureStorage.write(
            key: 'refreshToken', value: data['refreshToken']);
      } else {
        print('Failed to register user');
      }
    } catch (e) {
      print('Error: $e');
    }
  }

  final DioClient dioClient = DioClient();

  Future<Map<String, dynamic>> verifyOTP(String userId, String otp) async {
    try {
      Response response = await dioClient.dio.post(
        "http://192.168.100.8:5000/auth/verify-otp", // Replace with your actual endpoint
        data: {
          "userId": userId,
          "otp": otp,
        },
      );

      if (response.statusCode == 200) {
        return response.data; // Successful response
      } else {
        return {"error": response.data['message'] ?? "Error occurred"};
      }
    } on DioException catch (e) {
      return {
        "error": e.response?.data['message'] ?? "Connection failed",
      };
    }
  }
}

class DioClient {
  final Dio _dio = Dio();

  Dio get dio {
    _dio.options.baseUrl =
        "http://your-server-url"; // Replace with your backend URL
    _dio.options.headers = {
      'Content-Type': 'application/json',
    };
    return _dio;
  }
}
