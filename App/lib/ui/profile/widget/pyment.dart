import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Pyment extends StatefulWidget {
  @override
  _PymentState createState() => _PymentState();
}

class _PymentState extends State<Pyment> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Payement',
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
        margin: EdgeInsets.only(left: 20, right: 20, top: 30),
        child: Column(
          children: <Widget>[
            Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Column(children: [
                  Container(
                      height: 73,
                      width: 90,
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(30),
                        color: Colors.grey[200],
                      ),
                      child: Center(
                        child: SvgPicture.asset(
                          'asset/icons/walking.svg',
                        ),
                      )),
                  SizedBox(
                    height: 7,
                  ),
                  Text('cash', style: AppStyles.light)
                ]),
                Column(
                  children: [
                    Container(
                        height: 73,
                        width: 90,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(30),
                          color: Colors.grey[200],
                        ),
                        child: Center(
                          child: SvgPicture.asset(
                            'asset/icons/Group.svg',
                          ),
                        )),
                    SizedBox(
                      height: 7,
                    ),
                    Text(
                      'ELdahabia',
                      style: AppStyles.light,
                    )
                  ],
                ),
                Column(
                  children: [
                    Container(
                        height: 73,
                        width: 90,
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(30),
                          color: Colors.grey[200],
                        ),
                        child: Center(
                          child: SvgPicture.asset(
                            'asset/icons/Vector.svg',
                          ),
                        )),
                    SizedBox(
                      height: 7,
                    ),
                    Text('Bank', style: AppStyles.light)
                  ],
                ),
              ],
            ),
            SizedBox(
              height: 50,
            ),
            Container(
                padding: EdgeInsets.all(12),
                height: 120,
                width: MediaQuery.of(context).size.width,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(30),
                  color: Colors.grey[200],
                ),
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Align(
                      alignment: Alignment.centerLeft,
                      child: Text(
                        'ELdahabia',
                        style: TextStyle(
                          fontSize: 18,
                          fontWeight: FontWeight.w600,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    SizedBox(
                      height: 20,
                    ),
                    Row(
                      children: [
                        Center(
                          child: SvgPicture.asset(
                            'asset/icons/Group.svg',
                          ),
                        ),
                        SizedBox(
                          width: 10,
                        ),
                        Text(
                          '1234 5678 9012 3456',
                        )
                      ],
                    ),
                  ],
                )),
            SizedBox(
              height: 40,
            ),
            CommonButton(
              text: 'Add New',
              onPressed: () {},
              icon: Icon(
                Icons.add,
                color: Color(0xffFF6F00),
              ),
              borderColor: Color(0xffFF6F00),
              background: Theme.of(context).scaffoldBackgroundColor,
              color: Color(0xffFF6F00),
              borderRadius: 30,
              width: MediaQuery.of(context).size.width - 80,
            )
          ],
        ),
      ),
    );
  }
}
