import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import location from "../assets/icons/location.svg";
import loc from "../assets/icons/SVG.svg";
import tech from "../assets/images/tech.svg";
import elec from "../assets/images/electromenager.svg";
import clothes from "../assets/images/clothes.svg";
import sport from "../assets/images/sport.svg";
import other from "../assets/images/Background.svg";
import { Carousel } from "flowbite-react";
import costumer from "../assets/images/costumer.svg";
import company from "../assets/images/company.svg";
import image1 from "../assets/images/image1.svg";
import image2 from "../assets/images/image2.svg";
import image3 from "../assets/images/image3.svg";
import image4 from "../assets/images/image4.svg";
import privacy from "../assets/images/privacy.svg";
import Footer from "../Components/Footer";
import ifri from "../assets/images/ifri.svg";
import iris from "../assets/images/iris.svg";
import cotex from "../assets/images/cotex.svg";
import baridi from "../assets/images/baridi.svg";
import condor from "../assets/images/condor.svg";
import sonatrach from "../assets/images/sonatrach.svg";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
const Home = () => {
  const navigate = useNavigate()
  const [sidebarToggle,setSidebarToggle] = useState(true)
  
  
  return (
    <div className="h-screen w-screen overflow-x-hidden">
      <Sidebar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    <Navbar 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle} />
      <div>
      <div className="bg-[#FF6F00]  h-[375px] w-full flex flex-col justify-center items-center">
        <div className="flex flex-col  gap-6 items-center">
          <p className="text-[#FFFFFF] lg:text-5xl md:text-4xl text-[24px] text-center ">with <b className="text-[#FFFFFF] lg:text-5xl md:text-4xl text-[24px] text-center">serbili</b> you have what you need</p>
          <div className="flex bg-white rounded-sm sm:w-[670px] max-w-[620px] min-w-[300px] position">
            <img
              src={location}
              alt="location-icon"
              className=" w-auto ml-6 mr-2"
            />
            <input
              type="text"
              placeholder="select your position"
              className="h-[65px] w-full bg-white rounded-sm outline-none caret-gray-100 px-4 border-none "
            />
          </div>
        </div>
        <div className="flex max-md:flex-col items-center gap-4  lg:gap-24 mt-10">
          <div className="flex gap-6 max-md:gap-3">
            <img src={loc} alt="" />
            <button className="font-semibold text-[#FFFFFF]">
              select your actuel position
            </button>
          </div>
          <div className="flex items-center gap-1 underline text-[#FFFFFF] cursor-pointer">
            <Link to={"/login"}>
            <p className="font-medium">Log in</p>
            </Link>
            <p className="text-[#FFFFFF] text-[14px] mt-1">
              to see your recent address
            </p>
          </div>
        </div>
      </div>
      <div className="mx-10 md:h-[270px] h-[250px]  mt-8 rounded-xl ">
        <div className="h-56  sm:h-64 xl:h-full ">
          <Carousel slide={false}>
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
              alt="..."
            />
            <img
              src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
              alt="..."
            />
          </Carousel>
        </div>
      </div>
      <div className="mx-4 flex flex-col  md:mt-16">
        <p className="font-bold text-[#333333] mt-4 md:mt-0 ml-8 mb-4 ">
          search what you need
        </p>
        <div className="box grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center lg:gap-3">
          <div className="flex flex-col justify-center gap-6 items-center  bg-[#04D3D1] h-[200px] w-[300px] rounded-3xl ">
            <div className="mt-6 ">
              <img src={tech} alt="" />
            </div>
            <div className="bg-white h-full  w-full">
              <p className="text-center">Technologie</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center bg-[#717171] h-[200px] w-[300px] rounded-3xl">
            <div className="mt-6">
              <img src={elec} alt="" />
            </div>
            <div className="bg-white h-full  w-full">
              <p className="text-center ">Electromenager</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center bg-[#7CA5CD] h-[200px] w-[300px] rounded-3xl">
            <div className="mt-6">
              <img src={clothes} alt="" />
            </div>
            <div className="bg-white h-full  w-full">
              <p className="text-center ">Clothes</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center bg-[#FF4800] h-[200px] w-[300px] rounded-3xl">
            <div className="mt-6  ">
              <img src={other} alt="" />
            </div>
            <div className="bg-white h-full  w-full">
              <p className="text-center  ">Home</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center bg-[#2162A1] h-[200px] w-[300px] rounded-3xl">
            <div className="mt-6 ">
              <img src={sport} alt="" />
            </div>
            <div className="bg-white h-full  w-full">
              <p className="text-center ">Sport</p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-6 items-center bg-[#29D884] h-[200px] w-[300px] rounded-3xl">
            <div className="mt-6">
              <img src={other} alt="" />
            </div>
            <div className="bg-white h-full  w-full">
              <p className="text-center ">other</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col   mt-20 mx-auto lg:mx-32">
        <div className="flex  justify-center items-center md:text-7xl text-5xl font-medium mb-6">
          <p className="text-[#2E2C36] flex justify-center items-center">
            JOIN US{" "}
            <span className="text-[#FF6F00] flex justify-center items-center ml-2">
              NOW
            </span>
            <span className="ml-2">!</span>
          </p>
        </div>
        <div className="grid md:grid-cols-2  grid-cols-1 gap-6  max-lg:mt-16 place-items-center ">
          <div className="w-[340px] h-[410px] border border-[#003366] rounded-lg flex flex-col items-center  shadow-md">
            <img src={costumer} className="w-full" alt="" />
            <p className="font-bold text-[#2E2C36] mt-3">join as a costumer</p>
            <p className="text-[#6A696E] text-[15px] leading-6 text-center">
              Discover the advantages of our <br /> partners in 20 wiliaya who
              are already <br /> working <br /> with Serbili.
            </p>
            <button className="bg-[#E9FCF2] px-32 py-3 mt-5 text-[#003366] font-bold" onClick={()=> navigate("/login")}>
              Sign in
            </button>
          </div>
          <div className="w-[340px] h-[410px] border border-[#003366] rounded-lg flex flex-col items-center  shadow-md">
            <img src={company} className="w-full" alt="" />
            <p className="font-bold text-[#2E2C36] mt-3">save your company</p>
            <p className="text-[#6A696E] text-[15px] leading-6 text-center mt-5">
              {" "}
              Access millions of serbili users and <br />
              benefit from immediate logistics without <br /> leave your store.
            </p>
            <button className="bg-[#E9FCF2] px-32 py-3 mt-5 text-[#003366] font-bold" onClick={()=> navigate("/login")}>
              Sign in
            </button>
          </div>
        </div>
      </div>
      <div className="bg-orange-500  w-full mt-32 pb-32 pt-16">
        <div className="">
          <div className="flex flex-col gap-7  items-center ">
            <p className="text-2xl leading-4 font-medium text-[#FFFFFF]">
              BRNADS THAT TRUST US
            </p>
            <span className="border border-[#FFFFFF] rounded-lg h-1 w-[18%]"></span>
            <div className="container grid md:grid-cols-3 grid-cols-2 gap-6 md:gap-2 bg-white py-6 place-items-center">
              <img src={ifri} alt="" />
              <img src={iris} alt="" />
              <img src={cotex} alt="" />
              <img src={baridi} alt="" />
              <img src={condor} alt="" />
              <img src={sonatrach} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex  justify-center items-center lg:mt-0 mt-6">
        <div className=" flex flex-col gap-2 mt-16 md:mt-6 md:ml-10 ">
          <p className="font-bold lg:text-[40px] md:text-3xl text-2xl  lg:leading-10 sm:leading-8 lg:text-nowrap max-lg:text-center">
            We Make Sure That Your <br /> Products Will Reach You <br />
            Safely
          </p>
          <p className="text-xs lg:leading-7 sm:leading-5  mt-8 lg:mt-0 max-lg:text-center lg:text-nowrap">
            We make sure your product reaches you safely and securely. Our team
            handles <br className="max-md:hidden" /> ever package with care and
            precision.With reliable delivery services,we{" "}
            <br className="max-md:hidden" /> prioritize satisfaction . Trust us
            for a smouth <br className="md:hidden" /> and hassle-free
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
            most certainly do not bank on advertising-based business models.The
            only way we make
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
