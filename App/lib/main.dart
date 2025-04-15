import 'package:flutter/material.dart';
import 'package:serbili/ui/Shoper/buy/widget/product.dart';
import 'package:serbili/ui/Shoper/buy/widget/warhouseproduct.dart';
import 'package:serbili/ui/Shoper/home/ui/widgets/Warhuse.dart';

import 'package:serbili/ui/Shoper/home/ui/widgets/bottonnav.dart';
import 'package:serbili/ui/Shoper/home/ui/widgets/home.dart';
import 'package:serbili/ui/Shoper/order/widget/cart.dart';
import 'package:serbili/ui/Shoper/order/widget/order.dart';
import 'package:serbili/ui/Shoper/order/widget/orderRusem.dart';
import 'package:serbili/ui/Shoper/profile/widget/profile.dart';
import 'package:serbili/ui/auth/widgets/location.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      home: Warhuse(),
    );
  }
}
