import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import product from "../assets/images/th.jpg";
import { Rating, RatingStar, Pagination } from "flowbite-react";
import search from "../assets/icons/icons8-search.svg";

const Products = () => {
  const [sidebarToggle, setSidebarToggle] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const products = [
    {
      Image: product,
      name: "T-Shirt",
      price: "2500",
      rating: "4.5",
      sold: "1218",
    },
    {
      Image: product,
      name: "Sweater",
      price: "3500",
      rating: "4.8",
      sold: "718",
    },
    {
      Image: product,
      name: "Jeans",
      price: "4500",
      rating: "4.2",
      sold: "518",
    },
    {
      Image: product,
      name: "Jacket",
      price: "5500",
      rating: "4.9",
      sold: "218",
    },
    {
      Image: product,
      name: "Shorts",
      price: "1500",
      rating: "4.3",
      sold: "1028",
    },
    {
      Image: product,
      name: "Shoes",
      price: "6000",
      rating: "4.7",
      sold: "450",
    },
    { Image: product, name: "Cap", price: "1000", rating: "4.4", sold: "850" },
    {
      Image: product,
      name: "Scarf",
      price: "1200",
      rating: "4.1",
      sold: "900",
    },
    {
      Image: product,
      name: "Gloves",
      price: "1800",
      rating: "4.6",
      sold: "400",
    },
    { Image: product, name: "Bag", price: "7500", rating: "4.8", sold: "300" },
    { Image: product, name: "Belt", price: "2000", rating: "4.2", sold: "650" },
    {
      Image: product,
      name: "Socks",
      price: "800",
      rating: "4.5",
      sold: "1050",
    },
    {
      Image: product,
      name: "Watch",
      price: "12000",
      rating: "4.9",
      sold: "220",
    },
    {
      Image: product,
      name: "Sunglasses",
      price: "5000",
      rating: "4.6",
      sold: "310",
    },
    {
      Image: product,
      name: "Raincoat",
      price: "7000",
      rating: "4.3",
      sold: "200",
    },
    {
      Image: product,
      name: "Blazer",
      price: "8000",
      rating: "4.5",
      sold: "400",
    },
    { Image: product, name: "Hat", price: "2500", rating: "4.4", sold: "520" },
    {
      Image: product,
      name: "Polo Shirt",
      price: "3500",
      rating: "4.7",
      sold: "600",
    },
    {
      Image: product,
      name: "Sweatpants",
      price: "3000",
      rating: "4.5",
      sold: "700",
    },
    {
      Image: product,
      name: "Tank Top",
      price: "1500",
      rating: "4.1",
      sold: "950",
    },
    {
      Image: product,
      name: "Hoodie",
      price: "4500",
      rating: "4.8",
      sold: "350",
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const itemsPerPage = 8;
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

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
      <div className="container flex justify-center items-center">
        <div className="inline-flex items-center justify-center border border-gray-400 px-5 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none border-none text-sm bg-inherit"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={search} className="w-4" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 container place-items-center">
        {paginatedProducts.map((product) => (
          <div className="mt-2 mb-6 relative flex" key={product.name}>
            <div className="flex flex-col border border-[#ccc] rounded-lg">
              <img
                src={product.Image}
                style={{ width: "215px", height: "215px" }}
                className="rounded-md"
                alt={product.name}
              />
              <div className="mb-4">
                <div className="flex justify-between items-center mt-2 mx-2">
                  <p className="text-[14px]">{product.name}</p>
                  <span className="text-[14px]">
                    {product.price}{" "}
                    <span className="font-medium text-gray-800">DZ</span>{" "}
                  </span>
                </div>
                <div className="flex justify-between gap-4 items-center border border-[#ccc] rounded-xl py-1 px-1 mx-2 mt-1">
                  <span>
                    <Rating className="flex items-center gap-1">
                      <RatingStar /> {product.rating}
                    </Rating>
                  </span>
                  <span className="text-[14px] text-[#666666]">
                    {product.sold} sold
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex overflow-x-auto justify-center mb-6">
        <Pagination
          layout="pagination"
          currentPage={currentPage}
          totalPages={Math.ceil(filteredProducts.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
          previousLabel=""
          nextLabel=""
          showIcons
        />
      </div>
      <Footer />
    </div>
  );
};

export default Products;
