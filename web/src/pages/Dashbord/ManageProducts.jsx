import React, { useState } from "react";
import MenuDashbord from "../../Components/MenuDashbord";
import AddProduct from "../../Components/AddProduct";
import add from "../../assets/icons/add-svgrepo-com.svg";
import x from "../../assets/icons/delete-svgrepo-com.svg";
import Statistiques from "../../Components/Statistiques";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    {
      name: "Product 1",
      id: "1111111",
      quantity: 10,
      sales: 46,
      decline: 20,
      price: 5000,
      image: "",
      description: "",
    },
    {
      name: "Product 2",
      id: "1111112",
      quantity: 20,
      sales: 30,
      decline: 15,
      price: 1000,
      image: "",
      description: "",
    },
    {
      name: "Product 1",
      id: "1111113",
      quantity: 10,
      sales: 46,
      decline: 20,
      price: 5000,
      image: "",
      description: "",
    },
    {
      name: "Product 2",
      id: "1111114",
      quantity: 20,
      sales: 30,
      decline: 15,
      price: 1000,
      image: "",
      description: "",
    },
    {
      name: "Product 1",
      id: "1111115",
      quantity: 10,
      sales: 46,
      decline: 20,
      price: 5000,
      image: "",
      description: "",
    },
  ]);

  const [showAddProduct, setShowAddProduct] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const addProductHandler = (newProduct) => {
    console.log("New/Updated Product:", newProduct);// the product object
    if (currentProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === currentProduct.productID
            ? {
                ...product,
                name: newProduct.productName,
                id: newProduct.productID,
                quantity: newProduct.stock,
                price: newProduct.price,
                description: newProduct.description,
                image: newProduct.productImage,
              }
            : product
        )
      );
    } else {
      setProducts((prevProducts) => [
        ...prevProducts,
        {
          name: newProduct.productName,
          id: newProduct.productID,
          quantity: newProduct.stock,
          price: newProduct.price,
          sales: 0,
          decline: 0,
          image: newProduct.productImage,
          description: newProduct.description,
        },
      ]);
    }
    setShowAddProduct(false);
    setCurrentProduct(null);
  };

  const handleAddClick = () => {
    setCurrentProduct(null);
    setShowAddProduct(true);
  };

  const handleEditClick = (product) => {
    setCurrentProduct({
      productName: product.name,
      productID: product.id,
      stock: product.quantity,
      price: product.price,
      description: product.description,
      productImage: product.image,
    });
    setShowAddProduct(true);
  };

  const handleClose = () => {
    setShowAddProduct(false);
    setCurrentProduct(null);
  };

  const handleDeleteProduct = (id) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id)
    );
  };

  return (
    <div className="grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr] relative">
      <div>
        <MenuDashbord activeItem={"Manage Products"} />
      </div>
      <div className={`p-8 ${showAddProduct ? "blur-sm" : ""} bg-gray-50`}>
        <div>
          <span className="text-[26px] font-semibold">Info</span>
          <Statistiques />
        </div>
        <h1 className="text-2xl font-bold mb-8 mt-8">Product Settings</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6 mb-4">
          {products.map((product,index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg bg-gray-100 h-fit cursor-pointer relative"
              onClick={() => handleEditClick(product)}
            >
              <img
                src={x}
                className="w-5  absolute right-1 top-1 cursor-pointer"
                alt="delete"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering handleEditClick
                  handleDeleteProduct(product.id);
                }}
              />
              {product.image ? (
                <img
                  src={product.image}
                  alt={`${product.name}`}
                  className="w-full object-cover  rounded-xl h-[200px]"
                />
              ) : (
                <div className="h-[200px] bg-gray-500 flex items-center justify-center rounded-t-xl"></div>
              )}
              <div className="flex items-center justify-between text-[14px] mt-2 mx-2">
                <h3 className="font-bold">{product.name}</h3>
                <span className="text-[#A0A5BA]">id:{product.id}</span>
              </div>
              <div className="flex justify-between my-2">
                <div className="flex flex-col text-[13px] ml-2">
                  <p>Quantity</p>
                  <p>No of sells</p>
                  <p>No of Decline</p>
                  <p>Price</p>
                </div>
                <div className="flex flex-col items-center text-[13px] mr-2">
                  <span>{product.quantity}</span>
                  <span>{product.sales}</span>
                  <span>{product.decline}</span>
                  <span className="flex justify-center gap-1">
                    {product.price} <span>DZ</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
          <div
            className="rounded-lg bg-gray-100 flex flex-col justify-center items-center cursor-pointer"
            onClick={handleAddClick}
          >
            <img src={add} className="w-20" alt="Add Product" />
            <span className="text-[#FF6F00] font-medium">ADD</span>
          </div>
        </div>
      </div>
      {showAddProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg">
            <AddProduct
              onAddProduct={addProductHandler}
              productToEdit={currentProduct}
              onClose={handleClose}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
