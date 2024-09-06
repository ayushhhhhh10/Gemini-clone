import React from "react";
import Navbar from "./Navbar/Navbar";
import Body from "./Body/Body";
import Sidebar from "../Sidebar/Sidebar";

const Container = () => {
  return (
    <div className="w-full h-screen bg-[#131314] text-white sm:flex font-[Main]">
      <Sidebar />
      <div className="w-full h-screen">
        <Navbar />
        <Body />
      </div>
    </div>
  );
};

export default Container;
