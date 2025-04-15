import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class OrderRusem extends StatefulWidget {
  @override
  _OrderRusemState createState() => _OrderRusemState();
}

class _OrderRusemState extends State<OrderRusem> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          Container(
            height: MediaQuery.of(context).size.height / 8,
            width: MediaQuery.of(context).size.width,
            decoration: BoxDecoration(
              color: Color(0xffFF6F00),
              borderRadius: BorderRadius.only(
                bottomLeft: Radius.circular(15),
                bottomRight: Radius.circular(15),
              ),
            ),
            child: Stack(
              children: [
                Align(
                  alignment: Alignment.centerLeft,
                  child: IconButton(
                    onPressed: () {
                      Navigator.pop(context); // Navigate back
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
                    'Order Rusem',
                    style: TextStyle(
                      fontSize: 25,
                      color: Colors.white,
                      fontWeight: FontWeight.w600,
                      fontFamily: 'SF Pro Text',
                    ),
                  ),
                ),
              ],
            ),
          ),
          Container(
            margin: EdgeInsets.only(left: 20, right: 20, top: 20),
            child: SingleChildScrollView(
              child: Column(children: [
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Item Ordered',
                    style: TextStyle(
                      fontSize: 25,
                      color: Colors.black,
                      fontWeight: FontWeight.w600,
                      fontFamily: 'SF Pro Text',
                    ),
                  ),
                ),
                SizedBox(height: 20),
                Row(
                  children: [
                    ClipRRect(
                      borderRadius: BorderRadius.circular(10),
                      child: Image.asset(
                        'asset/images/unsplash_0vsk2_9dkqo1.png',
                        height: 80,
                        width: 80,
                        fit: BoxFit.cover,
                      ),
                    ),
                    SizedBox(width: 10),
                    Column(
                        mainAxisAlignment: MainAxisAlignment.start,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Product Name',
                            style: TextStyle(
                              fontSize: 16,
                              color: Colors.black,
                              fontWeight: FontWeight.w600,
                              fontFamily: 'SF Pro Text',
                            ),
                          ),
                          SizedBox(height: 5),
                          Text(
                            'Price',
                            style: TextStyle(
                              fontSize: 16,
                              color: Color(0xffFF6F00),
                              fontWeight: FontWeight.w600,
                              fontFamily: 'SF Pro Text',
                            ),
                          ),
                        ]),
                    Spacer(),
                    Text(
                      'Other Item',
                      style: AppStyles.light,
                    ),
                    Icon(
                      Icons.arrow_forward_ios,
                      size: 20,
                      color: Color(0xffFF6F00),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Order Summary',
                    style: TextStyle(
                      fontSize: 25,
                      color: Colors.black,
                      fontWeight: FontWeight.w600,
                      fontFamily: 'SF Pro Text',
                    ),
                  ),
                ),
                SizedBox(height: 10),
                Row(
                  children: [
                    Text('Order Number',
                        style: TextStyle(
                          fontSize: 18,
                          color: Colors.black,
                          fontWeight: FontWeight.w600,
                          fontFamily: 'SF Pro Text',
                        )),
                    Spacer(),
                    Text(
                      '1',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text('Warhouse oner',
                        style: TextStyle(
                          fontSize: 18,
                          color: Colors.black,
                          fontWeight: FontWeight.w600,
                          fontFamily: 'SF Pro Text',
                        )),
                    Spacer(),
                    Text(
                      'Abd Aiziz',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text(
                      'Warhouse Address',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      'Sba',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text(
                      'Order Date',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      '4/13/2023',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text(
                      'Warhouse Number',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      '4132023',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text(
                      'Address deliver',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      'c1',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 10),
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'Shoper Information',
                    style: TextStyle(
                      fontSize: 25,
                      color: Colors.black,
                      fontWeight: FontWeight.w600,
                      fontFamily: 'SF Pro Text',
                    ),
                  ),
                ),
                SizedBox(height: 10),
                Row(
                  children: [
                    Text(
                      'shoper name',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      'Abd Aiziz',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text(
                      'shoper number',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      '4132023',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                  ],
                ),
                Row(
                  children: [
                    Text(
                      'Total Price',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black,
                        fontWeight: FontWeight.w600,
                        fontFamily: 'SF Pro Text',
                      ),
                    ),
                    Spacer(),
                    Text(
                      '4132023 DA',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.w400,
                        fontFamily: 'SF Pro Text',
                        color: Color(0xffFF6F00),
                      ),
                    ),
                  ],
                ),
                SizedBox(height: 20),
                CommonButton(text: 'Accept', onPressed: () {})
              ]),
            ),
          )
        ],
      ),
    );
  }
}
