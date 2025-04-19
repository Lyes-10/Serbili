import React, { useState } from 'react'
import MenuDashbord from '../../Components/MenuDashbord'
import Statistiques from '../../Components/Statistiques';

const Orders = () => {
  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr] '>
    <div><MenuDashbord activeItem={"Orders"}  />
    </div>
    <div className='bg-gray-50 p-4'>
    <Statistiques/>
    </div>
  
  </div>
  )
}

export default Orders
