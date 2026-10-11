import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  X, 
  ExternalLink, 
  ChevronRight, 
  ChevronLeft,
  Github, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Globe,
  Radio,
  SlidersHorizontal
} from 'lucide-react';
import { 
  SiNextdotjs, 
  SiMongodb, 
  SiTypescript, 
  SiRazorpay, 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiGooglemaps, 
  SiJavascript, 
  SiHtml5, 
  SiMqtt,
  SiPrisma,
  SiRedis,
  SiSocketdotio,
  SiReacthookform,
  SiPostgresql,
  SiGithubactions,
  SiSupabase,
  SiNestjs,
  SiFlutter,
  SiDart,
  SiTelegram
} from 'react-icons/si';
import { TbBrandOauth, TbDeviceGamepad2, TbMail } from 'react-icons/tb';
import { SectionHeading } from './UI';
import { projects } from '../data/data';

const techIconMap = {
  'next.js': { icon: SiNextdotjs, color: '#ffffff', name: 'Next.js' },
  'nextjs': { icon: SiNextdotjs, color: '#ffffff', name: 'Next.js' },
  'mongodb': { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  'typescript': { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  'razorpay': { icon: SiRazorpay, color: '#3395FF', name: 'Razorpay' },
  'react': { icon: SiReact, color: '#61DAFB', name: 'React' },
  'react.js': { icon: SiReact, color: '#61DAFB', name: 'React.js' },
  'node.js': { icon: SiNodedotjs, color: '#5FA04E', name: 'Node.js' },
  'nodejs': { icon: SiNodedotjs, color: '#5FA04E', name: 'Node.js' },
  'express': { icon: SiExpress, color: '#ffffff', name: 'Express' },
  'express.js': { icon: SiExpress, color: '#ffffff', name: 'Express.js' },
  'postgresql': { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  'postgres': { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  'github actions': { icon: SiGithubactions, color: '#2088FF', name: 'GitHub Actions' },
  'github flow': { icon: SiGithubactions, color: '#2088FF', name: 'GitHub Flow' },
  'ci/cd': { icon: SiGithubactions, color: '#2088FF', name: 'CI/CD' },
  'prisma': { icon: SiPrisma, color: '#ffffff', name: 'Prisma ORM' },
  'prisma orm': { icon: SiPrisma, color: '#ffffff', name: 'Prisma ORM' },
  'redis': { icon: SiRedis, color: '#DC382D', name: 'Redis' },
  'socket.io': { icon: SiSocketdotio, color: '#ffffff', name: 'Socket.io' },
  'socketio': { icon: SiSocketdotio, color: '#ffffff', name: 'Socket.io' },
  'react from': { icon: SiReacthookform, color: '#EC5990', name: 'React Form' },
  'reactform': { icon: SiReacthookform, color: '#EC5990', name: 'React Form' },
  'react form': { icon: SiReacthookform, color: '#EC5990', name: 'React Form' },
  'react hook form': { icon: SiReacthookform, color: '#EC5990', name: 'React Hook Form' },
  'google maps': { icon: SiGooglemaps, color: '#EA4335', name: 'Google Maps' },
  'javascript': { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  'phaser': { icon: TbDeviceGamepad2, color: '#FA0064', name: 'Phaser' },
  'html5 canvas': { icon: SiHtml5, color: '#E34F26', name: 'HTML5 Canvas' },
  'canvas': { icon: SiHtml5, color: '#E34F26', name: 'HTML5 Canvas' },
  'mqtt': { icon: SiMqtt, color: '#9C27B0', name: 'MQTT' },
  'supabase': { icon: SiSupabase, color: '#3FCF8E', name: 'Supabase' },
  'nest.js': { icon: SiNestjs, color: '#E0234E', name: 'Nest.js' },
  'nestjs': { icon: SiNestjs, color: '#E0234E', name: 'Nest.js' },
  'oauth 2.0': { icon: TbBrandOauth, color: '#EB5424', name: 'OAuth 2.0' },
  'oauth': { icon: TbBrandOauth, color: '#EB5424', name: 'OAuth 2.0' },
  'flutter': { icon: SiFlutter, color: '#47C5FB', name: 'Flutter' },
  'dart': { icon: SiDart, color: '#0175C2', name: 'Dart' },
  'telegram': { icon: SiTelegram, color: '#26A5E4', name: 'Telegram Bot' },
  'telegram bot': { icon: SiTelegram, color: '#26A5E4', name: 'Telegram Bot' },
  'email': { icon: TbMail, color: '#EA4335', name: 'Email Alerts' },
  'email alerts': { icon: TbMail, color: '#EA4335', name: 'Email Alerts' },
  'email alert': { icon: TbMail, color: '#EA4335', name: 'Email Alerts' },
};

/* Tech Icon Badge – Only brand icon with accessible floating tooltip */
const TechIconBadge = ({ tech, size = 18, padding = 'p-2' }) => {
  const key = tech?.toLowerCase().trim();
  const match = techIconMap[key];
  const Icon = match?.icon;
  const color = match?.color || '#ffffff';
  const label = match?.name || tech;

  return (
    <div
      className={`group/tech relative ${padding} rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/30 hover:bg-white/[0.08] transition-all duration-200 flex items-center justify-center cursor-default hover:scale-110 shadow-sm`}
      title={label}
    >
      {Icon ? (
        <Icon size={size} style={{ color }} className="flex-shrink-0 transition-transform duration-200" />
      ) : (
        <span className="text-[11px] font-mono text-zinc-300 px-1 font-semibold">{tech}</span>
      )}

      {/* Floating Tooltip */}
      <div className="absolute -top-7 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 pointer-events-none transition-all duration-150 transform translate-y-1 group-hover/tech:translate-y-0 z-30 whitespace-nowrap">
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-zinc-950 text-zinc-200 border border-white/15 shadow-2xl">
          {label}
        </span>
      </div>
    </div>
  );
};

const getInitials = (title) => (title ? title.trim().substring(0, 2).toUpperCase() : 'PJ');

// Helper to extract a clean display host/slug
const getDisplayUrl = (url, fallback = 'app.local') => {
  if (!url) return fallback;
  try {
    const parsed = new URL(url);
    return parsed.hostname + (parsed.pathname !== '/' ? parsed.pathname.replace(/\/$/, '') : '');
  } catch {
    return fallback;
  }
};

/* ────────────────────────────────────────────────────────────
   Browser Mockup Chrome Component
   Wraps screenshots in a realistic dark browser frame
   ──────────────────────────────────────────────────────────── */
const BrowserMockup = ({ 
  url, 
  image, 
  title, 
  aspectRatio = 'aspect-[16/10]',
  children,
  className = ''
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className={`w-full rounded-2xl overflow-hidden border border-white/10 bg-[#121214] shadow-2xl transition-all duration-300 ${className}`}>
      {/* Browser Top Navigation Bar */}
      <div className="bg-[#18181b]/95 border-b border-white/[0.08] px-3.5 py-2.5 flex items-center justify-between gap-3 select-none">
        {/* macOS window dots */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 transition-opacity hover:opacity-100" />
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 transition-opacity hover:opacity-100" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 transition-opacity hover:opacity-100" />
        </div>

        {/* Omnibox / URL Pill */}
        <div className="flex items-center justify-center flex-1 max-w-xs mx-auto">
          <div className="w-full flex items-center justify-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/5 text-[11px] font-mono text-zinc-400 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
            <span className="truncate">{getDisplayUrl(url, title.toLowerCase().replace(/\s+/g, '-') + '.dev')}</span>
          </div>
        </div>

        {/* Right status icon */}
        <div className="flex items-center gap-1.5 text-zinc-500 text-xs flex-shrink-0">
          <Globe size={13} className="text-zinc-500" />
        </div>
      </div>

      {/* Viewport / Screenshot Container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden bg-[#0d0d0f] group/mockup`}>
        {image && !imgError ? (
          <img
            src={image}
            alt={title}
            onError={() => setImgError(true)}
            loading="lazy"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950/80 text-zinc-600 gap-2">
            <span className="text-5xl font-extrabold tracking-wider font-mono text-zinc-800">
              {getInitials(title)}
            </span>
            <span className="text-xs uppercase tracking-widest text-zinc-600 font-mono">Live Demo</span>
          </div>
        )}

        {/* Soft edge ambient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

        {/* Optional inner overlay children (e.g. quick view hover button) */}
        {children}
      </div>
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
   Project Details Modal
   ──────────────────────────────────────────────────────────── */
const ProjectModal = ({ project, onClose }) => {
  const isGithub = project.link?.includes('github.com');
  const hasLiveDemo = project.link && !isGithub;
  const githubUrl = project.github || (isGithub ? project.link : null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const modal = (
    <AnimatePresence>
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-5 md:p-6"
      >
        {/* Backdrop */}
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window Card */}
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-[#121215] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#16161a]">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {project.category || 'Project Detail'}
              </span>
              <span className="text-zinc-500 text-xs hidden sm:inline">•</span>
              <span className="text-zinc-400 text-xs font-mono hidden sm:inline">
                {getDisplayUrl(project.link, 'app.portfolio.dev')}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>
          </div>

          {/* Modal Content Scroll Area */}
          <div className="overflow-y-auto p-5 sm:p-7 space-y-6 custom-scroll">
            {/* Embedded Framed Preview */}
            <BrowserMockup
              url={project.link}
              image={project.image}
              title={project.title}
              aspectRatio="aspect-[16/9]"
            />

            {/* Title & Stats */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {project.title}
                </h3>
                {project.badge && (
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-zinc-300 border border-white/10 flex items-center gap-1.5">
                    <Sparkles size={13} className="text-emerald-400" />
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/5 space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-400" />
                  Key Engineering Highlights
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Metrics Card Grid */}
            {project.stats && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Highlight</span>
                  <span className="block text-sm font-semibold text-white mt-1">{project.stats.metric}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Focus</span>
                  <span className="block text-sm font-semibold text-white mt-1">{project.stats.label}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
                  <span className="block text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Role</span>
                  <span className="block text-sm font-semibold text-emerald-400 mt-1">{project.stats.role || 'Full Stack'}</span>
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-2">
              <span className="block text-xs font-mono uppercase tracking-widest text-zinc-400">
                Tech Stack
              </span>
              <div className="flex flex-wrap gap-2.5">
                {project.tech.map((t, i) => (
                  <TechIconBadge key={i} tech={t} size={22} padding="p-2.5" />
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="px-5 py-4 border-t border-white/10 bg-[#16161a] flex flex-wrap items-center justify-between gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              Close
            </button>

            <div className="flex items-center gap-2.5">
              {githubUrl && hasLiveDemo && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors"
                >
                  <Github size={15} />
                  <span>Source Code</span>
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 hover:bg-emerald-400 text-black transition-colors shadow-lg shadow-emerald-500/20"
                >
                  {isGithub ? <Github size={15} /> : null}
                  <span>{hasLiveDemo ? 'Open Live Demo' : 'View on GitHub'}</span>
                  {!isGithub ? <ExternalLink size={15} /> : null}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return ReactDOM.createPortal(modal, document.body);
};

/* ────────────────────────────────────────────────────────────
   Featured Showcase Card (Panoramic Split Bento)
   ──────────────────────────────────────────────────────────── */
const FeaturedProject = ({ project, onOpenModal }) => {
  const isGithub = project.link?.includes('github.com');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group relative w-full rounded-3xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-1 border border-white/10 hover:border-emerald-500/30 transition-all duration-500 shadow-2xl shadow-black/80"
    >
      <div className="relative rounded-[22px] bg-[#0e0e11]/90 p-5 sm:p-7 md:p-9 overflow-hidden">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/[0.07] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
          {/* Left Column: Project Details & Story */}
          <div className="lg:col-span-5 space-y-5">
            {/* Category / Status Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-300 border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Featured Project
              </span>
              <span className="text-zinc-500 text-xs font-mono">
                {project.category}
              </span>
            </div>

            {/* Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight group-hover:text-white transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400 mt-1">
                {project.badge || 'Web Application & Data Engine'}
              </p>
            </div>

            {/* Description */}
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.description}
            </p>

            {/* Engineering Highlights */}
            {project.highlights && (
              <div className="space-y-2 pt-1 border-t border-white/5">
                {project.highlights.slice(0, 3).map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tech Stack Brand Icons */}
            <div className="flex flex-wrap gap-2 pt-1">
              {project.tech.map((t, idx) => (
                <TechIconBadge key={idx} tech={t} size={20} padding="p-2.5" />
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white text-black hover:bg-emerald-300 transition-colors duration-200 shadow-md"
              >
                <span>{isGithub ? 'View Source' : 'Live Platform'}</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-colors duration-200"
              >
                <Layers size={14} className="text-emerald-400" />
                <span>Deep Dive Details</span>
              </button>
            </div>
          </div>

          {/* Right Column: Framed Device Preview */}
          <div className="lg:col-span-7">
            <div 
              onClick={onOpenModal} 
              className="cursor-pointer group/frame relative transition-transform duration-500 lg:group-hover:-translate-y-1"
            >
              <BrowserMockup
                url={project.link}
                image={project.image}
                title={project.title}
                aspectRatio="aspect-[16/10]"
              >
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/frame:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-semibold flex items-center gap-2 shadow-2xl">
                    <Layers size={14} className="text-emerald-400" />
                    <span>Click for Deep Dive & Architecture</span>
                  </div>
                </div>
              </BrowserMockup>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────
   Grid Card for Remaining Projects
   ──────────────────────────────────────────────────────────── */
const ProjectCard = ({ project, index, onOpenModal }) => {
  const isGithub = project.link?.includes('github.com');
  const hasLiveDemo = project.link && !isGithub;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-1 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5"
    >
      <div className="flex-1 flex flex-col rounded-[14px] bg-[#0e0e11] overflow-hidden">
        {/* Browser Mockup Header */}
        <div 
          onClick={onOpenModal}
          className="cursor-pointer"
        >
          <BrowserMockup
            url={project.link}
            image={project.image}
            title={project.title}
            aspectRatio="aspect-[16/10]"
          >
            {/* Quick hover button */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="p-2 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
                <ArrowUpRight size={14} />
              </span>
            </div>
          </BrowserMockup>
        </div>

        {/* Card Body */}
        <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div className="space-y-2.5">
            {/* Category / Badge */}
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400 font-medium">
                {project.category || 'Engineering'}
              </span>
              {project.stats?.metric && (
                <span className="text-zinc-500">
                  {project.stats.metric}
                </span>
              )}
            </div>

            {/* Title */}
            <h4 
              onClick={onOpenModal}
              className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors cursor-pointer tracking-tight"
            >
              {project.title}
            </h4>

            {/* Description */}
            <p className="text-zinc-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            {/* Tech Tags - Brand Icons Only */}
            <div className="flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <TechIconBadge key={idx} tech={t} size={15} padding="p-1.5" />
              ))}
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-2">
              <button
                onClick={onOpenModal}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors"
              >
                <span>Details</span>
                <ChevronRight size={14} className="text-emerald-400" />
              </button>

              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                    title="Source Code"
                  >
                    <Github size={15} />
                  </a>
                )}

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors"
                  >
                    <span>{hasLiveDemo ? 'Live Demo' : 'Code'}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────
   Custom Professional Scrollbar Category Filter Bar
   - Eliminates ugly Windows OS default scrollbars
   - Glassmorphic track with interactive emerald glowing pill thumb
   - Smooth left & right navigation buttons on overflow
   - Natural mouse-wheel horizontal scrolling support
   ──────────────────────────────────────────────────────────── */
const CategoryFilterBar = ({ categories, activeCategory, onSelectCategory }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 6);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 6);
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollLeft / maxScroll)));
    } else {
      setScrollProgress(0);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [categories]);

  const scrollByAmount = (amount) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
  };

  const handleWheel = (e) => {
    if (!scrollRef.current) return;
    if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
      scrollRef.current.scrollLeft += e.deltaY * 0.7;
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full sm:max-w-md lg:max-w-lg">
      <div className="relative flex items-center">
        {/* Left Navigation Chevron */}
        {canScrollLeft && (
          <button
            type="button"
            onClick={() => scrollByAmount(-180)}
            className="absolute -left-2 z-20 w-6 h-6 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center shadow-lg transition-all duration-150 backdrop-blur-md"
            aria-label="Scroll left"
          >
            <ChevronLeft size={13} />
          </button>
        )}

        {/* Scrollable Pills List */}
        <div
          ref={scrollRef}
          onScroll={checkScroll}
          onWheel={handleWheel}
          className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-1 px-0.5 scroll-smooth w-full"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelectCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/25 ring-1 ring-emerald-400/30'
                    : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5 hover:border-white/15'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Right Navigation Chevron */}
        {canScrollRight && (
          <button
            type="button"
            onClick={() => scrollByAmount(180)}
            className="absolute -right-2 z-20 w-6 h-6 rounded-full bg-zinc-900/90 border border-white/15 text-zinc-300 hover:text-white hover:border-emerald-500/50 hover:bg-emerald-500/10 flex items-center justify-center shadow-lg transition-all duration-150 backdrop-blur-md"
            aria-label="Scroll right"
          >
            <ChevronRight size={13} />
          </button>
        )}
      </div>

      {/* Modern Emerald Glow Micro Scrollbar Track */}
      {(canScrollLeft || canScrollRight) && (
        <div className="w-full px-1">
          <div className="h-[3px] w-full bg-white/[0.06] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-150 shadow-[0_0_8px_rgba(16,185,129,0.5)]"
              style={{
                width: '30%',
                transform: `translateX(${scrollProgress * 233}%)`,
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
   Main Projects Section
   ──────────────────────────────────────────────────────────── */
export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories list derived from projects
  const categories = ['All', 'Full Stack SaaS', 'Industrial IoT', 'Mobile App', 'Enterprise Operations', 'Interactive & Games'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  // On "All", present the flagship project in panoramic featured layout and the rest in grid.
  // On a specific category filter, present all matched projects in the sleek grid layout.
  const isAll = activeCategory === 'All';
  const featured = isAll ? filteredProjects[0] : null;
  const remaining = isAll ? filteredProjects.slice(1) : filteredProjects;

  return (
    <section id="projects" className="w-full pt-28 pb-32 px-5 md:px-10 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        {/* Section Header */}
        <div className="space-y-4">
          <SectionHeading title="Selected Works" />
          
          {/* Section Subheading & Filter Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 -mt-8">
            <p className="text-sm md:text-base text-zinc-400 max-w-xl">
              Production web applications, real-time industrial SCADA systems, and full-stack solutions built with performance in mind.
            </p>

            {/* Category Filter Bar with Custom Professional Scrollbar */}
            <CategoryFilterBar
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </div>

        {/* Featured Card (When Available) */}
        {featured && (
          <FeaturedProject
            project={featured}
            onOpenModal={() => setSelectedProject(featured)}
          />
        )}

        {/* Grid for Remaining Projects */}
        {remaining.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
            {remaining.map((project, idx) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={idx}
                onOpenModal={() => setSelectedProject(project)}
              />
            ))}
          </div>
        )}

        {/* Fallback if filtered category has 0 items */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-zinc-500 font-mono text-sm">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Interactive Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
