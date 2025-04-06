import React from "react";
import { motion } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { FaWandMagicSparkles } from "react-icons/fa6";
import qrSystem from "../img/qr-system.jpg";
import salein from "../img/salein.jpg";
import meetup from "../img/meetup.jpg";
import agrigrow from "../img/agricgrow.jpg";
import gymNetwork from "../img/gym-network.jpg";
import socialBridge from "../img/social-bridge.jpg";
import rotate from "../img/rotate.gif";

const Right = () => {
  const experience = [
    {
      year: "2024 — PRESENT",
      title: "Prompt Engineer & SaaS Developer, Freelance",
      link: "#",
      desc: "Building AI-driven SaaS products and MVPs using prompt engineering and AI-assisted development. Creating business solutions through efficient development workflows that leverage LLMs for faster coding and problem-solving.",
      tag: ["Prompt Engineering", "Next.js", "AI Integration", "TypeScript"],
    },
    {
      year: "2024 — PRESENT",
      title: "Frontend Engineer, CryptoU Dubai",
      link: "https://cryptouniversity.network/",
      desc: "Developing intuitive user interfaces and managing user interactions to create compelling experiences. Enhancing usability and aesthetic appeal of applications by implementing design principles and optimizing interactions for seamless user experiences.",
      tag: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      year: "2023 — 2024",
      title: "Frontend Engineer, Lilab Peru",
      link: "https://www.lilab.io/",
      desc: "Contributed to a component-based web application aimed at enhancing performance and user experience. Developed reusable components like sliding and scheduling calendars, making the application more flexible and user-friendly. Applied SOLID principles to improve code modularity and scalability.",
      tag: ["React", "TypeScript", "SCSS", "Storybook"],
    },
  ];

  const projects = [
    {
      img: salein,
      title: "Salein - Invoice Management",
      link: "https://salein.vercel.app",
      desc: "A comprehensive invoice management system with PDF generation, email notifications, and team collaboration. Features include invoice creation, status tracking, reminder scheduling, and currency support. Developed using AI-assisted techniques for rapid deployment.",
      tag: [
        "Next.js",
        "TypeScript",
        "Tailwind",
        "Context API",
        "PDF Generation",
      ],
    },

    {
      img: qrSystem,
      title: "SecuredPass",
      link: "https://securedpass.vercel.app",
      desc: "A comprehensive system for organizations to manage access and attendance using QR codes. Features include custom check-in forms, subscription management, and email notifications. Supports both membership and company-based organizations with different payment models.",
      tag: ["Next.js", "Appwrite", "Stripe", "TypeScript", "NextAuth.js"],
    },
    {
      img: agrigrow,
      title: "AgriGrow Finance",
      link: "https://agricgrow.vercel.app",
      desc: "A platform connecting microfinance institutions with smallholder farmers in Nigeria, providing harvest-cycle-aligned loans using AI for risk assessment. Features agricultural intelligence, simplified loan applications, and comprehensive dashboards for loan officers.",
      tag: [
        "Next.js",
        "Appwrite",
        "AI Risk Assessment",
        "Data Visualization",
        "TypeScript",
      ],
    },
    {
      img: socialBridge,
      title: "Social Media Bridge",
      link: "https://socialbridge-sigma.vercel.app",
      desc: "A unified platform that connects multiple social media accounts, allowing users to create and share content across platforms simultaneously. Built with AI-assisted development using cursor and prompt engineering techniques.",
      tag: ["Next.js", "TypeScript", "Appwrite", "Shadcn UI", "OAuth"],
    },
    {
      img: meetup,
      title: "Remote Meetup App",
      link: "https://meetme-eta.vercel.app",
      desc: "A location-based meetup application that helps users create and join local meetups. Features include location detection, distance-based filtering, interactive maps, and real-time communication. Built using prompt engineering for faster development.",
      tag: ["Next.js", "Appwrite", "Mapbox", "Real-time", "Authentication"],
    },
    {
      img: gymNetwork,
      title: "Gym Business Networking MVP",
      link: "https://gymnet-mocha.vercel.app",
      desc: "A platform for gym members to connect professionally, showcasing skills and finding other professionals within their gym community. Features include member profiles, mutual places, and interactive animations inspired by Framer's design.",
      tag: ["Next.js", "Framer Motion", "Appwrite", "OAuth", "Shadcn UI"],
    },
  ];

  return (
    <div className="text-textSecondary">
      <section id="about" className="mb-24 pt-10 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>

          <div className="card p-6 mb-8">
            <div className="flex items-center gap-2 mb-5">
              <FaWandMagicSparkles className="text-primary text-xl" />
              <span className="text-primary font-semibold">
                SaaS & MVP Developer
              </span>
            </div>

            <p className="mb-4">
              I'm a software developer with over three years of experience, who
              has evolved into a Prompt Engineering. I combine
              AI-driven development techniques with traditional coding to create
              SaaS products and MVPs efficiently and effortlessly.
            </p>

            <p className="mb-4">
              I primarily use Cursor, but I adapt to any tool I can leverage.
              What sets me apart is that I don't even need traditional design
              processes—I simply prompt the design I want and transform it into
              functional code using AI assistance.
            </p>

            <p className="mb-4">
              My specialty lies in crafting precise scenarios for LLMs to
              understand complex requests better. I've mastered the art of
              prompting, treating AI as a collaborative partner rather than just
              a tool. This approach allows me to build faster, smarter, and with
              greater creativity.
            </p>

            <p>
              When I step away from my AI-human collaboration, you'll find me
              exploring emerging tech, strategizing over chess, or pushing my
              limits at the gym – all activities that fuel my creative
              problem-solving mindset in unexpected ways.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="experience" className="mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience</h2>

          <div className="space-y-6">
            {experience.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="experience-card">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="lg:w-1/5">
                      <p className="text-sm font-medium text-primary">
                        {item.year}
                      </p>
                    </div>

                    <div className="lg:w-4/5">
                      <h3 className="text-lg font-bold text-dark flex items-center gap-2 mb-2">
                        {item.title}
                        <MdArrowOutward className="text-primary" />
                      </h3>
                      <p className="mb-4">{item.desc}</p>

                      <div className="flex flex-wrap gap-2">
                        {item.tag.map((tag, idx) => (
                          <span key={idx} className="tech-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer project-card group"
                style={{ textDecoration: "none" }}
              >
                <div className="overflow-hidden rounded-lg mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-lg font-bold text-dark flex items-center gap-2 mb-2">
                  {item.title}
                  <MdArrowOutward className="text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </h3>

                <p className="mb-4 flex-grow">{item.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tag.map((tag, idx) => (
                    <span key={idx} className="tech-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors cursor-pointer">
                  Live Site <MdArrowOutward />
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <footer className="py-10 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            Built with Next.js, TypeScript and Tailwind CSS, enhanced by prompt
            engineering. Deployed with Vercel. All text is set in the Inter
            typeface.
          </p>

          <img
            src={rotate}
            alt="rotate"
            className="cursor-pointer h-12 w-12 rotate-animation"
          />
        </div>
      </footer>
    </div>
  );
};

export default Right;
