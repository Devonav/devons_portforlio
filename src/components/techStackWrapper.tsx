import React, { useState } from 'react';
import { motion } from 'motion/react';

interface TechStackWrapperProps {
  layout?: 'grid' | 'flex' | 'circular' | 'sphere';
  showLabels?: boolean;
}

// Your complete tech stack with actual SVG file mappings
const techStack = [
  // Languages
  { name: 'JavaScript', file: 'javascript.a9594db4.svg', category: 'Languages' },
  { name: 'Python', file: 'python-color.78961f05.svg', category: 'Languages' },
  { name: 'Java', file: 'java-icon.6c9e7e06.svg', category: 'Languages' },
  { name: 'TypeScript', file: 'typescript.27df170d.svg', category: 'Languages' },
  { name: 'C', file: 'c-color.cd09a6e9.svg', category: 'Languages' },
  { name: 'C++', file: 'cpp.c7bfeac3.svg', category: 'Languages' },
  { name: 'Rust', file: 'rust-color.dfb45ab8.svg', category: 'Languages' },
  { name: 'Go', file: 'go-logo-1.2ef003c4.svg', category: 'Languages' },
  { name: 'Ruby', file: 'ruby-color.14ae1397.svg', category: 'Languages' },
  { name: 'R', file: 'r-color.b0501bd9.svg', category: 'Languages' },
  
  // Frontend
  { name: 'HTML', file: 'html.ddc4d1fd.svg', category: 'Frontend' },
  { name: 'CSS', file: 'css.8b61d144.svg', category: 'Frontend' },
  { name: 'Vue.js', file: 'vue.f7fc640e.svg', category: 'Frontend' },
  { name: 'Tailwind CSS', file: 'tailwind.48de7862.svg', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', file: 'nodejs.bbff0dbe.svg', category: 'Backend' },
  { name: 'Ruby on Rails', file: 'rubyonrails-color.3a3836e3.svg', category: 'Backend' },
  
  // Databases
  { name: 'MongoDB', file: 'mongodb.82bd8e65.svg', category: 'Databases' },
  { name: 'SQLite', file: 'sqlite-color.48672f49.svg', category: 'Databases' },
  
  // DevOps & Cloud
  { name: 'Docker', file: 'docker-color.2607c921.svg', category: 'DevOps' },
  { name: 'Kubernetes', file: 'kubernetes-color.5172a517.svg', category: 'DevOps' },
  { name: 'AWS', file: 'amazonwebservices-color.15f5aad1.svg', category: 'DevOps' },
  
  // Tools & Platforms
  { name: 'Git', file: 'git-color.ea6fcd0a.svg', category: 'Tools' },
  { name: 'GitHub', file: 'github.2d3b3e24.svg', category: 'Tools' },
  { name: 'NPM', file: 'npm.3c9f59a3.svg', category: 'Tools' },
  { name: 'PyPI', file: 'pypi.f1fb4f6e.svg', category: 'Tools' },
  { name: 'Jupyter', file: 'jupyter-color.d5fdeac8.svg', category: 'Tools' },
  { name: 'Anaconda', file: 'anaconda-color.349e7eb1.svg', category: 'Tools' },
  { name: 'PyTorch', file: 'pytorch-color.b087d322.svg', category: 'Tools' },
  { name: 'LaTeX', file: 'latex-color.1816bdb8.svg', category: 'Tools' },
  { name: 'Markdown', file: 'markdown.93539b64.svg', category: 'Tools' },
  
  // Systems & OS
  { name: 'Linux', file: 'linux.854a4548.svg', category: 'Systems' },
  { name: 'Ubuntu', file: 'ubuntu-color.8b72d3d7.svg', category: 'Systems' },
  { name: 'Arch Linux', file: 'archlinux-color.d3790b66.svg', category: 'Systems' },
  { name: 'GNU', file: 'gnu-color.61d965bb.svg', category: 'Systems' },
  { name: 'Bash', file: 'gnubash-color.a03eb692.svg', category: 'Systems' },
  { name: 'Zsh', file: 'zsh-color.c917d8ff.svg', category: 'Systems' },
  { name: 'SSH', file: 'ssh-icon.c7ceccdd.svg', category: 'Systems' },
  { name: 'Raspberry Pi', file: 'raspberrypi-color.ac97d717.svg', category: 'Systems' },
  { name: 'Starship', file: 'starship-color.cd390ad0.svg', category: 'Systems' },
].map(tech => ({
  ...tech,
  icon: `/img/${tech.file}`,
  alt: `${tech.name} logo`
}));

const TechStackWrapper: React.FC<TechStackWrapperProps> = ({
  layout = 'grid',
  showLabels = true
}) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Mouse movement handler for sphere
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (layout === 'sphere') {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      setMousePos({ x, y });
    }
  };

  if (layout === 'sphere') {
    return (
      <div
        className="relative w-80 h-80 mx-auto"
      >
        {/* Spread out tech icons in multiple concentric circles */}
        <div className="relative h-full w-full">
          {techStack.map((tech, index) => {
            // Create multiple rings with different radii
            const totalItems = techStack.length;
            const ring = Math.floor(index / 8); // 8 items per ring for better spacing in smaller area
            const itemInRing = index % 8;
            const itemsInCurrentRing = Math.min(8, totalItems - ring * 8);

            // Calculate position for current ring - smaller radii to fit container
            const baseRadius = 40 + (ring * 35); // Smaller radius increments
            const baseAngle = (itemInRing / itemsInCurrentRing) * 2 * Math.PI;
            const ringDirection = ring % 2 === 0 ? 1 : -1; // Alternate ring directions
            const ringOffset = ring * 0.3; // Each ring starts at different position

            return (
              <motion.div
                key={tech.name}
                className="absolute"
                style={{
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: hoveredTech === tech.name ? 1.3 : 1,
                  rotate: 360 * ringDirection,
                  x: Math.cos(baseAngle + ringOffset) * baseRadius,
                  y: Math.sin(baseAngle + ringOffset) * baseRadius,
                }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.6,
                  scale: { type: "spring", damping: 15, stiffness: 80 },
                  rotate: {
                    duration: 10 + (ring * 2), // Different speeds for each ring
                    repeat: Infinity,
                    ease: "linear"
                  },
                  x: {
                    duration: 10 + (ring * 2),
                    repeat: Infinity,
                    ease: "linear"
                  },
                  y: {
                    duration: 10 + (ring * 2),
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
                onMouseEnter={() => setHoveredTech(tech.name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <motion.div
                  className="w-12 h-12 p-2 bg-white rounded-xl shadow-lg cursor-pointer relative border-2 border-gray-200 overflow-hidden"
                  whileHover={{
                    scale: 1.2,
                    borderColor: '#06B6D4',
                    boxShadow: '0 12px 25px rgba(6, 182, 212, 0.4)',
                  }}
                  animate={{
                    y: [0, -3, 0, 3, 0],
                    rotate: [-5, 5, -5],
                  }}
                  transition={{
                    y: {
                      duration: 3 + (index * 0.1),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.1
                    },
                    rotate: {
                      duration: 4 + (index * 0.1),
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    },
                    scale: { duration: 0.2 },
                    boxShadow: { duration: 0.3 }
                  }}
                >
                  <img
                    src={tech.icon}
                    alt={tech.alt}
                    className="w-full h-full object-contain"
                  />

                  {/* Enhanced tooltip */}
                  {hoveredTech === tech.name && showLabels && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50 shadow-2xl border border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{tech.name}</span>
                        <span className="text-gray-400 text-xs">({tech.category})</span>
                      </div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Subtle rotating background rings for visual appeal */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-cyan-200 border-opacity-30 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 border border-blue-200 border-opacity-20 rounded-full pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 border border-purple-200 border-opacity-15 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        />
      </div>
    );
  }

  if (layout === 'grid') {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3 p-6">
          {techStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              className="flex flex-col items-center group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className="w-12 h-12 p-2 bg-white rounded-lg shadow-lg border-2 border-gray-200 flex items-center justify-center overflow-hidden"
                whileHover={{ 
                  scale: 1.15,
                  borderColor: '#06B6D4',
                  boxShadow: '0 8px 20px rgba(6, 182, 212, 0.3)'
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={tech.icon} 
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
              
              {showLabels && (
                <motion.span
                  className="text-xs font-medium text-gray-700 mt-1 text-center opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredTech === tech.name ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {tech.name}
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (layout === 'flex') {
    return (
      <div className="w-full max-w-4xl mx-auto overflow-hidden">
        {/* Carousel container */}
        <motion.div
          className="flex gap-4 py-6"
          animate={{ x: [0, -1000, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {/* First set of logos */}
          {techStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-1`}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.02, duration: 0.4 }}
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className="w-14 h-14 p-2 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  scale: 1.2,
                  borderColor: '#06B6D4',
                  boxShadow: '0 8px 20px rgba(6, 182, 212, 0.3)'
                }}
                animate={{
                  y: [0, -4, 0, 4, 0]
                }}
                transition={{
                  scale: { duration: 0.2 },
                  y: {
                    duration: 3 + (index * 0.1),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                />

                {/* Tooltip */}
                {hoveredTech === tech.name && showLabels && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -15 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-gray-400 text-xs">({tech.category})</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}

          {/* Duplicate set for seamless loop */}
          {techStack.map((tech, index) => (
            <motion.div
              key={`${tech.name}-2`}
              className="flex flex-col items-center group cursor-pointer flex-shrink-0"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <motion.div
                className="w-14 h-14 p-2 bg-white rounded-xl shadow-lg border-2 border-gray-200 flex items-center justify-center relative overflow-hidden"
                whileHover={{
                  scale: 1.2,
                  borderColor: '#06B6D4',
                  boxShadow: '0 8px 20px rgba(6, 182, 212, 0.3)'
                }}
                animate={{
                  y: [0, -4, 0, 4, 0]
                }}
                transition={{
                  scale: { duration: 0.2 },
                  y: {
                    duration: 3 + (index * 0.1),
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1
                  }
                }}
              >
                <img
                  src={tech.icon}
                  alt={tech.alt}
                  className="w-full h-full object-contain"
                />

                {/* Tooltip */}
                {hoveredTech === tech.name && showLabels && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: -15 }}
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-gray-400 text-xs">({tech.category})</span>
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  }

  // Circular layout
  return (
    <div className="relative w-96 h-96 mx-auto">
      {/* Center piece */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[var(--tertiary)] rounded-full flex items-center justify-center z-10 shadow-lg"
        animate={{ 
          rotate: 360,
          scale: hoveredTech ? 1.1 : 1 
        }}
        transition={{ 
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.3 }
        }}
      >
        <span className="text-white font-bold text-sm">TECH</span>
      </motion.div>

      {/* Circularly arranged tech icons */}
      {techStack.slice(0, 16).map((tech, index) => {
        const angle = (index / 16) * 2 * Math.PI;
        const radius = 140;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={tech.name}
            className="absolute top-1/2 left-1/2"
            style={{
              transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={() => setHoveredTech(tech.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <motion.div
              className="w-12 h-12 p-2 bg-white rounded-lg shadow-lg cursor-pointer relative border-2 border-gray-200 overflow-hidden"
              whileHover={{ 
                scale: 1.3,
                borderColor: '#06B6D4'
              }}
              animate={{
                rotate: -360 * (index / 16) * 57.2958, // Keep icons upright
                y: Math.sin((Date.now() / 1000 + index) * 1.5) * 5
              }}
              transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 0.2 }
              }}
            >
              <img 
                src={tech.icon} 
                alt={tech.alt}
                className="w-full h-full object-contain"
              />
              
              {/* Tooltip */}
              {hoveredTech === tech.name && showLabels && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: -15 }}
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap z-50"
                >
                  {tech.name}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* Circular border */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-gray-300 border-opacity-30 rounded-full"></div>
    </div>
  );
};

export default TechStackWrapper;