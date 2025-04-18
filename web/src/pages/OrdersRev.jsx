import React, { useState } from 'react'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
import SidebarRev from '../Components/SidebarRev'

const OrdersRev = () => {
     const[sidebarToggle,setSidebarToggle]=useState(true)
  return (
    <div >
    <Sidebar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    <Navbar 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle} />
      <div className='grid grid-cols-[260px,1fr] gap-6 mx-10'>
       <SidebarRev active={"My Orders"}/>
       <div>
        
       </div>
      </div>
    </div>
  )
}

export default OrdersRev
