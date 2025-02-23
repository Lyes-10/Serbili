import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class CommonButton extends StatelessWidget {
  final String text;
  final VoidCallback onPressed;
  final Color? color;
  final Color? textColor;
  final double? height;
  final double? width;
  final double? borderRadius;

  CommonButton({
    required this.text,
    required this.onPressed,
    this.color,
    this.textColor,
    this.height,
    this.width,
    this.borderRadius,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      height: height,
      width: width,
      child: ElevatedButton(
        style: ElevatedButton.styleFrom(
          foregroundColor: textColor,
          backgroundColor: Color(0xffFF6F00),
          padding: EdgeInsets.symmetric(horizontal: 20, vertical: 15),
          textStyle: TextStyle(fontSize: 16),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(borderRadius ?? 8.0),
          ),
        ),
        onPressed: onPressed,
        child: Text(
          text,
          style: TextStyle(
            fontSize: 20,
            fontWeight: FontWeight.bold,
            color: color ?? Colors.white,
            letterSpacing: 0.5,
          ),
        ),
      ),
    );
  }
}
