import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDownRight } from 'lucide-react';
import { MagneticButton } from './UI';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen w-full flex flex-col justify-center px-6 pt-20 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, ease: "easeOut" }} 
          className="inline-flex items-center gap-2 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase font-medium">Available for Work</span>
        </motion.div>

        <motion.h1 
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }} 
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6 text-white leading-[0.9]"
        >
          Jalish Chauhan.
        </motion.h1>

        <motion.div 
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }} 
          className="flex flex-col gap-8 max-w-2xl"
        >
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-light text-balance">
            Crafting scalable digital experiences. Full Stack Developer based in Ahmedabad, building advanced modern architectures.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }} 
          className="mt-16 flex items-center gap-6"
        >
          <MagneticButton>
            <a href="#projects" className="group flex items-center justify-center w-32 h-32 bg-white text-black rounded-full font-medium transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-wider relative overflow-hidden">
              <span className="relative z-10 flex flex-col items-center gap-2">
                View Work <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </span>
            </a>
          </MagneticButton>
          
          <div className="flex flex-col gap-4">
            <MagneticButton>
              <a href="https://github.com/jalishchauhan07" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Github size={20} strokeWidth={1.5} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/jalish-chauhan/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
