import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDownRight } from 'lucide-react';
import { MagneticButton } from './UI';
import { experience } from '../data/data';

export const Hero = () => {
  const [liveExp, setLiveExp] = React.useState({ years: 0, months: 0, days: 0, hours: '00', minutes: '00', seconds: '00' });

  React.useEffect(() => {
    if (!experience || experience.length === 0) return;
    const earliestDate = new Date(Math.min(...experience.map(exp => new Date(exp.startDate))));
    
    const updateTicker = () => {
      const now = new Date();
      let diff = now.getTime() - earliestDate.getTime();
      
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      diff -= years * (1000 * 60 * 60 * 24 * 365.25);
      
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * (365.25 / 12)));
      diff -= months * (1000 * 60 * 60 * 24 * (365.25 / 12));
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      diff -= days * (1000 * 60 * 60 * 24);
      
      const hours = Math.floor(diff / (1000 * 60 * 60));
      diff -= hours * (1000 * 60 * 60);
      
      const minutes = Math.floor(diff / (1000 * 60));
      diff -= minutes * (1000 * 60);
      
      const seconds = Math.floor(diff / 1000);
      
      setLiveExp({ 
        years, 
        months, 
        days, 
        hours: hours.toString().padStart(2, '0'), 
        minutes: minutes.toString().padStart(2, '0'), 
        seconds: seconds.toString().padStart(2, '0') 
      });
    };
    
    updateTicker();
    const interval = setInterval(updateTicker, 1000);
    return () => clearInterval(interval);
  }, []);

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
          className="flex flex-col gap-10 max-w-2xl"
        >
          <p className="text-lg md:text-2xl text-gray-400 leading-relaxed font-light text-balance">
            Crafting scalable digital experiences. Full Stack Developer based in Ahmedabad, building advanced MERN & Next.js architectures.
          </p>

          {/* Live Experience Ticker Cards */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            {[
              { label: 'YRS', value: liveExp.years.toString().padStart(2, '0') },
              { label: 'MOS', value: liveExp.months.toString().padStart(2, '0') },
              { label: 'DAYS', value: liveExp.days.toString().padStart(2, '0') },
              { label: 'HRS', value: liveExp.hours },
              { label: 'MIN', value: liveExp.minutes },
              { label: 'SEC', value: liveExp.seconds }
            ].map((item, i) => (
              <div 
                key={item.label}
                className="flex flex-col items-center justify-center w-[72px] h-[88px] md:w-[84px] md:h-[96px] bg-[#0a0a0a]/80 backdrop-blur-sm border border-white/[0.08] rounded-2xl shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-2xl md:text-3xl font-bold text-white tracking-tighter mb-1 relative z-10">
                  {item.value}
                </span>
                <span className="text-[9px] md:text-[10px] text-emerald-500 font-semibold tracking-widest uppercase relative z-10">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }} 
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start gap-4 sm:gap-6"
        >
          {/* Main Action Button */}
          <MagneticButton>
            <a href="#projects" className="group flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-white text-black rounded-full font-semibold transition-all hover:bg-gray-200 active:scale-95 text-sm uppercase tracking-widest shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]">
              <span>View Work</span>
              <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </a>
          </MagneticButton>
          
          {/* Social Links */}
          <div className="flex gap-4">
            <MagneticButton>
              <a href="https://github.com/jalishchauhan07" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-lg">
                <Github size={20} strokeWidth={1.5} />
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/jalish-chauhan/" target="_blank" rel="noreferrer" className="flex items-center justify-center w-[52px] h-[52px] sm:w-[60px] sm:h-[60px] rounded-full border border-white/10 bg-white/[0.02] text-gray-400 hover:text-white hover:border-white/30 hover:bg-white/10 transition-all shadow-lg">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
