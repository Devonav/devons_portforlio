import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

interface NavLinksProps {
  indexNum: string;
  text: string;
  link: string;
}

const NavLinks: React.FC<NavLinksProps> = ({ indexNum, text, link }) => {
  return (
    <Link to={link} className="flex flex-col group">
      <motion.span 
        className="text-xs font-light text-[var(--text)] opacity-60 mb-1"
        whileHover={{ 
          opacity: 0.9,
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {indexNum}
      </motion.span>
      <motion.span 
        className="navlinks text-[var(--text)] group-hover:text-[var(--tertiary)] transition-colors duration-300 relative overflow-hidden"
        whileHover={{ 
          scale: 1.02,
          x: 5,
          transition: { 
            duration: 0.3,
            type: "spring",
            stiffness: 300 
          }
        }}
      >
        {text}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-[var(--tertiary)]"
          initial={{ width: 0 }}
          whileHover={{ 
            width: "100%",
            transition: { duration: 0.3 }
          }}
        />
      </motion.span>
    </Link>
  );
};

export default NavLinks;