import React from "react";
import Navbar from "../../components/Navbar";
import Home from "../Home.jsx";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";

const Layout = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Navbar />
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
