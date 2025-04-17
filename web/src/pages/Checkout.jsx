import React, {useState} from 'react';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import checkout from '../assets/icons/checkout.png'
import {FaAngleRight} from 'react-icons/fa'
import { CiCircleInfo } from "react-icons/ci";

function Checkout(props) {
    const[sidebarToggle,setSidebarToggle]=useState(true)

    const [cartItems, setCartItems]=useState([
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 1,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
            stock: 10,
          },
          {
            id: 2,
            stock: 10,
            name: 'Product 2',
            price: 29.99,
            seller: 'Seller 1',
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            rating: 4.5,
          },
          {
            id: 3,
            stock: 10,
            seller: 'Seller 1',
            name: 'Product 2',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            rating: 4.5,
          },
          {
            id: 4,
            stock: 10,
            sellere: 'Seller 1',
            name: 'Product 2',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            rating: 4.5,
          },
        ]);

    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const Shipping = (cartItems.length > 0)? 500 :0;

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handleResize = () => {
        setScreenWidth(window.innerWidth);
    };
    React.useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [screenWidth]);

    return (
        <div>
            <Sidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
        />
            <Navbar 
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />

            <div className='container pt-10'>
            <div className='grid grid-cols-12 lg:gap-x-8'>
                <div className='col-span-7 p-4 shadow-md rounded-lg shadow-gray-100 bg-white'>
                    <div className='flex items-center gap-2 mb-4'>
                        <div className='h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center'>   
                            <img src={checkout} alt="" className='w-6 h-6' />
                        </div>
                        <h3>Checkout</h3>
                    </div>
                    <div className='border-[1px] rounded-md p-4 mb-6'>
                        <div className='flex items-center justify-between  text-sm mb-8'>
                            <h3 className='flex items-center gap-1'>
                                Delivery Info
                                <CiCircleInfo />
                            </h3>
                            <FaAngleRight />
                        </div>
                        <div>
                            <h3 className='text-xs text-gray-500'>Deliver to</h3>
                        </div>
                    </div>
                    <div className='border-[1px] rounded-md p-4 mb-6'>
                        <div className='flex items-center justify-between  text-sm mb-6'>
                            <h3 className='flex items-center gap-1'>
                                Payment Method
                                <CiCircleInfo />
                            </h3>
                            <FaAngleRight />
                        </div>
                        <div className='flex gap-2'>
                            <h3 className='text-xs text-gray-500'>Pay With</h3>
                            <span className='text-xs text-[#FF6F00] '>ma 3labalish</span>
                        </div>
                    </div>

                    <div className='border-[1px] rounded-md p-4 mb-6'>
                        <div className='flex items-center justify-between  text-sm mb-8'>
                            <h3 className='flex items-center gap-1'>
                                Review Order
                                <CiCircleInfo />
                            </h3>
                        </div>
                        <div className='flex items-center justify-between bg-gray-100 p-3 rounded-md'>
                            <div className='flex items-center gap-1'>
                                {cartItems.slice(0,6).map((item) => (
                                    <div key={item.id} className='border-[2px] rounded-lg overflow-hidden w-16 h-16'>
                                        <img src={item.image} alt="" className='w-16 h-16 object-contain' />
                                    </div>
                                ))}
                                <div className='border-[2px] rounded-lg w-16 h-16 flex items-center justify-center text-gray-500 bg-white'>
                                    <h3 className='text-gray-500'>+{cartItems.length-6}</h3>
                                </div>
                            </div>
                            <FaAngleRight />
                        </div>
                    </div>

                </div>
                <div className='col-span-5 border-[1px] rounded-lg p-4 px-8 h-fit w-full'>
                    <h3 className='font-semibold'>Order Summary</h3>
                    <div className='flex items-center justify-between pt-4 text-sm pl-4 '>
                    <h3>items total</h3>
                    <h3 className='text-gray-700'>{Math.round(totalPrice*100)/100} DZD</h3>
                    </div>
                    <div className='flex items-center justify-between border-b-[1px] py-4 text-sm pl-4'>
                    <h3>delivery fee</h3>
                    <h3 className='text-gray-700'>{Shipping} DZD</h3>
                    </div>
                    <div className='py-4 flex items-center justify-between'>
                    <h3 className='font-semibold'>Total</h3>
                    <h3 className='text-gray-700 '>{Math.round((totalPrice+Shipping)*100)/100} DZD</h3>
                    </div>
                    <button className={`w-full bg-[#FF6F00] text-white  font-semibold rounded-3xl  px-4 py-3 `}>
                        Place Order
                    </button>
                
                </div>
            </div>
            </div>
        </div>

        
    );
}

export default Checkout;