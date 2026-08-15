import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, Briefcase } from 'lucide-react';
import { SectionHeading } from './UI';
import { experience } from '../data/data';

const formatDate = (dateStr) => {
  if (dateStr === 'Current') return 'Present';
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const getDuration = (start, end) => {
  const s = new Date(start);
  const e = end === 'Current' ? new Date() : new Date(end);
  const months = (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth());
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m}mo`;
  if (m === 0) return `${y}yr`;
  return `${y}yr ${m}mo`;
};

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="w-full py-28 px-4 md:px-8 lg:px-16 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading number="02" title="Experience" />

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full mt-8">
          
          {/* ── LEFT: Company Selector Panel ── */}
          {/* Mobile: Horizontal scroll (hidden scrollbar), snap mandatory. Desktop: Vertical stack */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 pb-4 lg:pb-0 scrollbar-none [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            {experience.map((exp, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex-shrink-0 snap-start w-[280px] lg:w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden group ${
                    isActive
                      ? 'border-emerald-500/50 bg-emerald-500/[0.08] shadow-[0_0_40px_-10px_rgba(16,185,129,0.2)]'
                      : 'border-white/[0.05] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >
                  {/* Active Indicator Stripe */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStripe"
                      className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-emerald-600"
                    />
                  )}

                  <div className="p-4 lg:p-5 pl-5 lg:pl-6 flex items-center gap-4">
                    {/* Logo */}
                    <div className={`w-14 h-14 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center transition-all duration-300 ${exp.logoBg || 'bg-white'} ${isActive ? 'shadow-lg shadow-emerald-500/20 ring-1 ring-emerald-500/30' : ''} ${exp.logoFit !== 'cover' ? 'p-2' : ''}`}>
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className={`w-full h-full ${exp.logoFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div className="w-full h-full hidden items-center justify-center bg-emerald-900 rounded-lg">
                        <Briefcase size={20} className="text-emerald-400" />
                      </div>
                    </div>

                    {/* Text Info */}
                    <div className="min-w-0 flex-1">
                      <p className={`font-bold text-base truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {exp.company}
                      </p>
                      <p className="text-sm text-gray-500 truncate mt-0.5">{exp.title}</p>
                      
                      <div className="flex items-center gap-2 mt-2 flex-wrap">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors duration-300 whitespace-nowrap ${
                          isActive ? 'border-emerald-500/40 text-emerald-300 bg-emerald-500/10' : 'border-white/10 text-gray-500'
                        }`}>
                          {new Date(exp.startDate).getFullYear()} – {exp.endDate === 'Current' ? 'Now' : new Date(exp.endDate).getFullYear()}
                        </span>
                        
                        {exp.endDate === 'Current' && (
                          <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-semibold whitespace-nowrap bg-emerald-400/10 px-2 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ── RIGHT: Detail Panel ── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {experience.map((exp, i) => {
                if (i !== activeIndex) return null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-3xl border border-white/[0.08] bg-[#0d0d0d] overflow-hidden shadow-2xl relative"
                  >
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none opacity-50 translate-x-1/3 -translate-y-1/3" />

                    {/* Card Header */}
                    <div className="relative p-6 sm:p-8 lg:p-10 border-b border-white/[0.06] z-10">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                        
                        {/* Big Logo */}
                        <div className={`w-20 h-20 sm:w-24 sm:h-24 rounded-2xl ${exp.logoBg || 'bg-white'} flex-shrink-0 overflow-hidden flex items-center justify-center shadow-2xl shadow-emerald-500/10 ring-1 ring-white/10 ${exp.logoFit !== 'cover' ? 'p-3' : ''}`}>
                          {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className={`w-full h-full ${exp.logoFit === 'cover' ? 'object-cover' : 'object-contain'}`} />
                          ) : (
                            <Briefcase size={36} className="text-white" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                              {exp.title}
                            </h3>
                            {exp.endDate === 'Current' && (
                              <span className="text-[11px] font-bold tracking-wide uppercase px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                Present
                              </span>
                            )}
                          </div>
                          <p className="text-lg sm:text-xl text-emerald-400 font-medium mb-4">{exp.company}</p>

                          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-400">
                            <span className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05]">
                              <Calendar size={14} className="text-emerald-500/70" />
                              {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                              <span className="ml-1 text-xs text-gray-500 font-mono">({getDuration(exp.startDate, exp.endDate)})</span>
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-2 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.05]">
                                <MapPin size={14} className="text-emerald-500/70" />
                                {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="relative p-6 sm:p-8 lg:p-10 z-10 bg-gradient-to-b from-white/[0.01] to-transparent">
                      <p className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.2em] mb-6 font-semibold">
                        Impact & Responsibilities
                      </p>
                      <ul className="space-y-5">
                        {exp.description.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.1 + 0.15, duration: 0.4, ease: "easeOut" }}
                            className="flex gap-4 group/item"
                          >
                            <span className="flex-shrink-0 mt-1.5 w-6 h-6 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover/item:bg-emerald-500/10 group-hover/item:border-emerald-500/30 transition-colors duration-300">
                              <ChevronRight size={12} className="text-gray-500 group-hover/item:text-emerald-400 transition-colors duration-300" />
                            </span>
                            <p className="text-gray-300 text-[15px] sm:text-base leading-relaxed group-hover/item:text-gray-100 transition-colors duration-300">
                              {item}
                            </p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};
