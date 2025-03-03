import 'dart:io';

import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:image_picker/image_picker.dart';
import 'package:serbili/ui/core/ui/Button.dart';
import 'package:serbili/ui/profile/widget/detile.dart';
import 'package:serbili/ui/profile/widget/pyment.dart';
import 'package:serbili/ui/profile/widget/sttings.dart';

class Profile extends StatefulWidget {
  @override
  _ProfileState createState() => _ProfileState();
}

class _ProfileState extends State<Profile> {
  final Map<String?, IconData> item = {
    'Personal Data': Icons.person_2_outlined,
    'Settings': Icons.settings,
    'Pyement': Icons.payment_rounded,
    'Help': Icons.help_outline,
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        margin: EdgeInsets.only(
            left: 20, right: 20, top: MediaQuery.of(context).size.height / 15),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            Center(
              child: Text(
                'Profile Settings',
                style: TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.w600,
                  color: Colors.black,
                  height: 24 / 16,
                ),
              ),
            ),
            SizedBox(height: MediaQuery.of(context).size.height / 20),
            ProfileImageWithCamera(),
            SizedBox(
              height: 20,
            ),
            Text(
              'ABD EL AZIZ',
              style: TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: Colors.black,
                height: 18 / 16,
              ),
            ),
            SizedBox(
              height: 10,
            ),
            Text(
              'Abdelaziz3100@gmail.com',
              style: TextStyle(
                fontSize: 14,
                color: Color(0xff878787),
                fontWeight: FontWeight.w400,
                height: 20 / 14,
              ),
            ),
            SizedBox(
              height: MediaQuery.of(context).size.height / 21,
            ),
            Divider(
              color: Color(0xffEDEDED), // Change the color as needed
              thickness: 2, // Adjust the thickness as needed
              indent: 20, // Optional: Adjust the left margin as needed
              endIndent: 20, // Optional: Adjust the right margin as needed
            ),
            // Expanded(
            //   child: ListView(
            //     children: item.entries.map((item) {
            //       return Container(
            //         padding: EdgeInsets.all(8.0),
            //         child: Row(
            //           mainAxisAlignment: MainAxisAlignment.spaceBetween,
            //           children: [
            //             Row(
            //               mainAxisAlignment: MainAxisAlignment.spaceBetween,
            //               children: [
            //                 Container(
            //                     height: 20,
            //                     width: 20,
            //                     decoration: BoxDecoration(
            //                       borderRadius: BorderRadius.circular(60),
            //                       color: Color(0xffF5F5FF),
            //                     ),
            //                     child: Icon(
            //                       item.value,
            //                       size: 30,
            //                     )),
            //                 SizedBox(width: 50),
            //                 Center(
            //                   child: Text(
            //                     item.key!,
            //                     style: TextStyle(
            //                         fontSize: 16,
            //                         fontWeight: FontWeight.w500,
            //                         color: Colors.black,
            //                         height: 21 / 16),
            //                   ),
            //                 ),
            //               ],
            //             ),
            //             IconButton(
            //               onPressed: () {
            //                 Widget page;
            //                 // switch (item.key) {
            //                 //   case 'Profile':
            //                 //     page = Profiledetl();
            //                 //     break;
            //                 //   case 'Settings':
            //                 //     page = Settings();
            //                 //     break;
            //                 //   case 'Pyment Method':
            //                 //     page = Pyment();
            //                 //   case 'About':
            //                 //     page = About();
            //                 //   case 'Help':
            //                 //     page = Hlep();
            //                 //   case 'Logout':
            //                 //     ScaffoldMessenger(
            //                 //       child: Text('log out'),
            //                 //     );
            //                 //     page = Profile();

            //                 //   default:
            //                 //     page = Profile();
            //                 // }
            //                 // Navigator.push(
            //                 //   context,
            //                 //   MaterialPageRoute(builder: (context) => page),
            //                 // );
            //               },
            //               icon: Icon(
            //                 Icons.arrow_forward_ios_outlined,
            //                 color: Color(0xff101010),
            //               ),
            //             )
            //           ],
            //         ),
            //       );
            //     }).toList(),
            //   ),
            // ),
            // Flexible(
            //   child: ListView.builder(
            //     itemCount: item.length,
            //     itemBuilder: (context, index) {
            //       String? key = item.keys.elementAt(index);
            //       return ListTile(
            //         leading: Icon(item[key]),
            //         title: Text(key!),
            //       );
            //     },
            //   ),
            // ),

            // SizedBox(
            //   height: MediaQuery.of(context).size.height / 21,
            // ),
            // Padding(
            //   padding: EdgeInsets.only(
            //       bottom: MediaQuery.of(context).size.height / 2),
            //   child: ElevatedButton(
            //     onPressed: () {
            //       // Add your button functionality here
            //       print('Button pressed');
            //     },
            //     child: Text('Add More Items'),
            //   ),
            // ),

            Expanded(
                child: ListView.builder(
                    itemCount:
                        item.length + 1, // Add one extra item for the button
                    itemBuilder: (context, index) {
                      if (index < item.length) {
                        String? key = item.keys.elementAt(index);
                        return ListTile(
                            leading: Icon(item[key]),
                            title: Text(key!),
                            trailing: IconButton(
                              icon: Icon(
                                Icons.arrow_forward_ios_outlined,
                                color: Color(0xff101010),
                              ), // Change to any icon you prefer
                              onPressed: () {
                                Widget page;

                                switch (key) {
                                  case 'Personal Data':
                                    page = Detile();
                                    break;
                                  case 'Settings':
                                    page = Sttings();
                                    break;
                                  case 'Pyement':
                                    page = Pyment();

                                  default:
                                    page = Profile();
                                }
                                Navigator.push(
                                  context,
                                  createFadeRoute(
                                      page), // Use the custom transition
                                );
                                // Define what happens when the icon button is pressed
                              },
                            ));
                      } else {
                        // Add a button after all items are displayed
                        return Padding(
                            padding: const EdgeInsets.all(16.0),
                            child: CommonButton(
                              height: 52,
                              text: 'Sing Out',
                              icon: Icon(
                                Icons.output_rounded,
                                size: 20,
                                color: Color(0xffF14141),
                              ),
                              borderColor: Color(0xffD6D6D6),
                              color: Color(0xffF14141),
                              onPressed: () {},
                              width: MediaQuery.of(context).size.width,
                              borderRadius: 30,
                              background:
                                  Theme.of(context).scaffoldBackgroundColor,
                            ));
                      }
                    })),
            Padding(
              padding: EdgeInsets.only(bottom: 90),
              child: Text('ilyes'),
            )
          ],
        ),
      ),
    );
  }
}

class ProfileImageWithCamera extends StatefulWidget {
  @override
  _ProfileImageWithCameraState createState() => _ProfileImageWithCameraState();
}

class _ProfileImageWithCameraState extends State<ProfileImageWithCamera> {
  File? _image;
  final ImagePicker _picker = ImagePicker();

  Future<void> _pickImage() async {
    final pickedFile = await _picker.pickImage(source: ImageSource.gallery);
    if (pickedFile != null) {
      setState(() {
        _image = File(pickedFile.path);
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // Profile Image
        CircleAvatar(
          radius: 60,
          backgroundImage: _image != null
              ? FileImage(_image!)
              : AssetImage(
                  'asset/images/Rectangle 5621.png'), // Replace with your profile image path
        ),
        // Camera Icon
        Positioned(
          bottom: 0,
          right: 0,
          child: GestureDetector(
            onTap: _pickImage,
            child: Container(
              padding: EdgeInsets.all(8),
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
              ),
              child: Icon(
                FontAwesomeIcons.camera, // Camera icon from FontAwesome
                size: 20,
                color: Color(0xffFE8C00),
              ),
            ),
          ),
        ),
      ],
    );
  }
}

Route createFadeRoute(Widget page) {
  return PageRouteBuilder(
    pageBuilder: (context, animation, secondaryAnimation) => page,
    transitionsBuilder: (context, animation, secondaryAnimation, child) {
      return FadeTransition(
        opacity: animation,
        child: child,
      );
    },
  );
}
