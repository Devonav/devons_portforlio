import "./page.css";
import { useParams } from "react-router-dom";
import MetaComponent from "../components/meta";
import { motion } from "motion/react";
import { useState } from "react";
import TypewritingEffect from "../components/typewritingEffect";

function BlogPage() {
  const { slug } = useParams();
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // Sample blog data - in a real app this would come from a data source
  const blog = {
    title: "Sample Blog Post",
    date: "2024-01-15",
    content: `
      This is a sample blog post demonstrating the blog layout and styling of the portfolio website.
      
      ## Introduction
      
      Welcome to this sample blog post. This demonstrates how blog content is displayed 
      within the portfolio structure, including proper typography, spacing, and readability.
      
      ## Main Content
      
      Here's where the main content of the blog post would go. The styling supports:
      
      - **Bold text** for emphasis
      - *Italic text* for subtle emphasis  
      - Lists for organizing information
      - Code snippets and technical content
      - Links to external resources
      
      ### Subsections
      
      The blog supports multiple heading levels for organizing content hierarchically.
      This makes it easy to create well-structured, readable articles.
      
      ## Code Examples
      
      The blog also supports code blocks for technical content:
      
      \`\`\`javascript
      function greet(name) {
        return \`Hello, \${name}!\`;
      }
      \`\`\`
      
      ## Conclusion
      
      This demonstrates the blog functionality of the portfolio website. The styling 
      is clean, readable, and maintains consistency with the overall design system.
    `,
    tags: ["Web Development", "Portfolio", "React"]
  };

  return (
    <>
      <MetaComponent
        pageTitle={blog.title}
        pageDescription="A sample blog post demonstrating the blog layout and styling."
      />
      <div className="flex flex-col min-h-dvh p-8 pt-24">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setShowTypewriter(true)}
          >
            <motion.div 
              className="mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.span 
                className="text-sm opacity-60"
                whileHover={{
                  color: "var(--tertiary)",
                  x: 5,
                  transition: { duration: 0.3 }
                }}
              >
                {new Date(blog.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </motion.span>
            </motion.div>
            
            <motion.h1 
              className="blog-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{
                scale: 1.02,
                color: "var(--tertiary)",
                transition: { duration: 0.3 }
              }}
            >
              {showTypewriter ? (
                <TypewritingEffect 
                  text={blog.title} 
                  delay={600}
                  speed={80}
                />
              ) : (
                blog.title
              )}
            </motion.h1>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {blog.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="project-tags text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                  whileHover={{
                    backgroundColor: "var(--tertiary)",
                    color: "var(--main)",
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="blog-content prose prose-lg max-w-none relative"
            onMouseEnter={() => setHoveredSection('content')}
            onMouseLeave={() => setHoveredSection(null)}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            {/* Grid overlay for content */}
            <motion.div
              className="absolute inset-0 z-10 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{
                opacity: hoveredSection === 'content' ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-12 grid-rows-16 h-full gap-1 p-4">
                {Array.from({ length: 192 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="bg-[var(--tertiary)] opacity-20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: hoveredSection === 'content' ? [0, 1, 0.8] : 0,
                      opacity: hoveredSection === 'content' ? [0, 0.2, 0.05] : 0,
                    }}
                    transition={{
                      duration: 0.8,
                      delay: hoveredSection === 'content' ? i * 0.005 : 0,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative z-20"
              animate={{
                scale: hoveredSection === 'content' ? 1.01 : 1,
              }}
              transition={{ duration: 0.5 }}
              dangerouslySetInnerHTML={{ 
                __html: blog.content
                  .replace(/\n\n/g, '</p><p>')
                  .replace(/^/, '<p>')
                  .replace(/$/, '</p>')
                  .replace(/## (.*?)<\/p>/g, '</p><h2>$1</h2>')
                  .replace(/### (.*?)<\/p>/g, '</p><h3>$1</h3>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>')
                  .replace(/- (.*?)<\/p>/g, '</p><li>$1</li>')
                  .replace(/```javascript\n(.*?)\n```/gs, '<pre><code>$1</code></pre>')
              }} 
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default BlogPage;