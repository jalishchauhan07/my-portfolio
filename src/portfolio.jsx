import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- Constants & Helper Functions ---

// Using a consistent current date (Nov 3, 2025) for accurate total experience calculation
const CURRENT_DATE = new Date("2025-11-03");

/**
 * Calculates the duration between two dates in total months.
 * Note: If the job is "Current", it calculates up to CURRENT_DATE.
 * @param {string} startDateStr - YYYY-MM-DD
 * @param {string} endDateStr - YYYY-MM-DD or 'Current'
 * @returns {number} Total months of experience.
 */
const calculateMonthsDuration = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr);
  const end = endDateStr === 'Current' ? CURRENT_DATE : new Date(endDateStr);

  if (start > end) return 0;

  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
  totalMonths += end.getMonth() - start.getMonth();

  // Adjust if the end day is less than the start day (meaning a full month hasn't been completed)
  if (end.getDate() < start.getDate() && totalMonths > 0) {
    totalMonths -= 1;
  }

  return totalMonths;
};

/**
 * Converts total months into a "Y years, M months" formatted string.
 * @param {number} totalMonths - Total months of experience.
 * @returns {string} Formatted duration string.
 */
const formatDurationString = (totalMonths) => {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (years === 0 && months === 0) return "Less than a month";
  if (years === 0) return `${months} months`;
  if (months === 0) return `${years} years`;
  return `${years} years, ${months} months`;
};

/**
 * Calculates the total experience from an array of experience objects.
 * @param {Array<Object>} experiences - Array of experience objects with startDate and endDate.
 * @returns {string} Formatted total experience string.
 */
const calculateTotalExperience = (experiences) => {
  let totalMonths = 0;
  experiences.forEach(exp => {
    totalMonths += calculateMonthsDuration(exp.startDate, exp.endDate);
  });
  return formatDurationString(totalMonths);
};

// --- Framer Motion Variants ---

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

// --- Components ---

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

// --- Main Portfolio Component ---

const Portfolio = () => {
  const mountRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Three.js setup: Initializing an empty scene just to fulfill the requirements,
  // though the visual setup is missing and the ref is unused.
  useEffect(() => {
    // Simple Three.js setup (No actual rendering without more context/logic)
    if (mountRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      // Set up renderer to fill container
      const updateSize = () => {
        const width = mountRef.current.clientWidth;
        const height = mountRef.current.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };

      updateSize();
      window.addEventListener('resize', updateSize);

      // Append renderer canvas to ref
      if (mountRef.current.firstChild) {
        mountRef.current.removeChild(mountRef.current.firstChild);
      }
      mountRef.current.appendChild(renderer.domElement);

      // Basic animation loop placeholder
      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };
      animate();

      // Cleanup
      return () => {
        window.removeEventListener('resize', updateSize);
        if (mountRef.current && renderer.domElement) {
          mountRef.current.removeChild(renderer.domElement);
        }
      };
    }
  }, []);

  // --- Data Definition ---

  const experiences = [
    {
      title: "Software Developer",
      company: "Digilize Solution",
      location: "Ahmedabad, Gujarat",
      startDate: "2024-10-22",
      endDate: "2025-10-18",
      description: [
        "Engineered responsive web applications using Next.js with SSR (Server-Side Rendering) and SSG (Static Site Generation) to enhance SEO and performance.",
        "Developed scalable RESTful APIs using Express.js for efficient frontend-backend communication and seamless data transactions with PostgreSQL.",
        "Led the implementation of data synchronization mechanisms for accurate migration of large datasets across PostgreSQL instances.",
        "Implemented CI/CD pipelines with GitHub Actions",
        "Automated testing and deployment processes",
        "Applied Prisma ORM for streamlined database operations and schema migrations, boosting productivity and code maintainability.",
        "Ensured application reliability and robustness through comprehensive unit and integration tests using Jest and React Testing Library.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Dicot Innovation",
      location: "Ahmedabad, Gujarat",
      startDate: "2023-09-01",
      endDate: "2024-10-21",
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
      title: "Web Developer",
      company: "Yudiz Solution",
      location: "Ahmedabad, Gujarat",
      startDate: "2023-02-01",
      endDate: "2023-08-30",
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
      skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "MySQL", "Prisma ORM"],
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
      skills: ["Git", "GitHub Actions", "CI/CD", "Jest", "React Testing Library"],
    },
  ];

  // --- Dynamic Calculations ---
  const totalExperienceDuration = calculateTotalExperience(experiences);

  // Map experiences to add formatted duration string for display
  const formattedExperiences = experiences.map(exp => {
    const durationMonths = calculateMonthsDuration(exp.startDate, exp.endDate);
    const durationString = formatDurationString(durationMonths);

    // Format date range (e.g., 10/2024 - Current) + (1 year, 0 months)
    const displayEndDate = exp.endDate === 'Current' ? 'Current' : new Date(exp.endDate).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });
    const displayStartDate = new Date(exp.startDate).toLocaleDateString('en-US', { month: '2-digit', year: 'numeric' });

    return {
      ...exp,
      duration: `${displayStartDate} - ${displayEndDate} (${durationString})`
    };
  });

  // --- JSX Render ---

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-inter">
      {/* Background 3D Placeholder (Fixed positioning for visual background) */}
      <div ref={mountRef} className="fixed inset-0 -z-10" />

      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
      <MobileMenu isOpen={isMenuOpen} />

      {/* Hero Section (Home) */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-16"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold mb-6"
          >
            <span className="bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              Jalish Chauhan
            </span>
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl text-gray-300 mb-8 font-light"
          >
            Full Stack Developer | MERN Stack & Next.js
          </motion.p>

          {/* Summary Section - Dynamic Experience Here */}
          <motion.section
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="py-10 px-4"
          >
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Full Stack Developer with <span className="text-emerald-300 font-semibold">{totalExperienceDuration}</span> of experience delivering scalable web applications using React.js, Next.js, Node.js, and PostgreSQL.
              Skilled in REST API development, real-time systems, payment integration, and CI/CD automation.
            </p>
          </motion.section>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex justify-center space-x-6 mt-8"
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
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeIn}
                whileHover={{ scale: 1.2, color: "#34d399" }}
                className="transition-colors text-gray-400"
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
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
            className="text-4xl font-bold mb-12 text-center text-emerald-400"
          >
            Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {formattedExperiences.map((exp, index) => (
              <ExperienceCard
                key={index}
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
        viewport={{ once: true, amount: 0.1 }}
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
            className="text-4xl font-bold mb-12 text-center text-emerald-400"
          >
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        viewport={{ once: true, amount: 0.1 }}
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
            className="text-4xl font-bold mb-12 text-center text-emerald-400"
          >
            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeIn}
        id="contact"
        className="py-20 px-4 bg-black/20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-emerald-400">Get In Touch</h2>
          <p className="text-gray-300 mb-8 text-lg">
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>
          <a
            href="mailto:chauhanjalish005@gmail.com"
            className="inline-block bg-emerald-500 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-emerald-600 transition-colors transform hover:scale-105"
          >
            Say Hello
          </a>
        </div>
      </motion.section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-6 text-center text-gray-400"
      >
        <p>© 2024 Jalish Chauhan.</p>
      </motion.footer>
    </div>
  );
};

export default Portfolio;
