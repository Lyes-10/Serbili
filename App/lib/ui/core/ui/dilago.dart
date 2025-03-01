import 'package:flutter/material.dart';

enum DialogType { error, info, warning }

class CustomDialog extends StatelessWidget {
  final String title;
  final String message;
  final DialogType dialogType;

  const CustomDialog({
    Key? key,
    required this.title,
    required this.message,
    required this.dialogType,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Color _getColor() {
      switch (dialogType) {
        case DialogType.error:
          return Colors.red;
        case DialogType.info:
          return Colors.blue;
        case DialogType.warning:
          return Colors.orange;
        default:
          return Colors.black;
      }
    }

    return AlertDialog(
      title: Text(
        title,
        style: TextStyle(
          fontSize: 18,
          fontWeight: FontWeight.bold,
          color: _getColor(),
        ),
      ),
      content: Text(
        message,
        style: TextStyle(
          fontSize: 14,
          fontWeight: FontWeight.normal,
          color: Colors.black,
        ),
      ),
      actions: <Widget>[
        TextButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: Container(
            width: 50,
            height: 30,
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(10),
              color: _getColor(),
            ),
            child: Center(
              child: Text(
                'Ok',
                style: TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.bold,
                  color: Colors.white,
                ),
              ),
            ),
          ),
        )
      ],
    );
  }
}

void showCustomDialog(BuildContext context, String title, String message, DialogType dialogType) {
  showDialog(
    context: context,
    builder: (context) => CustomDialog(
      title: title,
      message: message,
      dialogType: dialogType,
    ),
  );
}
