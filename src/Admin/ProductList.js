import React from "react";
import smiley from "../Assets/smileys.jpg";
import { product } from "../data";

const trash = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4">
    <path
      fillRule="evenodd"
      d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
      clipRule="evenodd"
    />
  </svg>
);

const edit = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-4 h-4">
    <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" />
  </svg>
);

function ProductList() {
  const products = product.map((item) => {
    return (
      <div className="flex flex-col w-60 h-72 justify-between outline outline-1 outline-gray-400 rounded ">
        <div className="w-60 overflow-hidden">
          <img src={item.image} className="object-contain" />
        </div>
        <div className="flex flex-col ">
          <p className=" mt-4 ml-3 font-poppins text-gray-500">{item.title}</p>
          <p className="ml-3 font-poppins text-gray- text-lg font-bold  ">
            ${item.price}
          </p>
          <div className="flex mb-4 justify-around">
            <button className="flex w-24 h-8 bg-white rounded-md outline outline-1 outline-gray-300 items-center justify-center gap-1.5 font-poppins font-semibold text-gray-800 hover:bg-gray-300 hover:bg-indigo-600 hover:text-white hover:outline-none duration-100">
              {edit} Edit
            </button>
            <button className="flex w-24 h-8 bg-white rounded-md outline outline-1 outline-gray-300 items-center justify-center gap-1.5 font-poppins font-semibold text-red-600 hover:bg-indigo-600 hover:text-white hover:outline-none duration-100">
              {trash} Delete
            </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="p-16 w-full h-full ">    
      <div>
        <p className="font-poppins text-4xl text-gray-800 font-semibold">
          Product List
        </p>
      </div>
      <div className=" flex flex-col mt-4 bg-white w-full h-2/4 p-6 rounded-xl md:w-auto">
        <div className=" flex flex-col w-full justify-evenly grid md:grid-cols-2 lg:grid-cols-3  overflow-y-scroll">
         {products} 
        </div>
      </div>
    </div>
  );
}

export default ProductList;
