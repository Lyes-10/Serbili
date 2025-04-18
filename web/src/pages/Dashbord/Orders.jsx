import React, { useState } from 'react'
import MenuDashbord from '../../Components/MenuDashbord'
import AddProduct from '../../Components/AddProduct';

const Orders = () => {
  const [products, setProducts] = useState([
    { name: 'Product 1', quantity: 10, price: 50 },
    { name: 'Product 2', quantity: 20, price: 100 },
  ]);

  const addProductHandler = (newProduct) => {
    setProducts([...products, { name: newProduct.productName, quantity: newProduct.quantity, price: newProduct.price }]);
  };
  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr]'>
    <div><MenuDashbord activeItem={"Orders"}  />
    </div>
  
  </div>
  )
}

export default Orders
