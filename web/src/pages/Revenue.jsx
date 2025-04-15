import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
const Revenue = () => {
    const[sidebarToggle,setSidebarToggle]=useState(true)
  return (
    <div >
    <Sidebar sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
        />
    <Navbar 
      sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle} />
    </div>
  )
}

export default Revenue
