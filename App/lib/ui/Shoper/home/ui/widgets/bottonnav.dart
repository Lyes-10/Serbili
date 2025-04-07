import 'package:flutter/material.dart';
import 'package:serbili/ui/Shoper/home/ui/widgets/home.dart';
import 'package:serbili/ui/Shoper/order/widget/order.dart';
import 'package:serbili/ui/Shoper/profile/widget/profile.dart';


class BottomNavExample extends StatefulWidget {
  @override
  _BottomNavExampleState createState() => _BottomNavExampleState();
}

class _BottomNavExampleState extends State<BottomNavExample> {
  int _currentIndex = 0; // Track the currently selected tab
  final PageController _pageController = PageController();
  // List of screens or content for each tab
  final List<Widget> _screens = [
    Home(),
    Order(),
    Profile(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: _screens[_currentIndex], // Display the current screen
      bottomNavigationBar: BottomNavigationBar(
          selectedItemColor: Color(0xffFF6F00),
          selectedFontSize: 16,
          unselectedFontSize: 14,
          currentIndex: _currentIndex, // Highlight the current tab
          onTap: (index) {
            setState(() {
              _currentIndex = index; // Update the selected tab
            });
          },
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: '',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.shopping_bag),
              label: '',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: '',
            ),
          ],
          showSelectedLabels: false, // Ensure no labels are displayed
          showUnselectedLabels: false, // Ensure no labels are displayed
          backgroundColor: Colors.white,
          elevation: 10),
    );
  }
}
