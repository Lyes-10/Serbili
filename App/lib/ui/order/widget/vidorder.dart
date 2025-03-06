import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Videorder extends StatefulWidget {
  @override
  _VideorderState createState() => _VideorderState();
}

class _VideorderState extends State<Videorder> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: Column(children: [
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
                    'Orders',
                    style: TextStyle(
                        fontSize: 25,
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text'),
                  ), // Adjust font size if needed
                ),
              ],
            )),
        Expanded(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Spacer(
                  flex: 1), // Adjust the flex value to control the space above

              Align(
                alignment: Alignment(-0.1, 0),
                child: SvgPicture.asset(
                  'asset/icons/Group2.svg',
                ),
              ),

              SizedBox(
                height: 15,
              ),
              Text(
                'No orders yet',
                style: TextStyle(
                    fontSize: 28,
                    color: Colors.black,
                    fontWeight: FontWeight.w600,
                    fontFamily: 'SF Pro Text'),
              ),
              SizedBox(
                height: 10,
              ),
              Container(
                width: 215.84906005859375,
                child: Text(
                  'You can place your first order by clicking on the button below',
                  textAlign: TextAlign.center,
                  style: AppStyles.light,
                ),
              ),
              Spacer(
                  flex: 3), // Adjust the flex value to control the space below
            ],
          ),
        ),
      ]),
    ));
  }
}
