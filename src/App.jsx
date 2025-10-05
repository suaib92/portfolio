import React, { useState, useCallback, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Component Imports
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Work from './components/Work';
import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);

  const handleLoadComplete = useCallback(() => {
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!loading && contentRef.current) {
      // Fade in content on initial load
      gsap.to(contentRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out',
      });

      // Animate each section on scroll
      gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    }
  }, [loading]);

  return (
    <>
      <CustomCursor />

      {loading ? (
        <Loader onComplete={handleLoadComplete} />
      ) : (
        <>
          <Sidenav />
          <div ref={contentRef} className="opacity-0 transform -translate-y-5 bg-[#0c0c0c]">
            <main>
              <section id="main">
                <Main />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="work">
                <Work />
              </section>
              <section id="projects">
                <Projects />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <Footer />
            </main>
          </div>
        </>
      )}
    </>
  );
}

export default App;
