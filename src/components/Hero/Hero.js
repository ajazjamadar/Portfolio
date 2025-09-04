import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = ({ darkMode }) => {
  const heroRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) * 100;
      const y = (clientY / window.innerHeight) * 100;
      
      hero.style.setProperty('--mouse-x', `${x}%`);
      hero.style.setProperty('--mouse-y', `${y}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const options = {
      strings: [
        'Data Analyst',
        'Business Analyst',
        'Full Stack Developer',
        'MERN Stack Developer'
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className={`hero ${darkMode ? 'dark' : ''}`} ref={heroRef}>
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h3 
              className="hero-greeting"
              variants={itemVariants}
            >
              Hello, I'm
            </motion.h3>
            
            <motion.h1 
              className="hero-name"
              variants={itemVariants}
            >
              MD EJAZUDDIN JAMADAR
            </motion.h1>
            
            <motion.div 
              className="hero-title"
              variants={itemVariants}
            >
              <span>I'm a </span>
              <span ref={typedRef} className="typed-text"></span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Passionate about creating beautiful, functional, and user-friendly web applications 
              using modern technologies. I love turning ideas into reality through clean code and 
              innovative solutions.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
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
                <FiMail />
                Get In Touch
              </motion.a>
              
              <motion.a
                href="/MdEjazuddinJamadar.Resume.pdf"
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload />
                Download CV
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="hero-social"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/ajazjamadar"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link glass-card"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiGithub />
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/md-eajazuddin-jamadar-359810258/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link glass-card"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiLinkedin />
              </motion.a>
              
              <motion.a
                href="mailto:liveajaz121@gmail.com"
                className="social-link glass-card"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FiMail />
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            variants={itemVariants}
          >
            <motion.div 
              className="image-container glass-card"
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="image-placeholder">
                <img src="/WhatsApp Image 2025-09-01 at 15.23.49_03a665de.jpg" alt="MD EJAZUDDIN JAMADAR" className="profile-image" />
                <div className="image-glow"></div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <div className="scroll-text">Scroll Down</div>
        <div className="scroll-arrow"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
