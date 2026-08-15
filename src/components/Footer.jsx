import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading, MagneticButton } from './UI';
import { Github, Linkedin } from 'lucide-react';
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs,
  SiExpress, SiMongodb, SiPostgresql, SiPrisma,
  SiDocker, SiTailwindcss, SiFramer,
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa6';

const skills = [
  { name: 'React',         Icon: SiReact,            color: '#61DAFB' },
  { name: 'Next.js',       Icon: SiNextdotjs,        color: '#ffffff' },
  { name: 'TypeScript',    Icon: SiTypescript,       color: '#3178C6' },
  { name: 'Node.js',       Icon: SiNodedotjs,        color: '#5FA04E' },
  { name: 'Express',       Icon: SiExpress,          color: '#ffffff' },
  { name: 'MongoDB',       Icon: SiMongodb,          color: '#47A248' },
  { name: 'PostgreSQL',    Icon: SiPostgresql,       color: '#4169E1' },
  { name: 'Prisma',        Icon: SiPrisma,           color: '#ffffff' },
  { name: 'AWS',           Icon: FaAws,              color: '#FF9900' },
  { name: 'Docker',        Icon: SiDocker,           color: '#2496ED' },
  { name: 'Tailwind CSS',  Icon: SiTailwindcss,      color: '#06B6D4' },
  { name: 'Framer Motion', Icon: SiFramer,           color: '#ffffff' },
];

export const Skills = () => {
  return (
    <section id="skills" className="w-full py-32 px-6 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading number="003" title="Expertise" />

        <div className="flex flex-wrap gap-3 mt-12">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              whileHover={{ scale: 1.08, y: -2 }}
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-2xl border border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.07] transition-all duration-300 cursor-default"
              style={{ '--skill-color': skill.color }}
            >
              <skill.Icon
                size={18}
                style={{ color: skill.color, flexShrink: 0, transition: 'filter 0.3s' }}
                className="group-hover:drop-shadow-[0_0_6px_var(--skill-color)]"
              />
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-40 px-6 relative z-10">
      <div className="max-w-4xl mx-auto w-full text-center">
        <span className="text-emerald-500 font-mono text-sm tracking-widest uppercase mb-6 block">04. What's Next?</span>
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white mb-10 tracking-tighter">
          Let's build<br />something.
        </h2>
        
        <p className="text-gray-400 text-xl font-light leading-relaxed mb-16 max-w-xl mx-auto text-balance">
          Currently open for new opportunities. Whether you have a question or just want to say hi, my inbox is always open.
        </p>
        
        <MagneticButton className="inline-block">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chauhanjalish005@gmail.com&su=Let's%20Work%20Together" target="_blank" rel="noreferrer" className="inline-block px-12 py-5 bg-white text-black font-medium rounded-full text-lg hover:scale-105 transition-transform">
            Say Hello
          </a>
        </MagneticButton>
      </div>
    </section>
  );
};

export const Footer = () => (
  <footer className="w-full py-10 px-6 border-t border-white/5 relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-gray-500 text-sm font-light">
        © {new Date().getFullYear()} Jalish Chauhan. Designed with intent.
      </p>
      
      <div className="flex gap-6 text-gray-400">
        <a href="https://github.com/jalishchauhan07" className="hover:text-white transition-colors"><Github size={20} strokeWidth={1.5} /></a>
        <a href="https://www.linkedin.com/in/jalish-chauhan/" className="hover:text-white transition-colors"><Linkedin size={20} strokeWidth={1.5} /></a>
      </div>
    </div>
  </footer>
);
