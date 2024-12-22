import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16, // Center the cursor
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75, // Center larger cursor
      y: mousePosition.y - 75,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, variants, textEnter, textLeave }}>
      {children}
      <motion.div className='cursor' variants={variants} animate={cursorVariant} />
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
