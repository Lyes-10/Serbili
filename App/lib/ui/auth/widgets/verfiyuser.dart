import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';
import 'package:flutter_dash/flutter_dash.dart';

class Verfiyuser extends StatefulWidget {
  @override
  _VerfiyuserState createState() => _VerfiyuserState();
}

class _VerfiyuserState extends State<Verfiyuser> {
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
                        Center(child: Virfy_user()),
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

class Virfy_user extends StatefulWidget {
  const Virfy_user({
    super.key,
  });

  @override
  State<Virfy_user> createState() => _Virfy_userState();
}

class _Virfy_userState extends State<Virfy_user> {
  final TextEditingController password = TextEditingController();
  final TextEditingController confirmPassword = TextEditingController();
  String selectedRole = 'Shopper';
  List<bool> isSelected = [true, false];
  File? _image;
  final picker = ImagePicker();

  Future<void> _pickImage() async {
    final pickedFile = await picker.pickImage(source: ImageSource.gallery);

    if (pickedFile != null) {
      setState(() {
        _image = File(pickedFile.path);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: EdgeInsets.only(
        left: 20,
        right: 20,
      ),
      child: Column(
        children: [
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
            height: 20,
          ),
          CommonTextField(
            hintText: 'confirm Password',
            itpasswords: true,
            controller: confirmPassword,
            borderColor: Colors.grey,
            fillColor: Theme.of(context).scaffoldBackgroundColor,
            borderRadius: 20,
            height: 90,
          ),
          SizedBox(height: 20),
          Container(
            child: ToggleButtons(
              children: [
                Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.shopping_cart),
                      SizedBox(height: 5),
                      Text('Shopper'),
                    ],
                  ),
                ),
                Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Icon(Icons.warehouse),
                      SizedBox(height: 5),
                      Text('Warehouse'),
                    ],
                  ),
                ),
              ],
              isSelected: isSelected,
              onPressed: (int index) {
                setState(() {
                  for (int buttonIndex = 0;
                      buttonIndex < isSelected.length;
                      buttonIndex++) {
                    if (buttonIndex == index) {
                      isSelected[buttonIndex] = true;
                    } else {
                      isSelected[buttonIndex] = false;
                    }
                  }
                });
              },
              borderRadius: BorderRadius.circular(12.0),
              selectedBorderColor: Color(0xffFF6F00),
              selectedColor: Colors.white,
              fillColor: Color(0xffFF6F00),
              color: Colors.black,
              borderColor: Color(0xffFF6F00),
              constraints: BoxConstraints(minHeight: 50.0, minWidth: 100.0),
              renderBorder: true,
              borderWidth: 2,
            ),
          ),
          SizedBox(
            height: 30,
          ),
          Center(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                GestureDetector(
                  onTap: () {
                    _pickImage();
                  },
                  child: CustomPaint(
                    painter: DottedBorderPainter(),
                    child: Container(
                      width: MediaQuery.of(context).size.width,
                      height: 50,
                      alignment: Alignment.center,
                      margin: EdgeInsets.only(left: 10, right: 10),
                      decoration: BoxDecoration(
                          color: Theme.of(context).scaffoldBackgroundColor,
                          borderRadius: BorderRadius.circular(12.0)),
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.spaceBetween,
                        children: [
                          Text(
                            'Upload Your Register',
                            style: TextStyle(
                              fontSize: 18,
                              color: Colors.black,
                            ),
                          ),
                          Icon(Icons.folder)
                        ],
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
          SizedBox(
            height: 30,
          ),
          CommonButton(
            text: 'Sing up',
            onPressed: () {},
            width: MediaQuery.of(context).size.width,
            borderRadius: 12,
          )
        ],
      ),
    );
  }
}

class DottedBorderPainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final Paint paint = Paint()
      ..color = Colors.grey
      ..strokeWidth = 2
      ..style = PaintingStyle.stroke;
    final double dashWidth = 5;
    final double dashSpace = 5;

    double startX = 0;
    while (startX < size.width) {
      canvas.drawLine(Offset(startX, 0), Offset(startX + dashWidth, 0), paint);
      canvas.drawLine(Offset(startX, size.height),
          Offset(startX + dashWidth, size.height), paint);
      startX += dashWidth + dashSpace;
    }

    double startY = 0;
    while (startY < size.height) {
      canvas.drawLine(Offset(0, startY), Offset(0, startY + dashWidth), paint);
      canvas.drawLine(Offset(size.width, startY),
          Offset(size.width, startY + dashWidth), paint);
      startY += dashWidth + dashSpace;
    }
  }

  @override
  bool shouldRepaint(CustomPainter oldDelegate) => false;
}
