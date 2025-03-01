import 'package:flutter/material.dart';

class SnackbarHelper {
  static void show(BuildContext context, String message,
      {bool isError = false}) {
    final snackBar = SnackBar(
      content: Text(
        message,
        style: TextStyle(
          color: Colors.white,
          fontSize: 20,
          fontWeight: FontWeight.bold,
        ),
      ),
      backgroundColor: isError ? Colors.red : Color(0xffFF6F00),
      behavior: SnackBarBehavior.floating,
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(10),
      ),
      margin: EdgeInsets.all(10),
      padding: EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      action: SnackBarAction(
        label: 'DISMISS',
        onPressed: () {
          // or dismiss the SnackBar
          // Dismiss the SnackBar
        },
        textColor: Colors.white,
      ),
    );

    ScaffoldMessenger.of(context).showSnackBar(snackBar);
  }
}
