import 'package:flutter/material.dart';
import 'package:serbili/ui/auth/widgets/Newpassword.dart';
import 'package:serbili/ui/auth/widgets/Restpassword.dart';
import 'package:serbili/ui/auth/widgets/auth.dart';
import 'package:serbili/ui/auth/widgets/verfiyuser.dart';
import 'package:serbili/ui/auth/widgets/vierfycode.dart';
import 'package:serbili/ui/home/ui/widgets/home.dart';
import 'package:serbili/ui/intro/splash.dart';
import 'package:serbili/ui/order/widget/order.dart';
import 'package:serbili/ui/order/widget/vidorder.dart';
import 'package:serbili/ui/profile/widget/profile.dart';

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
      home: Videorder(),
    );
  }
}
