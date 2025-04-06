import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import creator from "../img/creator.jpg";

export const Left = ({ sections, activeSection, handleMenuClick, theme }) => {
  return (
    <div className="relative z-10">
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-soft mb-4">
            <img 
              src={creator}
              alt="Tolulope Olonibua" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-md">
            <FaWandMagicSparkles size={18} />
          </div>
        </motion.div>

        <div className="mb-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <h2 className="text-3xl lg:text-4xl tracking-tight font-bold font-display text-dark dark:text-white">
              Tolulope <span className="gradient-text">Olonibua</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full my-3"></div>
            <h3 className="text-lg lg:text-xl font-medium text-secondary">
              Prompt Engineer & SaaS Developer
            </h3>
          </motion.div>
        </div>

        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 lg:mt-12 hidden lg:block"
        >
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section}>
                <button
                  className={`nav-link ${activeSection === section ? 'active' : ''}`}
                  onClick={() => handleMenuClick(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
        </motion.nav>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12"
        >
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-secondary transition-colors">
              <FaInstagram size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
