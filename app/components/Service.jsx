import Image from "next/image";
import React from "react";
import ui from "../assets/ui-icon.png";
import graphic from "../assets/graphics-icon.png";
import web from "../assets/web-icon.png";

const Service = () => {
  return (
    <div id="service" className="">
      <div className="my-32 ">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl overflow-y-hidden font-bold text-center bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
          What I do
        </h2>
        <ul className="mt-10 flex flex-col sm:flex-row items-center mx-auto gap-6 w-[80%] lg:w-[60%]">
          <li className="  border-none rounded-xl p-8 w-3/4 h-[15rem] bg-slate-900 hover:bg-slate-800 duration-500  ">
            <Image alt="" src={web} className="w-10 mb-3" />
            <h2 className="text-sm lg:text-[1rem] font-semibold mb-3 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
              Web development
            </h2>
            <p className=" text-[13px] ">
              Building fast and responsive websites.
            </p>
          </li>
          <li className=" border-none rounded-xl p-8 w-3/4 h-[15rem]  bg-slate-900  hover:bg-slate-800 duration-500 ">
            <Image alt="" src={ui} className="w-10 mb-3" />
            <h2 className="text-sm lg:text-[1rem] font-semibold mb-3 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
              UI/UX design
            </h2>
            <p className=" text-[13px]">
              Designing simple and intuitive websites
            </p>
          </li>
          <li className="border-none rounded-xl p-7 w-3/4 h-[15rem] bg-slate-900 hover:bg-slate-800 duration-500  ">
            <Image alt="" src={graphic} className="w-10 mb-3" />
            <h2 className="text-sm lg:text-[1rem] font-semibold mb-3 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
              Graphic design
            </h2>
            <p className=" text-[13px]">Creating visually appealing designs</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Service;
