import React, { useEffect, useRef } from 'react';

function Cursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 12}px, ${e.clientY - 12}px)`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed w-6 h-6 rounded-full pointer-events-none z-50 transition-transform duration-75 animate-pulse
                 dark:bg-purple-500 dark:blur-md dark:opacity-30
                 bg-blue-400 blur-md opacity-65"
    ></div>
  );
}

export default Cursor;
