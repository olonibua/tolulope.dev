import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaWandMagicSparkles } from "react-icons/fa6";
import creator from "../img/creator.jpg";

export const Left = ({ sections, activeSection, handleMenuClick }) => {
  return (
    <div className="relative z-10">
      <div className="sticky top-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 relative"
        >
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-white shadow-soft mb-4">
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
            <h2 className="text-3xl lg:text-5xl tracking-tight font-bold font-display text-dark">
              Tolulope <span className="gradient-text">Olonibua</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-accent rounded-full my-3"></div>
            <h3 className="text-lg lg:text-xl font-medium text-secondary">
              Prompt Engineer & SaaS Developer
            </h3>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base lg:text-lg max-w-[280px] lg:max-w-[350px] text-textSecondary"
        >
          Building AI-driven experiences and SaaS products through vibe coding.
        </motion.p>

        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 lg:mt-16 hidden lg:block"
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
          className="flex gap-4 items-center mt-10 lg:mt-16"
        >
          <a
            href="https://github.com/olonibua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/olonibua-tolulope/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="https://x.com/itsolonts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors"
          >
            <FaTwitter className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com/its_olonts"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-primary transition-colors"
          >
            <FaInstagram className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
