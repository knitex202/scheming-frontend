
import React from 'react'
import Dropdown from '../Components/Dropdown/Dropdown'
import AddProduct from './AddProduct/AddProduct'
function Admin() {
  return (
    <div className='grid grid-cols-6 gap-0 bg-zinc-200' >
        <div className='bg-white col-span-1 text-center h-screen'>
          <div>
            <p className='mt-4 text-3xl font-poppins font-bold text-blue-500' >Admin</p>
            <p className='font-poppins font-semibold text-gray-500 relative bottom-2' >ecommerce</p>
            <hr className='border-1 border-gray-300' />
          </div>
            <Dropdown title='Product' items={[{name: "Add Product", link: "/addproduct"},{name: "Product List", link: "/productlist"},{name: "Categories", link: "/categories"}]}/>
            <p className='ml-2 font-semibold text-cyan-600 font-poppins text-left hover:text-cyan-400' ><a href="/">Offers</a></p>
        </div>
        <div className='col-span-5 bg-blue-4700' >
        <AddProduct/>
        </div>
    </div>
  )
}

export default Admin