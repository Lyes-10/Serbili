import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import location from "../assets/icons/location.svg";
import loc from "../assets/icons/SVG.svg";

import { Carousel } from "flowbite-react";
import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.svg";
import image4 from "../assets/images/image4.svg";
import privacy from "../assets/images/privacy.svg";
import Footer from "../Components/Footer";
import Sidebar from "../Components/Sidebar";
import slide from "../assets/images/hero-stock.png";
import stock from "../assets/images/Inventory-management-blog.jpg";
import pic from "../assets/images/optimisation-stocks-entreprise.webp";
import send from "../assets/images/supplier-png.png";
import service from "../assets/images/Capture d'écran 2025-04-19 194517.png";
import suplier from "../assets/images/Capture d'écran 2025-04-19 195743.png";
import quality from "../assets/images/Capture d'écran 2025-04-19 195754.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const navigate = useNavigate();

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
      <div>
        <div className="bg-gradient-to-r from-yellow-400 to-orange-500 h-[375px] w-full flex flex-col justify-center items-center">
          <div className="flex flex-col  gap-6 items-center">
            <p className="text-[#FFFFFF] lg:text-5xl md:text-4xl text-[24px] text-center ">
              with{" "}
              <b className="text-[#FFFFFF] lg:text-5xl md:text-4xl text-[24px] text-center">
                serbili
              </b>{" "}
              you have what you need
            </p>
            <div className="flex bg-white rounded-sm sm:w-[670px] max-w-[620px] min-w-[300px] position py-2">
              <img
                src={location}
                alt="location-icon"
                className=" w-auto ml-6 mr-2"
              />

              <select
                name=""
                id="position"
                className="border-none w-full text-gray-500 "
              >
                <option value="alger">Alger</option>
                <option value="oran">Oran</option>
                <option value="constantine">Constantine</option>
              </select>
            </div>
          </div>
          <div className="flex max-md:flex-col items-center gap-4  lg:gap-24 mt-10">
            <div className="flex gap-1">
              <img src={loc} alt="" />
              <p className="font-semibold text-[#FFFFFF]">
                select your actuel position
              </p>
            </div>
          </div>
        </div>
        <div className="mx-10 md:h-[400px] h-[250px]  mt-10 rounded-xl  ">
          <div className="h-full ">
            <Carousel slideInterval={5000}>
              <img src={pic} alt="" className="h-full" />
              <img src={stock} className="h-full" alt="..." />
              <img src={slide} alt="..." className="h-full" />
            </Carousel>
          </div>
        </div>
        <div className="flex justify-between container bg-gradient-to-r from-gray-100 to-orange-200 rounded-xl mt-16">
          <div className="flex flex-col my-56">
            <p className="text-3xl font-semibold ">
              Find Supliers According What you choice the category that you want
            </p>
            <button
              className="md:w-[80%] w-full py-2 bg-orange-400 hover:bg-orange-500 text-white rounded-lg mt-12 "
              onClick={() => navigate("/supliers")}
            >
              discover our supliers
            </button>
          </div>
          <div className="md:flex justify-center items-center  hidden">
            <img src={send} alt="" />
          </div>
        </div>
        <div className=" my-8">
          <div className="flex flex-col justify-center items-center gap-2 container">
            <h1 className="text-2xl font-semibold mt-6 ">How Serbili Works</h1>
            <p className="text-center font-sans text-gray-500">
              learn how serbili streamlines the service process for you. From
              selecting your desired service to tracking its progress, our
              user-friendly platform ensures a seamless experience.
            </p>
          </div>
          <div className="grid  md:grid-cols-3 sm:grid-cols-1 gap-8 mt-6 mx-6">
            <div className="flex flex-col justify-center items-center gap-2 hover:border border-[#ccc] p-2 rounded-lg">
              <img src={service} className="w-[135px] " alt="" />
              <h1 className="text-[18px] font-semibold">Request Service</h1>
              <p className="text-center text-gray-600">
                Easily request the service you need with just a few taps. Get
                started quickly and effortlessly!
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 hover:border border-[#ccc] p-2 rounded-lg">
              <img src={suplier} className="w-36" alt="" />
              <h1 className="text-[18px] font-semibold">Match With Supliers</h1>
              <p className="text-center text-gray-600">
                Find the perfect suplier for your service needs. Our smart
                matching ensures you get the best fit.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 hover:border border-[#ccc] p-2 rounded-lg">
              <img src={quality} className="w-36" alt="" />
              <h1 className="text-[18px] font-semibold">
                Receive Quality Results
              </h1>
              <p className="text-center text-gray-600 ">
                Enjoy top-quality results delivered right to your doorstep.
                Satisfaction guaranteed with every service.
              </p>
            </div>
          </div>
        </div>
        <div className="flex  justify-center items-center lg:mt-0 mt-6 bg-gray-50 ">
          <div className=" flex flex-col gap-2 mt-6 md:ml-10 ">
            <p className="font-bold lg:text-[40px] md:text-3xl text-2xl  lg:leading-10 sm:leading-8 lg:text-nowrap max-lg:text-center">
              We Make Sure That Your <br /> Products Will Reach You <br />
              Safely
            </p>
            <p className="text-xs lg:leading-7 sm:leading-5  mt-8 lg:mt-0 max-lg:text-center lg:text-nowrap">
              We make sure your product reaches you safely and securely. Our
              team handles <br className="max-md:hidden" /> ever package with
              care and precision.With reliable delivery services,we{" "}
              <br className="max-md:hidden" /> prioritize satisfaction . Trust
              us for a smouth <br className="md:hidden" /> and hassle-free
              experience!"
            </p>
          </div>
          <div className="lg:grid  gap-6 mt-4 lg:mt-32  rounded-xl hidden ">
            <div className="grid grid-cols-2 lg:ml-24 gap-4 ">
              <img src={image1} alt="" />
              <img src={image2} className="" alt="" />
            </div>
            <div className="grid grid-cols-2 ">
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
          </div>
        </div>
        <div className="container flex flex-col items-center mt-36 mb-44 ">
          <img src={privacy} alt="" />
          <p className="text-4xl leading-10 mt-8 text-center">
            Your privacy is our responsibility
          </p>
          <p className="text-[15px] text-[#333333] leading-7 mt-6 ">
            We believe that trust is paramount in a relationship . We do not own
            or sell your data , and we <br className="max-md:hidden" />
            <span className="max-md:ml-2">
              {" "}
              most certainly do not bank on advertising-based business
              models.The only way we make
            </span>{" "}
            <br className="max-md:hidden" />
            <span className="md:flex justify-center  ">
              {" "}
              money is from the software license fees you pay us.
            </span>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
