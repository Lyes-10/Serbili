import 'package:flutter/material.dart';

import 'package:serbili/ui/Shoper/home/ui/widgets/home.dart';
import 'package:serbili/ui/auth/widgets/SnackbarHelper.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Location extends StatefulWidget {
  @override
  _LocationState createState() => _LocationState();
}

class _LocationState extends State<Location> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset('asset/images/7d17a0e7f85305ae68d940c13ef8152a 1.png'),
            SizedBox(height: 20),
            CommonButton(
              text: 'Set Location',
              onPressed: () {
                Navigator.push(
                    context, MaterialPageRoute(builder: (context) => Home()));
                SnackbarHelper.show(context, 'Welcome Mr ');
              },
              icon: Icon(Icons.location_on_outlined),
              height: 63,
              width: 214,
              borderRadius: 20,
              color: Colors.white,
            ),
            SizedBox(
              height: 20,
            ),
            Container(
              width: 318,
              child: Align(
                alignment: Alignment.center,
                child: Text(
                  'Sarbili will Acces Your Location While Using This App',
                  style: AppStyles.light,
                  textAlign: TextAlign.center,
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
