import React from "react";

import Category from "../AdminComponents/Category/Category";
import FileUpload from "../../Components/Fileupload/FileUpload";

function AddProduct() {
  return (
    <div className="container p-16 ">
      <div>
        <p className=" font-poppins text-4xl text-gray-800 font-semibold">
          Add Product
        </p>
      </div>
      <div className="mt-4 bg-white w-full h-full p-6 rounded-xl">
        <div>
          <p className=" font-poppins font-semibold text-gray-500">Title</p>
          <input
            className="border w-full h-10 rounded-md indent-3 text-gray-600 font-medium focus:outline-none ring-inset ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
            type="text"
          />
        </div>
        <div className="mt-4">
          <p className=" font-poppins font-semibold text-gray-500">
            Description
          </p>
          <textarea
            className="border w-full rounded-md resize-none text-gray-600 font-medium indent-3 pt-2 focus:outline-none ring-inset ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500"
            cols="30"
            rows="5"></textarea>
        </div>
        <div className="flex flex-col lg:flex-row md:flex-col sm:flex-col w-full mt-4">
          <div className=" w-48 mr-4">
            <p className=" font-poppins font-semibold text-gray-500">Price</p>
            <input
              className=" mt-2 w-32 h-9 border rounded-md text-gray-600 text-center font-medium focus:outline-none ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-500  "
              placeholder="$4.99"
              type="text"
            />
          </div>
          <div className="w-48">
            <div>
              <p className="font-poppins font-semibold text-gray-500">
                Category
              </p>
              <Category />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <FileUpload />
        </div>
        <div className="flex justify-end">
          <button className="w-32 h-12 rounded-xl  font-medium text-white bg-purple-600 hover:bg-purple-800">
            + Submit Item
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
