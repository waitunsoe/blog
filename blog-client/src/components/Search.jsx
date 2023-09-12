import React from "react";

const Search = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-fit p-2 pl-10 text-sm text-white border  rounded-lg bg-gray-700 border-gray-600 placeholder-gray-400 outline-none  focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
};

export default Search;
