import React from "react";
import netsales from "../assets/icons/Netsales.svg";
import dilivered from "../assets/icons/dilivered.svg";
import dollar from "../assets/icons/dollar.svg";
import customer from "../assets/icons/costemers.svg";
import up from "../assets/icons/upgreen.svg";
import down from "../assets/icons/downred.svg";
const Statistiques = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 md:gap-4   ">
      <div className="flex flex-col my-4 px-6 py-2 bg-white border border-[#E2E2E2] rounded-md  ">
        <p className="text-[14px] font-medium ">Net Sales</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">$4,689</span>
            <div className="flex items-center gap-1">
              <img src={up} alt="" />
              <span className="text-[#28A956]  text-xs font-medium mt-1">
                18.72%
              </span>
            </div>
          </div>

          <img src={netsales} alt="" />
        </div>
      </div>
      <div className="flex flex-col my-4 px-6 py-2 bg-white border border-[#E2E2E2] rounded-md  ">
        <p className="text-[14px] font-medium ">Delivered</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">654</span>
            <div className="flex  items-center gap-1">
              <img src={down} alt="" />
              <span className="text-[#D83520]  text-xs font-medium mt-1">
                33.02%
              </span>
            </div>
          </div>
          <img src={dilivered} alt="" />
        </div>
      </div>
      <div className="flex flex-col my-4 px-6 py-2 bg-white border border-[#E2E2E2] rounded-md ">
        <p className="text-[14px] font-medium ">No Orders</p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">1422</span>
            <div className="flex items-center gap-1">
              <img src={up} alt="" />
              <span className="text-[#28A956]  text-xs font-medium mt-1">
                18.72%
              </span>
            </div>
          </div>
          <img src={dollar} alt="" />
        </div>
      </div>
      <div className="flex flex-col my-4 px-6 py-2 bg-white border border-[#E2E2E2] rounded-md  ">
        <p className="text-[14px] font-medium text-nowrap ">No Customers</p>
        <div className="flex justify-between items-center  mt-4">
          <div className="flex flex-col">
            <span className="text-[20px] font-bold">502</span>
            <div className="flex items-center gap-1">
              <img src={down} alt="" />
              <span className="text-[#D83520]  text-xs font-medium mt-1">
                33.02%
              </span>
            </div>
          </div>
          <img src={customer} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Statistiques;
