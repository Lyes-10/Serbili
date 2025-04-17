import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:serbili/ui/auth/widgets/auth.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';
import 'package:serbili/ui/core/ui/transction.dart';

class Newpassword extends StatefulWidget {
  @override
  _NewpasswordState createState() => _NewpasswordState();
}

class _NewpasswordState extends State<Newpassword> {
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
                        Tab(text: 'Login'),
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
                        Center(child: New_password()),
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

class New_password extends StatelessWidget {
  New_password({
    super.key,
  });
  final TextEditingController emailController = TextEditingController();
  final TextEditingController otpController = TextEditingController();
  final TextEditingController newPasswordController = TextEditingController();
  void resetPassword(BuildContext context) async {
    final email = emailController.text.trim();
    final otp = otpController.text.trim();
    final newPassword = newPasswordController.text.trim();

    if (email.isEmpty || otp.isEmpty || newPassword.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('Please fill in all fields')),
      );
      return;
    }
    try {
      final dio = Dio();
      final response = await dio.post(
        'http://192.168.104.46:3000/auth/reset-password', // Replace with your backend URL
        data: {
          'email': email,
          'otp': otp,
          'newPassword': newPassword,
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
              response.data['message'] ?? 'Password reset successfully!',
              style: TextStyle(
                color: Colors.white, // Text color
                fontSize: 16, // Font size
                fontWeight: FontWeight.bold, // Font weight
              ),
            ),
            backgroundColor: Colors.green, // Background color for success
            behavior: SnackBarBehavior.floating, // Makes the SnackBar float
            margin: EdgeInsets.all(16), // Adds margin around the SnackBar
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12), // Rounded corners
            ),
            duration: Duration(seconds: 3), // Duration the SnackBar is visible
          ),
        );

        // Navigate to the login page or another screen
     // Example usage
navigateWithSlideTransition(context, Auth());

      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              response.data['message'] ?? 'Failed to reset password',
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
    } catch (e) {
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text('An error occurred: ${e.toString()}')),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 20, top: 30, right: 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              'Create new password',
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
              'Type your new strong password. Your password must include',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w400,
                color: Color(0xff333333),
                fontFamily: 'Poppins',
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                '• One capital letter & one small letter at least',
                style: TextStyle(fontSize: 14, color: Colors.black),
              ),
              Text(
                '• One special character',
                style: TextStyle(fontSize: 14, color: Colors.black),
              ),
              Text(
                '• Minimum 8 digits long',
                style: TextStyle(fontSize: 14, color: Colors.black),
              ),
            ],
          ),
          SizedBox(
            height: 20,
          ),
          CommonTextField(
            hintText: 'otp',
            controller: otpController,
            width: MediaQuery.of(context).size.width,
            borderRadius: 12,
          ),
          SizedBox(
            height: 20,
          ),
          CommonTextField(
            hintText: 'Email address',
            controller: emailController,
            width: MediaQuery.of(context).size.width,
            borderRadius: 12,
          ),
          SizedBox(
            height: 20,
          ),
          CommonTextField(
            hintText: 'password',
            controller: newPasswordController,
            width: MediaQuery.of(context).size.width,
            borderRadius: 12,
          ),
          SizedBox(
            height: 20,
          ),
          CommonButton(
            text: 'Send Reset Password Link',
            onPressed: () => resetPassword(context),
            width: MediaQuery.of(context).size.width,
          )
        ],
      ),
    );
  }
}
