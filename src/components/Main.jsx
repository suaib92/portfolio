import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import gsap from 'gsap';
import * as THREE from 'three';

// Scroll down indicator with updated B&W theme
const ScrollIndicator = () => (
  <div className="mt-10 flex justify-center w-full">
    <div className="w-6 h-10 border-2 border-white/80 rounded-full flex justify-center items-start p-1">
      <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce"></div>
    </div>
  </div>
);


const Main = () => {
  const mountRef = useRef(null);

  // GSAP Refs
  const introRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const bioRef = useRef(null);
  const buttonsRef = useRef(null);
  const socialsRef = useRef(null);
  const scrollIndicatorWrapperRef = useRef(null);

  // Three.js Background Effect
  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas: currentMount, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    const particleCount = 7000;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 15;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.008,
      color: 0xf5f5f5, // Off-white particles
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particleSystem);

    const mouse = new THREE.Vector2();
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let shootingStar = null;

    const spawnShootingStar = () => {
      const starIndex = Math.floor(Math.random() * particleCount);
      const positions = particlesGeometry.attributes.position.array;

      positions[starIndex * 3] = (Math.random() - 0.5) * 25;
      positions[starIndex * 3 + 1] = 10 + Math.random() * 5;
      positions[starIndex * 3 + 2] = (Math.random() - 0.5) * 10;

      const velocity = new THREE.Vector3(
        (Math.random() < 0.5 ? 1 : -1) * (0.1 + Math.random() * 0.1),
        -0.2 - Math.random() * 0.1,
        0
      );

      shootingStar = {
        index: starIndex,
        velocity: velocity,
        lifetime: 200,
      };
    };

    const animate = () => {
      requestAnimationFrame(animate);

      if (!shootingStar && Math.random() < 0.002) {
        spawnShootingStar();
      }

      if (shootingStar) {
        const positions = particlesGeometry.attributes.position.array;
        const i3 = shootingStar.index * 3;

        positions[i3] += shootingStar.velocity.x;
        positions[i3 + 1] += shootingStar.velocity.y;

        shootingStar.lifetime--;

        if (shootingStar.lifetime <= 0) {
          positions[i3 + 1] = (Math.random() - 0.5) * 15;
          shootingStar = null;
        }
        particlesGeometry.attributes.position.needsUpdate = true;
      }

      camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02;
      camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      // Safe scene cleanup
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }
    };
  }, []);

  // GSAP Animation Effect
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 1 } });
      tl.from(introRef.current, { opacity: 0, y: 20 }, 0.2)
        .from(nameRef.current, { opacity: 0, y: 20, scale: 1.1 }, 0.4)
        .from(titleRef.current, { opacity: 0, y: 20 }, 0.6)
        .from(bioRef.current, { opacity: 0, y: 20 }, 0.8)
        .from(buttonsRef.current.children, { opacity: 0, y: 20, stagger: 0.2 }, 1)
        .from(socialsRef.current.children, { opacity: 0, y: 20, stagger: 0.1 }, 1.2)
        .from(scrollIndicatorWrapperRef.current, { opacity: 0, y: 20 }, 1.5);
    });
    return () => ctx.revert();
  }, []);


  return (
    <div id="main" className="relative w-full h-screen bg-black overflow-hidden">
      <canvas ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0" />

      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-white px-4">
        <div className="max-w-3xl flex flex-col items-center">
          <p ref={introRef} className="text-lg text-white/80 mb-2 tracking-wider">Hello, I'm</p>

          <h1 ref={nameRef} className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight mb-3">
            Mohd Suaib Warsi
          </h1>

          <div ref={titleRef} className="text-xl sm:text-2xl text-white/80 mb-6">
            <TypeAnimation
              sequence={[
                "MERN Stack Developer", 2000,
                "Full Stack Developer", 2000,
                "Creative Coder", 2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <p ref={bioRef} className="max-w-xl mx-auto text-base text-white/90 mb-10 leading-relaxed">
            Based in India. Specialized in building exceptional digital experiences with modern web technologies.
          </p>

          <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-10 w-full">
            <a href="#contact" className="px-8 py-3 bg-white text-black font-semibold rounded-full transition-transform duration-300 hover:scale-105 shadow-lg shadow-white/10 w-full sm:w-auto">
              Contact Me
            </a>
            <a
              href="https://drive.google.com/uc?export=download&id=1--P6EiOqUxjz0Flv_YVEePymuFl4QCif"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3 flex items-center justify-center gap-2 text-white font-semibold rounded-full border border-white transition-transform duration-300 hover:scale-105 shadow-lg "

            >
              <FiDownload className="text-lg" />
              Download CV
            </a>
          </div>

          <div ref={socialsRef} className="flex justify-center items-center space-x-6 mt-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-white/70 hover:text-white transition-colors duration-300"><FaGithub size={24} /></a>
            <a href="https://www.linkedin.com/in/mohd-suaib-warsi/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-white/70 hover:text-white transition-colors duration-300"><FaLinkedinIn size={24} /></a>
            <a href="mailto:youremail@example.com" aria-label="Email Me" className="text-white/70 hover:text-white transition-colors duration-300"><FaEnvelope size={24} /></a>
          </div>
        </div>

        <div ref={scrollIndicatorWrapperRef} className="absolute bottom-10">
          <ScrollIndicator />
        </div>
      </div>
    </div>
  );
};

export default Main;