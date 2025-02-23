import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class CommonTextField extends StatefulWidget {
  final String hintText;
  final TextEditingController controller;
  final Color? fillColor;
  final Color? borderColor;
  final double? height;
  final double? width;
  final double? borderRadius;

  final bool? itpasswords;

  CommonTextField({
    required this.hintText,
    required this.controller,
    this.fillColor,
    this.borderColor,
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

      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: TextField(
          obscureText: !eyes,
          decoration: InputDecoration(
              filled: true,
              fillColor: Colors.transparent,
              enabledBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(widget.borderRadius ?? 8),
                borderSide: BorderSide(
                  color: Colors.black, // Black border color
                ),
              ),
              focusedBorder: OutlineInputBorder(
                borderRadius: BorderRadius.circular(widget.borderRadius ?? 8),
                borderSide: BorderSide(
                  color: Colors.black, // Black border color when focused
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
              floatingLabelBehavior: FloatingLabelBehavior
                  .auto, // Label floats to the top when focused
              contentPadding:
                  EdgeInsets.symmetric(vertical: 15.0, horizontal: 10.0),
              suffix: widget.itpasswords!
                  ? IconButton(
                      onPressed: () {
                        setState(() {
                          eyes = !eyes;
                        });
                      },
                      icon: eyes
                          ? Icon(Icons.remove_red_eye_rounded)
                          : Icon(Icons.remove_red_eye_outlined))
                  : Container()
          ),

        ),
      ),
      // child: TextField(
      //   controller: controller,
      //   obscureText: obscureText,
      //   decoration: InputDecoration(
      //     hintText: hintText,
      //     hintStyle: AppStyles.textfield,
      //     filled: true,
      //     fillColor: fillColor ?? Colors.grey[200],
      //     enabledBorder: OutlineInputBorder(
      //       borderRadius: BorderRadius.circular(20),
      //       borderSide: BorderSide(
      //         color: Colors.black,
      //         // Black border color
      //       ),
      //     ),
      //     focusedBorder: OutlineInputBorder(
      //       borderRadius: BorderRadius.circular(20),
      //       borderSide: BorderSide(
      //         color: Colors.black, // Black border color when focused
      //       ),
      //     ),
      //     border: OutlineInputBorder(
      //       borderRadius: BorderRadius.circular(borderRadius ?? 8.0),
      //       borderSide: BorderSide(
      //         color: borderColor ?? Colors.grey,
      //       ),
      //     ),
      //     floatingLabelBehavior: FloatingLabelBehavior.auto,
      //     contentPadding: EdgeInsets.symmetric(
      //         vertical: 15.0, horizontal: 10.0), // Label moves to the top
      //   ),
      // ),
    );
  }
}

class StyledTextField extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: TextField(
        decoration: InputDecoration(
          filled: true,
          fillColor: Colors.transparent,
          enabledBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Colors.black, // Black border color
            ),
          ),
          focusedBorder: OutlineInputBorder(
            borderSide: BorderSide(
              color: Colors.black, // Black border color when focused
            ),
          ),
          labelText: 'Enter Text',
          labelStyle: TextStyle(
            color: Colors.black,
          ),
          floatingLabelBehavior: FloatingLabelBehavior
              .auto, // Label floats to the top when focused
          contentPadding:
              EdgeInsets.symmetric(vertical: 15.0, horizontal: 10.0),
        ),
      ),
    );
  }
}
