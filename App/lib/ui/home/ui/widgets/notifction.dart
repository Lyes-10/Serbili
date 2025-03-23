import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Notifction extends StatefulWidget {
  @override
  _NotifctionState createState() => _NotifctionState();
}

class _NotifctionState extends State<Notifction> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: SingleChildScrollView(
          child: Column(
            children: [
              Container(
                  height: MediaQuery.of(context).size.height / 6,
                  width: MediaQuery.of(context).size.width,
                  decoration: BoxDecoration(
                      color: Color(0xffFF6F00),
                      borderRadius: BorderRadius.only(
                          bottomLeft: Radius.circular(15),
                          bottomRight: Radius.circular(15))),
                  child: Stack(
                    children: [
                      Align(
                        alignment: Alignment.centerLeft,
                        child: IconButton(
                          onPressed: () {
                            // Navigate to previous screen
                            Navigator.pop(context);
                          },
                          icon: Icon(
                            Icons.arrow_back_ios_new,
                            size: 25,
                            color: Colors.white,
                          ),
                        ),
                      ),
                      Align(
                        alignment: Alignment.center,
                        child: Text(
                          'Notification',
                          style: TextStyle(
                              fontSize: 25,
                              color: Colors.white,
                              fontWeight: FontWeight.w600,
                              fontFamily: 'SF Pro Text'),
                        ), // Adjust font size if needed
                      ),
                    ],
                  )),
              SizedBox(
                height: 30,
              ),
              Container(
                margin: EdgeInsets.only(left: 20, right: 20),
                child: Column(
                  children: [
                    Notefction(
                      path: 'asset/vector/Exclude.svg',
                      data: 'Today',
                    ),
                    Notefction(
                      path: 'asset/vector/Icon.svg',
                      data: 'Today',
                    ),
                    Notefction(
                      path: 'asset/vector/Icon2.svg',
                      data: 'Yesterday',
                    ),
                    Notefction(
                      data: 'Yesterday',
                      path: 'asset/vector/Icon3.svg',
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class Notefction extends StatefulWidget {
  const Notefction({
    super.key,
    required this.path,
    required this.data,
  });
  final String path;
  final String data;

  @override
  State<Notefction> createState() => _NotefctionState();
}

class _NotefctionState extends State<Notefction> {
  String? previousData;

  @override
  void didUpdateWidget(covariant Notefction oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (widget.data != oldWidget.data) {
      setState(() {
        previousData = oldWidget.data;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            widget.data,
            style: AppStyles.light,
          ),
        ),
        Divider(
          color: Color(0xffA0A5BA), // Change the color as needed
          thickness: 2, // Adjust the thickness as needed
          indent: 20, // Optional: Adjust the left margin as needed
          endIndent: 20, // Optional: Adjust the right margin as needed
        ),
        SizedBox(
          height: 20,
        ),
        if (previousData != widget.data)
          Row(
            mainAxisAlignment: MainAxisAlignment.start,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Container(
                width: 60,
                height: 60,
                decoration: BoxDecoration(
                    color: Color(0xffA0A5BA),
                    borderRadius: BorderRadius.circular(30)),
                child: Center(
                  child: SvgPicture.asset(widget.path),
                ),
              ),
              SizedBox(
                width: 10,
              ),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    '30% Special Discount!',
                    style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.bold,
                        fontFamily: 'SF Pro Text'),
                  ),
                  Text(
                    'Special promotion only valid today',
                    style: AppStyles.light,
                  )
                ],
              )
            ],
          ),
        SizedBox(
          height: 30,
        ),
      ],
    );
  }
}
