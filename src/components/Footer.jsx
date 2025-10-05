import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { href: "https://github.com/suaib92", icon: <Github size={20} /> },
    { href: "https://linkedin.com/in/mohd-suaib-warsi", icon: <Linkedin size={20} /> },
    { href: "mailto:suaib8211@gmail.com", icon: <Mail size={20} /> },
  ];

  return (
    <footer className="bg-[#0c0c0c]/50 border-t border-gray-700 relative overflow-hidden px-6 md:px-20">
      {/* Animated neon gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-indigo-500 to-pink-500 opacity-10 blur-3xl animate-[pulse_6s_ease-in-out_infinite] -z-10"></div>

      <div className="container mx-auto py-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <a
              className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-300"
              href="#home"
            >
              Mohd Suaib Warsi
            </a>
            <p className="text-gray-400 mt-2 max-w-md">
              Full Stack Web Developer passionate about MERN stack & modern web animations.
            </p>
          </motion.div>

          {/* Social & Back to Top */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex gap-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-3 rounded-full border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 shadow-lg shadow-cyan-500/40 transition-all duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.15, boxShadow: "0 0 25px rgba(0,255,255,0.5)" }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Back to Top
              <ArrowUp size={16} />
            </motion.button>
          </motion.div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>© 2025 Mohd Suaib Warsi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
