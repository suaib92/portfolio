import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX, clientY } = e;
            gsap.to(cursorDotRef.current, { x: clientX, y: clientY, duration: 0.2 });
            gsap.to(cursorOutlineRef.current, { x: clientX, y: clientY, duration: 0.5 });
        };
        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <>
            {/* UPDATED: Changed from bg-purple-500 to bg-white */}
            <div 
                ref={cursorDotRef} 
                className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] transform -translate-x-1/2 -translate-y-1/2"
            ></div>
            {/* UPDATED: Changed from border-purple-500 to border-white */}
            <div 
                ref={cursorOutlineRef} 
                className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full pointer-events-none z-[99999] transform -translate-x-1/2 -translate-y-1/2"
            ></div>
        </>
    );
};

export default CustomCursor;