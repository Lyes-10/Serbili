import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  void _updateSearchQuery(String query) {
    String _searchQuery = '';
    setState(() {
      _searchQuery = query;
    });
    print(
        'Search Query: $_searchQuery'); // You can replace this with your search logic
  }

  final List<Map<String, dynamic>> categories = [
    {'icon': Icons.home, 'label': 'Clothes'},
    {'icon': Icons.business, 'label': 'House'},
    {'icon': Icons.school, 'label': 'Alimtation'},
    {'icon': Icons.shopping_cart, 'label': 'Technologie'},
    {'icon': Icons.flight, 'label': 'gg'},
    {'icon': Icons.favorite, 'label': 'Other'},
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Container(
      child: Stack(children: [
        Container(
          height: MediaQuery.of(context).size.height / 5.5,
          width: MediaQuery.of(context).size.width,
          decoration: BoxDecoration(
              color: Color(0xffFF6F00),
              borderRadius: BorderRadius.only(
                  bottomLeft: Radius.circular(20),
                  bottomRight: Radius.circular(20))),
        ),
        Container(
          margin: EdgeInsets.only(left: 20, right: 20, top: 30),
          child: Column(
            children: [
              Container(
                child: Column(
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Align(
                          alignment: Alignment.center,
                          child: Icon(
                            Icons.menu_rounded,
                            size: 30,
                            color: Colors.white,
                          ),
                        ),
                        Row(
                          children: [
                            Icon(
                              Icons.location_on_outlined,
                              size: 30,
                              color: Colors.white,
                            ),
                            Text(
                              'Your Curent Location',
                              style: TextStyle(
                                fontSize: 10,
                                color: Colors.white,
                                fontWeight: FontWeight.w500,
                                fontFamily: 'Montserrat',
                                letterSpacing: 0.5,
                              ),
                            )
                          ],
                        ),
                        Row(
                          children: [
                            SizedBox(
                              width: 5,
                            ),
                            SvgPicture.asset('asset/icons/Icon.svg'),
                            IconButton(
                              onPressed: () {},
                              icon: Icon(
                                Icons.shopping_cart,
                                color: Colors.white,
                                size: 20,
                              ),
                            )
                          ],
                        )
                      ],
                    ),
                  ],
                ),
              ),
              SizedBox(
                height: 35,
              ),
              Material(
                elevation: 2,
                borderRadius: BorderRadius.circular(30),
                child: Container(
                  height: 50,
                  width: 300,
                  decoration: BoxDecoration(
                    borderRadius: BorderRadius.circular(30),
                    boxShadow: [
                      BoxShadow(
                        color: Colors.black
                            // ignore: deprecated_member_use
                            .withOpacity(0.2), // Shadow color with opacity
                        spreadRadius: 2, // How much the shadow spreads
                        blurRadius: 3, // How blurry the shadow is
                        offset: Offset(0, 5), // Offset of the shadow (x, y)
                      ),
                    ],
                  ),
                  child: TextField(
                    onChanged: _updateSearchQuery,
                    decoration: InputDecoration(
                      prefixIcon: Icon(Icons.search),
                      hintText: 'Search...',
                      hintStyle: AppStyles.light,
                      border: OutlineInputBorder(
                        borderRadius: BorderRadius.circular(30),
                        borderSide: BorderSide.none,
                      ),
                      filled: true,
                      fillColor: Theme.of(context).scaffoldBackgroundColor,
                    ),
                  ),
                ),
              ),
              SizedBox(
                height: 20,
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    'ALL Categories',
                    style: AppStyles.light,
                  ),
                  SizedBox(
                    width: 10,
                  ),
                  Row(
                    children: [
                      Text(
                        'See All ',
                        style: AppStyles.light,
                      ),
                      IconButton(
                        onPressed: () {},
                        icon: Icon(
                          Icons.arrow_forward_ios_rounded,
                          size: 20,
                          color: Color(0xffA0A5BA),
                        ),
                      )
                    ],
                  )
                ],
              ),
              SingleChildScrollView(
                  scrollDirection: Axis.horizontal,
                  child: Container(
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                      children: categories.map((category) {
                        return IntrinsicWidth(
                          child: IntrinsicHeight(
                            child: Container(
                              padding: EdgeInsets.symmetric(
                                  horizontal: 10, vertical: 8),
                              margin: EdgeInsets.only(left: 10),
                              decoration: BoxDecoration(
                                  borderRadius: BorderRadius.circular(30),
                                  color: Colors.white),
                              child: Row(
                                mainAxisAlignment:
                                    MainAxisAlignment.spaceBetween,
                                children: [
                                  Container(
                                    width: 44,
                                    height: 44,
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(50),
                                      color: Color.fromARGB(255, 183, 195, 207),
                                    ),
                                    child: Icon(
                                      category['icon'],
                                      color: Colors.blue,
                                    ),
                                  ),
                                  SizedBox(width: 8),
                                  Container(
                                    margin: EdgeInsets.only(right: 20),
                                    child: Text(
                                      category['label'],
                                      style: TextStyle(
                                          fontSize: 16, color: Colors.black),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        );
                      }).toList(),
                    ),
                  ))
            ],
          ),
        ),
      ]),
    ));
  }
}
