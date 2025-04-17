import React, { useState } from "react";
import person from "../assets/images/person.jpg";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Rating, RatingStar } from "flowbite-react";
import filter from "../assets/icons/filter.svg";

const Supliers = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const persons = [
    {
      image: person,
      name: "Seif",
      rating: "4.5",
      phoneNumber: "0656769534",
      region: "Alger",
    },
    {
      image: person,
      name: "Seif",
      rating: "4.6",
      phoneNumber: "0656769534",
      region: "Alger",
    },
    {
      image: person,
      name: "Seif",
      rating: "4.5",
      phoneNumber: "0656769534",
      region: "Oran",
    },
    {
      image: person,
      name: "Seif",
      rating: "4.1",
      phoneNumber: "0656769534",
      region: "Alger",
    },
    {
      image: person,
      name: "Seif",
      rating: "3.9",
      phoneNumber: "0656769534",
      region: "Constantine",
    },
    {
      image: person,
      name: "Seif",
      rating: "4.2",
      phoneNumber: "0656769534",
      region: "Oran",
    },
    {
      image: person,
      name: "Seif",
      rating: "3.9",
      phoneNumber: "0656769534",
      region: "Constantine",
    },
    {
      image: person,
      name: "Seif",
      rating: "4.2",
      phoneNumber: "0656769534",
      region: "Oran",
    },
  ];
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Sidebar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">Supliers</h2>
          <div className="flex gap-2">
            <select className="border-2 border-gray-300 text-sm px-2 ">
              <option value="distance">Filter by : distance</option>
              <option value="rating">FIlter by : Rating </option>
            </select>
            <img src={filter} alt="" />
          </div>
        </div>
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 mt-1">
          {persons.map((person) => (
            <div className="mt-2 mb-6 relative">
              <div className=" border border-[#B9B9B9] rounded-xl">
                <span className="font-medium absolute bg-gray-200 flex left-2 top-2 px-2 rounded-full">
                  {person.rating}{" "}
                  <Rating>
                    <RatingStar />
                  </Rating>
                </span>

                <img src={person.image} alt="" />
                <div className="flex justify-around items-center mt-1">
                  <p className="font-semibold text-[16px]">{person.name}</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <p className=" text-[14px] text-[#202224] ">
                    {person.phoneNumber}
                  </p>
                  <p className=" text-[14px] text-[#FF6F00]">{person.region}</p>
                  <span className="mt-1 my-4 border border-[#979797] rounded-md text-[14px] text-[#767676] px-8 py-1">
                    Stock
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Supliers;
