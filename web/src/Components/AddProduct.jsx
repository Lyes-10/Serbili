// AddProduct.js
import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const handleAddProduct = () => {
    if (productName && quantity && price) {
      onAddProduct({ productName, quantity, price });
      setProductName('');
      setQuantity('');
      setPrice('');
    }
  };

  return (
    <div className="flex  container w-fit p-4 border rounded-3xl  shadow-lg  ">
      <div className='flex flex-col'>
      <div className="mb-4 ">
        <label className="block text-sm w font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="mt-1 p-2 border w-full border-gray-300 rounded-md"
        />
      </div>
      <div className='flex '>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1  p-2 border  border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1  p-2 border  border-gray-300 rounded-md"
        />
      </div>
      </div>
      <div className='flex justify-end mt-6'>
      <button
        onClick={handleAddProduct}
        className=" bg-orange-500 text-white py-2 w-1/3  rounded-3xl hover:bg-orange-600"
      >
        Add Product
      </button>
      </div>
     
      </div>
     
    </div>
  );
};

export default AddProduct;
