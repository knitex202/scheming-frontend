import React from "react";
import { product } from "../data";

function Card() {

  const card = product.slice(0,11).map((item, index)=>{
    return(
    <div className=" w-64 flex flex-col bg-white rounded-2xl overflow-hidden" key={index} >
      <div className="overflow-hidden size-64">
        <img
          className=" object-cover"
          src={item.image}
          alt=""
        />
      </div>
      <div className="mt-5">
        <p className="text-xl text-gray-700 font-medium font-poppins ml-2">
          {item.title}
        </p>
        <p className="text-lg text-gray-500 font-regular font-poppins italic ml-2">
          {item.category}
        </p>
        <div className="flex w-full mt-2 mb-4 items-center justify-between">
        <p className="ml-2 text-2xl text-gray-700 font-semibold font-poppins">${item.price}</p>
        <button className=" mr-4 w-24 h-10 text-white font-semibold bg-red-600 rounded-lg hover:bg-red-800">Add to Cart</button>
        </div>
      </div>
    </div>
  )})

  return (
    <>
        {card}
    </>
    
  );
}

export default Card;
