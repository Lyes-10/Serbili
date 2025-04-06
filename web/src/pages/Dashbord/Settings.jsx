import React from 'react'
import MenuDashbord from '../../Components/MenuDashbord'
import pinfo from "../../assets/icons/Pinfo.svg"
import lands from "../../assets/icons/Loginandsec.svg"
import pay from "../../assets/icons/pay.svg"
import tax from "../../assets/icons/tax.svg"
import notification from "../../assets/icons/nofification.svg"
import privacy from "../../assets/icons/eye.svg"
import global from "../../assets/icons/prefrences.svg"
import { Link, useNavigate } from 'react-router-dom'
const Settings = () => {
  const navigate =useNavigate()
  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr] '>
      <div><MenuDashbord activeItem={"Settings"} />
      </div>
      <div className='container  bg-gray-50'>
      <div className='mt-6'>
        <p className='text-[32px] font-semibold font-sans ml-[2px]'>Account</p>
        <p className='text-[18px] font-semibold font-sans'>User, <button className='underline' onClick={()=> navigate("/dashboard/userinformation") } >Go to profile</button></p>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 md:mt-24 mt-8 max-md:mb-6'>
      <Link to="/dashboard/userinformation">
      <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-4 rounded-lg shadow-lg '>
        <div>
        <img src={pinfo} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Personal info</p>
        <p className='font-sans text-[#717171] text-[14px]'>Provide personal details and how we can <br className="lg:block hidden"/> rach you</p>
       </div>
       </div>
      </Link>
       <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-6 rounded-lg shadow-lg '>
        <div>
        <img src={lands} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Login & security</p>
        <p className='font-sans text-[#717171] text-[14px]'>Update your password and secure your <br className="lg:block hidden"/>account</p>
       </div>
       </div>
       <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-6 rounded-lg shadow-lg '>
        <div>
        <img src={pay} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Payments & payouts</p>
        <p className='font-sans text-[#717171] text-[14px]'>Review payments,payouts,coupond,and gift<br className="lg:block hidden"/>cards</p>
       </div>
       </div>
       <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-6 rounded-lg shadow-lg '>
        <div>
        <img src={tax} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Taxes</p>
        <p className='font-sans text-[#717171] text-[14px]'>Manage taxpayer information and tax<br className="lg:block hidden"/>documents</p>
       </div>
       </div>
       <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-6 rounded-lg shadow-lg '>
        <div>
        <img src={notification} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Notifications</p>
        <p className='font-sans text-[#717171] text-[14px]'>Choose notification preferences and how you<br className="lg:block hidden"/>want to be contacted</p>
       </div>
       </div>
       <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-6 rounded-lg shadow-lg '>
        <div>
        <img src={privacy} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Privacy & sharing</p>
        <p className='font-sans text-[#717171] text-[14px]'>Manage your personal data,connected <br className="lg:block hidden"/>services,and data sharing settings</p>
       </div>
       </div>
       <div className='bg-[#ffffff] flex flex-col px-4 gap-4 py-6 rounded-lg shadow-lg '>
        <div>
        <img src={global} alt=""  />
        </div>
       <div className='flex flex-col'>
        <p className='font-sans font-semibold text-[16px] text-[#222222]'>Global preferences</p>
        <p className='font-sans text-[#717171] text-[14px]'>Set your default language,currency,and<br className="lg:block hidden"/>timezone</p>
       </div>
       </div>
      </div>
      </div>
    
    </div>
  )
}

export default Settings
