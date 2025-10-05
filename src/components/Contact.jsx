import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0c0c0c] relative overflow-hidden">
      {/* Neon animated background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 opacity-10 blur-3xl animate-[pulse_6s_ease-in-out_infinite] -z-10"></div>

      <div className="m-auto px-8 md:px-20 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            Get In Touch
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">
            Contact Me
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 mx-auto mt-4 rounded-full shadow-lg"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {/* Contact Info Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white">Let's Talk About Your Project</h3>
            <p className="text-gray-400">
              I'm interested in freelance opportunities – especially ambitious or large projects. 
              However, if you have other requests or questions, don't hesitate to contact me using the form.
            </p>

            <div className="space-y-4 pt-4">
              {[
                {
                  title: "Email",
                  value: "suaib8211@gmail.com",
                  href: "mailto:suaib8211@gmail.com",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  ),
                },
                {
                  title: "Phone",
                  value: "+91 7078719621",
                  href: "tel:+917078719621",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  ),
                },
                {
                  title: "Location",
                  value: "Moradabad, India",
                  href: "https://maps.google.com/?q=Moradabad,India",
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  ),
                },
              ].map((info, i) => (
                <motion.a
                  key={i}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-lg bg-gray-900 border border-gray-700 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-white mt-1">{info.icon}</div>
                  <div>
                    <h4 className="font-medium text-white">{info.title}</h4>
                    <p className="text-gray-400">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            action="https://getform.io/f/d579fca6-d64a-410b-a822-2499be89c786"
            method="POST"
            encType="multipart/form-data"
            className="space-y-4 bg-gray-900/80 p-6 rounded-xl border border-gray-700 backdrop-blur-md shadow-[0_0_40px_rgba(0,255,255,0.2)]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-white/80 font-semibold">Name</label>
                <input
                  className="bg-gray-900 border-2 border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                  type="text"
                  name="name"
                  placeholder="Your Name..."
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2 text-white/80 font-semibold">Phone</label>
                <input
                  className="bg-gray-900 border-2 border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                  type="tel"
                  name="phoneNumber"
                  placeholder="+91 7078719621"
                />
              </div>
            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white/80 font-semibold">Email</label>
              <input
                className="bg-gray-900 border-2 border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                type="email"
                name="email"
                placeholder="suaib8211@gmail.com"
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white/80 font-semibold">Subject</label>
              <input
                className="bg-gray-900 border-2 border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                name="subject"
                type="text"
                placeholder="Subject of your message..."
              />
            </div>

            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2 text-white/80 font-semibold">Message</label>
              <textarea
                className="bg-gray-900 border-2 border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                rows="10"
                name="message"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <motion.button
              className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 text-white font-semibold mt-4 w-full p-4 rounded-lg shadow-lg shadow-cyan-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0,255,255,0.5)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
