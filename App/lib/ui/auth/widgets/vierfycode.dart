import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import 'package:serbili/ui/auth/view_model/Authservice.dart';
import 'package:serbili/ui/auth/widgets/location.dart';

import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Vierfycode extends StatefulWidget {
  Vierfycode({
    required this.email,
    super.key,
  });

  final String email;
  @override
  _VierfycodeState createState() => _VierfycodeState();
}

class _VierfycodeState extends State<Vierfycode> {
  final List<TextEditingController> _controllers =
      List.generate(6, (_) => TextEditingController());
  final TextEditingController userIdController = TextEditingController();
  final AuthService authService = AuthService();
  String message = "";

  @override
  void dispose() {
    _controllers.forEach((controller) => controller.dispose());
    super.dispose();
  }

  void verifyOTP() async {
    final userId = userIdController.text.trim();
    final otp = _controllers
        .map((controller) => controller.text)
        .join(); // Combine OTP digits

    if (userId.isEmpty || otp.isEmpty) {
      setState(() {
        message = "Please provide both User ID and OTP.";
      });
      return;
    }

    try {
      final dio = Dio();
      final response = await dio.post(
        'http://192.168.104.46:3000/auth/verify-otp', // Replace with your backend URL
        data: {
          'userId': userId,
          'otp': otp,
        },
        options: Options(
          headers: {
            'Content-Type': 'application/json',
          },
        ),
      );

      if (response.statusCode == 200) {
        setState(() {
          message = response.data['msg'] ?? "OTP verified successfully!";
        });

        // Navigate to the next screen (e.g., Location)
        Navigator.push(
          context,
          MaterialPageRoute(builder: (context) => Location()),
        );
      } else {
        setState(() {
          message = response.data['message'] ?? "Failed to verify OTP.";
        });
      }
    } catch (e) {
      setState(() {
        message = "An error occurred: ${e.toString()}";
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 1,
      child: Scaffold(
        body: Expanded(
          child: Column(children: [
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height / 3.7,
              decoration: BoxDecoration(
                  color: Color(0xffFF6F00),
                  borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(10),
                      bottomRight: Radius.circular(10))),
              child: Center(
                child: Image.asset(
                    'asset/images/befb2299ba304a49bdd2f9e69c5fac77-free 2.png',
                    width: 110,
                    height: 110,
                    fit: BoxFit.cover),
              ),
            ),
            Expanded(
              child: Column(
                children: <Widget>[
                  TabBar(
                      tabs: [
                        Tab(text: 'Sing up'),
                      ],
                      indicator: UnderlineTabIndicator(
                          borderSide: BorderSide(
                            color: Color(0xffFA4A0C),
                            width: 4.0, // Thickness of the indicator
                          ),
                          insets: EdgeInsets.symmetric(horizontal: 70.0)),
                      labelColor: Colors.black,
                      unselectedLabelColor: Colors.grey,
                      labelStyle: AppStyles.head),
                  Expanded(
                    child: TabBarView(
                      children: [
                        Center(
                            child: Vierfy_code(
                          email: widget.email,
                        )),
                      ],
                    ),
                  ),
                ],
              ),
            ),
          ]),
        ),
      ),
    );
  }
}

class Vierfy_code extends StatefulWidget {
  Vierfy_code({
    required this.email,
    super.key,
  });

  var email;

  @override
  State<Vierfy_code> createState() => _Vierfy_codeState();
}

class _Vierfy_codeState extends State<Vierfy_code> {
  final List<TextEditingController> _controllers =
      List.generate(6, (_) => TextEditingController());
  final TextEditingController userIdController = TextEditingController();
  final AuthService authService = AuthService();
  String message = "";

  @override
  void dispose() {
    _controllers.forEach((controller) => controller.dispose());
    userIdController.dispose();
    super.dispose();
  }

  void verifyOTP() async {
    final userId = userIdController.text.trim(); // Get userId from input
    final otp = _controllers
        .map((controller) => controller.text)
        .join(); // Combine OTP digits

    if ( otp.isEmpty || otp.length < 6) {
      setState(() {
        message = "Please provide both User ID and a complete 6-digit OTP.";
      });
      return;
    }

    try {
      final dio = Dio();
      final response = await dio.post(
        'http://192.168.104.46:3000/auth/verify-otp', // Replace with your backend URL
        data: {
          'userId': 47,
          'otp': otp,
        },
        options: Options(
          headers: {
            'Content-Type': 'application/json',
          },
        ),
      );

      if (response.statusCode == 200) {
        setState(() {
          message = response.data['msg'] ?? "OTP verified successfully!";
        });

        // Navigate to the next screen
        Navigator.pushReplacement(
          context,
          MaterialPageRoute(builder: (context) => Location()),
        );
      } else {
        setState(() {
          message = response.data['message'] ?? "Failed to verify OTP.";
        });
      }
    } catch (e) {
      if (e is DioError && e.response?.statusCode == 400) {
        setState(() {
          message = "Bad Request: Please check your input.";
        });
      } else {
        setState(() {
          message = "An error occurred: ${e.toString()}";
        });
      }

      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'An error occurred: ${e.toString()}',
            style: TextStyle(
              color: Colors.white,
              fontSize: 16,
              fontWeight: FontWeight.bold,
            ),
          ),
          backgroundColor: Colors.red,
          behavior: SnackBarBehavior.floating,
          margin: EdgeInsets.all(16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12),
          ),
          duration: Duration(seconds: 4),
        ),
      );
    }
  }

  void requestOtp(String email) async {
    if (email.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Please enter your email address')),
      );
      return;
    }

    try {
      final dio = Dio();
      final response = await dio.post(
        'http://192.168.104.46:3000/auth//request-otp', // Replace with your backend URL
        data: {
          'email': email,
        },
        options: Options(
          headers: {
            'Content-Type': 'application/json',
          },
        ),
      );

      if (response.statusCode == 200) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              response.data['message'] ?? 'OTP sent successfully!',
              style: TextStyle(
                color: Colors.white, // Text color
                fontSize: 16, // Font size
                fontWeight: FontWeight.bold, // Font weight
              ),
            ),
            backgroundColor: Colors.green, // Background color
            behavior: SnackBarBehavior.floating, // Makes the SnackBar float
            margin: EdgeInsets.all(16), // Adds margin around the SnackBar
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12), // Rounded corners
            ),
            duration: Duration(seconds: 3), // Duration the SnackBar is visible
          ),
        );
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
              content: Text(response.data['message'] ?? 'Failed to send OTP.')),
        );
      }
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(
          content: Text(
            'An error occurred: ${e.toString()}',
            style: TextStyle(
              color: Colors.white, // Text color
              fontSize: 16, // Font size
              fontWeight: FontWeight.bold, // Font weight
            ),
          ),
          backgroundColor: Colors.red, // Background color for error
          behavior: SnackBarBehavior.floating, // Makes the SnackBar float
          margin: EdgeInsets.all(16), // Adds margin around the SnackBar
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(12), // Rounded corners
          ),
          duration: Duration(seconds: 4), // Duration the SnackBar is visible
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 20, right: 20, top: 30),
      child: Column(
        children: [
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              'Verify Your Code',
              style: TextStyle(
                fontSize: 26,
                fontWeight: FontWeight.w700,
                color: Color(0xff333333),
                fontFamily: 'Poppins',
              ),
            ),
          ),
          SizedBox(height: 10),
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              'Enter the passcode you just received on your email address ending with ********in@gmail.com',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w400,
                color: Color(0xff333333),
                fontFamily: 'Poppins',
              ),
            ),
          ),
          SizedBox(height: 20),
          Padding(
            padding: const EdgeInsets.all(16.0),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: List.generate(6, (index) {
                    return Container(
                      width: 41.315818786621094,
                      height: 80,
                      child: TextFormField(
                        controller: _controllers[index],
                        keyboardType: TextInputType.number,
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 18),
                        decoration: InputDecoration(
                          filled: true,
                          fillColor: Theme.of(context).scaffoldBackgroundColor,
                          border: OutlineInputBorder(
                            borderRadius: BorderRadius.circular(8),
                            borderSide: BorderSide(color: Color(0xffD5ABF7)),
                          ),
                          contentPadding: EdgeInsets.zero,
                          counterText: "",
                        ),
                        maxLength: 1,
                        onChanged: (value) {
                          if (value.isNotEmpty && index < 5) {
                            FocusScope.of(context).nextFocus();
                          } else if (value.isEmpty && index > 0) {
                            FocusScope.of(context).previousFocus();
                          }
                        },
                      ),
                    );
                  }),
                ),
              ],
            ),
          ),
          SizedBox(height: 20),
          CommonButton(
            text: 'Verify',
            onPressed: verifyOTP, // Call the verifyOTP method
            width: MediaQuery.of(context).size.width,
          ),
          SizedBox(height: 20),
          Text(
            message,
            style: TextStyle(color: Colors.red),
          ),
          CommonButton(
            text: 'send OTP',
            onPressed: () {
              final email = widget.email.toString(); // Get the email from the widget
              requestOtp(email);
            }, // Call the verifyOTP method
            width: MediaQuery.of(context).size.width,
          ),
        ],
      ),
    );
  }
}
