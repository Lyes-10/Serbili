import 'package:flutter/material.dart';

class Pyment extends StatefulWidget {
  @override
  _PymentState createState() => _PymentState();
}

class _PymentState extends State<Pyment> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Payment'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Please swipe your credit card'),
            SizedBox(height: 16),
        
          ],
        ),
      ),
    );
  }
}
