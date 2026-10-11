import React, { useRef, useState } from 'react';
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
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';
import { TbBrandOpenai, TbDeviceGamepad2, TbBrandOauth, TbServer2, TbApi, TbDeviceMobile } from 'react-icons/tb';

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
