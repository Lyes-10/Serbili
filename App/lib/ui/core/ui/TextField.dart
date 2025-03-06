import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class CommonTextField extends StatefulWidget {
  final String hintText;
  final TextEditingController? controller;
  final FocusNode? focusNode;
  final Color? fillColor;
  final Color? borderColor;
  final double? height;
  final double? width;
  final double? borderRadius;
  final bool? itpasswords;

  CommonTextField({
    required this.hintText,
   this.controller,
    this.fillColor,
    this.borderColor,
    this.focusNode,
    this.height,
    this.width,
    this.borderRadius,
    this.itpasswords = false,
  });

  @override
  State<CommonTextField> createState() => _CommonTextFieldState();
}

class _CommonTextFieldState extends State<CommonTextField> {
  bool eyes = false;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: widget.height,
      width: widget.width,
      child: TextField(
        obscureText: widget.itpasswords == true ? !eyes : false, // ✅ Fix: Only obscure passwords
        controller: widget.controller,
        focusNode: widget.focusNode,
        decoration: InputDecoration(
          filled: true,
          fillColor: widget.fillColor ?? Colors.white, // ✅ Fix: Use widget.fillColor
          enabledBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(widget.borderRadius ?? 8),
            borderSide: BorderSide(
              color: widget.borderColor ?? Colors.grey, // ✅ Fix: Use widget.borderColor
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderRadius: BorderRadius.circular(widget.borderRadius ?? 8),
            borderSide: BorderSide(
              color: Colors.black, // ✅ Fix: Black border when focused
            ),
          ),
          border: OutlineInputBorder(
            borderRadius: BorderRadius.circular(widget.borderRadius ?? 8.0),
            borderSide: BorderSide(
              color: widget.borderColor ?? Colors.grey,
            ),
          ),
          labelText: widget.hintText,
          labelStyle: AppStyles.head,
          floatingLabelBehavior: FloatingLabelBehavior.auto,
          contentPadding: EdgeInsets.symmetric(vertical: 15.0, horizontal: 10.0), // ✅ Fix: Moved inside InputDecoration
          suffixIcon: widget.itpasswords == true // ✅ Fix: Use suffixIcon instead of suffix
              ? IconButton(
                  onPressed: () {
                    setState(() {
                      eyes = !eyes;
                    });
                  },
                  icon: eyes
                      ? Icon(Icons.remove_red_eye_rounded)
                      : Icon(Icons.remove_red_eye_outlined),
                )
              : null, // ✅ Fix: Avoid empty Container()
        ),
      ),
    );
  }
}
