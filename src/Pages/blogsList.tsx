import "./page.css";
import { Link } from "react-router-dom";
import MetaComponent from "../components/meta";
import { motion } from "motion/react";
import { useState } from "react";
import TypewritingEffect from "../components/typewritingEffect";

// Sample blog data
const blogs = [
  {
    id: "sample-blog-1",
    title: "Getting Started with Modern Web Development",
    excerpt: "A comprehensive guide to starting your journey in modern web development with the latest tools and best practices.",
    date: "2024-01-15",
    tags: ["Web Development", "JavaScript", "React"]
  },
  {
    id: "sample-blog-2", 
    title: "The Art of Clean Code",
    excerpt: "Exploring the principles and practices that make code more readable, maintainable, and enjoyable to work with.",
    date: "2024-01-10",
    tags: ["Programming", "Best Practices", "Code Quality"]
  },
  {
    id: "sample-blog-3",
    title: "Building Responsive Layouts with CSS Grid",
    excerpt: "Learn how to create flexible and responsive layouts using CSS Grid, with practical examples and techniques.",
    date: "2024-01-05", 
    tags: ["CSS", "Layout", "Responsive Design"]
  }
];

function BlogsListPage() {
  const [showTypewriter, setShowTypewriter] = useState(false);
  const [hoveredBlog, setHoveredBlog] = useState<string | null>(null);

  return (
    <>
      <MetaComponent
        pageTitle="Blog"
        pageDescription="Thoughts, insights, and tutorials about web development, programming, and technology."
      />
      <div className="flex flex-col min-h-dvh p-8 pt-24">
        <div className="max-w-4xl mx-auto w-full">
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onAnimationComplete={() => setShowTypewriter(true)}
          >
            <h1 className="about-head mb-4">
              {showTypewriter ? (
                <TypewritingEffect 
                  text="BLOG" 
                  delay={300}
                  speed={100}
                />
              ) : (
                <span style={{ opacity: 0 }}>BLOG</span>
              )}
            </h1>
            <motion.p 
              className="text-lg opacity-70"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Thoughts, insights, and tutorials about web development and technology.
            </motion.p>
          </motion.div>
          
          <div className="grid gap-8">
            {blogs.map((blog, index) => {
              const isHovered = hoveredBlog === blog.id;
              return (
                <motion.div
                  key={blog.id}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  onMouseEnter={() => setHoveredBlog(blog.id)}
                  onMouseLeave={() => setHoveredBlog(null)}
                >
                  {/* Grid overlay */}
                  <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="grid grid-cols-10 grid-rows-4 h-full gap-1 p-4">
                      {Array.from({ length: 40 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="bg-[var(--tertiary)] opacity-20"
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{
                            scale: isHovered ? [0, 1, 0.8] : 0,
                            opacity: isHovered ? [0, 0.3, 0.1] : 0,
                          }}
                          transition={{
                            duration: 0.6,
                            delay: isHovered ? i * 0.02 : 0,
                            ease: "easeOut"
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="group block relative z-20"
                  >
                    <motion.div
                      className="p-6 border border-gray-800 hover:border-[var(--tertiary)] transition-all duration-300"
                      animate={{
                        scale: isHovered ? 1.02 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
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
                        </div>
                        
                        <div>
                          <motion.h2 
                            className="blog-title group-hover:text-[var(--tertiary)] transition-colors mb-3"
                            animate={{
                              x: isHovered ? 10 : 0,
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            {isHovered ? (
                              <TypewritingEffect 
                                text={blog.title}
                                speed={50}
                              />
                            ) : (
                              blog.title
                            )}
                          </motion.h2>
                          
                          <motion.p 
                            className="text-base mb-4 opacity-80"
                            whileHover={{
                              x: 5,
                              transition: { duration: 0.3 }
                            }}
                          >
                            {blog.excerpt}
                          </motion.p>
                          
                          <div className="flex flex-wrap gap-2">
                            {blog.tags.map((tag, tagIndex) => (
                              <motion.span
                                key={tag}
                                className="project-tags text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                                animate={{ 
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
                    </motion.div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsListPage;