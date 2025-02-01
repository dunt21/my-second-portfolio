"use client";

import Image from "next/image";
import React, { useRef } from "react";
import logo from "../assets/logo3.png";
import close from "../assets/close-white.png";
import menu from "../assets/menu-white.png";

const Navbar = () => {
  const sideMenu = useRef();

  const openMenu = () => {
    sideMenu.current.style.transform = "translateX(-1rem)";
  };

  const closeMenu = () => {
    sideMenu.current.style.transform = "translateX(16rem)";
  };

  return (
    <nav>
      <div className=" hidden sm:flex justify-between bg-opacity-50 backdrop-blur-md bg-[#222222] py-2  px:[5rem] sm:px-20 lg:px-[20rem] fixed top-0 right-0 left-0 z-50">
        <Image src={logo} className=" w-20 md:w-24 " alt="" />
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
      <div className="bg-[#222222] fixed w-full h-[4rem] bg-opacity-50 backdrop-blur-md sm:hidden z-50">
        <Image src={logo} className=" w-20 md:w-24  mt-7 ml-5 fixed " alt="" />
        <button>
          <Image
            onClick={openMenu}
            src={menu}
            className="w-6 mt-3 sm:hidden -right-[1px] mr-3 fixed"
            alt=""
          />
        </button>
      </div>
      <div>
        <ul
          ref={sideMenu}
          className="sm:hidden flex flex-col gap-4 bg-slate-700 z-50 py-12 px-5 fixed rounded-sm h-screen -right-[1rem]  w-[12rem] duration-500"
        >
          <div onClick={closeMenu}>
            <button>
              <Image
                src={close}
                className="w-4 absolute top-5 left-[10rem] "
                alt=""
              />
            </button>
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>{" "}
          <li>
            <a href="#service" onClick={closeMenu}>
              Services
            </a>
          </li>{" "}
          <li>
            <a href="#project" onClick={closeMenu}>
              Projects
            </a>
          </li>{" "}
          <li>
            <a href="#contacts" onClick={closeMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
