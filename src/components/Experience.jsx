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
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeading number="02" title="Experience" />

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 w-full">

          {/* ── LEFT: Company Selector Panel ── */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-4 overflow-x-auto lg:overflow-visible w-full lg:w-80 xl:w-96 flex-shrink-0 pb-2 lg:pb-0">
            {experience.map((exp, i) => {
              const isActive = activeIndex === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative flex-shrink-0 w-64 lg:w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden group ${isActive
                    ? 'border-emerald-500/60 bg-emerald-500/[0.07] shadow-[0_0_30px_-5px_rgba(16,185,129,0.25)]'
                    : 'border-white/8 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]'
                    }`}
                >
                  {/* Active indicator stripe */}
                  {isActive && (
                    <motion.div
                      layoutId="activeStripe"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-l-2xl"
                    />
                  )}

                  <div className="p-4 lg:p-5 pl-5 lg:pl-6 flex items-center gap-4">
                    {/* Logo */}
                    <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center transition-all duration-300 ${exp.logoBg || 'bg-white'} ${isActive ? 'shadow-lg shadow-emerald-500/30' : ''
                      } ${exp.logoFit !== 'cover' ? 'p-2' : ''}`}>
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className={`w-full h-full ${exp.logoFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                          onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                        />
                      ) : null}
                      <div className="w-full h-full hidden items-center justify-center bg-emerald-700 rounded-lg">
                        <Briefcase size={22} className="text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="min-w-0">
                      <p className={`font-semibold text-sm lg:text-base truncate transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {exp.company}
                      </p>
                      <p className="text-xs text-gray-500 truncate mt-0.5">{exp.title}</p>
                      <div className="flex items-center gap-1.5 mt-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-colors duration-300 ${isActive ? 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10' : 'border-white/10 text-gray-500'
                          }`}>
                          {new Date(exp.startDate).getFullYear()} – {exp.endDate === 'Current' ? 'Now' : new Date(exp.endDate).getFullYear()}
                        </span>
                        {exp.endDate === 'Current' && (
                          <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                            Current Company
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
                  >
                    {/* Card Header */}
                    <div className="relative p-6 md:p-8 border-b border-white/8 overflow-hidden">
                      {/* Subtle glow bg */}
                      <div className="absolute -top-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                      <div className="flex flex-col sm:flex-row sm:items-center gap-5 relative z-10">
                        {/* Big Logo */}
                        <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${exp.logoBg || 'bg-white'} flex-shrink-0 overflow-hidden flex items-center justify-center shadow-xl shadow-emerald-500/20 ${exp.logoFit !== 'cover' ? 'p-3' : ''}`}>
                          {exp.logo ? (
                            <img src={exp.logo} alt={exp.company} className={`w-full h-full ${exp.logoFit === 'cover' ? 'object-cover' : 'object-contain'}`} />
                          ) : (
                            <Briefcase size={32} className="text-white" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2 mb-1.5">
                            <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                              {exp.title}
                            </h3>
                            {exp.endDate === 'Current' && (
                              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg text-emerald-400 font-semibold mb-3">{exp.company}</p>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <Calendar size={13} className="text-gray-500 flex-shrink-0" />
                              {formatDate(exp.startDate)} → {formatDate(exp.endDate)}
                              <span className="ml-1 text-xs text-gray-500 font-mono">({getDuration(exp.startDate, exp.endDate)})</span>
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1.5">
                                <MapPin size={13} className="text-gray-500 flex-shrink-0" />
                                {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Body — Responsibilities */}
                    <div className="p-6 md:p-8">
                      <p className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-5">
                        Key Responsibilities
                      </p>
                      <ul className="space-y-4">
                        {exp.description.map((item, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.08 + 0.1, duration: 0.3 }}
                            className="flex gap-3 group/item"
                          >
                            <span className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center">
                              <ChevronRight size={11} className="text-emerald-400" />
                            </span>
                            <p className="text-gray-300 text-base leading-relaxed group-hover/item:text-white transition-colors duration-200">
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
