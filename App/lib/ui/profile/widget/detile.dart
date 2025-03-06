import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:serbili/ui/auth/widgets/verfiyuser.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/TextField.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';
import 'package:serbili/ui/profile/widget/profile.dart';

class Detile extends StatefulWidget {
  @override
  _DetileState createState() => _DetileState();
}

class _DetileState extends State<Detile> {
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
    return Scaffold(
        appBar: AppBar(
          title: Text(
            'Personal Data',
            style: TextStyle(
                fontSize: 20,
                fontWeight: FontWeight.w500,
                color: Color(0xff333333),
                height: 30 / 20,
                fontFamily: 'Poppins'),
          ),
          leading: IconButton(
              onPressed: () {
                Navigator.pop(context);
              },
              icon: Icon(
                Icons.arrow_back_ios_new,
                size: 20,
              )),
        ),
        body: Container(
          margin: EdgeInsets.only(
              left: 20,
              right: 20,
              top: MediaQuery.of(context).size.height / 28),
          child: Column(
            children: [
              Center(child: ProfileImageWithCamera()),
              SizedBox(
                height: MediaQuery.of(context).size.height / 25,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'Full name ',
                  style: AppStyles.light,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              CommonTextField(
                hintText: 'Abd Al Aziz Stefano',
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderColor: Color(0xffD6D6D6),
              ),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'Phone Number',
                  style: AppStyles.light,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              CommonTextField(
                hintText: '0541364859',
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderColor: Color(0xffD6D6D6),
              ),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'Email',
                  style: AppStyles.light,
                ),
              ),
              SizedBox(
                height: 10,
              ),
              CommonTextField(
                hintText: 'AbdAlAzizStefano@gmail.com',
                fillColor: Theme.of(context).scaffoldBackgroundColor,
                borderColor: Color(0xffD6D6D6),
              ),
              SizedBox(
                height: 20,
              ),
              Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'Regester',
                  style: AppStyles.light,
                ),
              ),
              SizedBox(
                height: 10,
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
                text: 'Update data',
                color: Color(0xffFF6F00),
                onPressed: () {},
                background: Theme.of(context).scaffoldBackgroundColor,
                borderColor: Colors.black12,
              )
            ],
          ),
        ));
  }
}
