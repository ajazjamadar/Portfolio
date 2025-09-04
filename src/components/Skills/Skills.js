import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaGitAlt, 
  FaHtml5, 
  FaCss3Alt,
  FaDatabase,
  FaJava
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiTableau,
  SiPowerbi,
  SiJupyter,
  SiC,
  SiMicrosoftexcel,
  SiMysql,
  SiGithub
} from 'react-icons/si';
import './Skills.css';
import '../../styles/glassmorphism.css';

const Skills = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const skillCategories = [
    {
      title: "Programming",
      skills: [
        { name: "Python", icon: FaPython, color: "#3776AB" },
        { name: "Java", icon: FaJava, color: "#F89820" },
        { name: "C", icon: SiC, color: "#00599C" },
      ]
    },
    {
      title: "Data Visualization Tools",
      skills: [
        { name: "Power BI", icon: SiPowerbi, color: "#F2C811" },
        { name: "Tableau", icon: SiTableau, color: "#E97627" },
        { name: "MS Excel", icon: SiMicrosoftexcel, color: "#217346" },
        { name: "Matplotlib", icon: FaPython, color: "#11557C" },
        { name: "Seaborn", icon: FaPython, color: "#3776AB" },
      ]
    },
    {
      title: "Analytical Abilities",
      skills: [
        { name: "Data Cleaning", icon: FaDatabase, color: "#4285F4" },
        { name: "Exploratory Data Analysis (EDA)", icon: SiJupyter, color: "#F37626" },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#181717" },
      ]
    }
  ];

  return (
    <section id="skills" className={`skills section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="skills-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Skills & Technologies
          </motion.h2>
          
          <motion.p variants={itemVariants} className="skills-description">
            Here are the technologies and tools I use for data analysis and full-stack development
          </motion.p>
          
          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="skill-category glass-card"
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      className="skill-item"
                      whileHover={{ scale: 1.05, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="skill-info">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          <skill.icon />
                        </div>
                        <div className="skill-details">
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div variants={itemVariants} className="skills-summary">
            <div className="summary-card">
              <h4>Currently Learning</h4>
              <div className="learning-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">AWS</span>
                <span className="tag">Apache Spark</span>
                <span className="tag">Data Science</span>
              </div>
            </div>
            
            <div className="summary-card">
              <h4>Interests</h4>
              <div className="learning-tags">
                <span className="tag">Data Visualization</span>
                <span className="tag">Business Intelligence</span>
                <span className="tag">Cloud Computing</span>
                <span className="tag">Predictive Analytics</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
