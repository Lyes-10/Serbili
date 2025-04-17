import 'package:dio/dio.dart';
import 'package:flutter/material.dart';

import 'package:serbili/ui/auth/widgets/Newpassword.dart';
import 'package:serbili/ui/auth/widgets/auth.dart';

import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';
import 'package:serbili/ui/core/ui/transction.dart';

class Restpassword extends StatefulWidget {
  @override
  _RestpasswordState createState() => _RestpasswordState();
}

class _RestpasswordState extends State<Restpassword> {
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
                        Center(child: Restpassword_page()),
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

class Restpassword_page extends StatefulWidget {
  Restpassword_page({
    super.key,
  });

  @override
  State<Restpassword_page> createState() => _Restpassword_pageState();
}

class _Restpassword_pageState extends State<Restpassword_page> {
  final TextEditingController emailController = TextEditingController();

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
        navigateWithSlideTransition(context, Newpassword());
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
      margin: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 30,
      ),
      child: Column(
        children: [
          Align(
            alignment: Alignment.centerLeft,
            child: Text(
              'Reset Password',
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
              'Type your authorised email address or number phone  to receive reset password link.',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w400,
                color: Color(0xff333333),
                fontFamily: 'Poppins',
              ),
            ),
          ),
          SizedBox(
            height: 20,
          ),
          CommonTextField(
            hintText: 'Email ',
            controller: emailController,
            width: MediaQuery.of(context).size.width,
            borderRadius: 12,
          ),
          SizedBox(
            height: 20,
          ),
          CommonButton(
            text: 'Send Reset Password Link',
            onPressed: () {
              final email = emailController.text.trim();
              requestOtp(email);
            },
            width: MediaQuery.of(context).size.width,
          ),
        ],
      ),
    );
  }
}
