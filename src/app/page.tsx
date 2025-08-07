"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiExternalLink, FiTwitter } from "react-icons/fi";
import { useTheme } from "@/lib/contexts/theme-context";
import { cn, formatDate } from "@/lib/utils";

const workExperience = [
  {
    company: "MTN Nigeria",
    logo: "📱",
    role: "Full Stack Developer",
    type: "Remote",
    period: "Apr 2025 — Present",
    description: "Worked with NestJS to build scalable backend solutions for bill payments, airtime, and bundle payment services. Delivered robust and efficient APIs supporting high transaction volumes and seamless integration with payment providers.",
    technologies: ["NestJS", "Node.js", "MadApi", "Payment Integration"],
    achievements: [
      "Built scalable backend solutions for payment services",
      "Delivered APIs supporting high transaction volumes",
      "Collaborated with cross-functional teams for scalability goals"
    ]
  },
  {
    company: "Crypto University (Dubai)",
    logo: "🎓",
    role: "Frontend Engineer", 
    type: "Remote",
    period: "Apr 2024 — 2025",
    description: "Developed user-friendly websites using Next.js and React Query for improved state management. Collaborated with cross-functional teams to deliver pixel-perfect designs aligned with product goals. Improved team processes by leading code reviews and accessibility best practices.",
    technologies: ["Next.js", "React Query", "TypeScript", "Accessibility"],
    achievements: [
      "Delivered pixel-perfect designs aligned with product goals",
      "Led code reviews and accessibility best practices",
      "Improved team processes and collaboration"
    ]
  },
  {
    company: "Lilab (Lima, Peru)",
    logo: "🧪",
    role: "Frontend Engineer",
    type: "Remote", 
    period: "Mar 2023 — Sept 2024",
    description: "Led redesign of key services management software, boosting operational efficiency. Engineered reusable components (e.g., dynamic calendars) for flexibility and enhanced UX. Refactored large codebases using SOLID principles and TypeScript, ensuring maintainability.",
    technologies: ["React", "TypeScript", "SCSS", "Storybook"],
    achievements: [
      "Led redesign boosting operational efficiency",
      "Engineered reusable components for enhanced UX",
      "Refactored codebases using SOLID principles"
    ]
  }
];

const projects = [
  {
    title: "EMURECCIMA - Community Financial Chamber",
    description: "A community-focused financial platform providing collaborative savings, low-interest loans, and emergency assistance for chamber members. Built to strengthen local economic development through mutual support.",
    image: "/img/Screenshot 2025-08-05 at 13.45.31.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/tolulope",
    demo: "https://emureccima.org",
    featured: true
  },
  {
    title: "ErandWork - Service Marketplace", 
    description: "A digital marketplace connecting clients with verified local professionals for daily tasks and errands. Features secure payments, professional verification, and streamlined booking system.",
    image: "/img/Screenshot 2025-08-05 at 22.23.43.png",
    technologies: ["Next.js", "Firebase", "Stripe", "Google Maps API"],
    github: "https://github.com/tolulope",
    demo: "https://erandwork.com",
    featured: true
  },
  {
    title: "MOSÉ - African Art E-commerce",
    description: "An elegant e-commerce platform showcasing authentic African art and handcrafted gifts from talented artisans. Features artist profiles, cultural storytelling, and global shipping.",
    image: "/img/Screenshot 2025-08-05 at 21.06.55.png", 
    technologies: ["Next.js", "Shopify API", "Stripe", "Tailwind CSS"],
    github: "https://github.com/tolulope",
    demo: "https://mose-two.vercel.app",
    featured: true
  },
  {
    title: "Eyes on Imo - Government Investment Portal",
    description: "Official investment portal for Imo State showcasing economic opportunities, tourism attractions, and investment metrics. Designed to attract domestic and international investors to Nigeria's Eastern Heartland.",
    image: "/img/Screenshot 2025-08-05 at 20.26.21.png",
    technologies: ["Next.js", "React", "Chart.js", "Tailwind CSS"],
    github: "https://github.com/tolulope",
    demo: "https://eyesonimo.com",
    featured: false
  },
  {
    title: "Gab'z Laundromat - Service Platform",
    description: "A professional laundry service platform offering convenient pickup and delivery across Lagos. Features online booking, service tracking, and automated scheduling for busy professionals.",
    image: "/img/Screenshot 2025-08-05 at 13.43.58.png",
    technologies: ["Next.js", "Firebase", "Google Maps API", "Stripe"],
    github: "https://github.com/tolulope",
    demo: "https://gabzlaundromat.com",
    featured: false
  },
  {
    title: "FindExperts.me - Expert Booking Platform",
    description: "Africa's most powerful platform for expert booking and mentorship, connecting professionals with thought leaders across 35+ African countries.",
    image: "/img/Screenshot 2025-08-05 at 22.44.41.png",
    technologies: ["Next.js", "Firebase", "Payment Integration", "Booking System"],
    github: "https://github.com/tolulope",
    demo: "https://findexperts.me",
    featured: false
  }
];

const skills = [
  { name: "React/Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "language" },
  { name: "Node.js/NestJS", level: 85, category: "backend" },
  { name: "React Native", level: 80, category: "mobile" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "PostgreSQL", level: 75, category: "database" }
];

export default function HomePage() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("about");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "skills", "contact"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-background-primary">
      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card shadow-card border border-default hover:shadow-card-hover transition-all focus-ring"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        {theme === "dark" ? (
          <FiSun className="w-5 h-5 text-accent" />
        ) : (
          <FiMoon className="w-5 h-5 text-accent" />
        )}
      </motion.button>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background-primary/80 glass border-b border-default">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.h1 
              className="text-xl font-bold text-text-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Tolulope Olonibua
            </motion.h1>
            
            <motion.div 
              className="hidden md:flex space-x-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {["about", "experience", "projects", "skills", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => {
                    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={cn(
                    "capitalize text-sm font-medium transition-colors",
                    activeSection === section 
                      ? "text-accent" 
                      : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {section}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative z-10 max-w-7xl mx-auto"
          >
            {/* Floating Hexagonal Elements */}
            <div className="relative mb-16">
              {/* Center Profile Hexagon */}
              <motion.div 
                variants={itemVariants}
                className="relative mx-auto w-40 h-40 flex items-center justify-center"
              >
                <div className="w-40 h-40 rounded-3xl bg-card shadow-2xl border border-default/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-08-07 at 08.54.12.jpeg"
                    alt="Tolulope Ifeoluwa Olonibua" 
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                
                {/* Floating Tech Icons around profile */}
                {[
                  { icon: "⚛️", position: "-top-8 -right-8", delay: 0.5, tech: "React" },
                  { icon: "📱", position: "-bottom-8 -left-8", delay: 0.7, tech: "React Native" },
                  { icon: "🟦", position: "-top-8 -left-8", delay: 0.9, tech: "TypeScript" },
                  { icon: "🟢", position: "-bottom-8 -right-8", delay: 1.1, tech: "Node.js" },
                ].map(({ icon, position, delay, tech }, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${position} w-16 h-16 rounded-2xl bg-card shadow-lg border border-default/30 backdrop-blur-sm flex items-center justify-center text-xl hover:shadow-xl transition-all cursor-pointer group`}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ delay, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    title={tech}
                  >
                    {icon}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-text-primary text-background-primary text-xs px-2 py-1 rounded whitespace-nowrap">
                      {tech}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="text-center">
              {/* Name with modern typography */}
              <motion.h1 
                variants={itemVariants}
                className="text-4xl md:text-6xl lg:text-7xl font-sans font-light mb-6 text-text-primary tracking-tight"
              >
                Tolulope Olonibua
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-text-secondary mb-8 font-normal leading-relaxed max-w-2xl mx-auto"
              >
                Software Engineer building exceptional digital experiences with modern web technologies
              </motion.p>

              {/* Status Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-6 py-3 mb-12 bg-card/80 backdrop-blur-sm border border-default/50 rounded-full shadow-lg"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-text-muted text-sm font-medium">Available for work • United Kingdom</span>
              </motion.div>

              {/* Modern CTA Button */}
              <motion.div variants={itemVariants} className="mb-16">
                <motion.button
                  className="group relative px-12 py-4 bg-gradient-to-r from-accent to-accent-hover text-white rounded-full font-medium text-lg shadow-2xl overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {/* Glowing background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  <span className="relative flex items-center gap-3">
                    <FiMail className="w-5 h-5" />
                    Let's Connect
                  </span>
                </motion.button>
              </motion.div>

              {/* Progress-like Status Cards */}
              <motion.div 
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12"
              >
                <div className="flex items-center justify-between p-4 bg-card/60 backdrop-blur-sm border border-default/30 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-sm font-medium text-text-primary">4+ Years Experience</span>
                  </div>
                  <span className="text-xs text-green-600 dark:text-green-400 font-medium">Expert</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-card/60 backdrop-blur-sm border border-default/30 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    </div>
                    <span className="text-sm font-medium text-text-primary">Remote Specialist</span>
                  </div>
                  <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">Global</span>
                </div>
              </motion.div>

              {/* Clean Social Links */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center items-center gap-2"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/olonibua", label: "GitHub" },
                  { icon: FiLinkedin, href: "https://linkedin.com/in/olonibua-tolulope", label: "LinkedIn" },
                  { icon: FiTwitter, href: "https://twitter.com/itsolonts", label: "Twitter" },
                  { icon: FiExternalLink, href: "/TOLULOPE IFEOLUWA OLONIBUA (1).pdf", label: "Resume" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-card/40 backdrop-blur-sm border border-default/30 text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-card/80 transition-all shadow-lg"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-text-primary">
                Work Experience
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Building innovative solutions across diverse industries
              </p>
            </motion.div>

            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-xl p-8 border border-default shadow-card hover:shadow-card-hover transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 md:mb-0">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center text-xl flex-shrink-0">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-1">
                          {job.company}
                        </h3>
                        <p className="text-text-secondary font-medium mb-1">
                          {job.role}
                        </p>
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-accent/10 text-accent">
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="text-text-muted font-medium">
                      {job.period}
                    </span>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-6">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-text-primary mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-background-secondary text-text-muted border border-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-6 bg-background-secondary">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-text-primary">
                Featured Projects
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Showcasing technical expertise through real-world applications
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={cn(
                    "bg-card rounded-xl overflow-hidden border border-default shadow-card hover:shadow-card-hover transition-all group",
                    project.featured && "lg:col-span-2"
                  )}
                >
                  <div className="aspect-video bg-background-tertiary">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-text-primary mb-3">
                      {project.title}
                    </h3>
                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded bg-background-secondary text-text-muted border border-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span className="text-sm">Code</span>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        <span className="text-sm">Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-text-primary">
                Technical Skills
              </h2>
              <p className="text-xl text-text-muted max-w-2xl mx-auto">
                Expertise in modern web technologies and best practices
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card rounded-lg p-6 border border-default shadow-card"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-medium text-text-primary">
                      {skill.name}
                    </h3>
                    <span className="text-sm text-text-muted">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-background-tertiary rounded-full h-2">
                    <motion.div
                      className="bg-accent h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-6 bg-background-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-light mb-6 text-text-primary">
                Let's Work Together
              </h2>
              <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
                I'm actively seeking new opportunities in the UK and internationally. 
                Let's discuss how I can contribute to your team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: FiMail,
                    title: "Email",
                    value: "tolulopeolonibua@gmail.com",
                    href: "mailto:tolulopeolonibua@gmail.com"
                  },
                  {
                    icon: FiLinkedin,
                    title: "LinkedIn",
                    value: "Tolulope Olonibua",
                    href: "https://linkedin.com/in/olonibua-tolulope"
                  },
                  {
                    icon: FiMapPin,
                    title: "Location",
                    value: "Available for UK/Remote",
                    href: null
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card rounded-lg p-6 border border-default shadow-card hover:shadow-card-hover transition-all"
                  >
                    <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-2">
                      {contact.title}
                    </h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-text-secondary hover:text-accent transition-colors"
                      >
                        {contact.value}
                      </a>
                    ) : (
                      <span className="text-text-secondary">{contact.value}</span>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card rounded-xl p-8 border border-default shadow-card"
              >
                <h3 className="text-2xl font-serif font-light mb-4 text-text-primary">
                  Ready to start a conversation?
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  Whether you're looking for a senior developer, need consultation on your next project, 
                  or want to explore collaboration opportunities, I'd love to hear from you.
                </p>
                <motion.a
                  href="mailto:tolulopeolonibua@gmail.com"
                  className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-hover transition-colors shadow-card"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail className="w-4 h-4" />
                  Send Message
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-default">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-text-muted">
            © 2024 Tolulope Ifeoluwa Olonibua. Built with Next.js and Framer Motion.
          </p>
        </div>
      </footer>
    </div>
  );
}