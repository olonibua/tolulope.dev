import React, { useEffect, useState } from "react";
import { Left } from "./Left";
import Right from "./Right";
import { motion } from "framer-motion";

const sections = ["ABOUT", "EXPERIENCE", "PROJECTS"];

const HomePage = () => {
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
    <div className="grid p-5 gap-10 lg:flex ">
      <div className="lg:flex-1 lg:sticky lg:top-24 lg:self-start lg:pl-32 lg:float-right lg:justify-center lg:flex ">
        <Left
          sections={sections}
          activeSection={activeSection}
          handleMenuClick={handleMenuClick}
        />
      </div>
      <div className="lg:flex-1 lg:pr-60 lg:float-right lg:justify-start lg:flex ">
        <Right />
      </div>
    </div>
  );
};

export default HomePage;
