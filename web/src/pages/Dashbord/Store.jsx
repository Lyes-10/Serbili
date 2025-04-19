import React from "react";
import MenuDashbord from "../../Components/MenuDashbord";
import {
  Datepicker,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

const Store = () => {
  const orders = [
    {
      productID: "12345",
      product: "Product A",
      avilbility: "100",
      price: "1500",
    },
    {
      productID: "67890",
      product: "Product B",
      avilbility: "25",
      price: "3500",
    },
    {
      productID: "11223",
      product: "Product C",
      avilbility: "75",
      price: "2000",
    },
    {
      productID: "12345",
      product: "Product A",
      avilbility: "100",
      price: "1500",
    },
    {
      productID: "67890",
      product: "Product B",
      avilbility: "25",
      price: "3500",
    },
    {
      productID: "11223",
      product: "Product C",
      avilbility: "75",
      price: "2000",
    },
    {
      productID: "12345",
      product: "Product A",
      avilbility: "100",
      price: "1500",
    },
    {
      productID: "67890",
      product: "Product B",
      avilbility: "25",
      price: "3500",
    },
    {
      productID: "11223",
      product: "Product C",
      avilbility: "75",
      price: "2000",
    },
    {
      productID: "12345",
      product: "Product A",
      avilbility: "100",
      price: "1500",
    },
    {
      productID: "67890",
      product: "Product B",
      avilbility: "25",
      price: "3500",
    },
    {
      productID: "11223",
      product: "Product C",
      avilbility: "75",
      price: "2000",
    },
  ];
  return (
    <div className="grid md:grid-cols-[260px,1fr] grid-cols-[100px,1fr] store">
      <div>
        <MenuDashbord activeItem={"Store Availability"} />
      </div>
      <div className="bg-gray-50 ">
        <div className="bg-white mt-16  lg:mx-3 mx-1 h-screen ">
          <p className="text-[21px] text-[#3B3E45] font-semibold ml-3 py-2">
            My Store
          </p>
          <div className="ml-4 mt-2 mb-2 date">
            <Datepicker className="w-fit " />
          </div>
          <div>
            <Table hoverable>
              <TableHead className="border-b-2  border-gray-100">
                <TableHeadCell className="bg-white  text-nowrap">
                  Product Id
                </TableHeadCell>
                <TableHeadCell className="bg-white  ">product</TableHeadCell>
                <TableHeadCell className="bg-white  ">
                  avilbility in stock
                </TableHeadCell>
                <TableHeadCell className="bg-white ">Price</TableHeadCell>
              </TableHead>
              <TableBody className="divide-y ">
                {orders.map((order) => (
                  <TableRow>
                    <TableCell className="">{order.productID}</TableCell>
                    <TableCell className="">{order.product}</TableCell>
                    <TableCell className="px-16">{order.avilbility}</TableCell>
                    <TableCell>
                      {order.price} <span>DZ</span>{" "}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
