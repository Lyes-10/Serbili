import X from "../assets/icons/Vector.svg";
import logo from "../assets/icons/logo.svg";
import dz from "../assets/icons/dz.svg"
const Sidebar = ({sidebarToggle,setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle ? "hidden" : "block"} fixed  top-0 left-0 w-64 h-full bg-white z-50  `}>
      <div className="flex justify-between items-center ml-3 mr-6 py-[7px]">
        <div className="flex items-center gap-1">
          <img src={logo} alt="" />
          <span className="font-medium italic ">serbili</span>
        </div>
        <button onClick={()=> setSidebarToggle(!sidebarToggle)}>
          <img src={X} alt="" />
        </button>
      </div>
      <span className="h-[1px] w-full bg-[#ccc] block"></span>
      <div className="flex justify-center items-center my-4">
       <button className=" bg-orange-500 text-white py-2 px-10 rounded-xl font-semibold" >HOME</button>
      </div>
      <span className="h-[0.5px] w-full bg-[#ccc] block"></span>
      <div className="flex flex-col">
      <p className="text-[#6A696E] text-[14px] mx-6 my-4">SECTIONS </p> 
      <ul className="flex flex-col gap-4 mx-4 text-[20px] text-[#2E2C36] mb-4">
        <li className="cursor-pointer">Technologie</li>
        <li className="cursor-pointer">Electromenger</li>
        <li className="cursor-pointer">Sport</li>
        <li className="cursor-pointer">Clothes</li>
      </ul>
      </div>
      <span className="h-[1px] w-full bg-[#ccc] block"></span>
      <div className="flex flex-col">
      <p className="text-[#6A696E] text-[14px] mx-6 my-6">Other </p>
      <ul className="flex flex-col gap-8 mx-6 text-[14px] text-[#2E2C36] mb-4">
        <li className="cursor-pointer mt-2">Be a Warhouse</li>
        <li className="cursor-pointer">How to buy</li>
    
      </ul>
      </div>
      <span className="h-[1px] w-full bg-[#ccc] block mt-16"></span>
      <div className=" flex items-center gap-3 m-2">
       <img src={dz} className="h-[32px] w-[32px] drop-shadow-lg" alt="" />
       <p className="text-[#2E2C36] text-[16px] font-bold ">Algeria</p>
      </div>
    </div>
  );
};

export default Sidebar;
