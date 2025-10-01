import "./page.css";
import { useParams } from "react-router-dom";
import MetaComponent from "../components/meta";
import { motion } from "motion/react";
import { useState } from "react";
import TypewritingEffect from "../components/typewritingEffect";

function ProjectPage() {
  const { slug } = useParams();
  const [showTypewriter, setShowTypewriter] = useState(false);

  // Devon's actual project data
  const projects: Record<string, any> = {
    "predictive-analytics-dashboard": {
      title: "Predictive Analytics Dashboard",
      summary: "An interactive dashboard for retail sales forecasting using machine learning algorithms to improve inventory decision-making.",
      description: `
        ## Overview
        
        A comprehensive predictive analytics solution built with Python and Streamlit that enables retail businesses to forecast sales using historical data. The dashboard leverages a Random Forest Regressor to provide accurate predictions and actionable insights.
        
        ## Key Features
        
        - **Interactive Predictions**: Dynamic user input for custom sales forecasting
        - **Feature Importance Visualization**: Auto-generated charts showing which factors most influence sales
        - **Historical Data Analysis**: Trend analysis using Brazilian retail sales dataset
        - **Real-time Dashboard**: Streamlit-powered interface for immediate insights
        - **Data-Driven Insights**: Improved inventory decision-making through sales trend analysis
        
        ## Technologies Used
        
        - **Backend**: Python 3.8+
        - **Machine Learning**: Scikit-learn (Random Forest Regressor)
        - **Data Processing**: Pandas for data manipulation
        - **Visualization**: Matplotlib, Seaborn
        - **Frontend**: Streamlit for interactive dashboard
        - **Deployment**: Virtual environment setup
        
        ## Technical Implementation
        
        The dashboard processes historical sales data through several key parameters:
        - Stock levels and pricing data
        - Seasonal factors (month, day)
        - Moving averages (7-day trends)
        - Previous day sales performance
        - Cumulative sales history
        
        ## Results & Impact
        
        Successfully created a tool that enables data-driven inventory management decisions by providing accurate sales forecasting with clear feature importance rankings, helping businesses optimize stock levels and reduce waste.
      `,
      tags: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib"],
      liveLink: null,
      githubLink: "https://github.com/Devonav/predictive-analytics-dashboard"
    },
    "blinking-eyes-tft": {
      title: "Blinking Eyes on ESP32-S3 T-Display",
      summary: "An animated eye-blinking system on LILYGO ESP32-S3 featuring dynamic animations, mood-based color shifts, and interactive controls.",
      description: `
        ## Overview
        
        A creative embedded systems project that brings life to the LILYGO T-Display-S3 through animated, blinking eyes. This project demonstrates advanced embedded programming with real-time graphics and user interaction.
        
        ## Key Features
        
        - **Smooth Animations**: Realistic blinking and pupil tracking movements
        - **Dynamic Customization**: Adjustable eye spacing, blink speed, and pupil size
        - **Mood-Based Colors**: Color shifts that reflect different emotional states
        - **Interactive Control**: Serial monitor commands for real-time adjustments
        - **Cross-Library Support**: Compatible with both TFT_eSPI and Adafruit ST7789 drivers
        - **Tracking Mode**: Optional pupil tracking that follows cursor movement
        
        ## Hardware Specifications
        
        - **Board**: LILYGO T-Display-S3 ESP32-S3
        - **Display**: 1.9" ST7789 TFT (320x170 resolution)
        - **Microcontroller**: ESP32-S3 with dual-core processing
        - **Memory**: Sufficient for smooth real-time animations
        
        ## Technical Implementation
        
        - **Language**: C++ with Arduino framework
        - **Graphics Library**: TFT_eSPI for optimized display rendering
        - **Animation Engine**: Custom timing system for smooth eye movements
        - **User Interface**: Serial communication for runtime configuration
        - **Memory Management**: Efficient buffer handling for smooth graphics
        
        ## Interactive Controls
        
        - Press 't' in Serial Monitor to toggle tracking mode
        - Customize blink patterns and timing
        - Adjust eye dimensions and spacing in real-time
        - Control mood-based color variations
        
        ## Technical Achievements
        
        Successfully created a lifelike animation system on constrained hardware, demonstrating expertise in embedded graphics programming, real-time systems, and creative hardware interfacing.
      `,
      tags: ["C++", "Arduino", "TFT_eSPI", "Adafruit ST7789", "ESP32"],
      liveLink: null,
      githubLink: "https://github.com/Devonav/BlinkingEyesTFT"
    },
    "passport-buddy-flutter": {
      title: "Passport Buddy - Social Travel Platform",
      summary: "Enterprise-grade social travel platform with real-time flight tracking, automated boarding pass OCR, and comprehensive travel analytics. Group collaboration project.",
      description: `
        ## Project Overview
        
        Passport Buddy is a comprehensive social travel platform that combines cutting-edge technology with user-centric design to create an enterprise-grade solution for modern travelers. This collaborative project showcases full-stack development across web and mobile platforms.
        
        ## Key Features
        
        - **Automated Boarding Pass OCR**: 98% accuracy rate for automatic ticket processing
        - **Real-time Flight Tracking**: Live updates on flight status and delays
        - **Trip Planning & Analytics**: Comprehensive travel insights and planning tools
        - **Social Travel Timeline**: Media sharing and travel story documentation
        - **Travel Companion Matching**: Connect with fellow travelers
        - **Location-based Recommendations**: Personalized travel suggestions
        
        ## Technical Architecture
        
        ### Frontend Technologies
        - **Web**: React 18, TypeScript, Vite build system
        - **Styling**: Tailwind CSS for responsive design
        - **Mobile**: Flutter 3.0 with Provider state management
        - **Performance**: Progressive Web App with 95+ Lighthouse score
        
        ### Backend Infrastructure
        - **Server**: Node.js with Express.js framework
        - **API**: GraphQL for efficient data querying
        - **Real-time**: Socket.io for live updates
        - **Database**: MongoDB with Redis caching layer
        - **DevOps**: Docker containerization, GitHub Actions CI/CD
        
        ## My Contributions
        
        As part of the development team, I focused on:
        - **Mobile Development**: Flutter application development and integration
        - **Cross-platform Compatibility**: Ensuring seamless experience across devices
        - **State Management**: Implementing Provider pattern for efficient data flow
        - **Performance Optimization**: Contributing to the < 1.5s First Contentful Paint
        
        ## Platform Support
        
        - **Web**: Progressive Web App
        - **iOS**: Native support for iOS 12.0+
        - **Android**: Native support for API level 23+
        - **Responsive**: Optimized for all screen sizes
        
        ## Security & Performance
        
        - **Authentication**: JWT-based secure authentication
        - **Access Control**: Role-based permissions system
        - **Encryption**: AES-256 data protection
        - **Scale**: Supports 10,000+ concurrent users
        - **Protection**: Rate limiting and DDoS prevention
        
        ## Technical Achievements
        
        Successfully contributed to a enterprise-grade application that demonstrates expertise in mobile development, cross-platform solutions, and collaborative software development using modern frameworks and best practices.
      `,
      tags: ["Flutter", "React", "Node.js", "MongoDB", "Socket.io", "TypeScript"],
      liveLink: null,
      githubLink: "https://github.com/Izaacapp/flutterrr"
    },
    "stock-market-prediction-ml": {
      title: "Stock Market Prediction ML",
      summary: "A comprehensive machine learning system for predicting stock price movements using advanced technical analysis and multiple ML algorithms.",
      description: `
        ## Project Overview
        
        A sophisticated Python-based machine learning project that combines automated data collection, comprehensive feature engineering, and predictive modeling to forecast stock market movements. This project demonstrates advanced knowledge of financial markets, technical analysis, and machine learning techniques.
        
        ## Key Features
        
        ### Automated Data Collection
        - **Yahoo Finance API Integration**: Real-time stock data retrieval
        - **Multiple Timeframes**: Supports 1m, 5m, 1h, 1d, 1wk, 1mo intervals
        - **Configurable Periods**: Flexible historical data collection
        - **Data Validation**: Robust error handling and data cleaning
        
        ### Advanced Feature Engineering
        - **60+ Technical Indicators**: Comprehensive market analysis metrics
        - **Moving Averages**: Simple, exponential, and weighted calculations
        - **Momentum Indicators**: RSI, MACD, Stochastic oscillators
        - **Volatility Metrics**: Bollinger Bands, ATR, volatility ratios
        - **Price Action Analysis**: Support/resistance levels and pattern recognition
        
        ## Machine Learning Implementation
        
        ### Model Selection
        - **Classification Models**: Random Forest, Logistic Regression, SVM
        - **Regression Models**: Price prediction with continuous values
        - **Time Series Validation**: Proper cross-validation for temporal data
        - **Feature Importance**: Analysis of most predictive indicators
        
        ### Performance Metrics
        - **Accuracy**: Achieved 52-58% in daily direction prediction
        - **Risk Assessment**: Comprehensive evaluation of prediction reliability
        - **Backtesting**: Historical performance validation
        
        ## Technical Architecture
        
        ### Core Technologies
        - **Python**: Primary development language
        - **yfinance**: Yahoo Finance data API
        - **Pandas & NumPy**: Data manipulation and numerical computing
        - **Scikit-learn**: Machine learning algorithms and tools
        - **Matplotlib/Seaborn**: Data visualization and analysis
        
        ### Project Structure
        - **Modular Design**: Clean separation of concerns
        - **API Interface**: Both command-line and Python API access
        - **Jupyter Integration**: Interactive analysis capabilities
        - **Documentation**: Comprehensive usage examples
        
        ## Educational Value
        
        This project serves as an educational exploration of:
        - **Financial Market Analysis**: Understanding market dynamics
        - **Technical Analysis**: Traditional trading indicators in ML context
        - **Time Series Prediction**: Challenges of sequential data modeling
        - **Feature Engineering**: Creating meaningful predictors from raw data
        
        ## Future Enhancements
        
        - **Deep Learning Integration**: LSTM and transformer models
        - **Alternative Data Sources**: News sentiment, economic indicators
        - **Real-time Prediction**: Live trading signal generation
        - **Portfolio Optimization**: Multi-asset allocation strategies
        
        ## Important Disclaimer
        
        This project is developed strictly for educational and research purposes. Stock market prediction is inherently difficult and uncertain. The results should not be considered as financial advice or used for actual trading decisions.
      `,
      tags: ["Python", "Scikit-learn", "yfinance", "NumPy", "Pandas", "Machine Learning"],
      liveLink: null,
      githubLink: "https://github.com/Devonav/stock-market-prediction-ml"
    },
    "github-activity-contributions": {
      title: "GitHub Activity Contributions",
      summary: "A comprehensive showcase of development activity, commit patterns, and collaborative contributions across multiple repositories and projects.",
      description: `
        ## Overview
        
        My GitHub profile reflects a consistent and diverse development journey spanning multiple programming languages, frameworks, and project types. This contributions overview showcases my commitment to continuous learning, collaborative development, and maintaining active engagement in software development.
        
        ## Development Activity Highlights
        
        ### Consistent Contributions
        - **Regular Commits**: Maintaining an active development schedule with meaningful contributions
        - **Project Diversity**: Working across machine learning, web development, mobile apps, and embedded systems
        - **Language Variety**: Demonstrating proficiency in Python, JavaScript/TypeScript, C++, Dart (Flutter), and more
        - **Collaborative Development**: Contributing to both personal and team projects
        
        ### Repository Categories
        
        #### Machine Learning & Data Science
        - **Predictive Analytics**: Sales forecasting and business intelligence projects
        - **Stock Market Analysis**: Financial data processing and predictive modeling
        - **Research Projects**: Experimental ML implementations and data exploration
        
        #### Web Development
        - **Full-Stack Applications**: Modern web applications using React, Node.js, and TypeScript
        - **Portfolio Development**: Personal branding and professional presentation
        - **API Development**: RESTful services and backend implementations
        
        #### Mobile Development
        - **Flutter Applications**: Cross-platform mobile app development
        - **Collaborative Projects**: Team-based mobile application development
        - **UI/UX Implementation**: Focus on user experience and interface design
        
        #### Embedded Systems
        - **ESP32 Projects**: Hardware programming and IoT implementations
        - **Arduino Development**: Creative hardware solutions and prototyping
        - **Graphics Programming**: Display drivers and animation systems
        
        ## Contribution Patterns
        
        ### Code Quality Focus
        - **Documentation**: Comprehensive README files and code documentation
        - **Best Practices**: Following industry standards and clean code principles
        - **Version Control**: Effective use of Git branching and collaboration workflows
        - **Testing**: Implementation of testing strategies where applicable
        
        ### Learning & Growth
        - **Technology Exploration**: Regular adoption of new frameworks and tools
        - **Skill Development**: Continuous improvement across different programming domains
        - **Problem Solving**: Tackling diverse technical challenges and implementations
        - **Knowledge Sharing**: Contributing to open-source understanding and documentation
        
        ## Repository Structure
        
        ### Personal Projects
        - **Individual Innovation**: Self-directed projects demonstrating creativity and technical skill
        - **Learning Implementations**: Educational projects exploring new technologies
        - **Portfolio Pieces**: Showcase projects highlighting specific competencies
        
        ### Collaborative Work
        - **Team Contributions**: Active participation in group development efforts
        - **Code Reviews**: Engaging in collaborative code improvement processes
        - **Knowledge Transfer**: Sharing expertise and learning from team members
        
        ## Technical Achievements
        
        My GitHub activity demonstrates a well-rounded software development approach, showcasing the ability to work independently and collaboratively across diverse technical domains while maintaining consistent quality and documentation standards.
        
        ## Development Philosophy
        
        - **Continuous Learning**: Always exploring new technologies and methodologies
        - **Quality Over Quantity**: Focus on meaningful, well-documented contributions
        - **Collaborative Spirit**: Active engagement in team development and knowledge sharing
        - **Innovation Focus**: Pursuing creative solutions to technical challenges
      `,
      tags: ["GitHub", "Git", "Open Source", "Development", "Version Control"],
      liveLink: "https://github.com/Devonav",
      githubLink: "https://github.com/Devonav"
    }
  };

  const project = projects[slug as string] || {
    title: "Project Not Found",
    summary: "The requested project could not be found.",
    description: "Please check the project URL or return to the projects list.",
    tags: [],
    liveLink: null,
    githubLink: null
  };

  return (
    <>
      <MetaComponent
        pageTitle={project.title}
        pageDescription={project.summary}
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
            <motion.h1 
              className="project-page-name mb-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{
                scale: 1.02,
                color: "var(--tertiary)",
                transition: { duration: 0.3 }
              }}
            >
              {showTypewriter ? (
                <TypewritingEffect 
                  text={project.title} 
                  delay={400}
                  speed={60}
                />
              ) : (
                project.title
              )}
            </motion.h1>
            <motion.p 
              className="project-page-summary text-lg opacity-80 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{
                x: 5,
                transition: { duration: 0.3 }
              }}
            >
              {project.summary}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-2 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {project.tags.map((tag, index) => (
                <motion.span
                  key={tag}
                  className="project-page-tags text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
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
            
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              {project.liveLink && (
                <motion.a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-[var(--tertiary)] text-white hover:bg-opacity-90 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  Live Demo
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 border-2 border-[var(--text)] hover:bg-[var(--text)] hover:text-[var(--main)] transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Code
                </motion.a>
              )}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="project-info prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            dangerouslySetInnerHTML={{
              __html: project.description
                .replace(/\n/g, '<br>')
                .replace(/## (.*?)<br>/g, '<h2>$1</h2>')
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                .replace(/- (.*?)<br>/g, '<li>$1</li>')
            }}
          />
        </div>
      </div>
    </>
  );
}

export default ProjectPage;