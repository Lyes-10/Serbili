import React from 'react'
import MenuDashbord from '../../Components/MenuDashbord'
import { Datepicker,Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow ,Badge} from "flowbite-react";

const Store = () => {
  const orders = [
    { customerID: "12345", customer: "John Doe", product: "Product A", status: "Confirmed", price: "$100" },
  { customerID: "67890", customer: "Jane Smith", product: "Product B", status: "Waiting", price: "$200" },
  { customerID: "11223", customer: "Bob Johnson", product: "Product C", status: "Cancelled", price: "$300" },
   
  ];
  return (
    <div className='grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr] store'>
    <div><MenuDashbord activeItem={"Store Availability"} />
    </div>
    <div className='bg-gray-50 '>
      <div className='bg-white mt-16  lg:mx-3 mx-1 h-screen '>
      <p className='text-[21px] text-[#3B3E45] font-semibold ml-3 py-2'>My Store</p>
      <div className='ml-4 mt-2 mb-16 date'>
      <Datepicker className='w-fit ' />
      </div>
      <div>
      <Table hoverable  >
        <TableHead className='border-b-2  border-gray-100'>
          <TableHeadCell className='bg-white  text-nowrap'>costumer Id</TableHeadCell>
          <TableHeadCell className='bg-white  '>Costumer</TableHeadCell>
          <TableHeadCell className='bg-white  '>product</TableHeadCell>
          <TableHeadCell className='bg-white  '>status</TableHeadCell>
          <TableHeadCell className='bg-white '>Price</TableHeadCell>
        </TableHead>
        <TableBody className="divide-y ">
          {orders.map((order,index)=> (
            <TableRow >
              <TableCell className='max-lg:w-0 '>{order.customerID}</TableCell>
              <TableCell className='max-lg:w-0'>{order.customer}</TableCell>
              <TableCell className='max-lg:w-0'>{order.product}</TableCell>
              <TableCell className='max-lg:w-0'><Badge  className={`w-fit ${
      order.status === "Confirmed"
        ? "bg-green-100 text-green-600"
        : order.status === "Waiting"
        ? "bg-yellow-100 text-yellow-600"
        : order.status === "Cancelled"
        ? "bg-red-100 text-red-600"
        : "bg-gray-100 text-gray-600"
    }`} >{order.status}</Badge></TableCell>
              <TableCell>{order.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
      </div>
    </div>
  </div>
  )
}

export default Store
