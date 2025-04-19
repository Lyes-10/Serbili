import React, {useState} from 'react';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { FaStar } from "react-icons/fa";



function Product(props) {
      const[sidebarToggle,setSidebarToggle]=useState(true);
      const [products, setProducts] = useState([
            {
            id: 25,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 23,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 20,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 11,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 12,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 13,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
            {
            id: 1,
            stock: 10,
            name: 'Product 1',
            price: 29.99,
            image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
            quantity: 1,
            color: 'Red',
            size: 'M',
            orders: 2,
            seller: 'Seller 1',
            rating: 4.5,
          },
          ]);
      const [product, setProduct]= useState({
        id: 1,
        stock: 1000,
        name: 'Product 1',
        price: 29.99,
        image: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
        quantity: 1,
        orders: 2,
        seller: 'Seller 1',
        rating: 4.5,
        solds: 1234,
        description: 'This is a great product that you will love it contains everything you need to be happy and satisfied with your life. We have a variety of size and colors to choose from.',
      })
      const similarProducts = products.filter((item)=> item.id !== product.id && item.stock >= 10 && item.seller === product.seller);

      const [quantity, setQuantity] = useState(10);

    return (
        <div>
            <Sidebar sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
            />
            <Navbar 
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />

            <div className="container">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10'>
                    <div className='col-span-1 '>
                        <div className='max-w-[500px] max-h-[450px] border-[2px] border-black rounded-lg overflow-hidden '>
                            <img src={product.image} alt={product.name} className='w-full h-full object-cover object-center' />
                        </div>
                        
                    </div>

                    <div className='col-span-1 '>
                        <h3 className='font-semibold text-xl mb-3' >{product.name}</h3>
                        <div className='flex items-center justify-between mb-3'>
                            <h3 className='font-semibold text-lg'>{product.price} DZD</h3>
                            <div className='flex items-center gap-5'>
                                <p className='text-sm text-gray-700'>{product.solds} solds</p>
                                <span className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    {product.rating}
                                </span>
                            </div>
                        </div>
                        <div>
                            {/* description */}

                            <div>
                                <h3 className='text-lg font-medium'>Description</h3>
                                <p className='text-gray-700 max-w-[80%] text-sm mt-2 mb-3'>{product.description}</p>
                            </div>

                            <div className='flex items-center gap-10 mb-6'>
                                <h3 className='font-medium'>Seller:</h3>
                                <p>{product.seller}</p>
                            </div>

                            <div>
                                <h3 className='font-medium'>Stock: <span className='font-normal'>{product.stock} item(s)</span></h3>
                                <p className='text-xs text-gray-700 mt-4'>You can't Buy under 10 Items</p>
                                <div className='mt-4 flex items-center'>
                                    <button className='bg-gray-100 w-5 h-5 flex items-center justify-center' onClick={()=> quantity === 10 ? setQuantity(10) : setQuantity(quantity - 1) }>-</button>
                                    <button className='px-3'>{quantity}</button>
                                    <button className='bg-gray-100 w-5 h-5 flex items-center justify-center' onClick={()=> quantity === product.stock ? setQuantity(product.stock) : setQuantity(quantity + 1) }>+</button>
                                </div>
                                <button className='text-white py-2 px-4 bg-[#FF6F00] text-sm mt-8 '>Add To Cart</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* similar products */}
                <div className='mt-10 mb-10'>
                    <h3 className='text-lg font-semibold'>Similar Products</h3>
                    <div className='flex items-center gap-8 mt-4'>
                        {similarProducts.slice(0, 5).map((item, index)=>(
                            <div key={index} className='rounded-lg border-[1px] border-gray-300 flex-1 p-2 '>
                                <div className='flex justify-center'  >
                                    <img src={item.image} alt="" className='h-32 w-32 object-contain' />
                                </div>
                                <h3 className='mt-2 font-medium'>{item.name}</h3>
                                <h3 className='my-1 font-medium'>{item.price} DZD</h3>
                                <h3 className='text-[#FF6F00]'>{item.stock}Left</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>



        </div>
    );
}

export default Product;