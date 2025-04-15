import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:serbili/ui/Shoper/buy/widget/product.dart';
import 'package:serbili/ui/Shoper/buy/widget/warhouseproduct.dart';
import 'package:serbili/ui/Shoper/home/ui/widgets/notifction.dart';
import 'package:serbili/ui/Shoper/order/widget/cart.dart';
import 'package:serbili/ui/Shoper/profile/widget/detile.dart';
import 'package:serbili/ui/Shoper/profile/widget/profile.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Warhuse extends StatefulWidget {
  @override
  _WarhuseState createState() => _WarhuseState();
}

class _WarhuseState extends State<Warhuse> {
  void _updateSearchQuery(String query) {
    String _searchQuery = '';
    setState(() {
      _searchQuery = query;
    });
    print(
        'Search Query: $_searchQuery'); // You can replace this with your search logic
  }

  final List<Map<String, dynamic>> categories = [
    {
      'image': 'asset/images/fujiphilm-ojZ4wJNUM5w-unsplash 1.png',
      'label': 'Clothes'
    },
    {
      'image': 'asset/images/domino-studio-164_6wVEHfI-unsplash 1.png',
      'label': 'House'
    },
    {
      'image': 'asset/images/fujiphilm-ojZ4wJNUM5w-unsplash 1.png',
      'label': 'Alimentation'
    },
    {
      'image': 'asset/images/fujiphilm-ojZ4wJNUM5w-unsplash 1.png',
      'label': 'Technology'
    },
    {
      'image': 'asset/images/fujiphilm-ojZ4wJNUM5w-unsplash 1.png',
      'label': 'Flight'
    },
    {
      'image': 'asset/images/domino-studio-164_6wVEHfI-unsplash 1.png',
      'label': 'Other'
    },
  ];
  final List<Map<String, dynamic>> products = [
    {
      'name': 'Product 1',
      'image': 'asset/images/Bitmap.png',
      'phone': '123-456-7890'
    },
    {
      'name': 'Product 2',
      'image': 'asset/images/Bitmap.png',
      'phone': '234-567-8901'
    },
    {
      'name': 'Product 3',
      'image': 'asset/images/Bitmap.png',
      'phone': '345-678-9012'
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/Bitmap.png',
      'phone': '456-789-0123'
    },
    {
      'name': 'Product 5',
      'image': 'asset/images/Bitmap.png',
      'phone': '567-890-1234'
    },
    {
      'name': 'Product 6',
      'image': 'asset/images/Bitmap.png',
      'phone': '678-901-2345'
    },
    {
      'name': 'Product 7',
      'image': 'asset/images/Bitmap.png',
      'phone': '789-012-3456'
    },
    {
      'name': 'Product 8',
      'image': 'asset/images/Bitmap.png',
      'phone': '890-123-4567'
    },
    {
      'name': 'Product 9',
      'image': 'asset/images/Bitmap.png',
      'phone': '901-234-5678'
    },
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
                            GestureDetector(
                              onTap: () {},
                              child: IconButton(
                                onPressed: () {
                                  Navigator.push(
                                      context,
                                      MaterialPageRoute(
                                          builder: (context) => Cart()));
                                },
                                icon: Icon(
                                  Icons.shopping_cart,
                                  color: Colors.white,
                                  size: 20,
                                ),
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
              // Row(
              //   mainAxisAlignment: MainAxisAlignment.spaceBetween,
              //   children: [
              //     Text('Categories',
              //         style: TextStyle(
              //           fontSize: 21,
              //           color: Color(0xffFF6F00),
              //           fontWeight: FontWeight.w700,
              //         )),
              //     SizedBox(
              //       width: 10,
              //     ),
              //   ],
              // ),
              // Expanded(
              //   child: ListView.builder(
              //     itemCount: categories.length,
              //     itemBuilder: (context, index) {
              //       final category = categories[index];
              //       return Container(
              //         margin:
              //             EdgeInsets.symmetric(vertical: 10, horizontal: 20),
              //         child: Stack(
              //           children: [
              //             Container(
              //               decoration: BoxDecoration(
              //                 borderRadius: BorderRadius.circular(10),
              //                 color: Colors.grey[200],
              //               ),
              //               child: Image.asset(
              //                 category['image'],
              //                 width: 300,
              //                 fit: BoxFit.contain,
              //               ),
              //             ),
              //             SizedBox(height: 8),
              //             Positioned(
              //               bottom: 0,
              //               child: Container(
              //                 padding: EdgeInsets.only(
              //                   left: 10,
              //                 ),
              //                 height: 20,
              //                 width: 300,
              //                 decoration: BoxDecoration(
              //                   color: Colors.black.withOpacity(
              //                       0.6), // Background for shadow effect
              //                   borderRadius: BorderRadius.only(
              //                     bottomLeft: Radius.circular(10),
              //                     bottomRight: Radius.circular(10),
              //                   ),
              //                 ),
              //                 child: Text(
              //                   category['label'],
              //                   style: TextStyle(
              //                     fontSize: 17,
              //                     color: Colors.white,
              //                     fontWeight: FontWeight.w700,
              //                   ),
              //                 ),
              //               ),
              //             ),
              //           ],
              //         ),
              //       );
              //     },
              //   ),
              // ),
              Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text('Suppliers of the day',
                      style: TextStyle(
                        fontSize: 18,
                        color: Color(0xffFF6F00),
                        fontWeight: FontWeight.w700,
                      )),
                ],
              ),
              Expanded(
                child: GridView.builder(
                  gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2, // Number of items per row
                    crossAxisSpacing: 10, // Horizontal space between items
                    mainAxisSpacing: 10, // Vertical space between items
                    childAspectRatio: 0.8, // Width-to-height ratio of items
                  ),
                  itemCount: products.length, // Number of items in the grid
                  itemBuilder: (context, index) {
                    final product = products[index];
                    return InkWell(
                      onTap: () {
                        Navigator.push(
                            context,
                            PageRouteBuilder(
                              pageBuilder:
                                  (context, animation, secondaryAnimation) =>
                                      WarhouseProduct(
                                name: product['name'],
                              ),
                              transitionsBuilder: (context, animation,
                                  secondaryAnimation, child) {
                                const begin =
                                    Offset(1.0, 0.0); // Start from right side
                                const end = Offset.zero;
                                const curve = Curves.easeInOut;

                                var tween = Tween(begin: begin, end: end)
                                    .chain(CurveTween(curve: curve));
                                var offsetAnimation = animation.drive(tween);

                                return SlideTransition(
                                    position: offsetAnimation,
                                    child: WarhouseProduct(
                                      name: product['name'],
                                    ));
                              },
                            ));
                      },
                      child: Card(
                        elevation: 4,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: Column(
                          children: [
                            Expanded(
                              child: ClipOval(
                                child: Image.asset(
                                  product['image'] ??
                                      'assets/images/default.png', // Provide a default image
                                  fit: BoxFit
                                      .cover, // Resize image to fit container
                                ),
                              ),
                            ),
                            Padding(
                              padding: const EdgeInsets.all(8.0),
                              child: Row(
                                  mainAxisAlignment:
                                      MainAxisAlignment.spaceBetween,
                                  children: [
                                    Text(
                                      product['name'] ??
                                          'Unknown', // Provide a default name
                                      style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    Row(
                                      children: [
                                        Text(
                                          '4.5', // Static rating (can be dynamic if needed)
                                          style: TextStyle(
                                            fontSize: 16,
                                            fontWeight: FontWeight.bold,
                                          ),
                                        ),
                                        Icon(
                                          Icons.star,
                                          color: const Color.fromARGB(
                                              255, 59, 255, 118),
                                          size: 20,
                                        ),
                                      ],
                                    ),
                                  ]),
                            ),
                            Padding(
                              padding:
                                  const EdgeInsets.only(bottom: 8.0, left: 8),
                              child: Align(
                                alignment: Alignment.centerLeft,
                                child: Text(
                                  product['phone'] ??
                                      'Unknown phone', // Provide a default zone
                                  style: TextStyle(
                                    fontSize: 14,
                                    color: Colors.grey[700],
                                  ),
                                ),
                              ),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ]),
    ));
  }
}
