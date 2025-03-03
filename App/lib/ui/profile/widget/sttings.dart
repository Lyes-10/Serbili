import 'package:flutter/material.dart';

class Sttings extends StatefulWidget {
  @override
  _SttingsState createState() => _SttingsState();
}

class _SttingsState extends State<Sttings> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Settings'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('This is the Settings page.'),
         
          ],
        ),
      ),
    );
  }
}
