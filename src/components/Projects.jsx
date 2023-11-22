import React from "react";
import ProjectItem from "./ProjectItem";
import cryptoImg from "../assets/crypto.png";
import ytImg from "../assets/yt.png";
const Projects = () => {
  return (
    <div id="projects" className="max-ww[1040px m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className=" text-center py-8">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
        molestiae quod, quae laboriosam quasi quas reprehenderit doloremque
        voluptatem blanditiis quis ipsam voluptas in ducimus perferendis
        veritatis, reiciendis saepe et laudantium.
      </p>
      <div className=" grid sm:grid-cols-2 gap-12 ">
        <ProjectItem img={cryptoImg} title='Crypto Dashboard'/>
        <ProjectItem img={ytImg} title='Get Yt Subscriber'/>
      </div>
    </div>
  );
};

export default Projects;
