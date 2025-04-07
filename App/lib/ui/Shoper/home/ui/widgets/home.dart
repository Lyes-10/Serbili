import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/Shoper/home/ui/widgets/notifction.dart';
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
                            GestureDetector(
                                onTap: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => Notifction()));
                                },
                                child:
                                    SvgPicture.asset('asset/icons/Icon.svg')),
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
                  Text('Categories',
                      style: TextStyle(
                        fontSize: 21,
                        color: Colors.black,
                        fontWeight: FontWeight.w700,
                      )),
                  SizedBox(
                    width: 10,
                  ),
                  Row(
                    children: [
                      Text('See All ',
                          style: TextStyle(
                            fontSize: 15,
                            color: Colors.black,
                            fontWeight: FontWeight.w700,
                            letterSpacing: 0.5,
                          )),
                      Container(
                        height: 30,
                        width: 30,
                        decoration: BoxDecoration(
                            color: Color(0xff004CFF),
                            borderRadius: BorderRadius.circular(60)),
                        child: Center(
                          child: IconButton(
                            onPressed: () {},
                            icon: Icon(
                              Icons.arrow_forward,
                              size: 15,
                              color: Colors.white,
                            ),
                          ),
                        ),
                        padding: EdgeInsets.zero, // Remove padding
                        constraints: BoxConstraints(),
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
                              margin: EdgeInsets.symmetric(horizontal: 10),
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(30),
                              ),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  Container(
                                    width: 50,
                                    height: 50,
                                    decoration: BoxDecoration(
                                      borderRadius: BorderRadius.circular(50),
                                      color: Color(0xffFF6F00),
                                    ),
                                    child: Icon(
                                      category['icon'],
                                      color: Colors.white,
                                      size: 30,
                                    ),
                                  ),
                                  SizedBox(height: 8),
                                  Container(
                                    child: Text(
                                      category['label'],
                                      style: TextStyle(
                                        fontSize: 17,
                                        color: Colors.black,
                                        fontWeight: FontWeight.w700,
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                        );
                      }).toList(),
                    ),
                  )),
            ],
          ),
        ),
      ]),
    ));
  }
}
