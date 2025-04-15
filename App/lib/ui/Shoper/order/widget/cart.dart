import 'package:flutter/material.dart';
import 'package:serbili/ui/Shoper/buy/widget/product.dart';
import 'package:serbili/ui/Shoper/order/widget/orderRusem.dart';
import 'package:serbili/ui/core/ui/Button.dart';

class Cart extends StatefulWidget {
  const Cart({Key? key, this.price, this.quantity}) : super(key: key);
  final String? price;
  final String? quantity;

  @override
  State<Cart> createState() => _CartState();
}

class _CartState extends State<Cart> {
  int i = 0; // Initialize counter
  int total = 0; // Initialize total
  // Product price

  final List<Map<String, dynamic>> products = [
    {
      'name': 'Product 1',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 10,
      'price': 99
    },
    {
      'name': 'Product 2',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 89,
      'price': 120
    },
    {
      'name': 'Product 3',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 6,
      'price': 150
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 11,
      'price': 200
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 11,
      'price': 200
    },
    {
      'name': 'Product 4',
      'image': 'asset/images/unsplash_yTBMYCcZQRs.png',
      'quantity': 11,
      'price': 200
    },
  ];
  void increment() {
    setState(() {
      i++; // Increase the quantity
      total = i * int.parse(widget.price!); // Update total price
    });
  }

  // Decrement function
  void decrement() {
    setState(() {
      if (i > 0) {
        i--; // Decrease the quantity
        total = i * int.parse(widget.price!); // Update total price
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Column(
        children: [
          // Header Section
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
                    'Cart',
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
            child: Align(
                alignment: Alignment.centerLeft,
                child: Text(
                  'cart (5)',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w600,
                    fontFamily: 'SF Pro Text',
                  ),
                )),
          ),

          // Product List Section
          Expanded(
            child: ListView.builder(
              itemCount: products.length,
              itemBuilder: (context, index) {
                final product = products[index];
                return Dismissible(
                  key: Key(product['name']), // Unique key for each item
                  direction:
                      DismissDirection.endToStart, // Swipe left to delete
                  onDismissed: (direction) {
                    setState(() {
                      products.removeAt(index); // Remove the item from the list
                    });

                    // Show a SnackBar to confirm deletion
                    ScaffoldMessenger.of(context).showSnackBar(
                      SnackBar(
                        content:
                            Text('${product['name']} removed from the cart'),
                        duration: Duration(seconds: 2),
                        backgroundColor: Colors.red,
                      ),
                    );
                  },
                  background: Container(
                    color: Colors.red,
                    alignment: Alignment.centerRight,
                    padding: EdgeInsets.symmetric(horizontal: 20),
                    child: Icon(
                      Icons.delete,
                      color: Colors.white,
                    ),
                  ),
                  child: GestureDetector(
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
                            const begin =
                                Offset(1.0, 0.0); // Start from the right side
                            const end = Offset.zero;
                            const curve = Curves.easeInOut;

                            var tween = Tween(begin: begin, end: end)
                                .chain(CurveTween(curve: curve));
                            var offsetAnimation = animation.drive(tween);

                            return SlideTransition(
                              position: offsetAnimation,
                              child: child,
                            );
                          },
                        ),
                      );

                      // Handle item tap if needed
                    },
                    child: Container(
                      height: 120, // Set fixed height for each item
                      margin: EdgeInsets.symmetric(vertical: 8, horizontal: 10),

                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.circular(30),
                        color: Theme.of(context).scaffoldBackgroundColor,
                        border: Border.all(
                          color: Color(0xffFF6F00), // Set the border color
                          width: 1.0, // Set the border width
                        ),
                        boxShadow: [
                          BoxShadow(
                            color: Colors.grey.withOpacity(0.5),
                            spreadRadius: 2,
                            blurRadius: 5,
                            offset: Offset(0, 3),
                          ),
                        ],
                      ),
                      child: Container(
                        margin: EdgeInsets.only(right: 20),
                        child: Row(
                          mainAxisAlignment: MainAxisAlignment.spaceBetween,
                          children: [
                            // Product Image
                            Container(
                              height: 80,
                              width: 80,
                              decoration: BoxDecoration(
                                borderRadius: BorderRadius.circular(30),
                              ),
                              margin: EdgeInsets.all(10),
                              child: Image.asset(
                                product['image']!,
                                height: 60,
                                width: 60,
                                fit: BoxFit.cover,
                              ),
                            ),

                            // Product Details
                            Expanded(
                              child: Padding(
                                padding: EdgeInsets.all(10),
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Text(
                                      product['name']!,
                                      style: TextStyle(
                                        fontSize: 16,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    Text(
                                      'Total: ${product['quantity'] * product['price']} DZD', // Calculate total price
                                      style: TextStyle(
                                        fontSize: 14,
                                        color: Colors.green,
                                        fontWeight: FontWeight.bold,
                                      ),
                                    ),
                                    Text(
                                      'Quantity: ${product['quantity']}',
                                      style: TextStyle(
                                        fontSize: 14,
                                        color: Colors.grey[700],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                            Row(
                              children: [
                                IconButton(
                                  onPressed: () {
                                    setState(() {
                                      if (product['quantity'] > 0) {
                                        product[
                                            'quantity']--; // Decrease the quantity
                                      }
                                    });
                                  },
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
                                    product['quantity']
                                        .toString(), // Display the product's quantity
                                    style: TextStyle(
                                      fontSize: 18,
                                      fontWeight: FontWeight.bold,
                                      color: Colors.black,
                                      fontFamily: 'Poppins',
                                    ),
                                  ),
                                ),
                                IconButton(
                                  onPressed: () {
                                    setState(() {
                                      product[
                                          'quantity']++; // Increase the quantity
                                    });
                                  },
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
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          // Product Details

          Container(
            margin: EdgeInsets.only(left: 20, right: 20, top: 20),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                Text(
                  'Total: 600 DA',
                  style: TextStyle(
                    fontSize: 20,
                    fontWeight: FontWeight.w700,
                    fontFamily: 'SF Pro Text',
                  ),
                ),
                CommonButton(
                  text: 'Make Order',
                  onPressed: () {
                    Navigator.push(context,
                        MaterialPageRoute(builder: (context) => OrderRusem()));
                  },
                  width: 190,
                  borderRadius: 12,
                  icon: Icon(
                    Icons.shopping_cart_checkout_rounded,
                    color: Colors.white,
                  ),
                )
              ],
            ),
          ),
          SizedBox(height: 20),
        ],
      ),
    );
  }
}
