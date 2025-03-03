import 'package:flutter/material.dart';

class Detile extends StatefulWidget {
  @override
  _DetileState createState() => _DetileState();
}

class _DetileState extends State<Detile> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Detile'),
      ),
      body: Center(
        child: Text('This is a detiled view.'),
      ),
    );
  }
}
