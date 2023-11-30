import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import img from "../assets/main.png";

const Main = () => {
  return (
    <div id="main">
      <img className=" w-full  h-screen object-cover  " src={img} alt="" />
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
          <a
            
            download=""
            className="flex items-center md:p-2 md:px-4 md:text-base dark:text-dark dark:bg-light bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:dark:bg-dark hover:dark:text-light hover:dark:border-light hover:bg-light hover:text-dark border-2  border-solid border-transparent hover:border-dark  bg-white m-4"
            href="https://drive.google.com/uc?export=download&id=1--P6EiOqUxjz0Flv_YVEePymuFl4QCif"
          >
            Resume{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              className=" h-auto w-6 ml-1"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
