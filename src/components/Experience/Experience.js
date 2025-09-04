import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import './Experience.css';

const Experience = ({ darkMode }) => {
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

  const experiences = [
    {
      title: "General Secretary",
      company: "Information Science & Engineering Department",
      location: "Raichur Institute of Technology",
      duration: "2024 - 2025",
      type: "Leadership",
      description: "Coordinated departmental activities and communication between students and faculty. Organized technical events, workshops, and seminars. Managed departmental committees and facilitated smooth operation of academic activities.",
      technologies: ["Leadership", "Event Management", "Communication", "Project Coordination", "Team Building"],
      achievements: [
        "Successfully organized 5+ technical workshops and seminars",
        "Improved department-student communication efficiency by 60%",
        "Led a team of 15+ student volunteers for various events"
      ]
    },
    {
      title: "Data Analyst & Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      duration: "2023 - Present",
      type: "Full-time",
    image: "/WhatsApp Image 2025-09-01 at 15.23.49_03a665de.jpg", // Updated line
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "TypeScript", "AWS", "Python", "SQL", "Tableau", "Power BI"],
      achievements: [
        "Improved application performance by 40% through code optimization",
        "Led a team of 3 developers on a major project",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      duration: "2022 - 2023",
      type: "Full-time",
      description: "Developing and maintaining web applications using MERN stack and performing data analysis to drive business decisions. Building responsive user interfaces, RESTful APIs, and creating data visualizations. Collaborated with cross-functional teams to deliver high-quality software solutions and actionable insights.",
      technologies: ["React.js", "JavaScript", "Tailwind CSS", "Figma", "Git"],
      achievements: [
        "Delivered 15+ responsive web applications",
        "Reduced page load time by 50% through optimization",
        "Mentored junior developers and conducted code reviews"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Digital Agency Pro",
      location: "San Francisco, CA",
      duration: "2021 - 2022",
      type: "Internship",
      description: "Gained hands-on experience in web development, working on client projects and learning industry best practices. Contributed to both frontend and backend development tasks.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
      achievements: [
        "Successfully completed 10+ client projects",
        "Learned version control with Git and GitHub",
        "Participated in agile development process"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution: "Raichur Institute of Technology",
      location: "Raichur, Karnataka",
      duration: "2019 - 2023",
      gpa: "8.5/10.0",
      relevant: ["Data Structures", "Algorithms", "Database Management", "Statistics", "Machine Learning", "Web Development"]
    }
  ];

  return (
    <section id="experience" className={`experience section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="experience-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Experience & Education
          </motion.h2>
          
          <div className="experience-grid">
            {/* Work Experience */}
            <motion.div variants={itemVariants} className="experience-section">
              <h3 className="subsection-title">
                <FiBriefcase className="subsection-icon" />
                Work Experience
              </h3>
              
              <div className="timeline">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="timeline-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="timeline-marker">
                      <div className="timeline-dot"></div>
                      {index < experiences.length - 1 && <div className="timeline-line"></div>}
                    </div>
                    
                    <div className="timeline-content">
                      <div className="experience-header">
                        <h4 className="job-title">{exp.title}</h4>
                        <span className="job-type">{exp.type}</span>
                      </div>
                      
                      <div className="company-info">
                        <h5 className="company-name">{exp.company}</h5>
                        <div className="job-meta">
                          <span className="duration">
                            <FiCalendar /> {exp.duration}
                          </span>
                          <span className="location">
                            <FiMapPin /> {exp.location}
                          </span>
                        </div>
                      </div>
                      
                      <p className="job-description">{exp.description}</p>
                      
                      <div className="technologies">
                        <h6>Technologies:</h6>
                        <div className="tech-tags">
                          {exp.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="tech-tag">{tech}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="achievements">
                        <h6>Key Achievements:</h6>
                        <ul>
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Education */}
            <motion.div variants={itemVariants} className="education-section">
              <h3 className="subsection-title">
                <FiBriefcase className="subsection-icon" />
                Education
              </h3>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="education-card"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="education-header">
                    <h4 className="degree">{edu.degree}</h4>
                    <span className="gpa">GPA: {edu.gpa}</span>
                  </div>
                  
                  <h5 className="institution">{edu.institution}</h5>
                  
                  <div className="edu-meta">
                    <span className="duration">
                      <FiCalendar /> {edu.duration}
                    </span>
                    <span className="location">
                      <FiMapPin /> {edu.location}
                    </span>
                  </div>
                  
                  <div className="relevant-courses">
                    <h6>Relevant Coursework:</h6>
                    <div className="course-tags">
                      {edu.relevant.map((course, courseIndex) => (
                        <span key={courseIndex} className="course-tag">{course}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Certifications */}
              <motion.div
                variants={itemVariants}
                className="certifications-card"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="cert-title">Certifications & Learning</h4>
                <div className="cert-list">
                  <div className="cert-item">
                    <span className="cert-name">Data Analysis with Python</span>
                    <span className="cert-issuer">freeCodeCamp</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-name">Google Data Analytics Certificate</span>
                    <span className="cert-issuer">Google Career Certificates</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-name">React Developer Certification</span>
                    <span className="cert-issuer">Meta</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-name">SQL for Data Science</span>
                    <span className="cert-issuer">Coursera</span>
                  </div>
                  <div className="cert-item">
                    <span className="cert-name">Tableau Desktop Specialist</span>
                    <span className="cert-issuer">Tableau</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
