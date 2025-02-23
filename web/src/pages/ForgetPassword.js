import React from 'react';
import logo from '../assets/icons/logo2.jpg'

function ForgetPassword(props) {
    return (
        <div className='flex md:items-center py-16 md:py-0 justify-center h-screen px-[10px] sm:px-[1vw] md:px-[4vw] lg:px-[6vw] xl:px-[10vw] md:bg-white bg-[#FF6F00]'>
            <div className='lg:py-10 flex lg:justify-between w-full md:justify-center md:items-center items-start lg:mx-20 mx:0 '>
                <div className='hidden lg:block'>
                    <h3 className='font-medium mb-2'>Important Information</h3>
                    <p className='mb-14'>Please <span className='font-bold'>read </span> the information below and then <br /> kindly <span className='font-bold'>share</span> the requested information.</p>
                    <ul className='list-disc ml-5'>
                        <li>Do not reveal your password to anybody</li>
                        <li>Do not reuse passwords</li>
                        <li>Use Alphanumeric passwords</li>
                    </ul>
                </div>
                <div className='bg-[#FF6F00] lg:w-1/2 w-full  px-2 md:px-20 md:py-12 py-0 lg:mx-0 mx-10 '>
                    <div className='flex justify-between items-center mb-4'>
                        <h3 className='text-2xl lg:text-4xl xl: font-bold text-white'>Forgot <br /> Password?</h3>
                        <img src={logo} alt="" className='xl:w-[90px] w-[70px] lg:w-[75px] ' />
                    </div>
                    <p className='text-white text-sm mb-[60px]'>Don't Worry we Can help</p>
                    <form action="">
                        <label htmlFor="number" className='block mb-2 text-white'>Number</label>
                        <input type="text" name='number' id='number' className='block w-full py-2 rounded-xl border-[1px] border-black focus:outline-none px-2 md:mb-32 mb-24' />

                        <button type="submit" className='py-3 px-5 bg-white text-[#FF6F00] font-medium rounded-md float-right'>Continue</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ForgetPassword;