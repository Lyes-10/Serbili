import 'package:flutter/material.dart';

/// A reusable function for animated navigation with a slide transition.
void navigateWithSlideTransition(
  BuildContext context,
  Widget destinationPage, {
  Offset beginOffset = const Offset(1.0, 0.0), // Default animation starts from the right
  Curve curve = Curves.easeInOut, // Default animation curve
}) {
  Navigator.pushReplacement(
    context,
    PageRouteBuilder(
      pageBuilder: (context, animation, secondaryAnimation) => destinationPage,
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        var tween = Tween(begin: beginOffset, end: Offset.zero).chain(CurveTween(curve: curve));
        var offsetAnimation = animation.drive(tween);

        return SlideTransition(
          position: offsetAnimation,
          child: child,
        );
      },
    ),
  );
}


/// A reusable function for animated navigation with a fade transition.
void navigateWithFadeTransition(
  BuildContext context,
  Widget destinationPage, {
  Curve curve = Curves.easeInOut, // Default animation curve
}) {
  Navigator.pushReplacement(
    context,
    PageRouteBuilder(
      pageBuilder: (context, animation, secondaryAnimation) => destinationPage,
      transitionsBuilder: (context, animation, secondaryAnimation, child) {
        var fadeAnimation = animation.drive(
          CurveTween(curve: curve).chain(Tween<double>(begin: 0.0, end: 1.0)),
        );

        return FadeTransition(
          opacity: fadeAnimation,
          child: child,
        );
      },
    ),
  );
}

