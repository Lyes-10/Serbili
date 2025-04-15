import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import menu from "../assets/icons/menu.svg";
import logo from "../assets/icons/logo.svg";
import loc from "../assets/icons/loc.svg";
import search from "../assets/icons/icons8-search.svg";
import revenu from "../assets/icons/rev.svg";
import cart from "../assets/icons/cart.svg";
import down from "../assets/icons/down.svg";
import revnueactive from "../assets/icons/revenuactive.svg";
import cartactive from "../assets/icons/cartactive.svg";

const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
  const location = useLocation(); // Get the current path

  return (
    <div className="flex justify-between items-center mx-4 py-[6px] nav">
      <div className="flex items-center gap-4">
        <button onClick={() => setSidebarToggle(!sidebarToggle)}>
          <img src={menu} alt="Menu" />
        </button>
        <img
          src={logo}
          alt="Logo"
          className="w-12"
        />
        <div className="md:flex justify-between border-l border-r border-[#D9D9D9] py-1 px-3 gap-2 hidden">
          <img src={loc} alt="Location" />
          <p className="font-bold text-[#FF6F00]">Entrez mon emplacement</p>
          <img src={down} alt="Dropdown" />
        </div>
      </div>

      <div className="flex flex-1 mx-2 justify-between items-center bg-[#F7F8F9] rounded-lg">
        <input
          className="bg-inherit outline-none caret-transparent md:ml-8 py-3 w-full rounded-lg"
          type="search"
          placeholder="search..."
          id="search"
        />
        <img className="w-5 h-5 md:mr-3 mr-1" src={search} alt="Search" />
      </div>

      <div className="flex items-center gap-2">
        <Link to="/revenue">
          <div
            className={`flex items-center gap-2 cursor-pointer ${location.pathname === "/revenue" ? "text-[#FF6F00]" : "text-[#6A696E]"}`}
          >
            <img src={location.pathname === "/revenue" ? revnueactive : revenu} alt="Revenue" />
            <p className="font-semibold">Revenu</p>
          </div>
        </Link>

        <Link to="/cart">
          <button
            className={`border-l border-[#D9D9D9]"}`}
          >
            <img className="mx-2 mt-1" src={location.pathname === "/cart" ? cartactive : cart} alt="Cart" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
