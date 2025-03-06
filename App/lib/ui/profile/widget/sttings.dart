import 'package:flutter/material.dart';
import 'package:serbili/ui/core/ui/Text_style.dart';

class Sttings extends StatefulWidget {
  @override
  _SttingsState createState() => _SttingsState();
}

class _SttingsState extends State<Sttings> {
  bool _isSwitched = false;
  bool _isSwitched2 = false;
  String _selectedLanguage = 'English';
  void _toggleSwitch(bool value) {
    setState(() {
      _isSwitched = value;
    });
  }

  void _toggleSwitch2(bool value) {
    setState(() {
      _isSwitched2 = value;
    });
  }

  void _showLanguageDialog() {
    showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: Text('Select Language'),
            content: Container(
              width: double.maxFinite,
              child: ListView(
                shrinkWrap: true,
                children: [
                  ListTile(
                    title: Text('English'),
                    onTap: () => _changeLanguage('English'),
                  ),
                  ListTile(
                    title: Text('French'),
                    onTap: () => _changeLanguage('French'),
                  ),
                  ListTile(
                    title: Text('Spanish'),
                    onTap: () => _changeLanguage('Spanish'),
                  ),
                  // Add more languages here
                ],
              ),
            ),
            actions: [
              TextButton(
                onPressed: () {
                  Navigator.of(context).pop();
                },
                child: Text('Cancel'),
              ),
            ],
          );
        });
  }

  void _changeLanguage(String language) {
    setState(() {
      _selectedLanguage = language;
    });
    Navigator.of(context).pop(); // Close the dialog
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          'Settings',
          style: TextStyle(
              fontSize: 20,
              fontWeight: FontWeight.w500,
              color: Color(0xff333333),
              height: 30 / 20,
              fontFamily: 'Poppins'),
        ),
        leading: IconButton(
            onPressed: () {
              Navigator.pop(context);
            },
            icon: Icon(
              Icons.arrow_back_ios_new,
              size: 20,
            )),
      ),
      body: LayoutBuilder(builder: (context, constraints) {
        return SingleChildScrollView(
          child: Container(
              margin: EdgeInsets.only(left: 20, right: 20, top: 30),
              child: Column(children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Push Notification',
                      style: AppStyles.sitting,
                    ),
                    Switch(
                      value: _isSwitched,
                      onChanged: _toggleSwitch,
                      activeColor: Colors.white,
                      activeTrackColor: Color(0xffFE8C00),
                      inactiveThumbColor: Colors.grey,
                      inactiveTrackColor: Colors.grey[300],
                    ),
                  ],
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Location',
                      style: AppStyles.sitting,
                    ),
                    Switch(
                      value: _isSwitched2,
                      onChanged: _toggleSwitch2,
                      activeColor: Colors.white,
                      activeTrackColor: Colors.lightGreenAccent,
                      inactiveThumbColor: Colors.grey,
                      inactiveTrackColor: Colors.grey[300],
                    ),
                  ],
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Language',
                      style: AppStyles.sitting,
                    ),
                    Row(
                      children: [
                        Text(_selectedLanguage),
                        IconButton(
                          icon: Icon(Icons.arrow_forward_ios_sharp),
                          onPressed: _showLanguageDialog,
                        ),
                      ],
                    ),
                  ],
                ),
                SizedBox(
                  height: 20,
                ),
                Align(
                  alignment: Alignment.centerLeft,
                  child: Text(
                    'About tikes',
                    style: AppStyles.light,
                  ),
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'About Ticketis ',
                      style: AppStyles.sitting,
                    ),
                    Row(
                      children: [
                        IconButton(
                          icon: Icon(Icons.arrow_forward_ios_sharp),
                          onPressed: () {},
                        ),
                      ],
                    ),
                  ],
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Privacy Policy ',
                      style: AppStyles.sitting,
                    ),
                    Row(
                      children: [
                        IconButton(
                          icon: Icon(Icons.arrow_forward_ios_sharp),
                          onPressed: () {},
                        ),
                      ],
                    ),
                  ],
                ),
                SizedBox(
                  height: 20,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Text(
                      'Terms and Conditions',
                      style: AppStyles.sitting,
                    ),
                    Row(
                      children: [
                        IconButton(
                          icon: Icon(Icons.arrow_forward_ios_sharp),
                          onPressed: () {},
                        ),
                      ],
                    ),
                  ],
                ),
              ])),
        );
      }),
    );
  }
}
