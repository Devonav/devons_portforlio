import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";

interface MobileMenuProps {}

const MobileMenu: React.FC<MobileMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button onClick={toggleMenu} className="z-[60] relative">
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconX className="w-8 h-8" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <IconMenu2 className="w-8 h-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[var(--main)] z-[55] flex flex-col justify-center items-center"
          >
            <motion.nav
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="flex flex-col items-center gap-8"
            >
              <Link
                to="/"
                className="navlinks text-4xl font-light hover:text-[var(--tertiary)] transition-colors"
                onClick={closeMenu}
              >
                home
              </Link>
              <Link
                to="/projects"
                className="navlinks text-4xl font-light hover:text-[var(--tertiary)] transition-colors"
                onClick={closeMenu}
              >
                projects
              </Link>
              <Link
                to="/blogs"
                className="navlinks text-4xl font-light hover:text-[var(--tertiary)] transition-colors"
                onClick={closeMenu}
              >
                blogs
              </Link>
              <Link
                to="/about"
                className="navlinks text-4xl font-light hover:text-[var(--tertiary)] transition-colors"
                onClick={closeMenu}
              >
                about
              </Link>
              <a
                href="https://www.linkedin.com/in/devon-villalona-/"
                target="_blank"
                rel="noopener noreferrer"
                className="navlinks text-4xl font-light hover:text-[var(--tertiary)] transition-colors"
                onClick={closeMenu}
              >
                linkedin
              </a>
              <a
                href="https://github.com/Devonav"
                target="_blank"
                rel="noopener noreferrer"
                className="navlinks text-4xl font-light hover:text-[var(--tertiary)] transition-colors"
                onClick={closeMenu}
              >
                github
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;