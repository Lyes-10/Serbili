import 'package:flutter/material.dart';

import 'package:serbili/ui/auth/widgets/auth.dart';


class Splash extends StatefulWidget {
  @override
  State<Splash> createState() => _SplashState();
}

class _SplashState extends State<Splash> {
  @override
  void initState() {
    // TODO: implement initState

    redierct();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Color(0xffFF6F00),
      body: Container(
        margin: EdgeInsets.only(
          left: 20,
          right: 20,
          bottom: 20,
        ),
        child: Stack(children: [
          Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                child: Center(
                  child: Image.asset(
                    'asset/images/befb2299ba304a49bdd2f9e69c5fac77-free 2.png',
                    width: 169,
                    height: 169,
                    fit: BoxFit.cover,
                  ),
                ),
              ),
            ],
          ),
          // Positioned(
          //   bottom: 0,
          //   right: 0,
          //   child: GestureDetector(
          //       onTap: () {
          //         // Navigator.push(
          //         //     context, MaterialPageRoute(builder: (context) => Auth()));
          //       },
          //       child: SvgPicture.asset(
          //         'asset/icons/SVG.svg',
          //         width: 47,
          //         height: 47,
          //       )),
          // )
        ]),
      ),
    );
  }

  Future redierct() async {
    await Future.delayed(Duration(seconds: 2));
    Navigator.pushReplacement(
        context, MaterialPageRoute(builder: (context) => Auth()));
  }
}
