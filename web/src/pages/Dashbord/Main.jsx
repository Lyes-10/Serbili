import React from 'react'
import MenuDashbord from '../../Components/MenuDashbord'

const Main = () => {
    
  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr]'>
      <div><MenuDashbord activeItem={"Dashboard"}/></div>
      <div></div>
    </div>
  )
}

export default Main
