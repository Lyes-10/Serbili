import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/icons/logodash.svg";
import dashbord from "../assets/icons/dashbord.svg";
import orders from "../assets/icons/order.svg";
import store from "../assets/icons/store.svg";
import manage from "../assets/icons/user-03.svg";
import settings from "../assets/icons/settings.svg";
import help from "../assets/icons/help-circle.svg";
import access from "../assets/icons/accessbility.svg";
import lastlogo from "../assets/icons/usered.svg";
import dash from "../assets/icons/Ellipse 1.svg";

const MenuDashbord = ({ activeItem }) => {
  const SIDEBAR_ITEMS = [
    { name: "User", icon: dash, href: "/dashboard/userinformation" },
    { name: "Dashboard", icon: dashbord, href: "/dashboard" },
    { name: "Orders", icon: orders, href: "/dashboard/orders" },
    { name: "Store Availability", icon: store, href: "/dashboard/store" },
    { name: "Manage Users", icon: manage, href: "/dashboard/users" },
    { name: "Settings", icon: settings, href: "/dashboard/settings" },
  ];

  const [click, setClick] = useState(false); // For the User button
  const [clicked, setClicked] = useState(false); // For the Dashboard button
  const [activeSidebarItem, setActiveSidebarItem] = useState(null); // Tracks the active sidebar item

  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item); // Set the active sidebar item
    setClick(false); // Reset User button
    setClicked(false); // Reset Dashboard button
  };

  return (
    <div className="h-full flex flex-col pt-2 border-2 border-r-2 border-[#E2E2E2]  ">
      <div className="flex gap-2 items-center py-2 pl-2 mx-2">
        <img src={logo} alt=""  />
        <p className="font-semibold text-[18px] mt-1 max-md:hidden">SERBILI</p>
      </div>
      {/* Sidebar Items */}
      {SIDEBAR_ITEMS.map((item) => (
        <Link key={item.href} to={item.href}>
          <div
            className=" mt-6 max-md:flex justify-center items-center"
          >
            <button
              className={`mx-3 flex gap-3 px-2 py-1 rounded-xl ${
                item.name === "User"
                  ? activeItem === item.name
                    ? " bg-orange-500 text-white font-semibold  py-2 flex  w-[60%] items-center border-2 border-gray-900 border-b-[6px]" // Active state for User
                    : "px-2 py-2 text-[18px] ml-5 font-semibold" // Non-active state for User
                  : item.name === "Dashboard"
                  ? activeItem === item.name
                    ? " md:w-[80%] w-1/2 bg-orange-500 text-white font-semibold px-3 py-3 border-2 border-gray-900 border-b-[6px]" // Active state for Dashboard
                    : "px-2 py-2 ml-5 font-semibold" // Non-active state for Dashboard
                  : activeItem === item.name
                  ? "underline font-medium" // Active state for other items
                  : "border-none font-medium" // Non-active state for other items
              }`}
              onClick={() => handleSidebarItemClick(item.name)} // Update activeItem immediately
            >
              <img
                src={item.icon}
                alt={item.name}
                className="max-md:w-[26px]"
              />
              <div className="flex flex-col">
                <p className="md:block hidden">{item.name}</p>
                {item.name === "User" && activeItem !== item.name && (
                  <span className={`text-[14px] font-normal text-[#323232] md:block hidden`}>
                    Store
                  </span>
                )}
              </div>
            </button>
          </div>
        </Link>
      ))}

      <hr className="bg-[#E2E2E2] mt-72 h-[2px] md:w-[80%] w-full   md:ml-7" />

     <div className="flex flex-col max-md:gap-16 max-md:justify-center max-md:items-center mt-4 mb-32 ">
       {/* Help Button */}
       <button className="mx-3 mt-2 max-md:mt-6 border-gray-500 md:flex gap-3 px-2 py-2 rounded-xl max-md:justify-center">
        <img src={help} alt="Help" className="max-md:w-[26px]" />
        <p className="font-medium max-md:hidden">Help</p>
      </button>

      {/* Accessibility Button */}
      <button className="mx-3  border-gray-500 md:flex gap-3 px-2 py-2 rounded-xl max-md:justify-center">
        <img src={access} alt="Accessibility" className="max-md:w-[26px]" />
        <p className="font-medium max-md:hidden">Accessibility</p>
      </button>
     </div>

      <hr className="bg-[#E2E2E2] h-[2px]   " />

      {/* User Info */}
      <div className="flex  justify-center items-center max-md:mt-6"> 
      <button className=" flex  md:flex-1 md:my-6 my-16 mx-3 border-2 border-[#E2E2E2]  gap-3 md:px-8 px-2 py-2 rounded-lg ">
        <img src={lastlogo} alt="User"  />
        <p className="font-medium max-md:hidden">User</p>
      </button>
      </div>
      
    </div>
  );
};

export default MenuDashbord;
