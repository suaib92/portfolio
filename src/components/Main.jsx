import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Main = () => {
  return (
    <div id="main">
      <img className=" w-full  h-screen object-cover  " src="/88.png" alt="" />
      <div className=" w-full h-screen absolute top-0 left-0 ">
        <div className="max-w-[700px] m-auto h-full flex flex-col justify-center le:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold  text-white">
            I'm Mohd Suaib Warsi
          </h1>
          <h2 className=" flex sm:text-3xl text-2xl pt-4 text-white">
            I'm a
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Gamer",
                2000,
                "Freelancer",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className=" flex justify-between pt-6 w-full max-w-[200px]">
            <a
              href="https://x.com/SuaibWarsi3?t=gusdp-MNrKfH_obDqq000g&s=09"
              target="_blank"
            >
              <FaTwitter
                className=" cursor-pointer bg-white rounded-md"
                size={20}
              />
            </a>
            <a
              href="https://www.facebook.com/suaib.warsi.100?mibextid=ZbWKwL"
              target="_blank"
            >
              <FaFacebookF
                className="cursor-pointer  bg-white rounded-md"
                size={20}
              />
            </a>
            <a href="https://www.instagram.com/its_warsi0/" target="_blank">
              <FaInstagram
                className="cursor-pointer  bg-white rounded-md"
                size={20}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-suaib-warsi/"
              target="_blank"
            >
              <FaLinkedinIn
                className="cursor-pointer  bg-white rounded-md"
                size={20}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
