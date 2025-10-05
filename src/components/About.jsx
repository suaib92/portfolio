import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  Server,
  Database,
  Cpu,
  Globe,
  GitBranch,
  Brush,
  Layers,
} from "lucide-react";
import img from "../assets/655.jpg";

gsap.registerPlugin(ScrollTrigger);

// 🎯 Skill Categories
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <PanelsTopLeft className="h-8 w-8 text-indigo-400" />,
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 88 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Redux", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="h-8 w-8 text-blue-400" />,
    skills: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "PHP", level: 80 },
      { name: "WordPress", level: 85 },
      { name: "REST APIs", level: 92 },
      { name: "Authentication", level: 85 },
      { name: "Socket.io", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-green-400" />,
    skills: [
      { name: "MongoDB", level: 90 },
      { name: "MySQL", level: 80 },
      { name: "Firebase", level: 85 },
      { name: "Redis", level: 70 },
    ],
  },
  {
    title: "Tools & Others",
    icon: <Cpu className="h-8 w-8 text-cyan-400" />,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "Elementor", level: 88 },
      { name: "Figma", level: 85 },
      { name: "GSAP Animation", level: 80 },
      { name: "Three.js", level: 78 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 },
    ],
  },
];

// ⚡ Core Skills Icons Section
const coreSkills = [
  { name: "React", icon: <Globe className="h-8 w-8 text-blue-400" /> },
  { name: "Node.js", icon: <Server className="h-8 w-8 text-green-400" /> },
  { name: "MongoDB", icon: <Database className="h-8 w-8 text-emerald-400" /> },
  { name: "Express", icon: <Server className="h-8 w-8 text-gray-400" /> },
  { name: "Next.js", icon: <PanelsTopLeft className="h-8 w-8 text-white" /> },
  { name: "Git", icon: <GitBranch className="h-8 w-8 text-orange-400" /> },
  { name: "PHP", icon: <Server className="h-8 w-8 text-indigo-400" /> },
  { name: "WordPress", icon: <PanelsTopLeft className="h-8 w-8 text-sky-400" /> },
  { name: "Elementor", icon: <Brush className="h-8 w-8 text-pink-400" /> },
  { name: "GSAP", icon: <Cpu className="h-8 w-8 text-lime-400" /> },
  { name: "Three.js", icon: <Layers className="h-8 w-8 text-purple-400" /> },
  { name: "Figma", icon: <Brush className="h-8 w-8 text-yellow-400" /> },
];

const About = () => {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
        defaults: { duration: 1, ease: "power3.out" },
      });

      tl.from(imageRef.current, { x: -100, opacity: 0, scale: 0.9 }).from(
        textRefs.current,
        { y: 60, opacity: 0, stagger: 0.25 },
        "-=0.6"
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={aboutRef}
      className="bg-[#0c0c0c] container mx-auto py-24 px-6 overflow-hidden"
    >
      {/* ---------------- About Section ---------------- */}
      <div className="text-center mb-20">
        <h2 className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          My Introduction
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Me
        </h1>
        <div className="w-32 h-1 mx-auto bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2  items-center mb-24">
        {/* Profile Image */}
        <div ref={imageRef} className="flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <img
              src={img}
              alt="Profile"
              className="w-72 md:w-96 rounded-full border-4 border-white/40 p-2 shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-400/20 blur-3xl"></div>
          </motion.div>
        </div>

        {/* About Text */}
        <div className="text-gray-300 space-y-6 text-lg leading-relaxed text-justify">
          <p ref={(el) => (textRefs.current[0] = el)}>
            Hey there! I'm an enthusiastic{" "}
            <span className="text-white font-semibold">
              Full Stack Web Developer
            </span>{" "}
            passionate about crafting immersive and performance-driven digital
            experiences. I specialize in{" "}
            <span className="text-white font-semibold">
              React.js, GSAP animations, and 3D web interactions using Three.js
            </span>{" "}
            — turning static layouts into dynamic, engaging interfaces.
          </p>

          <p ref={(el) => (textRefs.current[1] = el)}>
            On the backend, I build scalable APIs and web applications using{" "}
            <span className="text-white font-semibold">
              Node.js, Express.js, and MongoDB
            </span>
            , while also having solid experience with{" "}
            <span className="text-white font-semibold">SQL databases</span>. I’m
            comfortable working with both RESTful APIs and authentication
            systems like{" "}
            <span className="text-white font-semibold">JWT</span>.
          </p>

          <p ref={(el) => (textRefs.current[2] = el)}>
            I also work with{" "}
            <span className="text-white font-semibold">PHP and WordPress</span>{" "}
            for custom site development, using{" "}
            <span className="text-white font-semibold">Elementor</span> to
            design responsive pages that clients can easily manage. My design
            workflow starts in{" "}
            <span className="text-white font-semibold">Figma</span>, ensuring a
            seamless transition from UI concepts to functional, pixel-perfect
            code.
          </p>

          <p ref={(el) => (textRefs.current[3] = el)}>
            Beyond coding, I’m proficient in{" "}
            <span className="text-white font-semibold">Git & GitHub</span> for
            version control,{" "}
            <span className="text-white font-semibold">Axios</span> for API
            integration, and modern styling frameworks like{" "}
            <span className="text-white font-semibold">
              Tailwind CSS, Bootstrap, and Material UI
            </span>
            . I follow{" "}
            <span className="text-white font-semibold">Agile methodologies</span>{" "}
            and enjoy optimizing performance and user experience.
          </p>

          <p ref={(el) => (textRefs.current[4] = el)}>
            I regularly deploy full-stack applications on platforms like{" "}
            <span className="text-white font-semibold">
              Render, Netlify, and Vercel
            </span>
            , ensuring smooth CI/CD workflows. My goal is to bridge creativity
            with technology — building solutions that look great, perform
            efficiently, and make an impact. 🚀
          </p>
        </div>
      </div>

      {/* ---------------- Skills Section ---------------- */}
      <section id="skills" className="pt-12 text-white">
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
            My Technical Level
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold">Skills</h1>
          <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-gray-900/40 p-6 rounded-2xl border border-gray-700 hover:border-indigo-400 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 text-primary">
                  {category.icon}
                  <h3 className="text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.8 }}
                          transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Core Skills */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {coreSkills.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-gray-900/40 p-4 rounded-xl border border-gray-700 flex flex-col items-center justify-center text-center hover:border-indigo-400 transition-all duration-300"
              >
                <div className="text-white mb-2">{item.icon}</div>
                <span className="font-medium text-gray-200">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
