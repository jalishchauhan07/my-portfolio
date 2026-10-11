import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  Cpu, 
  Database, 
  Cloud, 
  Terminal,
  Activity,
  CheckCircle2,
  Code2
} from 'lucide-react';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiGithubactions,
  SiSocketdotio,
  SiMqtt,
  SiHtml5,
  SiLangchain,
  SiFlutter,
  SiDart,
  SiTelegram,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbBrandOpenai } from 'react-icons/tb';
import { SectionHeading } from './UI';

const skillCategories = [
  'All Stack',
  'Frontend',
  'Backend',
  'Mobile',
  'Databases & Storage',
  'DevOps & Cloud',
  'Real-Time & IIoT'
];

const skillsData = [
  // Frontend
  {
    name: 'Next.js',
    category: 'Frontend',
    type: 'Full-Stack Framework',
    level: 'Advanced',
    color: '#ffffff',
    Icon: SiNextdotjs,
    description: 'Server-side rendering (SSR), SSG, App Router, and search engine optimization for high-performance SaaS.'
  },
  {
    name: 'React.js',
    category: 'Frontend',
    type: 'UI Library',
    level: 'Advanced',
    color: '#61DAFB',
    Icon: SiReact,
    description: 'Component architecture, custom hooks, state optimization, and interactive client dashboards.'
  },
  {
    name: 'TypeScript',
    category: 'Frontend',
    type: 'Language',
    level: 'Advanced',
    color: '#3178C6',
    Icon: SiTypescript,
    description: 'Strict type safety, robust interface modeling, and maintainable large-scale codebases.'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Frontend',
    type: 'Core Language',
    level: 'Advanced',
    color: '#F7DF1E',
    Icon: SiJavascript,
    description: 'Modern asynchronous programming, DOM APIs, event-driven patterns, and algorithm logic.'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    type: 'Styling Engine',
    level: 'Advanced',
    color: '#06B6D4',
    Icon: SiTailwindcss,
    description: 'Utility-first responsive layouts, sleek dark modes, custom design systems, and glassmorphism.'
  },
  {
    name: 'Framer Motion',
    category: 'Frontend',
    type: 'Animation Library',
    level: 'Proficient',
    color: '#ffffff',
    Icon: SiFramer,
    description: 'Fluid spring physics, layout animations, modal gestures, and immersive page transitions.'
  },

  // Mobile
  {
    name: 'Flutter',
    category: 'Mobile',
    type: 'Mobile Framework',
    level: 'Advanced',
    color: '#47C5FB',
    Icon: SiFlutter,
    description: 'Cross-platform mobile applications for Android & iOS with smooth 60fps telemetry dashboards and native device APIs.'
  },
  {
    name: 'Dart',
    category: 'Mobile',
    type: 'Language',
    level: 'Advanced',
    color: '#0175C2',
    Icon: SiDart,
    description: 'Object-oriented, strongly typed client-optimized language for reactive, responsive Flutter applications.'
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    type: 'Runtime',
    level: 'Advanced',
    color: '#5FA04E',
    Icon: SiNodedotjs,
    description: 'High-throughput asynchronous servers, REST APIs, microservices, and background workers.'
  },
  {
    name: 'Express.js',
    category: 'Backend',
    type: 'Web Framework',
    level: 'Advanced',
    color: '#ffffff',
    Icon: SiExpress,
    description: 'Modular routing, custom middleware pipelines, authentication gates, and API performance.'
  },
  {
    name: 'Nest.js',
    category: 'Backend',
    type: 'Enterprise Framework',
    level: 'Proficient',
    color: '#E0234E',
    Icon: SiNestjs,
    description: 'Scalable architecture using TypeScript decorators, dependency injection, and modular structure.'
  },
  {
    name: 'Prisma ORM',
    category: 'Backend',
    type: 'Database ORM',
    level: 'Advanced',
    color: '#ffffff',
    Icon: SiPrisma,
    description: 'Type-safe SQL queries, schema modeling, migration automation, and connection pooling.'
  },
  {
    name: 'LangChain & OpenAI',
    category: 'Backend',
    type: 'AI Integration',
    level: 'Proficient',
    color: '#10A37F',
    Icon: TbBrandOpenai,
    description: 'Contextual LLM prompts, automated document analysis, embeddings, and intelligent agents.'
  },

  // Databases & Storage
  {
    name: 'PostgreSQL',
    category: 'Databases & Storage',
    type: 'Relational DB',
    level: 'Advanced',
    color: '#4169E1',
    Icon: SiPostgresql,
    description: 'Relational database modeling, complex indexing, automated backup pipelines, and cron triggers.'
  },
  {
    name: 'MongoDB',
    category: 'Databases & Storage',
    type: 'NoSQL Database',
    level: 'Advanced',
    color: '#47A248',
    Icon: SiMongodb,
    description: 'Document schema design, aggregation pipelines, high-volume sensor storage, and indexing.'
  },
  {
    name: 'Supabase',
    category: 'Databases & Storage',
    type: 'Backend as a Service',
    level: 'Proficient',
    color: '#3FCF8E',
    Icon: SiSupabase,
    description: 'Managed Postgres, instant real-time data sync, Row-Level Security (RLS), and auth handling.'
  },
  {
    name: 'Redis',
    category: 'Databases & Storage',
    type: 'In-Memory Cache',
    level: 'Proficient',
    color: '#DC382D',
    Icon: SiRedis,
    description: 'Ultra-low latency in-memory caching, message queues, rate-limiting, and Pub/Sub streams.'
  },

  // DevOps & Cloud
  {
    name: 'AWS',
    category: 'DevOps & Cloud',
    type: 'Cloud Platform',
    level: 'Proficient',
    color: '#FF9900',
    Icon: FaAws,
    description: 'Cloud deployment, S3 bucket storage for digital media, EC2 instances, and serverless hosting.'
  },
  {
    name: 'Docker',
    category: 'DevOps & Cloud',
    type: 'Containerization',
    level: 'Proficient',
    color: '#2496ED',
    Icon: SiDocker,
    description: 'Multi-stage container builds, Docker Compose local dev environments, and consistent deployments.'
  },
  {
    name: 'GitHub Actions & Flow',
    category: 'DevOps & Cloud',
    type: 'CI/CD Pipeline',
    level: 'Advanced',
    color: '#2088FF',
    Icon: SiGithubactions,
    description: 'Automated CI/CD test runners, linting gates, automated deployment scripts, and branch protection.'
  },

  // Real-Time & IIoT
  {
    name: 'Socket.io',
    category: 'Real-Time & IIoT',
    type: 'WebSockets',
    level: 'Advanced',
    color: '#ffffff',
    Icon: SiSocketdotio,
    description: 'Bi-directional real-time hardware communication, factory line printing triggers, and live alerts.'
  },
  {
    name: 'MQTT Protocol',
    category: 'Real-Time & IIoT',
    type: 'IIoT Messaging',
    level: 'Proficient',
    color: '#9C27B0',
    Icon: SiMqtt,
    description: 'Sub-100ms industrial telemetry streams, sensor data ingestion, and factory SCADA pipelines.'
  },
  {
    name: 'Telegram Bot API',
    category: 'Real-Time & IIoT',
    type: 'Automated Alerts',
    level: 'Advanced',
    color: '#26A5E4',
    Icon: SiTelegram,
    description: 'Instant threshold incident dispatch, automated factory alert bots, and real-time operational notifications.'
  }
];

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('All Stack');

  const filteredSkills = activeTab === 'All Stack'
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="w-full py-28 px-5 md:px-10 lg:px-16 relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/[0.02] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading & Tagline */}
        <div className="space-y-4">
          <SectionHeading title="Expertise & Tech Stack" />
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl -mt-8 leading-relaxed">
            Technologies, frameworks, and architectural paradigms I leverage to build production-grade web applications, 
            automated database management systems, and high-throughput industrial platforms.
          </p>
        </div>

        {/* ── 3 Engineering Pillars (Bento Cards) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          
          {/* Pillar 1: Full Stack SaaS */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 rounded-3xl border border-white/10 bg-[#0e0e12]/90 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Code2 size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Full-Stack SaaS Architecture
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Modern frontend and server frameworks (Next.js, React, Node.js) with server-side rendering, strict TypeScript safety, and fluid micro-animations.
            </p>
          </motion.div>

          {/* Pillar 2: Real-Time & IIoT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 rounded-3xl border border-white/10 bg-[#0e0e12]/90 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
              <Activity size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Real-Time & IIoT Systems
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              Sub-100ms industrial telemetry streams, Socket.io printer control, Redis queues, and live factory machinery monitoring dashboards.
            </p>
          </motion.div>

          {/* Pillar 3: Database & DevOps */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 rounded-3xl border border-white/10 bg-[#0e0e12]/90 backdrop-blur-xl shadow-xl hover:border-emerald-500/30 transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
              <Database size={20} />
            </div>
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Database & DevOps Reliability
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2 leading-relaxed">
              PostgreSQL & MongoDB schema design, automated timezone-aware cron backups, Docker containerization, and GitHub Flow CI/CD pipelines.
            </p>
          </motion.div>

        </div>

        {/* ── Category Filter Tabs ── */}
        <div 
          className="flex items-center gap-2 overflow-x-auto pb-2.5 custom-scrollbar pt-2 scroll-smooth"
          onWheel={(e) => {
            if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
              e.currentTarget.scrollLeft += e.deltaY * 0.8;
            }
          }}
        >
          {skillCategories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* ── Interactive Skills Grid ── */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5"
        >
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const Icon = skill.Icon;

              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-5 rounded-2xl border border-white/10 bg-[#101014]/90 backdrop-blur-xl hover:border-white/20 hover:bg-white/[0.04] transition-all duration-200 shadow-xl flex flex-col justify-between group/card relative overflow-hidden"
                >
                  {/* Subtle top-right ambient glow using skill color */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover/card:opacity-15 pointer-events-none transition-opacity duration-300"
                    style={{ backgroundColor: skill.color }}
                  />

                  {/* Header: Icon, Name & Domain */}
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        {/* Icon Container */}
                        <div 
                          className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/card:scale-110 group-hover/card:border-white/25 transition-all duration-200 shadow-sm"
                        >
                          <Icon size={22} style={{ color: skill.color }} />
                        </div>

                        <div>
                          <h4 className="text-sm sm:text-base font-bold text-white group-hover/card:text-emerald-300 transition-colors">
                            {skill.name}
                          </h4>
                          <span className="text-[10px] font-mono text-zinc-500 block">
                            {skill.type}
                          </span>
                        </div>
                      </div>

                      {/* Level Badge */}
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/10 text-emerald-400/90 whitespace-nowrap">
                        {skill.level}
                      </span>
                    </div>

                    {/* Applied Description */}
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                      {skill.description}
                    </p>
                  </div>

                  {/* Footer Tag */}
                  <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>{skill.category}</span>
                    <span className="text-zinc-600 group-hover/card:text-emerald-400 transition-colors">Production Grade</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
