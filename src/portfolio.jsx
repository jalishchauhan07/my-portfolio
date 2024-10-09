import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Navbar = ({ isOpen, setIsOpen }) => (
  <motion.nav
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: "spring", stiffness: 100 }}
    className="fixed w-full z-50 bg-black/20 backdrop-blur-lg"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-shrink-0"
        >
          <span className="text-white text-xl font-bold">Jalish Chauhan</span>
        </motion.div>
        <div className="hidden md:block">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="ml-10 flex items-baseline space-x-4"
          >
            {["Home", "Experience", "Projects", "Skills", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  variants={fadeIn}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="md:hidden"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </motion.div>
      </div>
    </div>
  </motion.nav>
);

const MobileMenu = ({ isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-lg"
      >
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="pt-20 pb-3 space-y-1 px-4"
        >
          {["Home", "Experience", "Projects", "Skills", "Contact"].map(
            (item) => (
              <motion.a
                key={item}
                variants={fadeIn}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            )
          )}
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ExperienceCard = ({
  title,
  company,
  location,
  duration,
  description,
}) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ scale: 1.02 }}
    className="bg-black/30 backdrop-blur-md p-6 rounded-xl hover:bg-black/40 transition-colors"
  >
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <div className="text-emerald-400 font-semibold mb-1">{company}</div>
    <div className="text-gray-400 text-sm mb-1">{location}</div>
    <div className="text-gray-400 text-sm mb-4">{duration}</div>
    <motion.ul
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="text-gray-300 space-y-2"
    >
      {description.map((item, index) => (
        <motion.li key={index} variants={fadeIn} className="flex items-start">
          <span className="mr-2">•</span>
          <span>{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const ProjectCard = ({ title, description, technologies, details }) => (
  <motion.div
    variants={fadeIn}
    whileHover={{ scale: 1.02 }}
    className="bg-black/30 backdrop-blur-md p-6 rounded-xl hover:bg-black/40 transition-colors"
  >
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-300 mb-4">{description}</p>
    <div className="text-gray-300 mb-4">
      {details.map((detail, index) => (
        <div key={index} className="flex items-start mb-2">
          <span className="mr-2">•</span>
          <span>{detail}</span>
        </div>
      ))}
    </div>
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
      className="flex flex-wrap gap-2"
    >
      {technologies.map((tech, index) => (
        <motion.span
          key={index}
          variants={fadeIn}
          whileHover={{ scale: 1.1 }}
          className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const SkillCategory = ({ title, skills }) => (
  <motion.div
    variants={fadeIn}
    className="bg-black/30 backdrop-blur-md p-6 rounded-xl"
  >
    <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
    <div className="flex flex-wrap gap-3">
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          variants={fadeIn}
          whileHover={{ scale: 1.1 }}
          className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

const Portfolio = () => {
  const mountRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function calculateWorkDuration(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Ensure startDate is not after endDate
    if (start > end) {
      return "Invalid dates. Start date cannot be after end date.";
    }

    // Calculate total months between the two dates
    const totalMonths =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (totalMonths >= 12) {
      const years = Math.floor(totalMonths / 12);
      const remainingMonths = totalMonths % 12;
      return remainingMonths > 0
        ? `${years} years, ${remainingMonths} months`
        : `${years} years`;
    } else {
      return `${totalMonths} months`;
    }
  }
  const experiences = [
    {
      title: "Backend Developer",
      company: "Dicot Innovation",
      location: "Ahmedabad, Gujarat",
      duration:
        "09/2023 - 10/2024 (" +
        calculateWorkDuration("2023-09-1", "2024-10-07") +
        ")",
      description: [
        "Leveraged Express.js to manage server-side logic and RESTful APIs",
        "Ensured smooth and reliable performance through optimized code",
        "Integrated Telegram bot with Node.js API for specific user messaging",
        "Implemented CI/CD pipelines with GitHub Actions",
        "Automated testing and deployment processes",
        "Utilized monitoring tools for system performance",
        "Collaborated with cross-functional teams for feature integration",
      ],
    },
    {
      title: "Web Developer (Intern)",
      company: "Yudiz Solution",
      location: "Ahmedabad, Gujarat",
      duration:
        "02/2023 - 08/2023 (" +
        calculateWorkDuration("2023-02-1", "2023-08-01") +
        ")",
      description: [
        "Developed interactive web applications using Phaser.js and Three.js",
        "Created real-time communication channels for multiplayer games",
        "Integrated React.js for scalable user interfaces",
        "Enhanced user engagement through synchronized interactions",
        "Crafted immersive experiences with advanced features",
        "Delivered polished user experiences through seamless integration",
      ],
    },
  ];

  const projects = [
    {
      title: "Hospital Management System",
      description:
        "A comprehensive system for managing hospital appointments and patient records",
      details: [
        "Developed with React.js frontend and Node.js backend",
        "Incorporated Bootstrap for user-friendly interface",
        "Integrated API for nearby medical shop information",
        "Implemented MySQL database for efficient data management",
        "Added user authentication with role-based access control",
      ],
      technologies: ["React.js", "Node.js", "MySQL", "Express.js", "Bootstrap"],
    },
    {
      title: "Reporting System for Solar Industry",
      description:
        "MERN Stack application for project management and supervision",
      details: [
        "Developed comprehensive reporting system with MERN Stack",
        "Implemented supervisor login with camera API integration",
        "Added Google Maps integration for location tracking",
        "Created charts for progress tracking",
        "Enabled efficient project and user role management",
      ],
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Google Maps API",
      ],
    },
  ];

  const skillCategories = [
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL"],
    },
    {
      title: "Frontend Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "TypeScript",
        "Next.js",
        "Bootstrap",
        "TailwindCSS",
      ],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git"],
    },
  ];

  // Three.js setup remains the same...
  // (Previous Three.js code here)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div ref={mountRef} className="fixed inset-0 -z-10" />

      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="home"
        className="min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              Jalish Chauhan
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Backend Developer
          </motion.p>
          <motion.p>
            {/* Summary Section */}
            <motion.section
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="py-20 px-4"
            >
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Highly skilled Backend Developer with 1+ year of experience in
                  building scalable applications using Node.js and Express.js.
                  Proficient in integrating third-party APIs for seamless data
                  flow, writing robust code with TypeScript, and optimizing data
                  storage with MongoDB. Dedicated to delivering exceptional user
                  experiences through innovative and efficient solutions.
                </p>
              </div>
            </motion.section>
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Github, href: "https://github.com/jalishchauhan07" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/jalish-chauhan/",
              },
              { icon: Mail, href: "mailto:chauhanjalish005@gmail.com" },
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                variants={fadeIn}
                whileHover={{ scale: 1.2, color: "#34d399" }}
                className="transition-colors"
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.2 } },
        }}
        id="experience"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold mb-12 text-center"
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                title={exp.title}
                company={exp.company}
                location={exp.location}
                duration={exp.duration}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.2 } },
        }}
        id="projects"
        className="py-20 px-4 bg-black/20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold mb-12 text-center"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </motion.section>
      {/* Skills Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={{
          initial: {},
          animate: { transition: { staggerChildren: 0.2 } },
        }}
        id="skills"
        className="py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            variants={fadeIn}
            className="text-4xl font-bold mb-12 text-center"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </motion.section>
      {/* (Previous sections with added motion components) */}
      <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:chauhanjalish005@gmail.com"
            className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-600 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-6 text-center text-gray-400"
      >
        <p>© 2024 Jalish Chauhan. All rights reserved.</p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
