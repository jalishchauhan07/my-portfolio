import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  ArrowDownRight, 
  Mail, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle,
  FolderGit2,
  Activity,
  Bell,
  ShieldCheck,
  Zap,
  ArrowRight,
  Layers,
  ChevronRight
} from 'lucide-react';
import { MagneticButton, LiveExperienceCounter } from './UI';
import { experience, projects } from '../data/data';

/* ────────────────────────────────────────────────────────────
   Real-World Production Engineering Challenges & Solutions Data
   Explicitly highlighting challenges solved in his experience & projects
   with zero technology name-dropping or stack listings.
   ──────────────────────────────────────────────────────────── */
const engineeringChallenges = [
  {
    id: 'serialization-uptime',
    title: 'Zero-Downtime High-Speed Industrial Serialization',
    category: 'Manufacturing MES',
    project: 'InspectaTrace',
    experienceCompany: 'Digilize Solution',
    impactMetric: '100% Line Uptime',
    challenge: 'High-speed packaging lines moving hundreds of cartons per minute halted whenever industrial printer network sockets timed out or database transaction write locks occurred.',
    solution: 'Engineered an asynchronous FIFO memory-buffered print queue with automated hardware keep-alive reconnection and non-blocking database transactions, achieving 100% packaging line uptime.',
    outcome: 'Zero production line stoppages, continuous 24/7 industrial printing, and regulatory compliance logs generated in real time.'
  },
  {
    id: 'telemetry-alerting',
    title: 'Real-Time Telemetry Lag & Instant Incident Escalation',
    category: 'Industrial IoT',
    project: 'Vision Web & Vision Mobile',
    experienceCompany: 'Dicot Innovation',
    impactMetric: '<100ms Latency',
    challenge: 'Industrial sensors emitted thousands of noisy telemetry events per second over spotty plant WiFi; factory floor supervisors missed critical machine threshold spikes when away from desktop consoles.',
    solution: 'Architected a sub-100ms event pipeline with client-side deduplication, coupled with automated Telegram bot messaging and instant transactional email alerts dispatched the moment safety thresholds are breached.',
    outcome: 'Immediate mobile alerts delivered to plant managers within milliseconds of an anomaly, preventing costly equipment burnouts and unplanned line shutdowns.'
  },
  {
    id: 'anti-counterfeit-scale',
    title: 'Unique Product Code Verification & Live Expiry Status',
    category: 'Consumer SaaS',
    project: 'Product View',
    experienceCompany: 'Digilize Solution',
    impactMetric: 'Sub-Second Expiry Check',
    challenge: 'Consumers and supply chain distributors needed to enter or scan a Unique Product Code (UID) to retrieve genuine product information and immediately verify whether an item is actively safe or expired, during nationwide peak scan surges.',
    solution: 'Architected a low-latency edge verification engine that resolves unique serialized codes against batch timelines, instantly calculating live shelf-life to verify whether the product is valid or expired, alongside certified lab reports.',
    outcome: 'Protects consumer health by preventing consumption of expired or counterfeit goods through sub-second mobile verification and tamper-proof digital certificates.'
  },
  {
    id: 'mobile-web-parity',
    title: 'Cross-Platform SCADA Parity on Factory Floor',
    category: 'Mobile & SCADA',
    project: 'Vision Mobile App',
    experienceCompany: 'Dicot Innovation',
    impactMetric: '100% Feature Parity',
    challenge: 'Floor engineers needed the identical live sensor telemetry of Vision Web on handheld mobile devices without excessive battery drain or socket drops in factory dead zones.',
    solution: 'Developed an adaptive WebSocket reconnection backoff with local state hydration and background push alerts, enabling seamless machine oversight across the factory floor.',
    outcome: 'Complete operational visibility for plant managers walking the factory floor, with automated push notifications on any threshold breach.'
  }
];

export const Hero = () => {
  // Calculate career experience years
  const yearsExp = useMemo(() => {
    if (!experience || experience.length === 0) return '3+';
    const earliestDate = new Date(Math.min(...experience.map(exp => new Date(exp.startDate))));
    const now = new Date();
    const diffYears = (now - earliestDate) / (1000 * 60 * 60 * 24 * 365.25);
    return `${Math.max(1, Math.floor(diffYears))}+`;
  }, []);

  const [heroTab, setHeroTab] = useState('challenges'); // 'challenges' | 'experience' | 'projects'
  const [selectedChallengeId, setSelectedChallengeId] = useState(engineeringChallenges[0].id);

  const activeChallenge = useMemo(() => {
    return engineeringChallenges.find(c => c.id === selectedChallengeId) || engineeringChallenges[0];
  }, [selectedChallengeId]);

  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center px-6 pt-28 pb-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        
        {/* ── Top Hero Grid: Bio & Interactive Experience / Challenges Console ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* ── Left Column: Intro, Systems Philosophy & CTAs ── */}
          <div className="lg:col-span-6 space-y-7">
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
                Available for Mission-Critical Engineering
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
                <span>Software Engineer & Systems Builder</span>
              </motion.div>
            </div>

            {/* Systems Philosophy & Experience Summary (Zero technology jargon) */}
            <motion.p 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ delay: 0.25, duration: 0.7, ease: "easeOut" }} 
              className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light max-w-xl"
            >
              Proven track record engineering high-throughput manufacturing MES systems, real-time industrial telemetry platforms, and consumer authentication portals. Experienced in diagnosing complex production bottlenecks, eliminating line downtime, and building resilient distributed systems.
            </motion.p>

            {/* Live Ticking Career Experience Counter & Production Impact */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.35, duration: 0.7, ease: "easeOut" }} 
              className="space-y-3.5 max-w-xl pt-1"
            >
              {/* Real-time Ticker: Years, Months, Weeks, Days, Hours, Minutes, Seconds */}
              <LiveExperienceCounter startDateStr="2023-02-01T00:00:00" />

              {/* Fast Systems Reliability Metric Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">Shipped Systems</span>
                  <span className="text-sm font-bold font-mono text-white">{projects?.length || 4}+</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">MES Line Uptime</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">100%</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono text-zinc-400">Telemetry Latency</span>
                  <span className="text-sm font-bold font-mono text-emerald-400">&lt;100ms</span>
                </div>
              </div>
            </motion.div>

            {/* CTAs & Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.45, duration: 0.7, ease: "easeOut" }} 
              className="pt-3 flex flex-wrap items-center gap-4"
            >
              <MagneticButton>
                <a 
                  href="#challenges-deepdive" 
                  className="group inline-flex items-center gap-2.5 px-7 py-3.5 bg-emerald-500 text-black font-bold rounded-full transition-all hover:bg-emerald-400 active:scale-95 text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-emerald-500/20"
                >
                  <span>Explore Challenges</span>
                  <ArrowDownRight size={16} className="group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                </a>
              </MagneticButton>

              <MagneticButton>
                <a 
                  href="#projects" 
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 bg-white/[0.03] text-zinc-300 hover:text-white hover:border-white/25 hover:bg-white/[0.08] transition-all text-xs sm:text-sm font-semibold tracking-wider"
                >
                  <FolderGit2 size={15} />
                  <span>View Projects</span>
                </a>
              </MagneticButton>
              
              {/* Social Links */}
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

          {/* ── Right Column: Interactive Systems, Experience & Solved Challenges Console ── */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.94, y: 30 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }} 
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-1 border border-white/10 shadow-2xl shadow-black/80">
              {/* Subtle Ambient Glow */}
              <div className="absolute -top-10 -right-10 w-60 h-60 bg-emerald-500/[0.08] rounded-full blur-3xl pointer-events-none" />

              <div className="relative rounded-[22px] bg-[#0d0d10]/95 p-5 sm:p-6 space-y-5 overflow-hidden">
                
                {/* Console Header Bar */}
                <div className="flex items-center justify-between pb-3.5 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>

                  {/* Interactive Switcher Tabs */}
                  <div className="flex items-center bg-white/[0.04] p-1 rounded-xl border border-white/5 gap-1">
                    <button
                      onClick={() => setHeroTab('challenges')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                        heroTab === 'challenges'
                          ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Challenges Solved
                    </button>
                    <button
                      onClick={() => setHeroTab('experience')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                        heroTab === 'experience'
                          ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Experience
                    </button>
                    <button
                      onClick={() => setHeroTab('projects')}
                      className={`px-3 py-1 rounded-lg text-xs font-mono font-medium transition-all ${
                        heroTab === 'projects'
                          ? 'bg-emerald-500 text-black font-bold shadow-md shadow-emerald-500/20'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      Projects
                    </button>
                  </div>
                </div>

                {/* Tab Content Display */}
                <div className="min-h-[380px] flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    
                    {/* ── TAB 1: CHALLENGES & HOW I SOLVED THEM ── */}
                    {heroTab === 'challenges' && (
                      <motion.div
                        key="tab-challenges"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-4"
                      >
                        {/* Selector Pills */}
                        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
                          {engineeringChallenges.map((c) => (
                            <button
                              key={c.id}
                              onClick={() => setSelectedChallengeId(c.id)}
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-mono whitespace-nowrap transition-all border ${
                                selectedChallengeId === c.id
                                  ? 'bg-white/10 text-white border-emerald-500/50 shadow-sm'
                                  : 'bg-white/[0.02] text-zinc-400 border-white/5 hover:border-white/15'
                              }`}
                            >
                              {c.project}
                            </button>
                          ))}
                        </div>

                        {/* Active Challenge Card */}
                        <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-3.5">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {activeChallenge.category}
                            </span>
                            <span className="text-xs font-mono text-zinc-400">
                              {activeChallenge.impactMetric}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-bold text-white tracking-tight leading-snug">
                            {activeChallenge.title}
                          </h3>

                          {/* The Challenge */}
                          <div className="space-y-1">
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-rose-400 font-semibold uppercase tracking-wider">
                              <AlertTriangle size={12} />
                              <span>The Production Challenge</span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed">
                              {activeChallenge.challenge}
                            </p>
                          </div>

                          {/* How I Solved It */}
                          <div className="space-y-1 pt-1 border-t border-white/5">
                            <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                              <CheckCircle2 size={12} />
                              <span>How I Solved It</span>
                            </div>
                            <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                              {activeChallenge.solution}
                            </p>
                          </div>

                          {/* Measurable Outcome */}
                          <div className="p-2.5 rounded-lg bg-emerald-500/[0.04] border border-emerald-500/15 flex items-start gap-2">
                            <Sparkles size={13} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                            <p className="text-[11px] text-emerald-200/90 leading-relaxed">
                              <strong className="text-emerald-300 font-semibold">Outcome: </strong>
                              {activeChallenge.outcome}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ── TAB 2: EXPERIENCE & CAREER TRACK ── */}
                    {heroTab === 'experience' && (
                      <motion.div
                        key="tab-experience"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {experience.slice(0, 3).map((exp, idx) => (
                          <div
                            key={exp.company + idx}
                            className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all space-y-1.5"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-white tracking-tight">
                                {exp.title}
                              </span>
                              <span className="font-mono text-[11px] text-emerald-400">
                                {exp.company}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                              {exp.summary || exp.description?.[0]}
                            </p>
                            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-zinc-500">
                              <span>{exp.startDate} - {exp.endDate}</span>
                              <span>•</span>
                              <span>{exp.roleType}</span>
                            </div>
                          </div>
                        ))}

                        <div className="pt-1 flex justify-end">
                          <a 
                            href="#experience" 
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline"
                          >
                            <span>Explore Full Timeline</span>
                            <ChevronRight size={13} />
                          </a>
                        </div>
                      </motion.div>
                    )}

                    {/* ── TAB 3: FLAGSHIP PROJECTS ── */}
                    {heroTab === 'projects' && (
                      <motion.div
                        key="tab-projects"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-3"
                      >
                        {projects.slice(0, 3).map((proj, idx) => (
                          <div
                            key={proj.title + idx}
                            className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all space-y-1.5"
                          >
                            <div className="flex items-center justify-between text-xs">
                              <span className="font-semibold text-white tracking-tight flex items-center gap-2">
                                {proj.title}
                                {proj.badge && (
                                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                    {proj.badge}
                                  </span>
                                )}
                              </span>
                              <span className="font-mono text-[11px] text-zinc-400">
                                {proj.category}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                              {proj.description}
                            </p>
                            {proj.highlights && proj.highlights[0] && (
                              <div className="flex items-center gap-1.5 text-[11px] text-zinc-300 font-mono pt-0.5">
                                <CheckCircle2 size={12} className="text-emerald-400 flex-shrink-0" />
                                <span className="truncate">{proj.highlights[0]}</span>
                              </div>
                            )}
                          </div>
                        ))}

                        <div className="pt-1 flex justify-end">
                          <a 
                            href="#projects" 
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:underline"
                          >
                            <span>View All Projects</span>
                            <ChevronRight size={13} />
                          </a>
                        </div>
                      </motion.div>
                    )}

                  </AnimatePresence>
                </div>

                {/* Footer Highlight */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    Focus: Resilient Architecture & Performance
                  </span>
                  <span className="text-zinc-500">
                    Production Proven
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom Section of Home: Comprehensive Challenges & How I Solved Them Showcase ── */}
        <div id="challenges-deepdive" className="pt-6 space-y-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <AlertTriangle size={13} />
                <span>Engineering Case Studies</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Production Challenges & How I Solved Them
              </h2>
              <p className="text-sm text-zinc-400 max-w-2xl leading-relaxed">
                A transparent breakdown of real-world bottlenecks faced in manufacturing line control, remote telemetry, and consumer verification—and the exact engineering architectures implemented to resolve them.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white px-4 py-2 rounded-xl border border-white/5 hover:border-white/15 bg-white/[0.02] transition-colors"
              >
                <span>Jump to Selected Works</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          {/* 4 Deep-Dive Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {engineeringChallenges.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-[#111116]/90 border border-white/10 hover:border-white/20 transition-all duration-200 shadow-xl flex flex-col justify-between space-y-5 group/card"
              >
                <div className="space-y-4">
                  {/* Category & Project Origin */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">
                      Project: <strong className="text-white font-medium">{item.project}</strong>
                    </span>
                  </div>

                  {/* Challenge Title */}
                  <h3 className="text-lg font-bold text-white tracking-tight group-hover/card:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Problem Description */}
                  <div className="space-y-1.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center gap-2 text-xs font-mono text-rose-400 font-semibold uppercase tracking-wider">
                      <AlertTriangle size={13} />
                      <span>The Challenge</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.challenge}
                    </p>
                  </div>

                  {/* How I Solved It */}
                  <div className="space-y-1.5 p-3.5 rounded-xl bg-emerald-500/[0.03] border border-emerald-500/15">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">
                      <CheckCircle2 size={13} />
                      <span>How I Solved It</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-medium">
                      {item.solution}
                    </p>
                  </div>
                </div>

                {/* Outcome & Business Impact */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Sparkles size={13} className="text-emerald-400" />
                    <span>Impact: <strong className="text-emerald-400">{item.impactMetric}</strong></span>
                  </div>
                  <span className="text-zinc-500">
                    @{item.experienceCompany}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
