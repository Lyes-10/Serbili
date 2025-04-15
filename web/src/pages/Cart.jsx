import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import  card from '../assets/icons/card.png'
import { FaAngleLeft, FaAngleRight, FaRegTrashAlt } from 'react-icons/fa';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import '../App.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Cart = () => {
    const [sidebarToggle,setSidebarToggle]=useState(true);
    const [products, setProducts] = useState([
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
      {
      id: 1,
      stock: 10,
      name: 'Product 1',
      price: 29.99,
      image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      quantity: 1,
      color: 'Red',
      size: 'M',
      orders: 2,
      seller: 'Seller 1',
      rating: 4.5,
    },
    ]);
    
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
    ])
    const Shipping = (cartItems.length > 0)? 500 :0;
    //add quantity
    const addQuantity = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity+1 } : item
        )
      );
    }
    //reduce quantity
    const reduceQuantity = (itemId) => {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity-1 } : item
        )
      );
      setCartItems((prevItems) => prevItems.filter((item) => item.quantity > 0));
    }
    //remove items
    const removeItem = (itemId) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
    }
    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


    const handleSwiperUpdate = (swiper) => {
      // Disable "Previous" button if on the first slide
      if (swiper.isBeginning) {
        document.querySelector('.prev').classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        document.querySelector('.prev').classList.remove('opacity-50', 'cursor-not-allowed');
      }
  
      // Disable "Next" button if on the last slide
      if (swiper.isEnd) {
        document.querySelector('.next').classList.add('opacity-50', 'cursor-not-allowed');
      } else {
        document.querySelector('.next').classList.remove('opacity-50', 'cursor-not-allowed');
      }
    };

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
      <div className='container mx-auto mt-10 pb-10'>
        <div className='grid lg:grid-cols-3 grid-cols-1  w-full lg:gap-x-8 gap-y-4 lg:gap-y-0'>
          <div className='col-span-2 border-[1px]  rounded-lg p-4 h-fit'>
            <h3>Items Name</h3>
            <div className='flex flex-col gap-4'>
              {cartItems.map((item) => (
                <div key={item.id} className='flex items-center justify-between border-b-[1px] last:border-none py-4 pr-3'>
                  <div className='flex items-center gap-4'>
                    <div className='border-[2px] border-black rounded-md overflow-hidden w-16 h-16'>
                      <img src={item.image} alt={item.name} className=' object-cover ' />
                    </div>
                    
                    <div className='flex flex-col gap-1'>
                      <h3>{item.name}</h3>
                      <h6 className='text-[#FF6F00] text-sm'>{item.price}DZD</h6>
                    </div>
                  </div>
                  <div className='flex items-center gap-6'>
                    <div className='flex items-center gap-3 bg-gray-100  rounded-full'>
                      <button className='w-5 h-5 rounded-full bg-white flex items-center justify-center ml-1 my-1' onClick={()=> reduceQuantity(item.id)}>
                        {item.quantity > 1 ? '-' : <FaRegTrashAlt size={12} />}
                      </button>

                      <span className='text-sm'>{item.quantity}</span>
                      <button className='w-6 h-6 rounded-full bg-[#FF6F00] flex items-center justify-center text-white' onClick={()=> addQuantity(item.id)}>
                        +
                      </button>
                    </div>
                    <button className='text-[#FF6F00] cursor-pointer text-sm' onClick={()=>removeItem(item.id)}>remove</button>
                    <h3 className='text-gray-800'>{Math.round(item.quantity*item.price*100)/100}DZD</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='col-span-1 border-[1px] rounded-lg p-4 px-8 h-fit w-full'>
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
              <button className={`w-full bg-[#FF6F00] text-white  font-semibold rounded-3xl items-center  flex px-4 py-3 ${screenWidth < 1280 ? 'justify-center' : 'justify-between'}`}>
                <div className='flex items-center'>
                  <img src={card} alt="" />
                  <span className='ml-2 text-sm '>Checkout</span>
                </div>
                {
                  screenWidth < 1280 ? null :
                <h3 className='text-sm'>{ Math.round((totalPrice+Shipping)*100)/100} DZD</h3>

              }
              </button>
          </div>
          
        </div>

        {/* recomendation section */}

        <div className='mt-10'>
          <div className='flex items-center justify-between mb-6'>
            <h3 className='font-semibold'>Recommandations</h3>
            <div className='flex items-center gap-4'>
              <button className='prev h-10 w-10 rounded-full flex items-center justify-center border-[1px] border-gray-300'>
                <FaAngleLeft size={18} />
              </button>

              <button className='next h-10 w-10 rounded-full flex items-center justify-center border-[1px] border-gray-300'> 
                <FaAngleRight size={18} />
              </button>
            </div>
          </div>
          <Swiper
              modules={[Navigation,  A11y]}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
                1280: {
                  slidesPerView: 5,
                },
              }}
              navigation={
                {
                  prevEl:'.prev',
                  nextEl:'.next'
                }
              }
              pagination={{ clickable: true }}
              
              onInit={(swiper) => {
                handleSwiperUpdate(swiper);
              }}
              onSlideChange={(swiper) => {
                handleSwiperUpdate(swiper);
              }}
              >

          <div className='grid grid-cols-4 gap-4 mt-4 w-full '>
            
            {products.map((item) => (
              <SwiperSlide key={item.id} className='flex w-full'> 
              <div key={item.id} className='border-[1px] rounded-lg p-4'>
                <img src={item.image} alt={item.name} className='w-full h-32 object-contain rounded-md' />
                <h3 className='text-sm font-semibold mt-2'>{item.name}</h3>
                <h6 className='text-black text-sm mt-2'>{item.price}DZD</h6>
                <h6 className='text sm mt-2 text-[#FF6F00]'>{item.stock} Left</h6>
              </div>
              </SwiperSlide>
            ))}
            
            

            
          </div>
          </Swiper>
      </div>
      </div>
    </div>
  )
}

export default Cart
