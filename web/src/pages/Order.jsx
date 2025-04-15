import React, {useState} from 'react';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import complete from '../assets/icons/complete.png'

function Order(props) {
    const[sidebarToggle,setSidebarToggle]=useState(true);
    return (
        <div>
            <Sidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
            />
            <Navbar 
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />


            <div className="container pt-10">
                <div className="grid grid-cols-12 gap-6">
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

                        <div>

                        </div>
                    </div>

                    <div className='col-span-12 lg:col-span-5'>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Order;