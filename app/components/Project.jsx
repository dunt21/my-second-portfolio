import React from "react";
import profileLinks from "../assets/work-1.png";
import guessGame from "../assets/guess_game.png";
import pigGame from "../assets/pig_game.png";
import landingPage from "../assets/landing_page.jpg";
import send from "../assets/send-icon.png";
import Image from "next/image";

const Project = () => {
  return (
    <div id="project">
      <div className=" mt-20 mb-10 w-3/4 mx-auto">
        <div className="">
          <h2 className="mb-10 text-3xl sm:text-4xl lg:text-5xl overflow-y-hidden text-center bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
            Projects i Built
          </h2>
          <ul className="grid grid-cols-auto gap-4 place-items-center ">
            <li>
              <Image src={profileLinks} className="w-[17rem] h-44" alt="" />
              <div className="bg-slate-900 hover:bg-slate-800 py-2 px-5 rounded-xl mt-2 flex gap-10 items-center w-[17rem]">
                <a
                  href="https://social-links-profile-main-six-xi.vercel.app/"
                  target="_blank"
                >
                  <p className="font-semi-bold   bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
                    Social links profile
                  </p>
                  <p className="text-sm">Web design</p>
                </a>
                <a
                  href="https://social-links-profile-main-six-xi.vercel.app/"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={send}
                    className="bg-white w-8 p-2 aspect-square rounded-xl hover:bg-gray-200"
                  />
                </a>
              </div>
            </li>
            <li>
              <Image src={guessGame} className="w-[17rem] rounded-xl" alt="" />
              <div className="bg-slate-900  w-[17rem] hover:bg-slate-800 py-2 px-5 rounded-xl mt-2 flex gap-24 items-center">
                <a href="https://guess-game-by-suad.netlify.app/" className="">
                  <p className="font-semi-bold   bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
                    Guess game
                  </p>
                  <p className="text-sm">Web design</p>
                </a>
                <a
                  href="https://guess-game-by-suad.netlify.app/"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={send}
                    className="bg-white w-8 p-2 aspect-square rounded-xl hover:bg-gray-200"
                  />
                </a>
              </div>
            </li>
            <li>
              <Image src={pigGame} className="w-[17rem] rounded-xl" alt="" />
              <div className="bg-slate-900 w-[17rem] hover:bg-slate-800 py-2 px-5 rounded-xl mt-2 flex gap-28 items-center">
                <a href="" target="_blank">
                  <p className="font-semi-bold   bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
                    Pig game
                  </p>
                  <p className="text-sm">Web design</p>
                </a>
                <a href="https://pig-game-by-suad.netlify.app/" target="_blank">
                  <Image
                    alt="https://pig-game-by-suad.netlify.app/"
                    src={send}
                    className="bg-white w-8 p-2 aspect-square rounded-xl  hover:bg-gray-200"
                  />
                </a>
              </div>
            </li>
            <li>
              <Image
                src={landingPage}
                className="w-[17rem] rounded-xl"
                alt=""
              />
              <div className="bg-slate-900 w-[17rem] hover:bg-slate-800 py-2 px-5 rounded-xl mt-2 flex gap-7 items-center">
                <a
                  href="https://huddle-landing-page-by-suad.netlify.app/"
                  target="_blank"
                >
                  <p className="font-semi-bold   bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
                    Huddle landing page
                  </p>
                  <p className="text-sm">UI/UX</p>
                </a>
                <a
                  href="https://huddle-landing-page-by-suad.netlify.app/"
                  target="_blank"
                >
                  <Image
                    alt=""
                    src={send}
                    className="bg-white w-8 p-2 aspect-square rounded-xl hover:bg-gray-200"
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
