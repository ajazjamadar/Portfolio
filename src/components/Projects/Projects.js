import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiEye } from 'react-icons/fi';
import './Projects.css';
import '../../styles/glassmorphism.css';

const Projects = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const projects = [
    {
      id: 1,
      title: "Website Audit Scanner (AuditX)",
      category: "fullstack",
      description: "MERN Stack website audit tool with modular scanners for security (OWASP), performance, SEO, and accessibility (WCAG).",
      longDescription: "Developed a comprehensive website audit tool during a MERN Stack hackathon. Features modular scanners for security vulnerabilities based on OWASP guidelines, performance optimization, SEO analysis, and accessibility compliance with WCAG standards. Integrated robust backend architecture with utilities and automated testing to ensure production-ready performance.",
      image: "/Screenshot 2025-09-02 180114.png",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "OWASP", "SEO Analysis", "WCAG", "Automated Testing"],
      githubUrl: "https://github.com/ajazjamadar/AuditX",
      liveUrl: "https://audit-x.vercel.app/",
      features: [
        "Security vulnerability scanning using OWASP standards",
        "Performance analysis and optimization suggestions",
        "SEO compliance checking and recommendations",
        "Accessibility audit based on WCAG guidelines",
        "Automated testing integration",
        "Modular scanner architecture",
        "Production-ready performance"
      ]
    },
    {
      id: 2,
      title: "Employee Stress Analysis",
      category: "dataanalysis",
      description: "Machine Learning model analyzing employee stress factors with 85% accuracy using Random Forest classifier.",
      longDescription: "Built a comprehensive Employee Stress Analysis model by cleaning and preprocessing employee data, engineering relevant features, and training multiple ML classifiers including Logistic Regression, Decision Tree, and Random Forest. Achieved approximately 85% accuracy with Random Forest, successfully identifying key stress drivers such as long working hours and lack of sleep.",
      image: "/Screenshot 2025-09-03 201842.png",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Logistic Regression", "Decision Tree", "Data Cleaning", "Feature Engineering"],
      githubUrl: "https://github.com/md-ejazuddin-jamadar/employee-stress-analysis",
      liveUrl: "https://employee-stress-analysis.streamlit.app",
      features: [
        "Data cleaning and preprocessing pipeline",
        "Feature engineering for stress indicators",
        "Multiple ML classifier comparison",
        "85% accuracy with Random Forest model",
        "Key stress driver identification",
        "Working hours and sleep pattern analysis",
        "Actionable insights for HR decisions"
      ]
    },
    {
      id: 3,
      title: "E-Commerce Profit Dashboard",
      category: "dataanalysis",
      description: "Interactive Power BI dashboard analyzing e-commerce profits with KPIs, slicers, and drilldowns across multiple dimensions.",
      longDescription: "Developed a comprehensive E-Commerce Profit Dashboard in Power BI featuring interactive KPIs, dynamic slicers, and detailed drilldowns across states, product categories, and payment modes. Uncovered critical business insights including 62% sales contribution from Clothing category, 43% COD usage preference, and seasonal profit patterns with Q4 recovery trends to guide strategic decision-making.",
      image: "/WhatsApp Image 2025-09-02 at 18.09.34_ec614395.jpg",
      technologies: ["Power BI", "DAX", "Data Modeling", "KPI Development", "Interactive Dashboards", "Business Intelligence"],
      githubUrl: "https://github.com/md-ejazuddin-jamadar/ecommerce-profit-dashboard",
      liveUrl: "https://app.powerbi.com/view?r=ecommerce-profit-dashboard",
      features: [
        "Interactive KPIs and performance metrics",
        "Dynamic slicers for multi-dimensional analysis",
        "State-wise profit and sales drilldowns",
        "Category performance analysis (62% from Clothing)",
        "Payment mode preference insights (43% COD)",
        "Seasonal trend analysis with Q4 recovery patterns",
        "Strategic decision-making insights"
      ]
    },
    {
      id: 4,
      title: "Stock Price Prediction Dashboard",
      category: "fullstack",
      description: "Modern interactive web application predicting stock prices using ML models with elegant dark theme, glass morphism effects, and real-time visualizations.",
      longDescription: "Developed a comprehensive Stock Price Prediction Dashboard featuring a professional black/grey theme with glass morphism effects. Built using Dash (Plotly framework) for full-stack integration, the application predicts stock prices using trained LSTM/MLP models and visualizes data through interactive Plotly charts. Includes multi-page navigation with dedicated sections for stock analysis, price predictions, and performance insights. Successfully deployed with responsive design supporting both desktop and mobile platforms.",
      image: "/Screenshot 2025-09-03 183538.png",
      technologies: ["Dash", "Plotly", "Python", "TensorFlow", "LSTM", "MLP", "Pandas", "NumPy", "Scikit-learn", "Flask", "Glass Morphism"],
      githubUrl: "https://github.com/ajazjamadar/stocks",
      liveUrl: "http://localhost:8080",
      features: [
        "Multi-page navigation with dedicated analysis sections",
        "Professional dark theme with glass morphism effects",
        "Interactive charts and real-time visualization using Plotly",
        "Stock analysis comparing Facebook, Apple, Tesla, Microsoft",
        "Price prediction using trained ML models (LSTM/MLP)",
        "Responsive layout for desktop and mobile compatibility",
        "Dynamic user-driven controls and interactions",
        "Dashboard overview with current vs predicted prices",
        "Stock comparison page with multi-stock analysis",
        "Prediction page with future price forecasting",
        "Insights page showing training vs validation performance",
        "Smooth animations and transitions for enhanced UX",
        "Data preprocessing with Pandas and NumPy integration",
        "Model deployment with saved_model.h5 integration"
      ]
    },
    {
      id: 5,
      title: "ClimaX – The Climax of Accurate Weather",
      category: "frontend",
      description: "Modern, responsive weather web application providing real-time weather data for any location worldwide with clean, interactive interface and dynamic weather icons.",
      longDescription: "Developed ClimaX, a comprehensive weather application that delivers real-time weather information through seamless API integration with OpenWeatherMap. The application features a clean, minimalistic interface with dynamic weather icons that change based on current conditions. Built with responsive design principles, the app provides instant weather updates including temperature, humidity, wind speed, and atmospheric conditions for any global location through an intuitive search functionality.",
      image: "/Screenshot 2025-09-03 184055.png",
      technologies: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API", "Responsive Design", "REST API", "JSON", "DOM Manipulation"],
      githubUrl: "https://github.com/ajazjamadar/climax-weather",
      liveUrl: "https://climax-weather.netlify.app",
      features: [
        "Real-time weather data with current temperature, humidity, and wind speed",
        "Global city search functionality for instant weather updates",
        "Dynamic weather icons that change based on current conditions",
        "Responsive design working seamlessly on desktop and mobile devices",
        "Clean, minimalistic interface for optimal user experience",
        "OpenWeatherMap API integration for accurate data",
        "Interactive search bar with real-time results",
        "Weather condition-based background changes",
        "Atmospheric pressure and visibility information",
        "Temperature feels-like calculations",
        "Wind direction and speed indicators",
        "Modern CSS styling with responsive grid layout",
        "Error handling for invalid city searches",
        "Loading states and smooth transitions"
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'dataanalysis', name: 'Data Analysis' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className={`projects section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="projects-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Featured Projects
          </motion.h2>
          
          <motion.p variants={itemVariants} className="projects-description">
            Showcasing professional projects in data analysis, machine learning, and full-stack development that demonstrate expertise in solving real-world business challenges
          </motion.p>
          
          <motion.div variants={itemVariants} className="project-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>
          
          <motion.div 
            className="projects-grid"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  className="project-card glass-card"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-image">
                    <img src={project.image} alt={project.title} />
                    <div className="project-overlay">
                      <button 
                        className="overlay-btn"
                        onClick={() => setSelectedProject(project)}
                      >
                        <FiEye /> View Details
                      </button>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <div className="project-header">
                      <h3 className="project-title">{project.title}</h3>
                      <div className="project-links">
                        <a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiGithub />
                        </a>
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="project-link"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                    
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag more">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                    
                    <div className="project-actions">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-project-view glass-button"
                      >
                        <FiExternalLink /> View Project
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-overlay glass-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="project-modal glass-modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              
              <div className="modal-image">
                <img src={selectedProject.image} alt={selectedProject.title} />
              </div>
              
              <div className="modal-content">
                <h3 className="modal-title">{selectedProject.title}</h3>
                
                <p className="modal-description">{selectedProject.longDescription}</p>
                
                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-tags">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  <a 
                    href={selectedProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FiGithub /> View Code
                  </a>
                  <a 
                    href={selectedProject.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
