import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  ArrowDownRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Terminal,
  Code2
} from 'lucide-react';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql 
} from 'react-icons/si';
import { MagneticButton } from './UI';
import { experience, projects } from '../data/data';

export const Hero = () => {
  // Calculate career experience years without a performance-draining interval
  const yearsExp = useMemo(() => {
    if (!experience || experience.length === 0) return '3+';
    const earliestDate = new Date(Math.min(...experience.map(exp => new Date(exp.startDate))));
    const now = new Date();
    const diffYears = (now - earliestDate) / (1000 * 60 * 60 * 24 * 365.25);
    return `${Math.max(1, Math.floor(diffYears))}+`;
  }, []);

  const currentRole = experience?.[0];

  const coreStack = [
    { name: 'Next.js', Icon: SiNextdotjs, color: '#ffffff' },
    { name: 'React', Icon: SiReact, color: '#61DAFB' },
    { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
    { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  ];

  return (
    <section id="home" className="min-h-screen w-full flex items-center justify-center px-6 pt-28 pb-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* ── Left Column: Intro, Value Proposition, Metrics & CTAs ── */}
          <div className="lg:col-span-7 space-y-7">
            {/* Status & Location Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, ease: "easeOut" }} 
              className="flex flex-wrap items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-300 border border-emerald-500/25 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Available for Opportunities
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/5">
                <MapPin size={12} className="text-zinc-500" />
                Ahmedabad, India
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-3">
              <motion.h1 
                initial={{ y: 25, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.1, duration: 0.7, ease: "easeOut" }} 
                className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]"
              >
                Jalish Chauhan.
              </motion.h1>

              <motion.div
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }} 
                className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-300 flex items-center gap-2"
              >
                <span>Full Stack Developer</span>
                <span className="text-emerald-500 font-normal">•</span>
                <span className="text-zinc-400 font-normal text-lg sm:text-2xl">MERN & Next.js</span>
              </motion.div>
            </div>

            {/* Value Proposition Description */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }} 
              className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light max-w-xl"
            >
              Building high-performance SaaS platforms, real-time industrial SCADA systems, and scalable full-stack applications with an emphasis on speed, reliability, and clean code.
            </motion.p>

            {/* Professional Engineering Metrics Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }} 
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg pt-2"
            >
              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight block">
                  {yearsExp}
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider block mt-0.5">
                  Years Exp.
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight block">
                  {projects?.length || 4}+
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider block mt-0.5">
                  Production Apps
                </span>
              </div>

              <div className="p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight block">
                  ~100ms
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-zinc-400 uppercase tracking-wider block mt-0.5">
                  SCADA Latency
                </span>
              </div>
            </motion.div>

            {/* CTAs & Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }} 
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              {/* Primary Action: View Work */}
              <MagneticButton>
                <a 
                  href="#projects" 
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black rounded-full font-semibold transition-all hover:bg-emerald-300 active:scale-95 text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-white/10"
                >
                  <span>Explore Projects</span>
                  <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>

              {/* Secondary Action: Contact */}
              <MagneticButton>
                <a 
                  href="#contact" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all text-xs sm:text-sm font-semibold tracking-wider"
                >
                  <Mail size={15} />
                  <span>Get in Touch</span>
                </a>
              </MagneticButton>
              
              {/* Social Magnetic Links */}
              <div className="flex items-center gap-2.5 pl-1">
                <MagneticButton>
                  <a 
                    href="https://github.com/jalishchauhan07" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-md"
                    title="GitHub Profile"
                  >
                    <Github size={18} strokeWidth={1.8} />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a 
                    href="https://www.linkedin.com/in/jalish-chauhan/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/[0.02] text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-md"
                    title="LinkedIn Profile"
                  >
                    <Linkedin size={18} strokeWidth={1.8} />
                  </a>
                </MagneticButton>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Interactive Developer Architecture Card ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1 border border-white/10 shadow-2xl shadow-black/80 group">
              {/* Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none" />

              <div className="relative rounded-[22px] bg-[#0d0d10]/95 p-6 sm:p-7 space-y-6 overflow-hidden">
                {/* Window Chrome Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-400">
                    <Code2 size={12} className="text-emerald-400" />
                    <span>jalish.engineer.ts</span>
                  </div>

                  <span className="text-[10px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                    ONLINE
                  </span>
                </div>

                {/* Current Employment Card */}
                {currentRole && (
                  <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-zinc-500 font-mono flex items-center gap-1.5">
                        <Briefcase size={12} className="text-zinc-400" />
                        CURRENT FOCUS
                      </span>
                      <span className="text-emerald-400 font-mono text-[11px] font-medium">
                        {currentRole.endDate === 'Current' ? 'Active Role' : 'Recent'}
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="text-base font-bold text-white tracking-tight">
                        {currentRole.title}
                      </h4>
                      <span className="text-xs font-mono text-zinc-400">
                        @ {currentRole.company}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                      {currentRole.description?.[0] || 'Developing scalable SaaS & MERN architectures.'}
                    </p>
                  </div>
                )}

                {/* Core Stack Badges */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                      Core Superpowers
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      Full-Stack
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2">
                    {coreStack.map((tech) => (
                      <div
                        key={tech.name}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 hover:bg-white/[0.06] transition-all duration-200 flex flex-col items-center justify-center gap-1.5 group/stack cursor-default"
                      >
                        <tech.Icon 
                          size={18} 
                          style={{ color: tech.color }} 
                          className="transition-transform duration-200 group-hover/stack:scale-110" 
                        />
                        <span className="text-[11px] font-mono text-zinc-400 group-hover/stack:text-white transition-colors">
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Engineering Highlights / Architecture Checklist */}
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>Next.js SSR & Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>Real-time Telemetry (MQTT & WebSockets)</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-zinc-300 font-mono">
                    <CheckCircle2 size={13} className="text-emerald-400 flex-shrink-0" />
                    <span>AI-Powered Workflows & Secure REST APIs</span>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
