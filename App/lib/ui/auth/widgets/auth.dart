import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/auth/widgets/Restpassword.dart';
import 'package:serbili/ui/auth/widgets/verfiyuser.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

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
                        Center(child: Sing_up()),
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

class Sing_up extends StatelessWidget {
  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();
  final TextEditingController passwordConfirm = TextEditingController();
  final TextEditingController phoneNumber = TextEditingController();
  final TextEditingController fullName = TextEditingController();

  Sing_up({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 20, right: 20),
      child: Column(
        children: [
          Row(
            children: [
              Expanded(
                child: SvgPicture.asset(
                  'asset/vector/befb2299ba304a49bdd2f9e69c5fac77-free (2) 1.svg',
                  fit: BoxFit.fill,
                ),
              ),
              Text(
                'Serbile',
                style: TextStyle(
                  fontSize: 30,
                  fontWeight: FontWeight.bold,
                ),
              ),
            ],
          ),
          CommonTextField(
            hintText: 'full name',
            controller: fullName,
            borderColor: Colors.grey,
            fillColor: Theme.of(context).scaffoldBackgroundColor,
            borderRadius: 20,
            height: 90,
          ),
          SizedBox(
            height: 20,
          ),
          // CommonTextField(
          //   hintText: 'Family Name',
          //   controller: email,
          //   borderColor: Colors.grey,
          //   fillColor: Theme.of(context).scaffoldBackgroundColor,
          //   borderRadius: 20,
          //   height: 90,
          // ),
          // SizedBox(
          //   height: 20,
          // ),

          CommonTextField(
            hintText: 'Email',
            controller: email,
            borderColor: Colors.grey,
            fillColor: Theme.of(context).scaffoldBackgroundColor,
            borderRadius: 20,
            height: 90,
          ),
          SizedBox(
            height: 20,
          ),
          Align(
              alignment: Alignment.centerRight,
              child: CommonButton(
                text: 'Next',
                width: 100,
                onPressed: () {
                  Navigator.push(context,
                      MaterialPageRoute(builder: (context) => Verfiyuser()));
                },
                borderRadius: 30,
              ))
        ],
      ),
    );
  }
}

class Login extends StatelessWidget {
  final TextEditingController email = TextEditingController();
  final TextEditingController password = TextEditingController();
  Login({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(left: 30, right: 30, top: 40),
      child: Column(
        children: [
          CommonTextField(
            hintText: 'Email',
            controller: email,
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
                Navigator.push(context,
                    MaterialPageRoute(builder: (context) => Restpassword()));
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
              Navigator.push(
                  context, MaterialPageRoute(builder: (context) => Auth()));
            },
            height: 70,
            width: MediaQuery.of(context).size.width,
            borderRadius: 30,
          )
        ],
      ),
    );
  }
}
