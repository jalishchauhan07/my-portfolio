import React, { useRef, useState } from 'react';
import ScrollArea from 'react-scrollbar';
import { motion, useMotionValue, useTransform } from 'framer-motion';

export const MagneticButton = ({ children, className }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
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

export const TiltCard = ({ children, className }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

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
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
};

export const SectionHeading = ({ number, title }) => (
  <div className="flex items-center gap-6 mb-16">
    {number && (
      <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase">{number}</span>
    )}
    <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
      {title}
    </h2>
    <div className="h-px bg-white/10 flex-grow ml-4" />
  </div>
);

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiRedis,
  SiPrisma,
  SiDocker,
  SiTailwindcss,
  SiFramer,
  SiRazorpay,
  SiGooglemaps,
  SiJavascript,
  SiHtml5,
  SiMqtt,
  SiSocketdotio,
  SiReacthookform,
  SiGithubactions,
  SiLangchain,
  SiThreedotjs,
  SiFlutter,
  SiDart,
  SiTelegram,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbBrandOpenai, TbDeviceGamepad2, TbBrandOauth, TbServer2, TbApi, TbDeviceMobile, TbMail } from 'react-icons/tb';

export const techIconMap = {
  'next.js': { icon: SiNextdotjs, color: '#ffffff', name: 'Next.js' },
  'nextjs': { icon: SiNextdotjs, color: '#ffffff', name: 'Next.js' },
  'react': { icon: SiReact, color: '#61DAFB', name: 'React' },
  'react.js': { icon: SiReact, color: '#61DAFB', name: 'React.js' },
  'supabase': { icon: SiSupabase, color: '#3FCF8E', name: 'Supabase' },
  'langchain': { icon: SiLangchain, color: '#ffffff', name: 'LangChain' },
  'openai': { icon: TbBrandOpenai, color: '#10A37F', name: 'OpenAI' },
  'mern': { icon: SiMongodb, color: '#47A248', name: 'MERN Stack' },
  'postgresql': { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  'postgres': { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
  'prisma': { icon: SiPrisma, color: '#ffffff', name: 'Prisma ORM' },
  'prisma orm': { icon: SiPrisma, color: '#ffffff', name: 'Prisma ORM' },
  'typescript': { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  'ssr': { icon: TbServer2, color: '#38BDF8', name: 'SSR' },
  'express': { icon: SiExpress, color: '#ffffff', name: 'Express' },
  'express.js': { icon: SiExpress, color: '#ffffff', name: 'Express.js' },
  'node.js': { icon: SiNodedotjs, color: '#5FA04E', name: 'Node.js' },
  'nodejs': { icon: SiNodedotjs, color: '#5FA04E', name: 'Node.js' },
  'nest.js': { icon: SiNestjs, color: '#E0234E', name: 'Nest.js' },
  'nestjs': { icon: SiNestjs, color: '#E0234E', name: 'Nest.js' },
  'redis': { icon: SiRedis, color: '#DC382D', name: 'Redis' },
  'razorpay': { icon: SiRazorpay, color: '#3395FF', name: 'Razorpay' },
  'aws': { icon: FaAws, color: '#FF9900', name: 'AWS' },
  'rest apis': { icon: TbApi, color: '#A855F7', name: 'REST APIs' },
  'rest api': { icon: TbApi, color: '#A855F7', name: 'REST APIs' },
  'api': { icon: TbApi, color: '#A855F7', name: 'REST APIs' },
  'phaser': { icon: TbDeviceGamepad2, color: '#FA0064', name: 'Phaser' },
  'phaser.js': { icon: TbDeviceGamepad2, color: '#FA0064', name: 'Phaser.js' },
  'three.js': { icon: SiThreedotjs, color: '#ffffff', name: 'Three.js' },
  'threejs': { icon: SiThreedotjs, color: '#ffffff', name: 'Three.js' },
  'socket.io': { icon: SiSocketdotio, color: '#ffffff', name: 'Socket.io' },
  'socketio': { icon: SiSocketdotio, color: '#ffffff', name: 'Socket.io' },
  'javascript': { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  'html5 canvas': { icon: SiHtml5, color: '#E34F26', name: 'HTML5 Canvas' },
  'canvas': { icon: SiHtml5, color: '#E34F26', name: 'HTML5 Canvas' },
  'mongodb': { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
  'docker': { icon: SiDocker, color: '#2496ED', name: 'Docker' },
  'tailwind css': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  'tailwind': { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  'framer motion': { icon: SiFramer, color: '#ffffff', name: 'Framer Motion' },
  'framer': { icon: SiFramer, color: '#ffffff', name: 'Framer Motion' },
  'react form': { icon: SiReacthookform, color: '#EC5990', name: 'React Form' },
  'reactform': { icon: SiReacthookform, color: '#EC5990', name: 'React Form' },
  'react from': { icon: SiReacthookform, color: '#EC5990', name: 'React Form' },
  'react hook form': { icon: SiReacthookform, color: '#EC5990', name: 'React Hook Form' },
  'github actions': { icon: SiGithubactions, color: '#2088FF', name: 'GitHub Actions' },
  'github flow': { icon: SiGithubactions, color: '#2088FF', name: 'GitHub Flow' },
  'ci/cd': { icon: SiGithubactions, color: '#2088FF', name: 'CI/CD' },
  'google maps': { icon: SiGooglemaps, color: '#EA4335', name: 'Google Maps' },
  'mqtt': { icon: SiMqtt, color: '#9C27B0', name: 'MQTT' },
  'oauth 2.0': { icon: TbBrandOauth, color: '#EB5424', name: 'OAuth 2.0' },
  'oauth': { icon: TbBrandOauth, color: '#EB5424', name: 'OAuth 2.0' },
  'flutter': { icon: SiFlutter, color: '#47C5FB', name: 'Flutter' },
  'dart': { icon: SiDart, color: '#0175C2', name: 'Dart' },
  'mobile': { icon: TbDeviceMobile, color: '#38BDF8', name: 'Mobile App' },
  'mobile app': { icon: TbDeviceMobile, color: '#38BDF8', name: 'Mobile App' },
  'telegram': { icon: SiTelegram, color: '#26A5E4', name: 'Telegram Bot' },
  'telegram bot': { icon: SiTelegram, color: '#26A5E4', name: 'Telegram Bot' },
  'email': { icon: TbMail, color: '#EA4335', name: 'Email Alerts' },
  'email alerts': { icon: TbMail, color: '#EA4335', name: 'Email Alerts' },
  'email alert': { icon: TbMail, color: '#EA4335', name: 'Email Alerts' },
};

/* Tech Icon Badge – Only brand icon with accessible floating tooltip */
export const TechIconBadge = ({ tech, size = 18, padding = 'p-2' }) => {
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

/* ────────────────────────────────────────────────────────────
   Live Experience Counter Hook & Component
   Displays real-time live career uptime:
   Years, Months, Weeks, Days, Hours, Minutes, and Seconds
   ──────────────────────────────────────────────────────────── */
export const useLiveExperience = (startDateStr = '2023-02-01T00:00:00') => {
  const calculate = () => {
    const start = new Date(startDateStr);
    const now = new Date();

    let years = now.getFullYear() - start.getFullYear();
    let months = now.getMonth() - start.getMonth();
    let days = now.getDate() - start.getDate();
    let hours = now.getHours() - start.getHours();
    let minutes = now.getMinutes() - start.getMinutes();
    let seconds = now.getSeconds() - start.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes -= 1;
    }
    if (minutes < 0) {
      minutes += 60;
      hours -= 1;
    }
    if (hours < 0) {
      hours += 24;
      days -= 1;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months -= 1;
    }
    if (months < 0) {
      months += 12;
      years -= 1;
    }

    const weeks = Math.floor(days / 7);
    const remDays = days % 7;

    return {
      years,
      months,
      weeks,
      days: remDays,
      hours,
      minutes,
      seconds
    };
  };

  const [time, setTime] = useState(calculate);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculate());
    }, 1000);
    return () => clearInterval(timer);
  }, [startDateStr]);

  return time;
};

export const LiveExperienceCounter = ({ startDateStr = '2023-02-01T00:00:00', variant = 'full', className = '' }) => {
  const time = useLiveExperience(startDateStr);
  const pad = (n) => String(n).padStart(2, '0');

  const units = [
    { label: 'Years', short: 'YRS', value: time.years, highlight: false },
    { label: 'Months', short: 'MOS', value: time.months, highlight: false },
    { label: 'Weeks', short: 'WKS', value: time.weeks, highlight: false },
    { label: 'Days', short: 'DAYS', value: time.days, highlight: false },
    { label: 'Hours', short: 'HRS', value: pad(time.hours), highlight: false },
    { label: 'Minutes', short: 'MINS', value: pad(time.minutes), highlight: false },
    { label: 'Seconds', short: 'SECS', value: pad(time.seconds), highlight: true },
  ];

  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-1.5 font-mono text-xs ${className}`}>
        {units.map((u, i) => (
          <React.Fragment key={u.label}>
            <span className={`font-bold ${u.highlight ? 'text-emerald-400' : 'text-white'}`}>
              {u.value}
              <span className="text-zinc-500 text-[10px] ml-0.5 font-normal">{u.short.toLowerCase()}</span>
            </span>
            {i < units.length - 1 && <span className="text-zinc-600">:</span>}
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div className={`p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-white/[0.04] via-emerald-500/[0.02] to-transparent border border-white/10 shadow-2xl relative overflow-hidden group ${className}`}>
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-36 h-36 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header with Live Ticking Radar Pulse */}
      <div className="flex items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-white/5 relative z-10">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
            Live Career Uptime
          </span>
        </div>

        <span className="text-[11px] font-mono text-zinc-400">
          Since Feb 1, 2023 • Live Ticker
        </span>
      </div>

      {/* Grid of 7 Live Counters */}
      <div className="grid grid-cols-4 sm:grid-cols-7 gap-2 relative z-10">
        {units.map((u) => (
          <div
            key={u.label}
            className={`p-2 sm:p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
              u.highlight
                ? 'bg-emerald-500/10 border-emerald-500/30 shadow-md shadow-emerald-500/10'
                : 'bg-black/40 border-white/5 hover:border-white/15'
            }`}
          >
            <span
              className={`text-lg sm:text-2xl font-bold font-mono tracking-tight ${
                u.highlight ? 'text-emerald-400 font-extrabold' : 'text-white'
              }`}
            >
              {u.value}
            </span>
            <span
              className={`text-[9px] sm:text-[10px] font-mono uppercase tracking-widest mt-0.5 ${
                u.highlight ? 'text-emerald-300/80 font-semibold' : 'text-zinc-500'
              }`}
            >
              {u.label}
            </span>
          </div>
        ))}
      </div>

      {/* Live Status Message */}
      <div className="mt-3 pt-2.5 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10">
        <span className="flex items-center gap-1.5 text-zinc-300">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Real-time ticker running 24/7 across production systems
        </span>
        <span className="hidden sm:inline text-zinc-500">
          Precision: 1 sec
        </span>
      </div>
    </div>
  );
};

