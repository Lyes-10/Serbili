import React, { useState, useEffect } from "react";
import x from "../assets/icons/delete-svgrepo-com.svg";

const AddProduct = ({ onAddProduct, productToEdit, onClose }) => {
  const [productName, setProductName] = useState("");
  const [productID, setProductID] = useState("");
  const [stock, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [productImage, setProductImage] = useState(null);

  useEffect(() => {
    if (productToEdit) {
      setProductName(productToEdit.productName || "");
      setQuantity(productToEdit.stock || "");
      setPrice(productToEdit.price || "");
      setDescription(productToEdit.description || "");
      setProductImage(productToEdit.productImage || null);
    }
  }, [productToEdit]);

  const handleAddProduct = () => {
    if (productName  && stock && price && description) {
      onAddProduct({
        productName,
        stock,
        price,
        description,
        productImage,
      });
      if (!productToEdit) {
        resetForm();
      }
    }
  };

  const resetForm = () => {
    setProductName("");
    setQuantity("");
    setPrice("");
    setDescription("");
    setProductImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProductImage(reader.result); // Update the image preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col container w-fit p-4   border-2 border-orange-200 rounded-lg shadow-lg relative ">
      <div className="flex flex-col justify-center items-center mx-[152px]">
        <img
          src={x}
          className="w-6 absolute right-2 top-2 cursor-pointer"
          alt="Close"
          onClick={onClose} 
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="py-4"
          style={{ display: "none" }}
          id="image-upload"
        />
        <label htmlFor="image-upload" className="cursor-pointer py-4">
          {productImage ? (
            <img
              src={productImage}
              alt="Product"
              className="w-32 h-32 object-cover rounded-xl"
            />
          ) : (
            <span className="text-[#FF6F00] font-medium">Add Image</span>
          )}
        </label>
      </div>

      <div className="flex flex-col">
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333]">
            Product Name
          </label>
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            className="mt-1 p-2 border w-full border-gray-300 rounded-md"
          />
        </div>
        <div className="flex">
          <div className="mb-4 w-1/2 mr-2">
            <label className="block text-sm font-medium text-[#333333]">
              Quantity
            </label>
            <input
              type="text"
              value={stock}
              onChange={(e) => setQuantity(e.target.value)}
              className="mt-1 p-2 border w-full border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4 w-1/2 ml-2">
            <label className="block text-sm font-medium text-[#333333]">
              Price
            </label>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 p-2 border w-full border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-[#333333]">
            Description
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 p-2 border w-full h-28 border-gray-300 rounded-md focus:border-black resize-none"
          ></textarea>
        </div>
        <div className="flex justify-end mt-6">
          <button
            onClick={handleAddProduct}
            className="bg-orange-500 text-white py-2 px-4 rounded-3xl hover:bg-orange-600"
          >
            {productToEdit ? "Update Product" : "Add Product"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
