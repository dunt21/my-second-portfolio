import Image from "next/image";
import React from "react";
import logo from "../assets/logo3.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-[#222222] py-2  px:[5rem] sm:px-20 lg:px-[20rem] fixed top-0 right-0 left-0 z-50">
        <Image src={logo} className=" w-20 md:w-24" alt="" />
        <div className="flex sm:gap-5 text-xs lg:text-sm lg:gap-12 items-center gap-2">
          <a href="#top" className="hover:text-[#ffbc92] duration-500">
            Home
          </a>
          <a href="#about" className="hover:text-[#ffbc92] duration-500 ">
            About
          </a>
          <a href="#service" className="hover:text-[#ffbc92] duration-500">
            Services
          </a>
          <a href="#project" className="hover:text-[#ffbc92] duration-500">
            Projects
          </a>
          <a href="#contacts" className="hover:text-[#ffbc92] duration-500">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
