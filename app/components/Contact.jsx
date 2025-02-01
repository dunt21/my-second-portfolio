import Image from "next/image";
import React from "react";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import whatsapp from "../assets/whatsapp.png";
import email from "../assets/mail_icon_dark.png";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="mt-36 mb-16 flex flex-col items-center  gap-5"
    >
      <div className="text-center">
        <h2 className=" text-xl sm:text-4xl font-bold  overflow-y-hidden mb-2 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
          Want to collaborate with me?
        </h2>
        <p className=" text-md sm:text-xl font-semibold ">
          Lets connect on social media app!{" "}
        </p>
      </div>
      <div className="flex gap-4 sm:gap-6">
        <p className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
          Connect:
        </p>
        <a href=" " target="_blank">
          <Image
            alt="mailto:suadmacaulay50@gmail.com"
            src={email}
            className="w-[1.4rem] sm:w-[1.6rem] translate-y-1"
          />
        </a>
        <a href=" " target="_blank">
          <Image
            alt="https://www.linkedin.com/in/suad-macaulay"
            src={linkedin}
            className="w-[1.5rem] sm:w-[1.7rem]"
          />
        </a>
        <a href=" " target="_blank">
          <Image
            alt="https://wa.me/0598399951"
            src={whatsapp}
            className="w-[1.6rem] sm:w-[1.8rem]"
          />
        </a>
        <a href=" " target="_blank">
          <Image
            alt="https://x.com/moreofababe"
            src={x}
            className="w-[1.6rem] sm:w-7"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
