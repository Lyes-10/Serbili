import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:flutter_secure_storage/flutter_secure_storage.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/Shoper/home/ui/widgets/bottonnav.dart';

import 'package:serbili/ui/Shoper/home/ui/widgets/home.dart';
import 'package:serbili/ui/auth/view_model/olduser.dart';
import 'package:serbili/ui/auth/widgets/Restpassword.dart';
import 'package:serbili/ui/auth/widgets/SnackbarHelper.dart';
import 'package:serbili/ui/auth/widgets/verfiyuser.dart';

import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';
import 'package:serbili/ui/core/ui/dilago.dart';
import 'package:serbili/ui/core/ui/transction.dart';

import '../view_model/Authservice.dart';

class Auth extends StatefulWidget {
  @override
  _AuthState createState() => _AuthState();
}

class _AuthState extends State<Auth> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
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
                        Tab(text: 'Sign-up'),
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
                        Center(child: Login()),
                        Center(child: SignUp()),
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

class SignUp extends StatefulWidget {
  SignUp({super.key});

  @override
  State<SignUp> createState() => _SignUpState();
}

class _SignUpState extends State<SignUp> {
  TextEditingController email = TextEditingController();
  TextEditingController phoneNumber = TextEditingController();
  TextEditingController fullName = TextEditingController();
  TextEditingController familyName = TextEditingController(); // Fixed spelling

  final FocusNode _emailFocus = FocusNode();
  final FocusNode _phoneNumberFocus = FocusNode();
  final FocusNode _fullNameFocus = FocusNode(); // Fixed variable name
  final FocusNode _familyNameFocus = FocusNode(); // Fixed variable name

  final dio = Dio();
  _regster1() {
    if (email.text.isNotEmpty &&
        phoneNumber.text.isNotEmpty &&
        fullName.text.isNotEmpty &&
        familyName.text.isNotEmpty) {
      if (email.text.endsWith('@gmail.com')) {
        if ((phoneNumber.text.startsWith('05') ||
                phoneNumber.text.startsWith('06') ||
                phoneNumber.text.startsWith('07')) &&
            phoneNumber.text.length == 10) {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => Verfiyuser(
                fullName: fullName.text, // ✅ Fixed variable
                phoneNumber: phoneNumber.text,
                email: email.text,
                familyname: familyName.text, // ✅ Fixed variable
              ),
            ),
          );
        } else {
          print('Invalid phone number');
          showCustomDialog(
            context,
            'Error',
            'Invalid phone number, please enter a valid one',
            DialogType.error,
          );
        }
      } else {
        print('Please enter a valid email address');
        showCustomDialog(
          context,
          'Error',
          'Please enter a valid email address',
          DialogType.error,
        );
        return;
      }
    } else {
      print('Please fill in all fields');
      showCustomDialog(
        context,
        'Error',
        'Please fill all fields with your information',
        DialogType.error,
      );
      return;
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      return SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            children: [
              CommonTextField(
                hintText: 'Full Name',
                controller: fullName, // ✅ Correct controller
                focusNode: _fullNameFocus, // ✅ Correct focus node
                borderColor: Colors.grey,
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderRadius: 20,
                height: 90,
              ),
              SizedBox(height: 20),
              CommonTextField(
                hintText: 'Family Name',
                controller: familyName, // ✅ Correct controller
                focusNode: _familyNameFocus, // ✅ Correct focus node
                borderColor: Colors.grey,
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderRadius: 20,
                height: 90,
              ),
              SizedBox(height: 20),
              CommonTextField(
                hintText: 'Phone number',
                controller: phoneNumber,
                focusNode: _phoneNumberFocus,
                borderColor: Colors.grey,
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderRadius: 20,
                height: 90,
              ),
              CommonTextField(
                hintText: 'Email',
                controller: email,
                focusNode: _emailFocus,
                borderColor: Colors.grey,
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderRadius: 20,
                height: 90,
              ),
              Align(
                alignment: Alignment.centerRight,
                child: CommonButton(
                  text: 'Next',
                  width: 120,
                  onPressed: () {
                    _regster1();
                  },
                  borderRadius: 20,
                ),
              )
            ],
          ),
        ),
      );
    });
  }
}

class Login extends StatefulWidget {
  Login({
    super.key,
  });

  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  final TextEditingController phonenumber = TextEditingController();

  final TextEditingController password = TextEditingController();
  bool isLoading = false;
  final storage = FlutterSecureStorage();
  void login(BuildContext context) async {
    final identifier = phonenumber.text.trim(); // Email or phone number
    final password2 = password.text.trim(); // Password

    if (identifier.isEmpty || password2.isEmpty) {
      showCustomDialog(
        context,
        'Error',
        'Please fill all fields with your information',
        DialogType.error,
      );
      return;
    }

    if ((identifier.length == 10 &&
            (identifier.startsWith('05') ||
                identifier.startsWith('06') ||
                identifier.startsWith('07'))) ||
        identifier.contains('@')) {
      try {
        final dio = Dio();
        final response = await dio.post(
          'http://192.168.104.46:3000/auth/login', // Replace with your backend URL
          data: {
            'identifier': identifier,
            'password': password2,
          },
          options: Options(
            headers: {
              'Content-Type': 'application/json',
            },
          ),
        );

        if (response.statusCode == 200) {
          // Handle successful login
          final user = response.data['user'];
          final message = response.data['message'] ?? 'Login successful';
          final accessToken = response.data['accessToken'];
          final refreshToken = response.data['refreshToken'];

          // Store tokens securely
          await storage.write(key: 'accessToken', value: accessToken);
          await storage.write(key: 'refreshToken', value: refreshToken);
          // Navigate to the home screen
          Navigator.pushReplacement(
            context,
            MaterialPageRoute(builder: (context) => BottomNavExample()),
          );

          // Show success message
          SnackbarHelper.show(context, message);
        } else {
          // Handle unexpected response
          showCustomDialog(
            context,
            'Error',
            response.data['message'] ?? 'Failed to log in',
            DialogType.error,
          );
        }
      } catch (e) {
        if (e is DioError && e.response?.statusCode == 401) {
          showCustomDialog(
            context,
            'Error',
            'Invalid credentials. Please try again.',
            DialogType.error,
          );
        } else {
          showCustomDialog(
            context,
            'Error',
            'An error occurred: ${e.toString()}',
            DialogType.error,
          );
        }
      }
    } else {
      showCustomDialog(
        context,
        'Error',
        'Invalid phone number or email. Please enter a valid identifier.',
        DialogType.error,
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(builder: (context, constraints) {
      return SingleChildScrollView(
        child: Container(
          margin: EdgeInsets.only(
            left: 30,
            right: 30,
          ),
          child: Column(
            children: [
              CommonTextField(
                hintText: 'Phone Number',
                controller: phonenumber,
                borderColor: Colors.grey,
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderRadius: 20,
                height: 90,
              ),
              SizedBox(height: 20),
              CommonTextField(
                hintText: 'Password',
                itpasswords: true,
                controller: password,
                borderColor: Colors.grey,
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderRadius: 20,
                height: 90,
              ),
              SizedBox(
                height: 30,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: GestureDetector(
                  onTap: () {
                    // Example usage
                    navigateWithFadeTransition(context, Restpassword(),
                        curve: Curves.fastOutSlowIn);
                  },
                  child: Text(
                    'Forget password?',
                    style: TextStyle(
                        color: Color(0xffFA4A0C),
                        fontSize: 17,
                        fontWeight: FontWeight.w600,
                        height: 20.29 / 17,
                        fontFamily: 'SF Pro Text'),
                  ),
                ),
              ),
              SizedBox(
                height: 30,
              ),
              Row(
                children: [
                  Expanded(
                    child: Divider(
                      color: Colors.grey, // Line color
                      thickness: 3, // Line thickness
                      indent: 20, // Start padding
                      endIndent: 20, // End padding
                    ),
                  ),
                  SizedBox(
                    width: 3,
                  ),
                  Text(
                    'Or',
                  ),
                  SizedBox(
                    width: 3,
                  ),
                  Expanded(
                    child: Divider(
                      color: Colors.grey, // Line color
                      thickness: 3, // Line thickness
                      indent: 20, // Start padding
                      endIndent: 20, // End padding
                    ),
                  )
                ],
              ),
              SizedBox(
                height: 15,
              ),
              Container(
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                  children: [
                    SvgPicture.asset(
                      'asset/icons/Button.svg',
                      width: 52,
                      height: 42,
                      fit: BoxFit.cover,
                    ),
                    SvgPicture.asset(
                      'asset/icons/Button2.svg',
                      width: 52,
                      height: 42,
                      fit: BoxFit.cover,
                    ),
                  ],
                ),
              ),
              SizedBox(
                height: 20,
              ),
              CommonButton(
                text: 'Login',
                onPressed: () {
                  login(context);
                },
                height: 70,
                width: MediaQuery.of(context).size.width,
                borderRadius: 30,
              )
            ],
          ),
        ),
      );
    });
  }
}
