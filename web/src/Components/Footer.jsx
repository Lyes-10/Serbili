import React from 'react'
import pay from "../assets/images/pay.svg"
import eccp from "../assets/images/eccp.svg"
import facebook from "../assets/images/Link - facebook.svg"
import whatsapp from "../assets/images/Link - whatapp.svg"

const Footer = () => {
  return (
    <div className='max-sm:container bg-[#E8E8E8]  w-screen  footer  '>
      <div className='grid md:grid-cols-[1fr,1fr,1fr,2fr] mx-8  md:mx-24  '>
        <div className='mt-4' >
            <ul className='text-[14px] text-[#757575] leading-6'>
                <b className='leading-7 text-[16px] text-[#191919]'>Customer sevice</b>
                <li>Help Center</li>
                <li>Transaction Services Agreement for</li>
                <li>non-EU/UK Consumers</li>
                <li>Terms and Conditions for EU/EEA/UK</li>
                <li>Consumers (Transaction)</li>
                <li>Take our feedback suervey</li>
            </ul>
        </div>
        <div className='mt-4'>
            <ul className='text-[14px] text-[#757575] leading-6'>
                <b className='leading-7 text-[16px] text-[#191919]'>Shopping with us</b>
                <li>Making payments</li>
                <li>Delivery options</li>
                <li>Buyer Protection</li>
            </ul>
        </div>
        <div className='mt-4'>
            <ul className='text-[14px] text-[#757575] leading-6'>
                <b className='leading-7 text-[16px] text-[#191919]'>Callaborate with us</b>
                <li>Partnerships</li>
                <li>Affiliate program</li>
                <li>DS Center</li>
                <li>Seller Log In</li>
                <li>Non-chinese Seller Registration</li>
            </ul>
        </div>
        <div className='mt-4' >
            <ul className='text-[14px] text-[#757575] leading-6'>
                <b className='leading-7 text-[16px] text-[#191919]'>Pay with</b>
                <div className='flex gap-8 md:justify-normal justify-around items-center mt-4'>
                <img src={pay} alt="" />
                <img src={eccp} alt="" />
                </div>
               
            </ul>
        </div>
      </div>
      <div className='grid md:grid-cols-[2fr,1fr] md:gap-0 gap-2 mt-12 pb-10 mx-4 md:mx-24'>
       <div>
       <b className='leading-7 text-[16px] text-[#191919]'>Help</b>
       <p className='text-[14px] text-[#757575] leading-6'>Help Center,Dispites & Reports,Buyer Protection,Report IPR infringement,Regulated information, integrity <br />
       Compliance,Transparency Center,Submit report (non-registred users),Recalls</p>
       </div>
       <div>
       <b className='leading-7 text-[16px] text-[#191919]'>Stay connected</b>
        <div className='flex items-center  max-md:justify-evenly md:gap-3 mt-4'>
            <img src={facebook} alt="" />
            <div className='flex gap-2 mr-2'>
            <img src={whatsapp} alt="" />
            <span className='number text-[15px] leading-7  '>0656769534</span>
            </div>
           
        </div>
       </div>
      </div>
    </div>
  )
}

export default Footer
