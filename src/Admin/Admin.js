
import React from 'react'
import Dropdown from '../Components/Dropdown/Dropdown'
import AddProduct from './AddProduct/AddProduct'
import ProductList from './ProductList'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
function Admin() {
  return (
    <div className='w-screen h-screen overflow-hidden grid grid-cols-6 gap-0 bg-zinc-200' >
        <div className='bg-white col-span-1 text-center h-full'>
          <div>
            <p className='mt-4 sm:text-xl md:text-3xl lg:text-3xl font-poppins font-bold text-blue-500' >Admin</p>
            <p className=' text-xs sm:text-sm md-base lg:text-base font-poppins font-semibold text-gray-500 relative bottom-2'>ecommerce</p>
            <hr className='border-1 border-gray-300' />
          </div>
            <Dropdown title='Product' items={[{name: "Add Product", link: "/admin/addproduct"},{name: "Product List", link: "/admin/productlist"},{name: "Categories", link: "/admin/categories"}]}/>
            <p className='ml-2 font-semibold text-cyan-600 font-poppins text-left hover:text-cyan-400' ><a href="/">Offers</a></p>
        </div>
        <div className='col-span-5 bg-blue-4700' >
          <Routes>
            <Route path="addproduct" element={<AddProduct/>} />
            <Route path="productlist" element={<ProductList/>} />
          </Routes>
        </div>
    </div>
  )
}

export default Admin