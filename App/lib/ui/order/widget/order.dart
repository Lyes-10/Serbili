import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Order extends StatefulWidget {
  @override
  _OrderState createState() => _OrderState();
}

class _OrderState extends State<Order> {
  @override
  Widget build(BuildContext context) {
    return DefaultTabController(
      length: 2,
      child: Scaffold(
        body: Expanded(
          child: Column(children: [
            Container(
              width: MediaQuery.of(context).size.width,
              height: MediaQuery.of(context).size.height / 6,
              decoration: BoxDecoration(
                  color: Color(0xffFF6F00),
                  borderRadius: BorderRadius.only(
                      bottomLeft: Radius.circular(10),
                      bottomRight: Radius.circular(10))),
              child: Center(
                  child: Text(
                'My Orders',
                style: TextStyle(
                    fontSize: 20.0,
                    fontWeight: FontWeight.w500,
                    color: Colors.white,
                    fontFamily: 'Poppins'),
              )),
            ),
            Expanded(
              child: Column(
                children: <Widget>[
                  TabBar(
                      tabs: [
                        Tab(text: 'Ongoing'),
                        Tab(text: 'History'),
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
                        Center(child: Ongoing()),
                        Center(child: History()),
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

class History extends StatefulWidget {
  const History({
    super.key,
  });

  @override
  State<History> createState() => _HistoryState();
}

class _HistoryState extends State<History> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: EdgeInsets.only(left: 20, right: 20, top: 20),
        child: SingleChildScrollView(
          child: Column(
            children: [
              history(),
              history(),
              history(),
            ],
          ),
        ),
      ),
    );
  }
}

class history extends StatelessWidget {
  const history({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            'Category',
            style: AppStyles.sitting,
          ),
        ),
        SizedBox(
          height: 4,
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
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: Image.asset(
                    'asset/images/unsplash_NoVnXXmDNi0.png',
                    width: 100,
                    height: 100,
                    fit: BoxFit.cover,
                  ),
                ),
                SizedBox(
                  width: 20,
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Product Name',
                      style: AppStyles.sitting,
                    ),
                    SizedBox(
                      height: 8,
                    ),
                    Row(
                      children: [
                        Text(
                          'n  item',
                          style: AppStyles.light,
                        ),
                        Container(
                          width:
                              2, // Set the width of the container to make it thin
                          height: 15, // Set the height of the container
                          color: Colors.black, // Set the color of the container
                          margin: EdgeInsets.symmetric(horizontal: 10),
                        ),
                        Text(
                          'Rs. 100',
                          style: AppStyles.light,
                        ),
                      ],
                    ),
                    SizedBox(
                      height: 8,
                    ),
                    Row(
                      children: [
                        Text(
                          '12/05/2022',
                        ),
                        SizedBox(
                          width: 8,
                        ),
                        Text(
                          'CONFIRMED',
                          style: TextStyle(
                            color: Color(0xff019726),
                            fontWeight: FontWeight.w400,
                            fontSize: 12,
                          ),
                        )
                      ],
                    )
                  ],
                ),
              ],
            ),
            Text(
              '# 888888',
              style: AppStyles.light,
            )
          ],
        ),
        SizedBox(
          height: 25,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            CommonButton(
              text: 'Rate it ',
              onPressed: () {},
              borderRadius: 15,
            ),
          ],
        ),
        SizedBox(
          height: 35,
        ),
      ],
    );
  }
}

class Ongoing extends StatefulWidget {
  const Ongoing({
    super.key,
  });

  @override
  State<Ongoing> createState() => _OngoingState();
}

class _OngoingState extends State<Ongoing> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: EdgeInsets.only(left: 20, right: 20, top: 20),
        child: SingleChildScrollView(
          child: Column(
            children: [
              order_ui(),
              order_ui(),
              order_ui(),
              order_ui(),
            ],
          ),
        ),
      ),
    );
  }
}

class order_ui extends StatefulWidget {
  const order_ui({
    super.key,
  });

  @override
  State<order_ui> createState() => _order_uiState();
}

class _order_uiState extends State<order_ui> {
  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Align(
          alignment: Alignment.centerLeft,
          child: Text(
            'Category',
            style: AppStyles.sitting,
          ),
        ),
        SizedBox(
          height: 4,
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
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              mainAxisAlignment: MainAxisAlignment.start,
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ClipRRect(
                  borderRadius: BorderRadius.circular(16),
                  child: Image.asset(
                    'asset/images/unsplash_NoVnXXmDNi0.png',
                    width: 100,
                    height: 100,
                    fit: BoxFit.cover,
                  ),
                ),
                SizedBox(
                  width: 20,
                ),
                Column(
                  mainAxisAlignment: MainAxisAlignment.start,
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Product Name',
                      style: AppStyles.sitting,
                    ),
                    SizedBox(
                      height: 8,
                    ),
                    Row(
                      children: [
                        Text(
                          'n  item',
                          style: AppStyles.light,
                        ),
                        Container(
                          width:
                              2, // Set the width of the container to make it thin
                          height: 15, // Set the height of the container
                          color: Colors.black, // Set the color of the container
                          margin: EdgeInsets.symmetric(horizontal: 10),
                        ),
                        Text(
                          'Rs. 100',
                          style: AppStyles.light,
                        ),
                      ],
                    ),
                  ],
                ),
              ],
            ),
            Text(
              '# 888888',
              style: AppStyles.light,
            )
          ],
        ),
        SizedBox(
          height: 25,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            CommonButton(
              text: 'Track Order',
              onPressed: () {},
              borderRadius: 15,
            ),
            CommonButton(
              onPressed: () {},
              text: 'Cancel Order',
              color: Color(0xffFF6F00),
              background: Theme.of(context).scaffoldBackgroundColor,
              borderColor: Color(0xffFF6F00),
              borderRadius: 15,
            )
          ],
        ),
        SizedBox(
          height: 35,
        ),
      ],
    );
  }
}
