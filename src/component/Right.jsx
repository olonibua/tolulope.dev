import React from "react";
import covapay from "../img/covapay.png";
import crestfood from "../img/crestfood.png";
import servicecrud from "../img/servicecrud.png";
import adimstack from "../img/adimstack.jpg";
import jextoban from "../img/jextoban.png";
import agency from "../img/agency.jpg";
import tracker from "../img/tracker.jpg";
import portfolio from "../img/portfolio.png";
import rotate from "../img/rotate.gif";
import { MdArrowOutward } from "react-icons/md";

const Right = () => {
  const experience = [
    {
      year: "2024 — PRESENT",
      title: "Frontend Engineer, CrytoU Dubai",
      link: "https://cryptouniversity.network/",
      desc: "At Crypto University, I specialized in developing intuitive user interfaces and managing user interactions to create compelling and user-friendly experiences. I played a key role in enhancing the usability and aesthetic appeal of our applications, focusing on delivering interfaces that are both functional and visually engaging. My work involved understanding user needs, implementing design principles, and optimizing interactions to achieve seamless user experiences..",
      tag: ["Next js", "Typescript", "Tailwind css"],
    },
    {
      year: "2023 — 2024",
      title: "Frontend Engineer, Lilab Peru",
      link: "https://www.lilab.io/",
      desc: "I contributed to a component-based web application aimed at enhancing performance and user experience. I developed reusable components like sliding and scheduling calendars, making the application more flexible and user-friendly. I applied SOLID principles to improve code modularity and scalability. Collaborating with teams, I evaluated software-hardware interfaces and set performance specifications.",
      tag: ["React", "Typescript", "SCSS,", "Storybook"],
    },
  ];

  const projects = [
    {
      img: tracker,
      title: "whale tracker app",
      link: "https://olonts-tracker.vercel.app/",
      desc: "A solana tracker webapp to tracker early token buyers with next js",
      tag: ["Next.js", "Tailwind", "Appwrite", "shadcn"],
    },
    {
      img: agency,
      title: "Agency adminstrator app",
      link: "https://agency-one-plum.vercel.app/",
      desc: "An Agency adminstrator dashboard with next js",
      tag: ["Next.js", "Tailwind", "Appwrite", "shadcn"],
    },
    {
      img: adimstack,
      title: "Gym Management Webapp",
      link: "https://adimstack.vercel.app/",
      desc: "A comprehensive gym management solution built with Next.js and Appwrite. This webapp empowers gym administrators to efficiently manage members. Key features include member self-service options for subscription management, new member registration, and integrated payment processing. The intuitive interface, powered by Tailwind CSS and shadcn components, ensures a seamless experience for both admins and members.",
      tag: ["Next.js", "Tailwind", "Appwrite", "shadcn", "Sentry"],
    },
    {
      img: covapay,
      title: "Covapay website",
      link: "https://covapay-clone.vercel.app/",
      desc: "Crafted a visually appealing user interface enriched with dynamic motion and engaging sliding interactions. My goal was to deliver an intuitive and visually stimulating user experience, ensuring seamless navigation and enhanced user engagement.",
      tag: ["Next js", "Tailwind", "gsap"],
    },
    {
      img: servicecrud,
      title: "Service CRUD",
      link: "https://stupendous-beijinho-bdc9c1.netlify.app/",
      desc: "Service CRUD is a robust CRUD application that simplifies data management with seamless create, read, update, and delete operations through an intuitive React-powered interface. Developed with TypeScript for superior code quality, it integrates React Router for smooth navigation and Jest for reliable testing, adhering to SOLID principles for scalability and maintainability",
      tag: ["React", "Node js", "Express", "MongoDB", "Typescript", "redux"],
    },

    {
      img: crestfood,
      title: "Crestfood website",
      link: "https://crestfood.vercel.app/",
      desc: "I designed and developed a user-friendly webstore for Crestfood Restaurant, focusing on enhancing the overall user experience. The webstore features an intuitive navigation system, visually appealing layout, and smooth user interactions. I utilized modern web technologies and design principles to ensure the site is responsive, fast, and accessible across various devices. The project included integrating an efficient shopping cart, secure payment gateway, and providing a seamless and enjoyable shopping experience for customers.",
      tag: ["React", "Tailwind", "Typescript", "Redux"],
    },
    {
      img: jextoban,
      title: "jextoban website",
      link: "https://jextoban.vercel.app/",
      desc: "a sleek, responsive website for Jextoban Publishing, featuring intuitive navigation and engaging multimedia elements",
      tag: ["React", "Tailwind"],
    },
    {
      img: portfolio,
      title: "Portfolio site",
      link: "https://olonibua.github.io/tolulope/",
      desc: "First portfolio site",
      tag: ["React", "Tailwind"],
    },
  ];

  return (
    <div className="TextColor">
      <section id="about" className="mt-10 xl:mt-0 xl:pt-32">
        {/* <div className="gap-2 text-[15px] mt-10 lg:mt-0 lg:text-[16px]">
          <h2 className="text-[15px] text-white mb-8 lg:text-[20px] font-[700] lg:hidden">
            ABOUT
          </h2>
          <p>
            Since diving into the world of coding in 2016, I've embraced the
            challenge of turning complex problems into elegant solutions. My
            journey has led me through diverse projects, from crafting
            pixel-perfect websites to developing robust software for a school, a large corporation, and a community
            forum.
          </p>
          <p className="mt-3">
            I thrive on tackling real-world challenges, always believing that
            with the right approach and relentless curiosity, any problem can be
            solved. For instance, when I noticed inefficiencies in my local
            gym's management system, I took initiative and developed a
            comprehensive gym management app. This solution streamlined
            operations for administrators and enhanced the experience for
            members, demonstrating my ability to identify problems and create
            practical, impactful solutions.
          </p>
          <p className="mt-3">
            Currently, my focus is on creating accessible, user-centric
            interfaces that bridge the gap between design and functionality. I
            find my sweet spot where aesthetics meet engineering, crafting
            software that not only looks great but also operates flawlessly. In
            my free time, I'm always working on personal projects that address
            tangible needs, pushing the boundaries of what's possible and honing
            my skills in the process.
          </p>
          <p className="mt-3">
            When I step away from the keyboard, you'll find me sharpening my
            strategic thinking over a game of chess, expressing myself through
            dance, immersing in music, or pushing my limits at the gym – all
            activities that fuel my creativity and problem-solving mindset in
            unexpected ways.
          </p>
        </div> */}

        <div className="gap-2 text-[15px] mt-10 lg:mt-0 lg:text-[16px]">
          <h2 className="text-[15px] text-white mb-8 lg:text-[20px] font-[700] lg:hidden">
            ABOUT
          </h2>
          <p>
            I'm not just another developer; I'm a creator driven by curiosity
            and a relentless pursuit of innovation. I
            build applications that stand out for their quality, speed, and
            real-world impact, tackling everything from pixel-perfect websites
            to comprehensive solutions in web3, crypto, and beyond.
          </p>
          <p className="mt-3">
            I don’t just code—I solve problems. Whether optimizing a gym
            management system or enhancing user experience in a decentralized
            app, I deliver efficient, scalable solutions that align with modern
            needs. I leverage every tool available, from AI to prompt
            engineering, to push boundaries and ensure my work is as intelligent
            and adaptable as it is fast and effective.
          </p>
          <p className="mt-3">
            My focus is always on merging design with functionality to create
            user-centric experiences that don’t compromise on performance. I
            approach each project with a sharp eye for detail, a passion for
            impactful results, and a commitment to building faster and smarter
            with every tool at my disposal.
          </p>
        </div>
      </section>

      <section id="experience" className="mt-16 lg:mt-0 xl:pt-32">
        <h2 className="text-[15px] text-white mb-8 lg:text-[20px] font-[700] lg:hidden">
          EXPERIENCE
        </h2>
        {experience.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="grid lg:flex gap-5 align-top justify-start items-start w-full lg:hover:bg-[#ffffff0a] bg-transparent lg:pl-4 lg:pr-4 lg:p-3 rounded-lg hover:shadow-lg mb-8 hover:backdrop-blur-lg cursor-pointer">
              <h2 className="text-[12px] font-[600] lg:text-[12px] flex-[25%] p-1">
                {item.year}
              </h2>
              <section className="flex-[75%]">
                <h2 className="text-white text-[14px] lg:text-[16px] mb-3 font-[700] flex gap-2">
                  {item.title}
                  <MdArrowOutward />
                </h2>
                <p className="text-[14px] lg:text-[14px]">{item.desc}</p>
                <div className="flex gap-3 my-3">
                  {item.tag.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-[#2DD4BF19] text-gray-200 py-1 px-3 rounded-full font-[700] text-xs"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </a>
        ))}
      </section>

      <section id="projects" className="mt-16 lg:mt-0 xl:pt-32">
        <h2 className="text-[15px] text-white mb-8 lg:text-[20px] font-[700] lg:hidden">
          PROJECTS
        </h2>
        {projects.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex gap-5 items-start w-full lg:hover:bg-[#ffffff0a] bg-transparent lg:pl-4 lg:pr-4 lg:p-3 rounded-lg hover:shadow-lg mb-4 hover:backdrop-blur-lg cursor-pointer">
              <img
                src={item.img}
                className="h-20 w-36 hidden lg:block hover:border-gray-300 hover:border-2"
              />
              <section className="flex-1 lg:flex-[80%]">
                <h2 className="text-white text-[14px] lg:text-[16px] mb-3 font-[700] flex gap-2">
                  {item.title}
                  <MdArrowOutward />
                </h2>
                <p className="text-[14px] lg:text-[14px]">{item.desc}</p>
                <div className="flex flex-wrap gap-3 my-3">
                  {item.tag.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-[#2DD4BF19] text-gray-200 py-1 px-3 rounded-full font-[700] text-xs"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <img
                  src={item.img}
                  className="h-28 lg:h-20 w-48 lg:w-32 lg:hidden hover:border-gray-300 hover:border-2"
                />
              </section>
            </div>
          </a>
        ))}
      </section>

      <section className="flex justify-between my-16">
        <p className="text-[13px] lg:text-[15px]">
          Coded in Visual Studio Code by yours truly. Built with{" "}
          <span className="text-slate-200">React.js</span> and{" "}
          <span className="text-slate-200">Tailwind CSS</span>, deployed with
          <span className="text-slate-200"> Vercel</span>. All text is set in
          the Inter typeface.
        </p>
        <img
          src={rotate}
          alt="rotate"
          className=" cursor-pointer h-10 w-10 lg:w-20 lg:h-20 lg:ml-[40vw] lg:absolute "
        />
      </section>
    </div>
  );
};

export default Right;
