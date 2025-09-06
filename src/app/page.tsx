"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiExternalLink, FiTwitter } from "react-icons/fi";
import { useTheme } from "@/lib/contexts/theme-context";
import { cn, formatDate } from "@/lib/utils";

const workExperience = [
  {
    company: "MTN",
    logo: "📱",
    role: "Full Stack Developer",
    type: "Remote",
    period: "Apr 2025 — Present",
    description: "Engineered scalable backend solutions with NestJS, powering high-volume bill payment, airtime, and bundle services used by thousands daily. Delivered robust APIs with <200ms average response time, integrating with multiple payment providers.",
    technologies: ["NestJS", "Node.js", "API Development", "Payment Integration", "Database Optimization"],
    achievements: [
      "Delivered robust APIs with <200ms average response time",
      "Optimised database queries and caching strategies, improving transaction processing speed by 25%",
      "Implemented telemetry and monitoring tools, reducing downtime by 35%"
    ]
  },
  {
    company: "Crypto University (Dubai)",
    logo: "🎓",
    role: "Frontend Engineer", 
    type: "Remote",
    period: "Apr 2024 — Apr 2025",
    description: "Built responsive, SEO-optimised web platforms with Next.js and React Query, reducing API call latency by 30%. Collaborated with design and product teams to deliver pixel-perfect, accessible UI components.",
    technologies: ["Next.js", "React Query", "TypeScript", "SEO Optimization", "Accessibility"],
    achievements: [
      "Built responsive, SEO-optimised web platforms reducing API call latency by 30%",
      "Collaborated with design and product teams to deliver pixel-perfect UI components",
      "Initiated code review processes that reduced front-end bugs by 20%"
    ]
  },
  {
    company: "Lilab (Peru)",
    logo: "🧪",
    role: "Frontend Engineer",
    type: "Remote", 
    period: "Mar 2021 — Sept 2024",
    description: "Led the redesign of services management software, boosting operational efficiency by 30%. Developed reusable, dynamic components (e.g., calendars, data tables), cutting new feature dev time by 40%.",
    technologies: ["React", "TypeScript", "SOLID Principles", "Component Development", "Legacy Code Refactoring"],
    achievements: [
      "Led the redesign of services management software, boosting operational efficiency by 30%",
      "Developed reusable, dynamic components, cutting new feature dev time by 40%",
      "Applied SOLID principles and TypeScript to refactor legacy codebases, improving maintainability"
    ]
  },
  {
    company: "Bible Quiz App",
    logo: "📱",
    role: "Frontend Engineer",
    type: "Contract",
    period: "2021",
    description: "Built a React Native app with gamification and community features, increasing user retention by 15%. Integrated push notifications and real-time leaderboards for enhanced engagement.",
    technologies: ["React Native", "Push Notifications", "Real-time Features", "Gamification"],
    achievements: [
      "Built React Native app with gamification features, increasing user retention by 15%",
      "Integrated push notifications and real-time leaderboards",
      "Delivered community features for enhanced user engagement"
    ]
  }
];

const projects = [
  {
    title: "Gab'z Laundromat - Service Platform",
    description: "A professional laundry service platform offering convenient pickup and delivery across Lagos. Features online booking, service tracking, and automated scheduling for busy professionals.",
    image: "/img/Screenshot 2025-08-05 at 13.43.58.png",
    technologies: ["Next.js", "Firebase", "Google Maps API", "Stripe"],
    github: "https://github.com/olonibua",
    demo: "https://gabzlaundromat.com",
    featured: true
  },
  {
    title: "DetNodes - AI Architecture Generator",
    description: "An AI-powered system architecture generator that transforms app ideas into complete, buildable wireframes. Features interactive node expansion, technical implementation guidance, and professional diagram export for rapid prototyping.",
    image: "/img/Screenshot 2025-09-06 at 19.57.20.png",
    technologies: ["Next.js", "AI/ML", "System Architecture", "Wireframing", "TypeScript"],
    github: "https://github.com/olonibua",
    demo: "https://detnode.vercel.app",
    featured: true
  },
  {
    title: "Studio - MVP Development Platform",
    description: "A comprehensive MVP development studio helping startup founders build and validate digital products in just 2 weeks. Offers SaaS platforms, mobile apps, e-commerce sites, and AI integration services.",
    image: "/img/Screenshot 2025-09-06 at 19.57.08.png",
    technologies: ["Next.js", "React Native", "Node.js", "AI Integration", "Rapid Development"],
    github: "https://github.com/olonibua",
    demo: "https://studio-delta-blond.vercel.app",
    featured: true
  },
  
  {
    title: "EMURECCIMA - Community Financial Chamber",
    description: "A community-focused financial platform providing collaborative savings, low-interest loans, and emergency assistance for chamber members. Built to strengthen local economic development through mutual support.",
    image: "/img/Screenshot 2025-08-05 at 13.45.31.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    github: "https://github.com/olonibua",
    demo: "https://emureccima.org",
    featured: true
  },
  {
    title: "ErandWork - Service Marketplace", 
    description: "A digital marketplace connecting clients with verified local professionals for daily tasks and errands. Features secure payments, professional verification, and streamlined booking system.",
    image: "/img/Screenshot 2025-08-05 at 22.23.43.png",
    technologies: ["Next.js", "Firebase", "Stripe", "Google Maps API"],
    github: "https://github.com/olonibua",
    demo: "https://erandwork.com",
    featured: true
  },
  {
    title: "MOSÉ - African Art E-commerce",
    description: "An elegant e-commerce platform showcasing authentic African art and handcrafted gifts from talented artisans. Features artist profiles, cultural storytelling, and global shipping.",
    image: "/img/Screenshot 2025-08-05 at 21.06.55.png", 
    technologies: ["Next.js", "Shopify API", "Stripe", "Tailwind CSS"],
    github: "https://github.com/olonibua",
    demo: "https://mose-two.vercel.app",
    featured: true
  }
];

const skills = [
  { name: "React/Next.js", level: 95, category: "frontend" },
  { name: "TypeScript", level: 95, category: "language" },
  { name: "Node.js/NestJS", level: 90, category: "backend" },
  { name: "C#/.NET Core", level: 85, category: "backend" },
  { name: "React Native", level: 80, category: "mobile" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "SQL Server/PostgreSQL", level: 80, category: "database" },
  { name: "Azure/Docker", level: 75, category: "devops" }
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
    <div className="min-h-screen bg-background-primary overflow-x-hidden">
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
              Olonts
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

      <main className="pt-10">
        {/* Hero Section */}
        <section id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-30 overflow-hidden">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
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
                className="relative mx-auto w-72 h-72 flex items-center justify-center"
              >
                <div className="w-60 h-60 rounded-3xl bg-card shadow-2xl border border-default/50 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src="/WhatsApp Image 2025-08-07 at 08.54.12.jpeg"
                    alt="Tolulope Ifeoluwa Olonibua" 
                    className="w-52 h-52 rounded-full object-cover"
                  />
                </div>
                
              </motion.div>
            </div>

            {/* Main Content */}
            <div className="text-center">
              {/* Name with modern typography */}
              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-sans font-light mb-6 text-text-primary tracking-tight px-4"
              >
                Tolulope Olonibua
              </motion.h1>

              {/* Tagline */}
              <motion.p 
                variants={itemVariants}
                className="text-base sm:text-lg md:text-xl text-text-secondary mb-8 font-normal leading-relaxed max-w-2xl mx-auto px-4"
              >
                Creative and results-driven Software Engineer with 4+ years of experience delivering interactive, scalable, and high-performance web applications
              </motion.p>

              {/* Status Badge */}
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-3 px-6 py-3 mb-12 bg-card/80 backdrop-blur-sm border border-default/50 rounded-full shadow-lg"
              >
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-text-muted text-sm font-medium">Available for work • Remote/Onsite</span>
              </motion.div>

              {/* Modern CTA Button */}
              <motion.div variants={itemVariants} className="mb-12 sm:mb-16 px-4">
                <motion.button
                  className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-accent to-accent-hover text-white rounded-full font-medium text-base sm:text-lg shadow-2xl overflow-hidden"
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
                className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12 px-4"
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
                className="flex justify-center items-center gap-2 px-4 flex-wrap"
              >
                {[
                  { icon: FiGithub, href: "https://github.com/olonibua", label: "GitHub" },
                  { icon: FiLinkedin, href: "https://linkedin.com/in/olonibua-tolulope", label: "LinkedIn" },
                  { icon: FiTwitter, href: "https://twitter.com/itsolonts", label: "Twitter" },
                  { icon: FiExternalLink, href: "/Tolulope_Olonibua_CV.docx", label: "Resume" }
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
        <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-light mb-6 text-text-primary px-4">
                Work Experience
              </h2>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-4">
                Building innovative solutions across diverse industries
              </p>
            </motion.div>

            <div className="grid gap-8">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-default/30 shadow-lg hover:shadow-xl hover:bg-card/80 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="flex items-start gap-6 mb-4 lg:mb-0">
                      <div className="w-16 h-16 rounded-2xl bg-accent/10 backdrop-blur-sm flex items-center justify-center text-2xl flex-shrink-0 border border-accent/20">
                        {job.logo}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-text-primary mb-2">
                          {job.company}
                        </h3>
                        <p className="text-text-secondary font-medium mb-3">
                          {job.role}
                        </p>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full bg-accent/10 text-accent border border-accent/20">
                            <div className="w-2 h-2 rounded-full bg-accent"></div>
                            {job.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-background-secondary/60 backdrop-blur-sm rounded-full text-text-muted font-medium border border-default/30">
                        <FiCalendar className="w-4 h-4" />
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-text-secondary leading-relaxed mb-8 text-lg">
                    {job.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-text-primary mb-4 flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      Key Achievements
                    </h4>
                    <div className="grid gap-3">
                      {job.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-3 p-3 bg-background-secondary/40 backdrop-blur-sm rounded-2xl border border-default/20">
                          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                          </div>
                          <span className="text-text-secondary">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {job.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm rounded-2xl bg-background-secondary/60 backdrop-blur-sm text-text-primary border border-default/30 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
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
        <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 overflow-hidden">
            <div className="absolute top-16 sm:top-32 right-10 sm:right-20 w-48 sm:w-64 h-48 sm:h-64 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-16 sm:bottom-32 left-10 sm:left-20 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-light mb-6 text-text-primary px-4">
                Featured Projects
              </h2>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-4">
                Real-world applications showcasing modern web development expertise
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
                    "group bg-card/60 backdrop-blur-sm rounded-3xl overflow-hidden border border-default/30 shadow-lg hover:shadow-xl hover:bg-card/80 transition-all duration-300",
                    project.featured && "lg:col-span-2"
                  )}
                >
                  <div className="aspect-video bg-background-tertiary/50 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-2xl bg-background-secondary/60 backdrop-blur-sm border border-default/30 text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
                          title="View Code"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-2xl bg-background-secondary/60 backdrop-blur-sm border border-default/30 text-text-secondary hover:text-accent hover:border-accent/50 transition-all"
                          title="Live Demo"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 text-sm rounded-2xl bg-background-secondary/60 backdrop-blur-sm text-text-primary border border-default/30 hover:border-accent/50 hover:bg-accent/10 transition-all cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-text-muted">Live & Active</span>
                      </div>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-all"
                      >
                        <span>View Project</span>
                        <FiExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-light mb-6 text-text-primary px-4">
                Technical Skills
              </h2>
              <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-4">
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
                  className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-default/30 shadow-lg hover:shadow-xl hover:bg-card/80 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                      <h3 className="text-lg font-semibold text-text-primary">
                        {skill.name}
                      </h3>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-background-secondary/60 backdrop-blur-sm rounded-full text-text-muted font-medium border border-default/30">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative">
                    <div className="w-full bg-background-tertiary/60 backdrop-blur-sm rounded-full h-3 border border-default/20">
                      <motion.div
                        className="bg-gradient-to-r from-accent to-accent-hover h-3 rounded-full shadow-sm"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    {/* Skill level indicator */}
                    <div className="flex justify-between text-xs text-text-muted mt-3">
                      <span>Beginner</span>
                      <span>Expert</span>
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="mt-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-2xl text-sm font-medium border border-accent/20">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-20 overflow-hidden">
            <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-sans font-light mb-6 text-text-primary px-4">
                Let's Work Together
              </h2>
              <p className="text-base sm:text-lg text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed px-4">
                Currently based in UK, I'm passionate about clean architecture, maintainable code, and impactful problem-solving. 
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
                    value: "United Kingdom • Remote/Onsite",
                    href: null
                  }
                ].map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-card/60 backdrop-blur-sm rounded-3xl p-8 border border-default/30 shadow-lg hover:shadow-xl hover:bg-card/80 transition-all duration-300"
                  >
                    <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-accent/10 backdrop-blur-sm flex items-center justify-center border border-accent/20 group-hover:scale-110 transition-transform duration-300">
                      <contact.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-text-primary mb-3 text-lg">
                      {contact.title}
                    </h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors font-medium"
                      >
                        <span>{contact.value}</span>
                        <FiExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-text-secondary font-medium">{contact.value}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card/60 backdrop-blur-sm rounded-3xl p-10 border border-default/30 shadow-lg"
              >
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-text-muted font-medium">Available for new opportunities</span>
                </div>
                
                <h3 className="text-2xl font-sans font-light mb-4 text-text-primary">
                  Ready to start a conversation?
                </h3>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Whether you're looking for a senior developer, need consultation on your next project, 
                  or want to explore collaboration opportunities, I'd love to hear from you.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="mailto:tolulopeolonibua@gmail.com"
                    className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent to-accent-hover text-white px-8 py-4 rounded-2xl font-medium shadow-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <FiMail className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Send Message</span>
                  </motion.a>
                  
                  <motion.a
                    href="/Tolulope_Olonibua_CV.docx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-background-secondary/60 backdrop-blur-sm text-text-primary px-8 py-4 rounded-2xl font-medium border border-default/30 hover:border-accent/50 hover:bg-accent/10 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiExternalLink className="w-5 h-5" />
                    <span>Download CV</span>
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-default/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/40 backdrop-blur-sm rounded-3xl p-8 border border-default/30 shadow-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent/10 backdrop-blur-sm flex items-center justify-center border border-accent/20">
                  <span className="text-accent font-bold text-lg">TO</span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-text-primary">Tolulope Olonibua</p>
                  <p className="text-sm text-text-muted">Full Stack Developer</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                {[
                  { icon: FiGithub, href: "https://github.com/olonibua", label: "GitHub" },
                  { icon: FiLinkedin, href: "https://linkedin.com/in/olonibua-tolulope", label: "LinkedIn" },
                  { icon: FiTwitter, href: "https://twitter.com/itsolonts", label: "Twitter" },
                  { icon: FiMail, href: "mailto:tolulopeolonibua@gmail.com", label: "Email" }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-background-secondary/60 backdrop-blur-sm border border-default/30 text-text-secondary hover:text-accent hover:border-accent/50 hover:bg-accent/10 transition-all"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    title={label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-default/20 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-text-muted text-sm">
                © 2024 Tolulope Olonibua. Built with Next.js and Framer Motion.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-text-muted">Available for work</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}