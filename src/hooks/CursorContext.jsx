import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorContext = createContext();

export const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [viewportSize, setViewportSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const updateViewportSize = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('resize', updateViewportSize);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('resize', updateViewportSize);
    };
  }, []);

  const clampPosition = (x, y) => {
    return {
      x: Math.min(Math.max(x, 0), viewportSize.width - 32), // Clamp to viewport width
      y: Math.min(Math.max(y, 0), viewportSize.height - 32), // Clamp to viewport height
    };
  };

  const clampedPosition = clampPosition(mousePosition.x, mousePosition.y);

  const variants = {
    default: {
      x: clampedPosition.x - 16,
      y: clampedPosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: clampedPosition.x - 75,
      y: clampedPosition.y - 75,
      backgroundColor: 'white',
      mixBlendMode: 'difference',
    },
  };

  const textEnter = () => setCursorVariant('text');
  const textLeave = () => setCursorVariant('default');

  return (
    <CursorContext.Provider value={{ cursorVariant, variants, textEnter, textLeave }}>
      {children}
      <motion.div className="cursor" variants={variants} animate={cursorVariant} />
    </CursorContext.Provider>
  );
};

export const useCursor = () => useContext(CursorContext);
