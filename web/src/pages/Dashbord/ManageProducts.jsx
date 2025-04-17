import React, { useState } from 'react'
import MenuDashbord from '../../Components/MenuDashbord'
import AddProduct from '../../Components/AddProduct';

const ManageProducts = () => {
  const [products, setProducts] = useState([
     { name: 'Product 1', quantity: 10, price: 50 },
     { name: 'Product 2', quantity: 20, price: 100 },
   ]);
 
   const addProductHandler = (newProduct) => {
     setProducts([...products, { name: newProduct.productName, quantity: newProduct.quantity, price: newProduct.price }]);
   };
  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr]'>
    <div><MenuDashbord activeItem={"Manage Products"} />
    </div>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Product Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg bg-white">
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p>Quantity: {product.quantity}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-8">
        <AddProduct onAddProduct={addProductHandler} />
      </div>
    </div>
  </div>
  )
}

export default ManageProducts
