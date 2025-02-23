import 'package:flutter/material.dart';
import 'package:serbili/ui/auth/widgets/Newpassword.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

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

class Restpassword_page extends StatelessWidget {
  final TextEditingController restpassword = TextEditingController();
  Restpassword_page({
    super.key,
  });

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
            height: 10,
          ),
          CommonTextField(
            hintText: 'Email or phone number',
            controller: restpassword,
            width: MediaQuery.of(context).size.width,
            borderRadius: 12,
          ),
          SizedBox(
            height: 20,
          ),
          CommonButton(
            text: 'Send Reset Password Link',
            onPressed: () {
              Navigator.push(context,
                  MaterialPageRoute(builder: (context) => Newpassword()));
            },
            width: MediaQuery.of(context).size.width,
          )
        ],
      ),
    );
  }
}
