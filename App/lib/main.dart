import 'package:flutter/material.dart';


import 'package:serbili/ui/Shoper/home/ui/widgets/bottonnav.dart';
import 'package:serbili/ui/Shoper/order/widget/order.dart';
import 'package:serbili/ui/auth/widgets/location.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      home: Location(),
    );
  }
}
