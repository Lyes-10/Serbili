import React from 'react';
import account from "../assets/icons/account.svg";
import orders from "../assets/icons/orders.svg";
import notifaction from "../assets/icons/notification-bing.svg";
import logout from "../assets/icons/logout.svg";
import accountactive from "../assets/icons/accountactive.svg";
import ordersactive from "../assets/icons/Ordersactive.svg";
import notficationactive from '../assets/icons/notification-bing-svgrepo-com (1).svg';
import settings from "../assets/icons/setting-2.svg";
import help from "../assets/icons/info-circle.svg";
import { Avatar } from 'flowbite-react';
import { Link, useNavigate } from 'react-router-dom';

const SidebarRev = ({ active }) => {
    const sidebar_items = [
        { name: "Account", icon: accountactive, iconactive: account, href: "/revenue" },
        { name: "My Orders", icon: orders, iconactive: ordersactive, href: "/revenue/orders" },
        { name: "Notification", icon: notifaction, iconactive: notficationactive, href: "/revenue/notificatiion" },
    ];

    const navigate = useNavigate();

    return (
        <div className='bg-gray-50 h-fit mt-10 rounded-xl'>
            <div className='flex items-center mx-4 gap-4 mt-2 mb-8'>
                <Avatar size='md' rounded />
                <p className='text-[15px] font-medium'>Abd el aziz</p>
            </div>
            {sidebar_items.map((item) => (
                <Link key={item.href} to={item.href}>
                    <div className="mt-4 flex items-center text-nowrap">
                        <button className={`mx-3 flex gap-3 px-2 py-1 rounded-xl`}>
                            <img 
                              src={active === item.name ? item.iconactive : item.icon} 
                              alt={item.name} 
                              style={{ width: '24px', height: '24px' }} 
                            />
                            <div className="flex flex-col">
                                <p className={`block text-[15px] ${active === item.name ? 'text-orange-500' : 'text-[#9C939D]'}`}>
                                    {item.name}
                                </p>
                            </div>
                        </button>
                    </div>
                </Link>
            ))}
            <span className='h-[1px] bg-[#ccc] block mx-6 w-[80%] mt-16'></span>
            <div className='flex gap-3 mx-5 items-center mt-16'>
                <img src={settings} alt="" style={{ width: '24px', height: '24px' }} />
                <p className='text-[15px] text-[#9C939D]'>Settings</p>
            </div>
            <div className='flex gap-3 mx-5 items-center mt-4'>
                <img src={help} alt="" style={{ width: '24px', height: '24px' }} />
                <p className='text-[15px] text-[#9C939D]'>Help</p>
            </div>
            <button className='flex gap-3 border border-gray-300 rounded-lg py-2 px-6 mx-4 mt-32 mb-6' onClick={() => navigate("/login")}>
                <img src={logout} alt="" style={{ width: '24px', height: '24px' }} />
                <p className='text-[14px] font-medium'>Logout</p>
            </button>
        </div>
    );
};

export default SidebarRev;
