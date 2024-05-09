import React from "react";

function Card() {
  return (
    <div className=" w-96 flex flex-col ">
      <div className="overflow-hidden size-96 rounded-lg">
        <img
          className=" object-cover"
          src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTvgFQ-HZsmKEqd2DgwnHjC_1Pzu_spSnhE4wBKPW7ZMEWLz4wp"
          alt=""
        />
      </div>
      <div className="mt-5">
        <p className="text-xl text-gray-700 font-medium font-poppins ml-2">
          Social media pop-up
        </p>
        <p className="text-lg text-gray-500 font-regular font-poppins italic ml-2">
          animation
        </p>
        <p className="text-lg text-gray-700 font-semibold font-poppins ml-2 mt-2">$10.00</p>
      </div>
    </div>
  );
}

export default Card;
