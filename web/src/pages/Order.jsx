import React, {useState} from 'react';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import complete from '../assets/icons/complete.png'
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa'
import visa from '../assets/icons/visa.png';
import { FaLocationDot } from "react-icons/fa6";

function Order(props) {
    const [order, setOrder] = useState(
        {
            id:1,
            status:'In Progress',
            date:'2022-04-05',
            time:'10:07 PM',
            total:100.00,
        }
    )
    const[sidebarToggle,setSidebarToggle]=useState(true);
    const [cart, setCart] = useState([
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
            name: 'Product 3',
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
            name: 'Product 4',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            rating: 4.5,
          },
          {
            id: 5,
            name: 'Product 5',
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
            id: 6,
            stock: 10,
            name: 'Product 6',
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
            id: 7,
            stock: 10,
            seller: 'Seller 1',
            name: 'Product 7',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            rating: 4.5,
          },
          {
            id: 8,
            stock: 10,
            sellere: 'Seller 1',
            name: 'Product 8',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            rating: 4.5,
          },
    ])
    const nPages = Math.ceil(cart.length / 4);
    const [page, setPage] = useState(1);
    return (
        <div>
            <Sidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
            />
            <Navbar 
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />


            <div className="container pt-10 pb-10">
                <div className="grid  grid-cols-12 lg:gap-x-20 lg:gap-y-0 gap-y-6 order-2 lg:order-1">
                    <div className='col-span-12 lg:col-span-7'>
                        <div>
                            <div className='flex justify-between items-center mb-4'>
                                <h3>Order Progress</h3>
                                <h3 className='py-2 px-2 border-[1px] rounded-full border-[#FF6F00] text-xs text-[#FF6F00]'>In Progress</h3>
                            </div>
                            <div className='w-20 h-20 mx-auto my-8 rounded-full bg-[#CAF5CA] flex justify-center items-center'>
                                <img src={complete} alt="" />
                            </div>
                            <h3>Order is Placed</h3>

                            <div className='grid grid-cols-3 gap-2 mt-4'>
                                <div className='flex flex-col items-center'>
                                    <span className='h-2 rounded-full bg-[#FF6F00] w-full'></span>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='w-4 h-4 rounded-full  flex justify-center items-center overflow-hidden'>
                                            <img src={complete} alt="" />
                                        </span>
                                        <p>Apr 5, 2022, 10:07 pm</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='h-2 rounded-full bg-gray-100 w-full'></span>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='w-4 h-4 rounded-full  flex justify-center items-center overflow-hidden border-[1px]'>
                                            
                                        </span>
                                        <p>Apr 5, 2022, 10:07 pm</p>
                                    </div>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <span className='h-2 rounded-full bg-gray-100 w-full'></span>
                                    <div className='flex items-center gap-2 mt-1'>
                                        <span className='w-4 h-4 rounded-full  flex justify-center items-center overflow-hidden border-[1px]'>
                                            
                                        </span>
                                        <p>Apr 5, 2022, 10:07 pm</p>
                                    </div>
                                </div>
                                
                                
                            </div>
                        </div>

                        <div className='mt-20 p-4 border-[1px] rounded-lg'>
                            <div className='flex items-center justify-between mb-3'>
                                <h3>Item's Name</h3>
                                <h4>N.Of Items</h4>
                            </div>
                            <div className='flex flex-col gap-4'>
                            {cart.slice((page - 1) * 4, page * 4).map((item, index) => (
                            <div className='flex  pb-3 border-b last:border-none items-center justify-between ' key={index}>
                                <div className='flex items-center gap-2'>
                                    <div className='h-14 w-14 rounded-lg overflow-hidden border-[2px] border-black'>
                                        <img src={item.image} alt="" className='w-full h-full' />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <h3>{item.name}</h3>
                                        <h3>{item.price}</h3>
                                    </div>
                                    
                                </div>
                                <div>
                                    <h3>
                                       X{item.quantity}
                                    </h3>
                                </div>
                            </div>
                        ))}
                            </div>
                            {/* navigation */}
                            <div className='flex items-center gap-0 justify-center mt-4'>
                                <span className='w-8 h-8 rounded-full border-[1px] flex items-center justify-center mr-2'>
                                    <FaArrowLeft className = {`${page === 1 ? 'cursor-not-allowed' : 'cursor-pointer'}`} size={12} onClick={() => page > 1 ? setPage(page - 1) : setPage(1)} />
                                </span>
                                {
                                    Array.from({ length: nPages}).map((_, index)=>(
                                        <span key={index} className={`w-8 h-8 rounded-md flex items-center justify-center border-[1px] mx-1 cursor-pointer ${page === index + 1 ? 'text-black border-red-400' : 'text-gray-400 border-gray-200'}`} onClick={() => setPage(index + 1)}>
                                            {index+1}
                                        </span>
                                    ))
                                }
                                <span className='w-8 h-8 rounded-full border-[1px] flex items-center justify-center ml-2 ' >
                                    <FaArrowRight className={`${page === nPages ? 'cursor-not-allowed' : 'cursor-pointer'}`} size={12} onClick={() => page === nPages ? setPage(nPages) : setPage(page + 1) } />
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-5 order-1 lg:order-2'>
                        <div className='p-6 border-[1px] rounded-lg mb-4'>
                            <div className='mb-7'>
                                <h3 className='mb-3 font-medium' >Order Summary</h3>
                                <p className='text-gray-500 text-sm'>Order Number <span className='ml-2 text-[#FF6F00]'>#{order.id}</span></p>
                            </div>
                            <div className='flex items-center justify-between'>
                                <h3 className='text-xl font-medium'>Total</h3>
                                <p className='text-xl font-medium'>${order.total}</p>
                            </div>
                        </div>
                        <div className='p-6 border-[1px] rounded-lg mb-4'>
                            <h3 className='font-medium mb-5'>Pay With</h3>
                            <p className='text-[#FF6F00] flex items-center gap-2'><img src={visa} alt="" /><span>I Don't Know 012345 </span></p>
                        </div>
                        <div className='p-6 border-[1px] rounded-lg mb-4'>
                            <h3 className='font-medium mb-3'>Delivery Address</h3>
                            <p className='text-[#FF6F00] flex items-center gap-1'>
                                <FaLocationDot />
                                <span className=''>123 Main St, City, Country</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;