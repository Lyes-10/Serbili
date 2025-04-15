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
    <div className="p-4 border rounded-lg shadow-lg bg-gray-50">
      <h2 className="text-lg font-bold mb-4">Add Product</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Product Name</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="mt-1 w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleAddProduct}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
