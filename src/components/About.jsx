import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import img from "../assets/655.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const imgVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 0.5, duration: 0.8, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1, duration: 1, ease: "easeInOut" },
    },
  };

  const servicesData = [
    { name: "HTML5", percentage: 90 },
    { name: "CSS3", percentage: 80 },
    { name: "JavaScript", percentage: 75 },
    { name: "React", percentage: 70 },
    { name: "MongoDB", percentage: 70 },
    { name: "SQL", percentage: 60 },
  ];

  const [animatedServicesData, setAnimatedServicesData] =
    useState(servicesData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedServicesData((prevData) =>
        prevData.map((service) => {
          const newPercentage = (service.percentage + 5) % 100;
          const updatedPercentage = Math.min(newPercentage, service.percentage);
          if (updatedPercentage >= service.percentage) {
            clearInterval(intervalId);
          }
          return {
            ...service,
            percentage: updatedPercentage,
          };
        })
      );
    }, 300);

    if (animatedServicesData[0].percentage >= servicesData[0].percentage) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [animatedServicesData, servicesData]);

  return (
    <div id="about" className="container mx-auto py-24">
      <h1 className="text-lg md:text-6xl sm:text-4xl font-bold text-center mb-7  to-black">
        Hello, I'm Mohd Suaib Warsi
      </h1>
      <motion.div
        className="lg:grid grid-cols-1 lg:grid-cols-2  items-center m-auto md:pl-20 p-4 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img
          src={img}
          alt="su"
          className=" border-2 p-1  sm:w-2/3 lg:w-[60%] border-blue-500 rounded-full img_glow relative sm:left-32 "
          variants={imgVariants}
        />

        <motion.div className="text-white" variants={textVariants}>
          <p className="text-lg md:text-xl text-justify   mb-6 mr-4 ml-4 ">
            Hey there! I'm an enthusiastic full-stack web developer with a
            passion for crafting exceptional digital experiences. With a year of
            hands-on experience, I specialize in creating dynamic front-end
            interfaces using React, alongside proficiency in HTML, CSS, and
            JavaScript.
          </p>

          <p className="text-lg md:text-xl text-justify  mb-6 mr-4 ml-4">
            On the server-side, I'm well-versed in Node.js and Express.js, and I
            have expertise in both SQL and NoSQL databases. Git is my ally for
            version control, ensuring clean and collaborative coding practices.
            I love deploying applications, whether on traditional servers or
            cloud platforms like AWS.
          </p>

          <p className="text-lg md:text-xl text-justify   mb-6 mr-4 ml-4">
            Eager to learn and adapt in the ever-evolving web development
            landscape, I'm driven by a passion to transform ideas into seamless
            digital solutions. Let's connect and craft something amazing
            together! 🚀
          </p>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b ml-20 mr-20">
  <h1 className="text-4xl md:text-5xl font-bold mb-6 md:mb-10 uppercase text-black text-center lg:justify-start">
    Our Services
  </h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
    {animatedServicesData.map((service) => (
      <div
        key={service.name}
        className="bg-gray-900 p-8 rounded-md text-center shadow-lg hover:shadow-xl transition duration-300"
      >
        <p className="text-3xl font-semibold text-white mb-4">
          <span role="img" aria-label="Service Icon">
            {service.name === "HTML5" && (
              <span style={{ color: "orange" }}>&#60;&#47;&#62;</span>
            )}
            {service.name === "CSS3" && "🎨"}
            {service.name === "JavaScript" && "🚀"}
            {service.name === "React" && "⚛️"}
            {service.name === "MongoDB" && "🍃"}
            {service.name === "SQL" && "📊"}
          </span>
          {service.name}
        </p>
        <div className="text-fuchsia-300 text-lg mb-4">{`${service.percentage}% proficiency`}</div>
        <div className="relative w-full bg-fuchsia-400 h-3 rounded">
          <div
            className="absolute left-0 top-0 h-full bg-fuchsia-600 rounded"
            style={{ width: `${service.percentage}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
};

export default About;
