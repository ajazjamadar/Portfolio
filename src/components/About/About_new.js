import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiUsers, FiAward, FiCoffee, FiDownload } from 'react-icons/fi';
import './About.css';

const About = ({ darkMode }) => {
  const [ref] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '50px 0px',
  });

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

  return (
    <section id="about" className={`about section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="about-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            About Me
          </motion.h2>
          
          <div className="about-grid">
            <motion.div variants={itemVariants} className="about-text">
              <motion.h3 
                variants={itemVariants}
                className="about-subtitle"
              >
                Data Analyst & Full Stack Web Developer & Business Analyst
              </motion.h3>
              
              <motion.p variants={itemVariants} className="about-description">
                I'm MD EJAZUDDIN JAMADAR, a Data Analyst, Full Stack Web Developer, and Business Analyst.
              </motion.p>
              
              <motion.p variants={itemVariants} className="about-description">
                Passionate about combining analytics and development to create impactful, end-to-end solutions in fast-paced environments. 
                With a Bachelor's degree in Information Science & Engineering and extensive hands-on experience, I have successfully delivered 25+ projects 
                ranging from comprehensive data analytics dashboards to full-stack web applications. My expertise spans across the complete data lifecycle - 
                from data collection and cleaning to advanced analytics, visualization, and deployment of machine learning models.
              </motion.p>
              
              <motion.p variants={itemVariants} className="about-description">
                As a proven leader, I have progressed through strategic roles from Joint Secretary to Vice President in my department, demonstrating 
                exceptional organizational skills, strategic thinking, and the ability to bridge communication between students and faculty. 
                My leadership experience includes spearheading media campaigns as IEEE SDIT Student Chapter's Media and Publicity Head, 
                where I amplified organizational visibility and built strong engagement across platforms.
              </motion.p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-skills-sidebar">
              <motion.div variants={itemVariants} className="tech-stack">
                <h4>Technical Skills</h4>
                <div className="skill-categories">
                  <div className="skill-category">
                    <h5>Frontend</h5>
                    <ul>
                      <li>React.js</li>
                      <li>JavaScript</li>
                      <li>HTML5 & CSS3</li>
                      <li>Bootstrap</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h5>Backend</h5>
                    <ul>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>Python</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                  <div className="skill-category">
                    <h5>Data Analytics</h5>
                    <ul>
                      <li>Power BI</li>
                      <li>Tableau</li>
                      <li>SQL</li>
                      <li>Excel</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="quick-stats">
                <h4>Quick Stats</h4>
                <div className="stat-items">
                  <div className="stat-item">
                    <div className="stat-number">25+</div>
                    <div className="stat-label">Projects Completed</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">8.2</div>
                    <div className="stat-label">CGPA</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">3+</div>
                    <div className="stat-label">Leadership Roles</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="about-sections-horizontal">
            <motion.div variants={itemVariants} className="about-education">
              <h4>Education:</h4>
              <ul>
                <li><strong>B.E Information Science & Engineering (2022-2026)</strong> - Shree Devi Institute Of Technology, Mangalore | CGPA: 8.2 / 10</li>
                <li><strong>Pre University College - PCMB (2020-2022)</strong> - Best Pre University College, Raichur | Percentage: 70%</li>
                <li><strong>High School (2020)</strong> - M.AM High School, City Hutti Gold Mines</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-awards">
              <h4>Awards:</h4>
              <ul>
                <li><strong>2nd Place - Technical Round (2025):</strong> Problem-solving skills in competitive coding</li>
                <li><strong>2nd Place - Technical Round (2025):</strong> Critical thinking and pattern recognition</li>
                <li><strong>Hackathon Participant – Hack Yugma (2025):</strong> Cybersecurity solution development</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-certifications">
              <h4>Certifications:</h4>
              <ul>
                <li><strong>HTML5 (2025):</strong> Semantic structure and responsive design</li>
                <li><strong>CSS3 (2025):</strong> Modern UI design techniques</li>
                <li><strong>JavaScript (2025):</strong> DOM manipulation and interactive components</li>
              </ul>
            </motion.div>
            
            <motion.div variants={itemVariants} className="about-leadership">
              <h4>Achievements:</h4>
              <ul>
                <li><strong>Vice President (2025-2026)</strong><br />
                    <em>Information Science & Engineering</em><br />
                    Leading strategic direction and mentoring junior leaders</li>
                
                <li><strong>Media Head (2024-2025)</strong><br />
                    <em>IEEE SDIT Student Chapter</em><br />
                    Spearheaded media campaigns and visibility initiatives</li>
                
                <li><strong>Joint Secretary (2023-2024)</strong><br />
                    <em>Information Science & Engineering</em><br />
                    Coordinated departmental activities and communication</li>
              </ul>
            </motion.div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="about-cta">
            <motion.a
              href="#contact"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let's Work Together
            </motion.a>
            <motion.a
              href="/MdEjazuddinJamadar.Resume.pdf"
              download="MdEjazuddinJamadar.Resume.pdf"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download Resume
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
