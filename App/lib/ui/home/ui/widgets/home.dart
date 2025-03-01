import 'package:flutter/material.dart';

class Home extends StatefulWidget {
  @override
  _HomeState createState() => _HomeState();
}

class _HomeState extends State<Home> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Home Screen'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text('Welcome to Flutter'),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                // Navigate to the About screen
                
              },
              child: Text('Go to About'),
            ),
          ],
        ),
      ),
    );
  }
}
