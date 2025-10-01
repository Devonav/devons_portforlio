import "./page.css";
import { Link } from "react-router-dom";
import MetaComponent from "../components/meta";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import GitHubContributions from "../components/githubContributions";
import TypewritingEffect from "../components/typewritingEffect";

// Devon's actual projects
const projects = [
  {
    id: "predictive-analytics-dashboard",
    title: "Predictive Analytics Dashboard",
    description: "An interactive dashboard for retail sales forecasting using machine learning. Features Random Forest Regressor with custom predictions and feature importance visualizations.",
    tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib"],
    number: "01"
  },
  {
    id: "stock-market-prediction-ml",
    title: "Stock Market Prediction ML",
    description: "Comprehensive machine learning system for predicting stock price movements with 60+ technical indicators, multiple ML models, and automated data collection via Yahoo Finance API.",
    tags: ["Python", "Scikit-learn", "yfinance", "NumPy", "Pandas", "Machine Learning"],
    number: "02"
  },
  {
    id: "blinking-eyes-tft", 
    title: "Blinking Eyes on ESP32-S3 T-Display",
    description: "Animated eye-blinking system on LILYGO ESP32-S3 with adjustable spacing, blink speed, mood-based color shifts, and pupil tracking via serial control.",
    tags: ["C++", "Arduino", "TFT_eSPI", "Adafruit ST7789", "ESP32"],
    number: "03"
  },
  {
    id: "passport-buddy-flutter",
    title: "Passport Buddy - Social Travel Platform",
    description: "Enterprise-grade social travel platform with real-time flight tracking, automated boarding pass OCR, and travel analytics. Collaborative group project focusing on mobile development.",
    tags: ["Flutter", "React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
    number: "04"
  }
];

function ProjectsListPage() {
  const [currentIndex, setCurrentIndex] = useState(projects.length); // Start in middle
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scrollAccumulator, setScrollAccumulator] = useState(0);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const scrollThreshold = 100; // Require more scroll to move
  
  // Create extended array for seamless looping
  const extendedProjects = [...projects, ...projects, ...projects];
  
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to middle section when reaching end
        if (next >= projects.length * 2) {
          return projects.length;
        }
        return next;
      });
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsAutoPlaying(false);
    
    // Accumulate scroll delta for smoother control
    setScrollAccumulator((prev) => {
      const newAccumulator = prev + e.deltaY;
      
      // Only move when threshold is reached
      if (Math.abs(newAccumulator) >= scrollThreshold) {
        const direction = newAccumulator > 0 ? 1 : -1;
        
        setCurrentIndex((prevIndex) => {
          let next = prevIndex + direction;
          
          // Handle wrapping with proper bounds checking
          if (next < 0) {
            next = projects.length * 3 - 1;
          } else if (next >= projects.length * 3) {
            next = 0;
          }
          
          return next;
        });
        
        return 0; // Reset accumulator
      }
      
      return newAccumulator;
    });
    
    // Resume auto-play after interaction
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToProject = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(projects.length + index); // Use middle section
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  return (
    <>
      <MetaComponent
        pageTitle="Projects"
        pageDescription="A collection of projects Devon Villalona has built, showcasing skills in machine learning, embedded systems, full-stack development, and creative programming solutions."
      />
      <div className="flex flex-col min-h-dvh p-8 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setShowTypewriter(true)}
          >
            <h1 className="about-head mb-4">
              {showTypewriter ? (
                <TypewritingEffect 
                  text="PROJECTS" 
                  delay={300}
                  speed={100}
                />
              ) : (
                <span style={{ opacity: 0 }}>PROJECTS</span>
              )}
            </h1>
            <p className="text-lg opacity-70 mb-6">
              A collection of individual and collaborative projects spanning machine learning, embedded systems, mobile development, and full-stack web applications.
            </p>
            <p className="text-sm opacity-50">
              Scroll or use mouse wheel to navigate • Auto-advancing every 4 seconds
            </p>
          </motion.div>
          
          <div 
            className="relative overflow-hidden"
            onWheel={handleWheel}
          >
            <motion.div
              className="flex"
              animate={{ 
                x: `${-currentIndex * 100}%`
              }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 25,
                mass: 0.8
              }}
            >
              {extendedProjects.map((project, index) => {
                const projectIndex = index % projects.length;
                const isHovered = hoveredProject === projectIndex;
                
                return (
                  <motion.div
                    key={`${project.id}-${Math.floor(index / projects.length)}`}
                    className="w-full flex-shrink-0 px-4"
                    onMouseEnter={() => setHoveredProject(projectIndex)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <motion.div
                      className="relative overflow-hidden"
                      animate={{
                        scale: isHovered ? 1.02 : 1,
                      }}
                      transition={{ 
                        duration: 0.5,
                        ease: [0.19, 1, 0.22, 1] // Custom cubic bezier
                      }}
                    >
                      {/* Background overlay effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-[var(--tertiary)] to-transparent opacity-0 z-0"
                        animate={{
                          opacity: isHovered ? 0.1 : 0,
                        }}
                        transition={{ duration: 0.5 }}
                      />
                      
                      
                      <Link
                        to={`/project/${project.id}`}
                        className="group relative block p-8 border border-gray-800 hover:border-[var(--tertiary)] transition-all duration-500 hover:shadow-2xl rounded-lg h-[400px] flex flex-col z-20"
                      >
                    <div className="flex items-start gap-6 h-full">
                      <motion.div 
                        className="w-16 flex-shrink-0"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <span className="project-num text-2xl font-light opacity-60">
                          {project.number}
                        </span>
                      </motion.div>
                      
                      <div className="flex-1 flex flex-col">
                        <motion.h2 
                          className="project-name group-hover:text-[var(--tertiary)] transition-colors mb-4 text-2xl relative z-30"
                          animate={{
                            x: isHovered ? 10 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {isHovered ? (
                            <TypewritingEffect 
                              text={project.title}
                              speed={50}
                            />
                          ) : (
                            project.title
                          )}
                        </motion.h2>
                        
                        <p className="text-lg mb-6 opacity-80 flex-1">
                          {project.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-3 relative z-30">
                          {project.tags.map((tag, tagIndex) => (
                            <motion.span
                              key={tag}
                              className="project-tags text-sm px-4 py-2 bg-gray-800 text-gray-300 rounded-full"
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ 
                                opacity: isHovered ? [0.7, 1, 0.9] : 0.7,
                                scale: isHovered ? [0.8, 1.1, 1] : 0.8,
                                backgroundColor: isHovered ? "var(--tertiary)" : "rgb(31, 41, 55)",
                                color: isHovered ? "var(--main)" : "rgb(209, 213, 219)"
                              }}
                              transition={{ 
                                duration: 0.4,
                                delay: tagIndex * 0.1,
                                ease: "easeOut"
                              }}
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                      </Link>
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 gap-3">
            {projects.map((_, index) => {
              const adjustedCurrentIndex = ((currentIndex % projects.length) + projects.length) % projects.length;
              return (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    adjustedCurrentIndex === index 
                      ? 'bg-[var(--tertiary)] scale-125' 
                      : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              );
            })}
          </div>
          
          {/* Progress indicator */}
          <div className="w-full bg-gray-800 h-1 mt-4 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[var(--tertiary)]"
              animate={{ 
                width: `${(((currentIndex % projects.length) + projects.length) % projects.length + 1) / projects.length * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          {/* GitHub Activity Contributions Section */}
          <motion.div 
            className="mt-16 pt-12 border-t border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GitHubContributions username="Devonav" />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default ProjectsListPage;