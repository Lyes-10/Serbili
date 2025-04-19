import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Button.dart';

class Product extends StatefulWidget {
  final product;
  final String? image;
  final String? title;
  final String price;

  const Product(
      {Key? key,
      required this.product,
      required this.image,
      required this.title,
      required this.price})
      : super(key: key);
  @override
  State<Product> createState() => _ProductState();
}

class _ProductState extends State<Product> {
  int i = 0; // Initialize counter
  int total = 0; // Initialize total
// Product price

  // Increment function
  void increment() {
    setState(() {
      i++; // Increase the quantity
      total = i * int.parse(widget.price); // Update total price
    });
  }

  // Decrement function
  void decrement() {
    setState(() {
      if (i > 0) {
        i--; // Decrease the quantity
        total = i * int.parse(widget.price); // Update total price
      }
    });
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.start,
          children: [
            // Image section with back button
            Stack(
              children: [
                Image.asset(
                  widget.image!,
                  height: 266,
                  fit: BoxFit.cover,
                  width: MediaQuery.of(context).size.width,
                ),
                IconButton(
                  onPressed: () {
                    // Handle back button action
                    Navigator.pop(context);
                  },
                  icon: Icon(
                    Icons.arrow_back_ios_new,
                    color: Color(0xffFF6F00),
                  ),
                ),
              ],
            ),

            // Product details section
            Container(
              margin: EdgeInsets.symmetric(horizontal: 20),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    widget.title!,
                    style: TextStyle(
                      fontSize: 30,
                      fontWeight: FontWeight.w700,
                      color: Color(0xff333333),
                      fontFamily: 'Poppins',
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Price: ${widget.price} DA',
                    style: TextStyle(
                      color: Color(0xffFF6F00),
                      fontSize: 24,
                      fontWeight: FontWeight.w700,
                      fontFamily: 'Poppins',
                    ),
                  ),
                  SizedBox(height: 10),
                  Text(
                    'Description',
                    style: TextStyle(
                      color: Color(0xff000000),
                      fontSize: 20,
                      fontWeight: FontWeight.w700,
                      fontFamily: 'Poppins',
                    ),
                  ),
                  SizedBox(height: 5),
                  Text(
                    'Autumn And Winter Casual Cotton-Padded Jacket',
                    style: TextStyle(
                      color: Color(0xff333333),
                      fontSize: 16,
                      fontWeight: FontWeight.w500,
                      fontFamily: 'Poppins',
                    ),
                  ),
                  SizedBox(height: 10),
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Avilble Stock:',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                      Text(
                        '100 item',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.green,
                        ),
                      )
                    ],
                  ),
                  SizedBox(height: 20),

                  // Quantity and total price section
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Text(
                        'Total: $total DA',
                        style: TextStyle(
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.black,
                        ),
                      ),
                      Row(
                        children: [
                          IconButton(
                            onPressed: decrement,
                            icon: Icon(
                              Icons.remove,
                              color: Colors.red,
                              size: 30,
                            ),
                          ),
                          Container(
                            padding: EdgeInsets.symmetric(
                                horizontal: 15, vertical: 8),
                            decoration: BoxDecoration(
                              color: Colors.grey[200],
                              borderRadius: BorderRadius.circular(10),
                            ),
                            child: Text(
                              i.toString(),
                              style: TextStyle(
                                fontSize: 18,
                                fontWeight: FontWeight.bold,
                                color: Colors.black,
                                fontFamily: 'Poppins',
                              ),
                            ),
                          ),
                          IconButton(
                            onPressed: increment,
                            icon: Icon(
                              Icons.add,
                              color: Colors.green,
                              size: 30,
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),

                  SizedBox(height: 20),

                  // "Buy Now" button
                  Align(
                    alignment: Alignment.centerRight,
                    child: CommonButton(
                      text: 'Add to Cart',
                      onPressed: () {
                        // Handle Buy Now action
                        ScaffoldMessenger.of(context).showSnackBar(
                          SnackBar(
                            content: Text(
                              'Product added to cart!',
                              style: TextStyle(
                                color: Colors.white,
                                fontSize: 16,
                                fontWeight: FontWeight.bold,
                                fontFamily: 'Poppins',
                              ),
                            ),
                            backgroundColor: Colors
                                .green, // Background color of the SnackBar
                            behavior:
                                SnackBarBehavior.floating, // Floating SnackBar
                            shape: RoundedRectangleBorder(
                              borderRadius:
                                  BorderRadius.circular(10), // Rounded corners
                            ),
                            duration: Duration(
                                seconds: 2), // Duration the SnackBar is visible
                          ),
                        );
                      },
                      icon: Icon(
                        Icons.shopping_cart,
                        color: Colors.white,
                      ),
                      width: 235.5962371826172,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
