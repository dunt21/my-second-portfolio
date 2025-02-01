import Image from "next/image";
import React from "react";
import myImage from "../assets/user-image.png";
import lang from "../assets/Logos.png";
import vscode from "../assets/vscode.png";
import vercel from "../assets/vercel.png";
import netlify from "../assets/netlify.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";

const About = () => {
  return (
    <div id="about">
      <div className="mt-32 text-center ">
        <h2 className="mb-12 text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text overflow-y-hidden">
          About me
        </h2>
        <div className="flex flex-col lg:flex-row  items-center lg:justify-center lg:gap-40 lg:items-start gap-5">
          <Image src={myImage} className="rounded-xl w-52 lg:w-64" alt="" />
          <div>
            <p className="text-[13px] w-[21rem] mx-auto sm:mx-0 sm:text-[14px] sm:w-[30rem] lg:text-[16px] lg:w-[40rem] lg:text-left">
              I am an aspiring frontend developer, learning the necessary tech
              stack i need to succeed in my field. I have worked on few projects
              that helped me to reinforce what i've learnt as well as improve
              upon my skills. I'm willing to work and collaborate with people to
              learn and grow.
            </p>
            <div className="mt-10 lg:text-left">
              <p className="mb-5 font-bold text-lg lg:text-xl bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
                Experience with
              </p>
              <a className="flex lg:justify-start justify-center ">
                <Image src={lang} className="w-72 sm:w-80" />
              </a>
            </div>
            <div className=" mt-7 ">
              <p className=" font-bold text-lg lg:text-xl lg:text-left bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
                Tools I use
              </p>
              <div className=" flex gap-7 sm:gap-10 lg:justify-start justify-center overflow-y-visible ">
                <a href="https://code.visualstudio.com/" target="_blank">
                  <Image
                    alt=""
                    src={vscode}
                    className="w-9 sm:w-10  mt-4 duration-500  bg-white rounded-xl  border p-2  hover:bg-slate-200 hover:shadow-shadowWhite hover:-translate-y-1"
                  />
                </a>
                <a href="https://www.figma.com/" target="_blank">
                  <Image
                    alt=""
                    src={figma}
                    className="w-9 sm:w-10 duration-500 mt-4 bg-white rounded-xl border p-2  hover:bg-slate-200 hover:shadow-shadowWhite hover:-translate-y-1"
                  />
                </a>
                <a href="https://vercel.com/" target="_blank">
                  <Image
                    alt=""
                    src={vercel}
                    className="w-[38px] sm:w-[40px] duration-500 mt-4 border rounded-xl bg-white r p-2  hover:bg-slate-200 hover:shadow-shadowWhite hover:-translate-y-1"
                  />
                </a>
                <a href="https://www.netlify.com/" target="_blank">
                  <Image
                    alt=""
                    src={netlify}
                    className="w-[38px] sm:w-[40px] duration-500 mt-4 bg-white rounded-xl border p-2  hover:bg-slate-200 hover:shadow-shadowWhite hover:-translate-y-1"
                  />
                </a>
                <a href="https://github.com/" target="_blank">
                  <Image
                    alt=""
                    src={github}
                    className="w-[40px] sm:w-[42px] duration-500 mt-4 bg-white rounded-xl border p-2 hover:bg-slate-200 hover:shadow-shadowWhite hover:-translate-y-1"
                  />
                </a>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
