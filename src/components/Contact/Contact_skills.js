import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiSend, FiLinkedin, FiGithub } from 'react-icons/fi';
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
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      loading: true,
      success: false,
      error: false,
      message: ''
    });

    try {
      await emailjs.send(
        'your_service_id',
        'your_template_id', 
        formData,
        'your_public_key'
      );

      setFormStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/md-ejazuddin-jamadar',
      icon: FiLinkedin,
      color: '#0A66C2'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/liveajaz',
      icon: FiGithub,
      color: '#181717'
    },
    {
      name: 'Email',
      url: 'mailto:liveajaz121@gmail.com',
      icon: FiMail,
      color: '#EA4335'
    }
  ];

  const contactCategories = [
    {
      title: "Get in Touch",
      contacts: [
        { name: "Email", value: "liveajaz121@gmail.com", icon: "📧", color: "#4f46e5", href: "mailto:liveajaz121@gmail.com" },
        { name: "Phone", value: "+91 7829745001", icon: "📱", color: "#06b6d4", href: "tel:+917829745001" },
        { name: "Location", value: "Raichur, Karnataka", icon: "📍", color: "#10b981" }
      ]
    },
    {
      title: "Social Networks",
      contacts: socialLinks.map(social => ({
        name: social.name,
        value: "Connect & Follow",
        icon: social.icon,
        color: social.color,
        href: social.url,
        isExternal: true
      }))
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
            Contact & Collaboration
          </motion.h2>
          
          <motion.p variants={itemVariants} className="contact-description">
            Ready to connect and build something amazing together? Here are the ways to reach out.
          </motion.p>
          
          <div className="contact-skills-grid">
            {contactCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="contact-category glass-card"
              >
                <h3 className="contact-category-title">{category.title}</h3>
                <div className="contact-list">
                  {category.contacts.map((contact, contactIndex) => (
                    contact.href ? (
                      <motion.a
                        key={contactIndex}
                        href={contact.href}
                        target={contact.isExternal ? "_blank" : "_self"}
                        rel={contact.isExternal ? "noopener noreferrer" : ""}
                        variants={itemVariants}
                        className="contact-item"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-info">
                          <div className="contact-icon" style={{ color: contact.color }}>
                            {typeof contact.icon === 'string' ? contact.icon : <contact.icon />}
                          </div>
                          <div className="contact-details">
                            <span className="contact-name">{contact.name}</span>
                            <span className="contact-value">{contact.value}</span>
                          </div>
                        </div>
                      </motion.a>
                    ) : (
                      <motion.div
                        key={contactIndex}
                        variants={itemVariants}
                        className="contact-item"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="contact-info">
                          <div className="contact-icon" style={{ color: contact.color }}>
                            {contact.icon}
                          </div>
                          <div className="contact-details">
                            <span className="contact-name">{contact.name}</span>
                            <span className="contact-value">{contact.value}</span>
                          </div>
                        </div>
                      </motion.div>
                    )
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Send Message Category */}
            <motion.div
              variants={itemVariants}
              className="contact-category glass-card message-category"
            >
              <h3 className="contact-category-title">Send Message</h3>
              <form onSubmit={handleSubmit} className="contact-form-skills">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
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
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell me about your project or inquiry..."
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
                    initial={{ opacity: 0, y: 20 }}
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
