import "./page.css";

import NavLinks from "../components/navLinks";
import Tagline from "../components/tagline";
import TextTransition from "../components/transitionText";
import PageDirectButton from "../components/pageDirects";
import MetaComponent from "../components/meta";
import { motion } from "motion/react";

function HomePage() {

  return (
    <>
      <MetaComponent
        pageTitle="Home"
        pageDescription="Hi, I'm Devon Villalona, a Computer Science student and Army veteran passionate about creating innovative software solutions.
        This is where I share:
            🚀 Projects I've built with embedded systems and data analytics
            🌱 My journey from military service to software development

        I'm always learning new technologies and pushing myself to solve complex problems.
        Feel free to explore my work — and if something interests you, let's connect!"
      />
      <div className="flex flex-col min-h-dvh p-8">
        {/* Mobile view */}
        <motion.div
          className="flex-1 flex md:hidden flex-col justify-center items-center relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="text-center relative z-20"
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Tagline text="BASED IN ORLANDO, FLORIDA" />
            </motion.div>
            <motion.div 
              className="main-contents gap-2 pt-3 pb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <TextTransition styleName="name-role-text" text="DEVON" />
              <TextTransition styleName="adjective" text="INNOVATIVE" />
              <TextTransition styleName="name-role-text" text="DEVELOPER." />
            </motion.div>
            <motion.div 
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Tagline text="CS STUDENT & ARMY VETERAN" />
              <Tagline text="FULL STACK DEVELOPER" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Laptop view */}
        <motion.div
          className="hidden md:flex flex-1 items-center justify-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0, delay: 0.3 }}
        >
          <motion.div
            className="main-content relative z-20"
          >
            {/* Top row */}
            <motion.div 
              className="flex items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <TextTransition
                styleName="name-role-text"
                text="DEVON VILLALONA"
              />
              <motion.div 
                className="flex items-center"
                whileHover={{
                  x: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <Tagline text="BASED IN ORLANDO, FLORIDA" />
              </motion.div>
            </motion.div>

            {/* Middle and bottom sections with two-column layout */}
            <div className="flex">
              {/* Left column with stacked items aligned to the left */}
              <motion.div 
                className="flex flex-col gap-2 w-2/5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <motion.div 
                  className="whitespace-nowrap"
                  whileHover={{
                    x: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Tagline text="CS STUDENT & ARMY VETERAN" />
                  <Tagline text="FULL STACK DEVELOPER" />
                </motion.div>
              </motion.div>

              {/* Right column */}
              <motion.div 
                className="w-3/5 lap-content"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.div 
                  className="whitespace-nowrap"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <TextTransition
                    styleName="adjective"
                    text="INNOVATIVE"
                    delay={500}
                  />
                </motion.div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    color: "var(--tertiary)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <TextTransition
                    styleName="name-role-text"
                    text="DEVELOPER."
                    delay={500}
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex justify-between items-end mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.div 
            className="flex flex-col gap-3"
            whileHover={{
              x: 5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="md:hidden">
              <PageDirectButton text="projects" link="/projects" />
            </div>
            <div className="hidden md:block">
              <NavLinks indexNum="01" text="Projects" link="/projects" />
            </div>
          </motion.div>
          {typeof window !== "undefined" && (
            <motion.p
              whileHover={{
                scale: 1.05,
                color: "var(--tertiary)",
                transition: { duration: 0.3 }
              }}
            >
              <a
                href="https://github.com/Devonav"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center font-light text-xs items-end"
              >
                MADE OPENLY BY DEVON
              </a>
            </motion.p>
          )}
        </motion.div>
      </div>
    </>
  );
}

export default HomePage;