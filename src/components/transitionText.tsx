import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import "./components.css";

interface TextTransitionProps {
  text: string;
  styleName: string;
  delay?: number;
}

const TextTransition: React.FC<TextTransitionProps> = ({ 
  text, 
  styleName, 
  delay = 0 
}) => {
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setCurrentIndex(0);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (currentIndex === -1 || currentIndex >= text.length) return;

    const timer = setTimeout(() => {
      setCurrentIndex(prev => prev + 1);
    }, 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text.length]);

  return (
    <motion.div 
      className={`${styleName} text-transition-wrapper cursor-pointer`}
      whileHover={{
        scale: 1.05,
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 200 
        }
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          className={`transition-character ${
            index < currentIndex ? "visible" : "hidden"
          }`}
          whileHover={{
            color: "var(--tertiary)",
            scale: 1.1,
            rotateZ: [-2, 2, 0],
            transition: { 
              duration: 0.2,
              delay: index * 0.02 // Stagger effect
            }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TextTransition;