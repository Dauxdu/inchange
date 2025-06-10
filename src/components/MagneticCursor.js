import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticCursor = ({ isDark }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (e.target.matches('button, a, .magnetic-element, .magnetic-button')) {
        setIsHovering(true);
        if (e.target.matches('.magnetic-button')) {
          setCursorVariant('button');
        } else if (e.target.matches('a')) {
          setCursorVariant('link');
        }
      }
    };

    const handleMouseOut = (e) => {
      if (e.target.matches('button, a, .magnetic-element, .magnetic-button')) {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const getOrangeColor = (variant) => {
    switch (variant) {
      case 'button':
        return '#ea580c'; // orange-600
      case 'link':
        return '#fb923c'; // orange-400
      default:
        return '#f97316'; // orange-500
    }
  };

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      scale: 1,
      backgroundColor: getOrangeColor('default'),
      mixBlendMode: isDark ? 'difference' : 'multiply'
    },
    button: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 2,
      backgroundColor: getOrangeColor('button'),
      mixBlendMode: isDark ? 'difference' : 'multiply'
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 1.5,
      backgroundColor: getOrangeColor('link'),
      mixBlendMode: isDark ? 'difference' : 'multiply'
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28
        }}
      />
      <motion.div
        className={`fixed top-0 left-0 w-8 h-8 border rounded-full pointer-events-none z-50 hidden md:block ${
          isDark ? 'border-orange-400' : 'border-orange-500'
        }`}
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.8 : 0.4
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20
        }}
      />
    </>
  );
};

export default MagneticCursor;