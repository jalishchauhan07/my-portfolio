import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Github, Linkedin, Mail, Menu, X, ExternalLink } from "lucide-react";
import { motion,  } from "framer-motion";

// --- Logic Engine (The "Senior Dev" Way) ---

/**
 * Calculates total months between two dates. 
 * High-precision: accounts for days to ensure "1 month" isn't triggered 
 * until a full 30-day cycle (approx) has passed, or defaults to 1 for new jobs.
 */
const calculateMonthsDuration = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr);
  const end = endDateStr === "Current" ? new Date() : new Date(endDateStr);

  if (isNaN(start.getTime())) return 0;
  if (start > end) return 0;

  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
  totalMonths += end.getMonth() - start.getMonth();

  // Adjust if the day of the month hasn't been reached yet
  if (end.getDate() < start.getDate()) {
    totalMonths--;
  }

  // If it's a "Current" job and less than a month, we return 1 
  // because you are actively working that month.
  return Math.max(endDateStr === "Current" ? 1 : 0, totalMonths);
};

const formatDurationString = (totalMonths) => {
  if (totalMonths <= 0) return "Starting soon";
  
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearPart = years > 0 ? `${years} yr${years > 1 ? "s" : ""}` : "";
  const monthPart = months > 0 ? `${months} mo${months > 1 ? "s" : ""}` : "";

  return [yearPart, monthPart].filter(Boolean).join(" ");
};

// --- Framer Motion Variants ---

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

// --- Shared Components ---

const Navbar = ({ isOpen, setIsOpen }) => (
  <nav className="fixed w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="text-white text-xl font-bold tracking-tighter">JALISH.DEV</div>
      
      <div className="hidden md:flex space-x-8">
        {["Experience", "Projects", "Skills", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
            {item}
          </a>
        ))}
      </div>

      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </nav>
);

const ExperienceCard = ({ title, company, location, duration, description }) => (
  <motion.div variants={fadeInUp} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all">
    <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
    <h3 className="text-xl font-bold text-white">{title}</h3>
    <div className="text-emerald-400 font-medium mt-1">{company} • <span className="text-gray-500 text-sm">{location}</span></div>
    <div className="text-gray-400 text-xs font-mono mt-2 uppercase tracking-widest">{duration}</div>
    <ul className="mt-6 space-y-3">
      {description.map((item, i) => (
        <li key={i} className="text-gray-300 text-sm flex gap-3 leading-relaxed">
          <span className="text-emerald-500 mt-1">▹</span> {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

// --- Main Application ---

const Portfolio = () => {
  const mountRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // --- Data Definition (Moving to Memo for performance) ---
  const data = useMemo(() => {
    const rawExp = [
      {
        title: "Software Developer",
        company: "ABJ Experts",
        location: "Ahmedabad",
        startDate: "2025-12-08",
        endDate: "Current",
        description: [
          "Building high-performance Next.js applications with SSR/SSG.",
          "Managing large-scale data sync across PostgreSQL instances using Prisma.",
          "Automating deployment cycles via GitHub Actions and CI/CD."
        ],
      },
      {
        title: "Software Developer",
        company: "Digilize Solution",
        location: "Ahmedabad",
        startDate: "2024-10-22",
        endDate: "2025-12-06",
        description: ["Architected RESTful APIs using Express.js.", "Optimized frontend performance by 40% using Next.js."],
      },
      {
        title: "Backend Developer",
        company: "Dicot Innovation",
        location: "Ahmedabad",
        startDate: "2023-09-01",
        endDate: "2024-10-21",
        description: ["Integrated complex Telegram bots with Node.js.", "Scaled server-side logic for high-concurrency users."],
      },
      {
        title: "Web Developer",
        company: "Yudiz Solution",
        location: "Ahmedabad",
        startDate: "2023-02-01",
        endDate: "2023-08-30",
        description: ["Built interactive 3D web apps with Three.js and Phaser."],
      }
    ];

    const totalMonths = rawExp.reduce((acc, exp) => acc + calculateMonthsDuration(exp.startDate, exp.endDate), 0);
    
    const formattedExp = rawExp.map(exp => ({
      ...exp,
      displayDuration: `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${exp.endDate === 'Current' ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} (${formatDurationString(calculateMonthsDuration(exp.startDate, exp.endDate))})`
    }));

    return { totalExperience: formatDurationString(totalMonths), experiences: formattedExp };
  }, []);

  // Three.js Background Logic
  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Add some subtle particles for a "Pro" feel
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
      vertices.push(THREE.MathUtils.randFloatSpread(2000), THREE.MathUtils.randFloatSpread(2000), THREE.MathUtils.randFloatSpread(2000));
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    const points = new THREE.Points(geometry, new THREE.PointsMaterial({ color: 0x10b981, size: 2 }));
    scene.add(points);

    camera.position.z = 1000;

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.001;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30">
      <div ref={mountRef} className="fixed inset-0 pointer-events-none opacity-40" />
      
      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono uppercase tracking-widest">
            Available for Freelance
          </motion.div>
          <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Jalish Chauhan
          </motion.h1>
          <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer with <span className="text-white font-semibold">{data.totalExperience}</span> of professional expertise building scalable MERN & Next.js applications.
          </motion.p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 flex items-center gap-4">
            <span className="text-emerald-500 font-mono text-xl">01.</span> Professional Experience
            <div className="h-px bg-white/10 flex-grow" />
          </h2>
          <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid gap-8">
            {data.experiences.map((exp, i) => (
              <ExperienceCard key={i} title={exp.title} company={exp.company} location={exp.location} duration={exp.displayDuration} description={exp.description} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 border-t border-white/5 text-center">
        <h3 className="text-gray-500 text-sm font-mono mb-4">WANT TO COLLABORATE?</h3>
        <a href="mailto:chauhanjalish005@gmail.com" className="text-4xl font-bold text-white hover:text-emerald-400 transition-colors underline underline-offset-8 decoration-white/10 hover:decoration-emerald-400/50">
          Get In Touch
        </a>
        <div className="mt-12 flex justify-center gap-8 text-gray-500">
          <a href="https://github.com/jalishchauhan07" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="https://www.linkedin.com/in/jalish-chauhan/" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
