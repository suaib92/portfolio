import React from 'react';
import { motion } from 'framer-motion';

const WORK_DATA = [
  {
    role: 'Web Developer',
    company: 'TZS Digital',
    date: 'Dec 2024 - Present',
    description:
      'Working full-time on web development projects, building responsive and interactive web applications. Gaining experience in modern frontend and backend technologies.',
  },
  {
    role: 'Full Stack Developer (Trainee / Internship)',
    company: 'AlmaBetter',
    date: 'Mar 2023 - Dec 2024',
    description:
      'Trained in full-stack web development using MERN stack, TypeScript, and modern web technologies. Built projects including a Reserve Bus-booking App, Cryptocurrency Dashboard, and YouTube Subscribers API.',
  },
 
];


const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-gray-400 mb-2">
          My Professional Journey
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Work Experience
        </h1>
        <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 via-blue-400 to-cyan-400 -translate-x-1/2 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.2)]"></div>

        {WORK_DATA.map((job, index) => (
          <div key={index} className="mb-16 relative">
            {/* Timeline Dot */}
            <motion.div
              className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-to-tr from-indigo-500 to-cyan-400 rounded-full border-4 border-white shadow-[0_0_25px_rgba(0,255,255,0.3)] z-10"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.6 }}
            />

            {/* Work Card */}
            <motion.div
              className={`w-full md:w-[calc(50%-2rem)] p-4 ${
                index % 2 === 0
                  ? 'md:ml-[calc(50%+2rem)] pl-12 md:pl-0'
                  : 'md:mr-[calc(50%+2rem)] md:text-right pl-12 md:pl-0'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0,255,255,0.3)' }}
                className="p-6 bg-black/70 border border-white/20 rounded-2xl backdrop-blur-md shadow-lg relative"
              >
                {/* Floating Glow */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 via-blue-400 to-cyan-400 opacity-20 blur-3xl"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-1">{job.role}</h3>
                  <p className="font-semibold text-white/80 mb-2">{job.company}</p>
                  <p className="text-sm text-white/60 mb-3">{job.date}</p>
                  <p className="text-white/70">{job.description}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
