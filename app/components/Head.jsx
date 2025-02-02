import Image from "next/image";
import React from "react";
import profileImg from "../assets/profile-img.png";
import hand from "../assets/hand-icon.png";

const Head = () => {
  return (
    <div className="">
      <div className=" flex flex-col items-center mx-auto mt-20 text-center gap-2">
        <Image src={profileImg} className="rounded-full w-32" alt="" />
        <p className="  text-[1rem] w-[20rem]  sm:w-full justify-center sm:text-2xl flex sm:gap-2 font-semibold lg:text-2xl">
          Hey There! I go by the name Suad Macaulay
          <Image
            src={hand}
            className=" w-7 h-[28px] -translate-x-2 sm:translate-x-0 sm:h-auto sm:w-7 "
          />
        </p>
        <h2 className="text-2xl sm:text-[2rem] sm:w-[40rem] mt-2 overflow-y-hidden lg:text-5xl lg:w-[58rem]">
          A frontend Developer and Blockchain enthusiast
        </h2>
        <p className=" text-[13px] w-[20rem] sm:text-[15px] sm:w-[38rem] mt-3 lg:text-[16px] lg:w-[45rem]">
          I am an IT student with a strong interest in frontend development and
          the blockchain field. I am focused on building user-friendly,
          responsive websites and am actively exploring blockchain technologies.
          My goal is to contribute positively to the ecosystem by developing
          innovative solutions and improving the user experience.
        </p>
        <div className="flex flex-col gap-5 sm:flex-row sm:gap-20 mt-10 font-bold">
          <a
            href="#contacts"
            className="border rounded-3xl py-3 px-6 bg-white text-black hover:text-[#f08847] duration-500"
          >
            Let's connect
          </a>
          <a
            href="/Suad's-Resume.pdf"
            className="border rounded-3xl py-3 px-8 hover:text-[#ffbc92] duration-500"
            download
          >
            My resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Head;
