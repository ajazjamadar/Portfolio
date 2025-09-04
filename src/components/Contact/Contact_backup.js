import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiSend, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = ({ darkMode }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        'your_service_id',
        'your_template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'MD EJAZUDDIN JAMADAR',
        },
        'your_public_key'
      );

      if (result.text === 'OK') {
        setFormStatus({
          loading: false,
          success: true,
          error: false,
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again.'
      });
    }

    setTimeout(() => {
      setFormStatus({ loading: false, success: false, error: false, message: '' });
    }, 5000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'liveajaz121@gmail.com',
      link: 'mailto:liveajaz121@gmail.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+91 7829745001',
      link: 'tel:+917829745001'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Raichur, Karnataka',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/md-ejazuddin-jamadar',
      color: '#0077B5'
    },
    {
      icon: FiGithub,
      name: 'GitHub',
      url: 'https://github.com/md-ejazuddin-jamadar',
      color: '#333'
    },
    {
      icon: FiTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/md-ejazuddin-jamadar',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className={`contact section ${darkMode ? 'dark' : ''}`} ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="contact-content"
        >
          <motion.h2 variants={itemVariants} className="section-title">
            Get In Touch
          </motion.h2>
          
          <motion.p variants={itemVariants} className="contact-description">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </motion.p>
          
          <div className="contact-grid">
            <motion.div variants={itemVariants} className="contact-info">
              <h3>Contact Information</h3>
              
              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    className="info-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="info-icon">
                      <info.icon />
                    </div>
                    <div className="info-details">
                      <span className="info-title">{info.title}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-grid">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <social.icon />
                      <span>{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="btn-primary submit-btn"
                  disabled={formStatus.loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {formStatus.loading ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <FiSend />
                      Send Message
                    </>
                  )}
                </motion.button>
                
                {formStatus.message && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`form-message ${formStatus.success ? 'success' : 'error'}`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
