import React, { useEffect, useState } from "react";
import { Left } from "./Left";
import Right from "./Right";
import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";

const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];

const HomePage = ({ theme, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState(sections[0]);

  const handleMenuClick = (section) => {
    setActiveSection(section);
    document.getElementById(section.toLowerCase()).scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section.toLowerCase());
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return (
          rect.top <= window.innerHeight / 3 &&
          rect.bottom >= window.innerHeight / 3
        );
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-dark' : 'bg-light'} relative overflow-hidden`}>
      {/* Theme Toggle Button */}
      <button 
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {theme === 'dark' ? (
          <FiSun className="text-yellow-400 text-xl" />
        ) : (
          <FiMoon className="text-primary text-xl" />
        )}
      </button>
      
      {/* Background patterns - reduced opacity in dark mode */}
      {/* <div className={`absolute inset-0 z-0 ${theme === 'dark' ? 'opacity-[0.02]' : 'opacity-[0.03]'}`} 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%230077B6' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E\")" 
      }}></div> */}
      
      {/* Gradient accents - adjusted for black background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-secondary/5 rounded-full filter blur-[150px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 dark:bg-primary/5 rounded-full filter blur-[180px] -z-10"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-12 gap-8">
        {/* Left sidebar - fixed position on large screens */}
        <div className="lg:col-span-4">
          <div className="lg:fixed lg:w-[calc(25%-2rem)]">
            <Left
              sections={sections}
              activeSection={activeSection}
              handleMenuClick={handleMenuClick}
              theme={theme}
            />
          </div>
        </div>
        
        {/* Right content area - scrollable */}
        <div className="lg:col-span-8">
          <Right theme={theme} />
        </div>
      </div>
      
      {/* Mobile Navigation - darker background for dark mode */}
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg p-3 flex justify-around items-center lg:hidden z-50">
        {sections.map((section) => (
          <button
            key={section}
            className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
              activeSection === section 
                ? theme === 'dark' 
                  ? 'bg-secondary/10 text-secondary'
                  : 'bg-primary/10 text-primary'
                : theme === 'dark'
                  ? 'text-gray-300'
                  : 'text-textSecondary'
            }`}
            onClick={() => handleMenuClick(section)}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
