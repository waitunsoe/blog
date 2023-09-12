import React from "react";
import { Link } from "react-router-dom";

const Category = ({ name }) => {
  return (
    <div className="block border focus:ring-4 focus:outline-none  font-medium rounded-lg px-5 py-2.5 text-center  focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 ">
      <Link to={"/"}>{name}</Link>
    </div>
  );
};

export default Category;
