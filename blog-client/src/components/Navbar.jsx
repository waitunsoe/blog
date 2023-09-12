import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ProgressIndicator from "./ProgressIndicator";

const Navbar = () => {
  const location = useLocation();
  const isBlogDetailPage = location.pathname.startsWith("/blog/");

  return (
    <nav className="bg-gray-800 border-b border-gray-600 mb-5 sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="text-white">
            <Link to={"/"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-newspaper"
                viewBox="0 0 16 16"
              >
                <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
              </svg>
            </Link>
          </div>

          <div className=" cursor-pointer bg-gray-700 p-1 rounded-full hidden">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="block">
            <Link
              to={"/login"}
              className="text-gray-800 dark:text-white focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="text-white   focus:ring-4  font-medium rounded-lg text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {isBlogDetailPage && <ProgressIndicator />}
    </nav>
  );
};

export default Navbar;
