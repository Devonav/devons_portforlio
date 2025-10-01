import React from "react";
import { motion } from "motion/react";

interface TaglineProps {
  text: string;
}

const Tagline: React.FC<TaglineProps> = ({ text }) => {
  return (
    <motion.div 
      className="tagline text-xs font-light text-[var(--text)] opacity-70 uppercase tracking-widest cursor-pointer"
      whileHover={{
        opacity: 1,
        scale: 1.02,
        y: -2,
        letterSpacing: "0.2em",
        color: "var(--tertiary)",
        transition: { 
          duration: 0.3,
          type: "spring",
          stiffness: 300 
        }
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          whileHover={{
            scale: 1.2,
            y: -3,
            transition: { 
              duration: 0.2,
              delay: index * 0.03 // Stagger effect
            }
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Tagline;