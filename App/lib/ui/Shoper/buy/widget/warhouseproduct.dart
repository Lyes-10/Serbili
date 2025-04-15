import 'package:flutter/material.dart';
import 'package:serbili/ui/Shoper/buy/widget/product.dart';

class WarhouseProduct extends StatefulWidget {
  const WarhouseProduct({Key? key, required this.name}) : super(key: key);
  final String? name;

  @override
  _WarhouseProductState createState() => _WarhouseProductState();
}

class _WarhouseProductState extends State<WarhouseProduct> {
  final List<Map<String, dynamic>> products = [
    {
      'name': 'Product 1',
      'image': 'asset/images/unsplash_0vsk2_9dkqo.png',
      'quantity': 10
    },
    {
      'name': 'Product 2',
      'image': 'asset/images/unsplash_0vsk2_9dkqo1.png',
      'quantity': 0
    },
    {
      'name': 'Product 3',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 6
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_9U18fiowwbw.png',
      'quantity': 11
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_9U18fiowwbw.png',
      'quantity': 11
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_9U18fiowwbw.png',
      'quantity': 11
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_9U18fiowwbw.png',
      'quantity': 11
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_9U18fiowwbw.png',
      'quantity': 11
    },
    {
      'name': 'Product 1',
      'image': 'asset/images/unsplash_0vsk2_9dkqo.png',
      'quantity': 10
    },
    {
      'name': 'Product 1',
      'image': 'asset/images/unsplash_0vsk2_9dkqo.png',
      'quantity': 10
    },
    {
      'name': 'Product 1',
      'image': 'asset/images/unsplash_0vsk2_9dkqo.png',
      'quantity': 10
    },
  ];
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: Scaffold(
      body: Column(
        children: [
          Container(
              height: MediaQuery.of(context).size.height / 8,
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
                      widget.name!,
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
                                  Product(
                            product: product,
                            image: product['image'],
                            title: product['name'],
                            price: '99',
                          ),
                          transitionsBuilder:
                              (context, animation, secondaryAnimation, child) {
                            const begin = Offset(1.0,
                                0.0); // Start from right side (can be changed for direction)
                            const end = Offset.zero;
                            const curve = Curves.easeInOut;

                            var tween = Tween(begin: begin, end: end)
                                .chain(CurveTween(curve: curve));
                            var offsetAnimation = animation.drive(tween);

                            return SlideTransition(
                                position:
                                    offsetAnimation, // Position  chain tweak animation effects
                                child: Product(
                                  product: product,
                                  image: product['image'],
                                  title: product['name'],
                                  price: '99',
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
                          child: Image.asset(
                            product['image']!,
                            fit: BoxFit.cover, // Resize image to fit container
                          ),
                        ),
                        Padding(
                          padding: const EdgeInsets.all(8.0),
                          child: Row(
                              mainAxisAlignment: MainAxisAlignment.spaceBetween,
                              children: [
                                Text(
                                  product['name']!,
                                  style: TextStyle(
                                    fontSize: 16,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Text(
                                  '99 DA',
                                  style: TextStyle(
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                      color: Color(0xffFF6F00)),
                                ),
                              ]),
                        ),
                        Padding(
                          padding: const EdgeInsets.only(bottom: 8.0, left: 8),
                          child: Align(
                            alignment: Alignment.centerLeft,
                            child: Text(
                              'Available: ${product['quantity'] ?? 'Not available'}',
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
    ));
  }
}
