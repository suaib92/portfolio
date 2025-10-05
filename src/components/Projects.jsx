import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import cryptoImg from '../assets/crypto.png';
import ytImg from '../assets/yt.png';

const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Crypto Dashboard',
    description: 'A real-time cryptocurrency tracking dashboard built with React, featuring live data from APIs and interactive charts.',
    imageUrl: cryptoImg,
    tags: ['React', 'API', 'Chart.js', 'Tailwind CSS'],
    category: 'Frontend',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Get YT Subscriber',
    description: 'A full-stack application to track and analyze YouTube subscriber growth. Built with the MERN stack.',
    imageUrl: ytImg,
    tags: ['MongoDB', 'Express', 'React', 'Node.js'],
    category: 'Full Stack',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'E-commerce Platform',
    description: 'A feature-rich e-commerce website with product listings, a shopping cart, and a secure checkout process.',
    imageUrl: 'https://placehold.co/600x400/18181b/ffffff?text=Project',
    tags: ['Next.js', 'Stripe', 'GraphQL', 'PostgreSQL'],
    category: 'Backend',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const ProjectCard = ({ project, onCardClick }) => (
  <motion.div
    onClick={() => onCardClick(project)}
    layoutId={`card-container-${project.id}`}
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, type: 'spring' }}
    whileHover={{ scale: 1.05, boxShadow: '0 0 25px rgba(0, 255, 255, 0.3)' }}
    className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden cursor-pointer group transition-all duration-300 hover:border-cyan-400/50"
  >
    <div className="relative h-48 overflow-hidden">
      <motion.img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-cyan-400/10 to-transparent"></div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white drop-shadow-md">{project.title}</h3>
      <p className="text-gray-400 mb-4 h-12 overflow-hidden text-sm">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 3).map(tag => (
          <span key={tag} className="bg-white/10 text-white text-xs font-semibold px-2.5 py-1 rounded-full drop-shadow-sm">{tag}</span>
        ))}
      </div>
    </div>
  </motion.div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-black/30 backdrop-blur-md border border-white/20 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative p-6 shadow-[0_0_35px_rgba(0,255,255,0.2)]"
        layoutId={`card-container-${project.id}`}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white z-10 transition-colors"
        >
          <X size={28} />
        </button>
        <motion.img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-64 object-cover rounded-lg drop-shadow-[0_0_20px_rgba(0,255,255,0.2)]"
          onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1e293b/ffffff?text=Image+Error'; }}
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div className="p-6 relative z-10">
          <motion.h2
            className="text-3xl font-bold mb-4 text-white drop-shadow-md"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.title}
          </motion.h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                className="bg-white/10 text-white text-sm font-semibold px-3 py-1 rounded-full drop-shadow-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {project.description}
          </motion.p>
          <motion.div className="flex gap-4" initial="hidden" animate="visible" variants={{hidden:{},visible:{transition:{staggerChildren:0.1, delayChildren:0.6}}}}>
            <motion.a
              variants={{ hidden: {opacity:0, y:20}, visible:{opacity:1, y:0} }}
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-cyan-500 text-black font-semibold rounded-lg hover:scale-105 transform transition-transform duration-300 shadow-[0_0_15px_rgba(0,255,255,0.3)]"
            >
              Live Demo
            </motion.a>
            <motion.a
              variants={{ hidden: {opacity:0, y:20}, visible:{opacity:1, y:0} }}
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 border-2 border-cyan-400 text-white font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transform transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.2)]"
            >
              View Code
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((project) => project.category === filter);

  const categories = ['All', 'Frontend', 'Backend', 'Full Stack'];

  return (
    <motion.div
      id="projects"
      className="px-8 md:px-20 py-16 relative overflow-hidden bg-[#0f0f0f]"
    >
      <div className="text-center mb-16">
        <h2 className="text-sm uppercase tracking-wider text-gray-500 mb-2">My Recent Work</h2>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-md">My Projects</h1>
        <p className="text-center py-8 text-gray-400 max-w-2xl mx-auto">
          Here are some of the projects I've worked on. Click on any card to see more details, view the live demo, or check out the source code.
        </p>
        <div className="w-24 h-1 bg-cyan-400/70 mx-auto mt-4 rounded-full drop-shadow-sm"></div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-12">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setFilter(cat)}
            whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(0,255,255,0.2)" }}
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 rounded-full ${
              filter === cat
                ? 'bg-cyan-500 text-black shadow-[0_0_10px_rgba(0,255,255,0.3)]'
                : 'border border-white/30 bg-black text-white hover:bg-white/10'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Project Cards */}
      <motion.div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} onCardClick={setSelectedProject} />
        ))}
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </motion.div>
  );
};

export default Projects;
