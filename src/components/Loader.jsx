import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const Loader = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const innerBarsRef = useRef([]);

  useEffect(() => {
    const animateBars = () => {
      let increment = 0;

      function runAnimationStep() {
        for (let i = 0; i < 2; i++) {
          if (innerBarsRef.current[i + increment]) {
            gsap.to(innerBarsRef.current[i + increment], {
              width: `${Math.floor(Math.random() * 101)}%`,
              duration: 0.2,
              ease: 'none',
            });
          }
        }

        setTimeout(() => {
          for (let i = 0; i < 2; i++) {
            if (innerBarsRef.current[i + increment]) {
              gsap.to(innerBarsRef.current[i + increment], {
                width: '100%',
                duration: 0.2,
                ease: 'none',
              });
            }
          }

          increment += 2;

          if (increment < innerBarsRef.current.length) {
            runAnimationStep();
          } else {
            gsap.to(overlayRef.current, {
              transform: 'translateX(0)',
              duration: 0.5,
              ease: 'none',
              delay: 0.4,
              onComplete: onComplete,
            });
          }
        }, 200);
      }
      runAnimationStep();
    };

    const startTimeout = setTimeout(animateBars, 1000);

    return () => clearTimeout(startTimeout);
  }, [onComplete]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-10 grid place-items-center bg-black">
        <span className="text-5xl font-extrabold uppercase text-white md:text-[80px]">
          Warsi
        </span>
      </div>
      <div className="absolute inset-0 z-20 flex bg-transparent">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="relative h-full w-[12.5%] bg-transparent">
            <div
              ref={(el) => (innerBarsRef.current[index] = el)}
              className="absolute inset-y-0 left-0 h-full w-0 bg-white"
            ></div>
          </div>
        ))}
      </div>
      <div
        ref={overlayRef}
        className="absolute inset-0 z-30 -translate-x-full transform bg-black"
      ></div>
    </div>
  );
};

Loader.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default Loader;