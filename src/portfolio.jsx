import { useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Github, Linkedin, Menu, X, ExternalLink, Code2, ChevronRight, Layout, Terminal, Database, } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from "framer-motion";
import { experience, projects, } from "./data/data.js";


const rawExp = experience

const skills = [
  { category: "Frontend", icon: <Layout className="text-emerald-400" />, items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"] },
  { category: "Backend", icon: <Terminal className="text-emerald-400" />, items: ["Node.js", "Express", "RESTful APIs", "WebSockets", "GraphQL"] },
  { category: "Database & Cloud", icon: <Database className="text-emerald-400" />, items: ["PostgreSQL", "MongoDB", "Prisma ORM", "Docker", "AWS", "CI/CD"] },
];

// --- Logic Engine ---

const calculateMonthsDuration = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr);
  const end = endDateStr === "Current" ? new Date() : new Date(endDateStr);
  if (isNaN(start.getTime())) return 0;
  if (start > end) return 0;

  let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
  totalMonths += end.getMonth() - start.getMonth();
  if (end.getDate() < start.getDate()) totalMonths--;
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


const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;
    const xPct = (mouseX / width - 0.5) * 200;
    const yPct = (mouseY / height - 0.5) * 200;
    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`interactive-card ${className}`}
    >
      <div style={{ transform: "translateZ(50px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

// --- Framer Motion Variants ---

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.15 } },
};

// --- Shared Components ---

const Navbar = ({ isOpen, setIsOpen, activeSection }) => (
  <nav className="fixed w-full md:w-auto md:top-8 md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-300">
    <div className="md:hidden flex items-center justify-between px-6 py-4 bg-[#050505]/80 backdrop-blur-xl border-b border-white/5">
      <div className="text-white text-xl font-bold tracking-tighter">JALISH CHAUHAN</div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>

    <div className={`
      md:flex items-center gap-2 p-2 rounded-full md:bg-white/[0.03] md:backdrop-blur-2xl md:border md:border-white/10
      ${isOpen ? "flex" : "hidden"} flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-[#050505]/95 md:bg-transparent border-b border-white/5 md:border-none py-8 md:py-2
    `}>
      {["Home", "Experience", "Projects", "Skills", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setIsOpen(false)}
          className={`
            relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 w-full md:w-auto text-center
            ${activeSection === item.toLowerCase() ? "text-white" : "text-gray-400 hover:text-emerald-400"}
          `}
        >
          {activeSection === item.toLowerCase() && (
            <motion.div
              layoutId="nav-pill"
              className="absolute inset-0 bg-white/10 rounded-full md:block hidden"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{item}</span>
        </a>
      ))}
    </div>
  </nav>
);

const SectionHeading = ({ number, title }) => (
  <div className="flex items-center gap-6 mb-16">
    <span className="text-emerald-500 font-mono text-xl md:text-2xl font-light">{number}.</span>
    <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
      {title}
    </h2>
    <div className="h-px bg-gradient-to-r from-white/20 to-transparent flex-grow" />
  </div>
);

// --- Main Application ---

const Portfolio = () => {
  const mountRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const [liveExperience, setLiveExperience] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // --- Data Definition ---
  const data = useMemo(() => {

    const totalMonths = rawExp.reduce((acc, exp) => acc + calculateMonthsDuration(exp.startDate, exp.endDate), 0);
    const formattedExp = rawExp.map(exp => ({
      ...exp,
      displayDuration: `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${exp.endDate === 'Current' ? 'Present' : new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} (${formatDurationString(calculateMonthsDuration(exp.startDate, exp.endDate))})`
    }));

    const fixedMs = rawExp
      .filter(exp => exp.endDate !== "Current")
      .reduce((acc, exp) => acc + (new Date(exp.endDate) - new Date(exp.startDate)), 0);

    const currentJobStart = new Date(rawExp.find(exp => exp.endDate === "Current").startDate);

    return { totalExperience: formatDurationString(totalMonths), experiences: formattedExp, projects, skills, fixedMs, currentJobStart };
  }, []);

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const currentMs = now - data.currentJobStart;
      const totalMs = data.fixedMs + currentMs;

      const seconds = Math.floor((totalMs / 1000) % 60);
      const minutes = Math.floor((totalMs / (1000 * 60)) % 60);
      const hours = Math.floor((totalMs / (1000 * 60 * 60)) % 24);
      const days = Math.floor((totalMs / (1000 * 60 * 60 * 24)) % 30.4375);
      const months = Math.floor((totalMs / (1000 * 60 * 60 * 24 * 30.4375)) % 12);
      const years = Math.floor(totalMs / (1000 * 60 * 60 * 24 * 365.25));

      setLiveExperience({ years, months, days, hours, minutes, seconds });
    };

    const timer = setInterval(updateCounter, 1000);
    updateCounter();
    return () => clearInterval(timer);
  }, [data.fixedMs, data.currentJobStart]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experience", "projects", "skills", "contact"];
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mountRef.current) return;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 3000; i++) {
      vertices.push(
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(1000) - 500
      );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

    const canvas = document.createElement('canvas');
    canvas.width = 16; canvas.height = 16;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(8, 8, 0, 8, 8, 8);
    gradient.addColorStop(0, 'rgba(16, 185, 129, 1)');
    gradient.addColorStop(1, 'rgba(16, 185, 129, 0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 16, 16);
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 6, map: texture, transparent: true, opacity: 0.6,
      depthWrite: false, blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 800;

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    const windowHalfX = window.innerWidth / 2;
    const windowHalfY = window.innerHeight / 2;

    const onDocumentMouseMove = (event) => {
      mouseX = (event.clientX - windowHalfX);
      mouseY = (event.clientY - windowHalfY);
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      targetX = mouseX * 0.05;
      targetY = mouseY * 0.05;
      points.rotation.y += 0.0003;
      points.rotation.x += 0.0001;
      camera.position.x += (targetX - camera.position.x) * 0.02;
      camera.position.y += (-targetY - camera.position.y) * 0.02;
      camera.lookAt(scene.position);
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
      document.removeEventListener('mousemove', onDocumentMouseMove);
      cancelAnimationFrame(animationFrameId);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-emerald-500/30 font-sans overflow-x-hidden">

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-500 origin-left z-[100]"
        style={{ scaleX }}
      />

      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] mix-blend-screen" />
      </div>

      <div ref={mountRef} className="fixed inset-0 pointer-events-none opacity-50 z-0" />

      <Navbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} activeSection={activeSection} />

      <main className="relative z-10 flex flex-col items-center">

        <section id="home" className="min-h-screen w-full flex flex-col justify-center px-6 pt-20">
          <div className="max-w-5xl mx-auto w-full">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-mono tracking-widest uppercase shadow-[0_0_15px_rgba(16,185,129,0.1)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Work
            </motion.div>

            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }} className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-transparent">
              Jalish<br />Chauhan.
            </motion.h1>

            <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }} className="flex flex-col gap-6">
              <p className="text-lg md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light">
                Crafting scalable digital experiences. Full Stack Developer based in Ahmedabad, building advanced MERN & Next.js architectures.
              </p>

              <div className="flex flex-wrap gap-4 mt-2">
                {[
                  { label: "Yrs", value: liveExperience.years },
                  { label: "Mos", value: liveExperience.months },
                  { label: "Days", value: liveExperience.days },
                  { label: "Hrs", value: liveExperience.hours },
                  { label: "Min", value: liveExperience.minutes },
                  { label: "Sec", value: liveExperience.seconds }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center min-w-[60px] p-3 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md">
                    <span className="text-2xl md:text-3xl font-bold text-white font-mono">{String(item.value).padStart(2, '0')}</span>
                    <span className="text-[10px] text-emerald-500 uppercase tracking-tighter font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="mt-12 flex items-center gap-6">
              <MagneticButton>
                <a href="#experience" className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold transition-all hover:bg-gray-200 hover:scale-105 active:scale-95">
                  View My Work <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </MagneticButton>
              <div className="flex gap-4">
                <MagneticButton>
                  <a href="https://github.com/jalishchauhan07" target="_blank" rel="noreferrer" className="block p-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                    <Github size={20} />
                  </a>
                </MagneticButton>
                <MagneticButton>
                  <a href="https://www.linkedin.com/in/jalish-chauhan/" target="_blank" rel="noreferrer" className="block p-4 rounded-full border border-white/10 hover:border-white/30 hover:bg-white/5 transition-all">
                    <Linkedin size={20} />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="experience" className="w-full py-32 px-6">
          <div className="max-w-4xl mx-auto w-full">
            <SectionHeading number="01" title="Experience" />
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="relative border-l border-white/10 ml-4 md:ml-0 pl-8 md:pl-12 space-y-16">
              {data.experiences.map((exp, i) => (
                <motion.div key={i} variants={fadeInUp} className="relative group">
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-4 h-4 rounded-full bg-[#050505] border-2 border-emerald-500 group-hover:scale-125 group-hover:bg-emerald-500 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300" />

                  <TiltCard>
                    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl group-hover:bg-white/[0.04] group-hover:border-white/10 transition-colors backdrop-blur-sm relative overflow-hidden h-full">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[50px] group-hover:bg-emerald-400/20 transition-colors pointer-events-none" />

                      <h3 className="text-2xl font-bold text-white tracking-tight">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 mb-6 text-emerald-400 font-medium">
                        <span>{exp.company}</span>
                        <span className="text-gray-600">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>

                      <div className="inline-block px-3 py-1 bg-white/5 rounded-md text-gray-400 text-xs font-mono uppercase tracking-widest mb-6">
                        {exp.displayDuration}
                      </div>

                      <ul className="space-y-4">
                        {exp.description.map((item, j) => (
                          <li key={j} className="text-gray-300 text-sm md:text-base flex gap-4 leading-relaxed font-light">
                            <span className="text-emerald-500 mt-1 flex-shrink-0">▹</span>
                            <span className="opacity-90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="projects" className="w-full py-32 px-6 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
          <div className="max-w-5xl mx-auto w-full">
            <SectionHeading number="02" title="Selected Works" />
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true, margin: "-100px" }} className="grid md:grid-cols-2 gap-6">
              {data.projects.map((project, i) => (
                <motion.div key={i} variants={fadeInUp}>
                  <TiltCard className="h-full">
                    <div className="group relative block bg-white/[0.02] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.04] transition-all overflow-hidden h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-emerald-500/0 group-hover:to-emerald-500/5 transition-colors pointer-events-none" />

                      <div className="flex justify-between items-start mb-6">
                        <Code2 size={32} className="text-emerald-500/70" />
                        <a href={project.link} target="_blank" rel="noreferrer" className="p-2 text-gray-400 hover:text-white transition-colors">
                          <ExternalLink size={20} />
                        </a>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, j) => (
                          <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-gray-300 pointer-events-none">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="skills" className="w-full py-32 px-6">
          <div className="max-w-5xl mx-auto w-full">
            <SectionHeading number="03" title="Technical Skills" />
            <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
              {data.skills.map((skillGroup, i) => (
                <motion.div key={i} variants={fadeInUp} className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-emerald-500/30 transition-colors">
                  <div className="mb-6 bg-white/5 w-12 h-12 rounded-xl flex items-center justify-center">
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-6">{skillGroup.category}</h3>
                  <div className="flex flex-col gap-4">
                    {skillGroup.items.map((skill, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/50" />
                        <span className="text-gray-300 font-light">{skill}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="contact" className="w-full py-40 px-6 text-center relative overflow-hidden">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-[400px] bg-emerald-500/10 blur-[150px] opacity-70 pointer-events-none rounded-t-full mix-blend-screen" />

          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-4 block">04. What's Next?</span>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter">Get In Touch</h2>
            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-12">
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>
            <MagneticButton className="inline-block">
              <a href="mailto:chauhanjalish005@gmail.com" className="inline-block px-10 py-5 bg-emerald-500 text-black font-bold rounded-full text-lg transition-transform hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                Say Hello
              </a>
            </MagneticButton>
          </div>
        </section>

        <footer className="w-full pb-10 text-center relative z-10 text-gray-500 text-sm font-mono flex flex-col items-center gap-4">
          <div className="flex gap-6 mb-2 text-gray-400">
            <MagneticButton>
              <a href="https://github.com/jalishchauhan07" className="block hover:text-emerald-400 transition-colors"><Github size={20} /></a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/jalish-chauhan/" className="block hover:text-emerald-400 transition-colors"><Linkedin size={20} /></a>
            </MagneticButton>
          </div>
          <p>Built with React, Tailwind & Three.js</p>
          <p>© {new Date().getFullYear()} Jalish Chauhan</p>
        </footer>

      </main>
    </div>
  );
};

export default Portfolio;
