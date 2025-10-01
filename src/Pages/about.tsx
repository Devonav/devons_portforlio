import "./page.css";
import MetaComponent from "../components/meta";
import { motion } from "motion/react";
import { useState } from "react";
import TypewritingEffect from "../components/typewritingEffect";
import TechStackWrapper from "../components/techStackWrapper";

function AboutPage() {
  const [showTypewriter, setShowTypewriter] = useState(false);

  return (
    <>
      <MetaComponent
        pageTitle="About"
        pageDescription="Learn more about Devon Villalona, a Computer Science student and Army veteran with expertise in full-stack development, embedded systems, and data analytics."
      />
      <div className="flex flex-col min-h-dvh p-8 pt-24">
        <div className="max-w-4xl mx-auto w-full">
          <div className="about-page">
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onAnimationComplete={() => setShowTypewriter(true)}
            >
              <h1 className="about-head mb-2">
                {showTypewriter ? (
                  <TypewritingEffect 
                    text="ABOUT" 
                    delay={300}
                    speed={100}
                  />
                ) : (
                  <span style={{ opacity: 0 }}>ABOUT</span>
                )}
              </h1>
              <motion.h2 
                className="about-me text-4xl mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                whileHover={{
                  scale: 1.05,
                  color: "var(--tertiary)",
                  transition: { duration: 0.3 }
                }}
              >
                me
              </motion.h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.div
                  className="relative z-20"
                >
                  <motion.h3 
                    className="about-subheadings"
                    whileHover={{
                      color: "var(--tertiary)",
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    Background
                  </motion.h3>
                  <motion.p 
                    className="mb-6"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    I'm a Computer Science student at the University of Central Florida and a proud Army veteran. 
                    From 2015-2019, I served as a Patriot Launching Station Enhanced Operator/Maintainer, 
                    deployed in Kuwait and Korea, where I maintained critical missile defense systems and earned a Secret Security Clearance.
                  </motion.p>
                  
                  <motion.h3 
                    className="about-subheadings"
                    whileHover={{
                      color: "var(--tertiary)",
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    What I Do
                  </motion.h3>
                  <motion.p 
                    className="mb-6"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    I specialize in full-stack development with a passion for embedded systems and data analytics. 
                    My projects range from interactive dashboards that forecast retail sales to animated embedded systems 
                    programming on ESP32 microcontrollers. I love solving complex problems with creative technical solutions.
                  </motion.p>
                </motion.div>
              </motion.div>
              
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.div
                  className="relative z-20"
                >
                  <motion.h3 
                    className="about-subheadings"
                    whileHover={{
                      color: "var(--tertiary)",
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    Technical Skills
                  </motion.h3>
                  <motion.div 
                    className="mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                  >
                    <TechStackWrapper layout="flex" showLabels={true} />
                  </motion.div>
                  
                  <motion.h3 
                    className="about-subheadings"
                    whileHover={{
                      color: "var(--tertiary)",
                      x: 10,
                      transition: { duration: 0.3 }
                    }}
                  >
                    Current Focus
                  </motion.h3>
                  <motion.p 
                    className="about-side-note"
                    whileHover={{
                      x: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    Currently pursuing my Computer Science degree while working on projects involving 
                    machine learning, embedded systems programming, and full-stack web development. 
                    I'm particularly interested in the intersection of hardware and software.
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;