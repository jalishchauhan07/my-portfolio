import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, Briefcase, Sparkles, CheckCircle2, Clock } from 'lucide-react';
import { SectionHeading, TechIconBadge, LiveExperienceCounter } from './UI';
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
  if (y === 0) return `${m} mos`;
  if (m === 0) return `${y} yrs`;
  return `${y} yr ${m} mos`;
};

export const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeExp = experience[activeIndex];

  return (
    <section id="experience" className="w-full py-28 px-5 md:px-10 lg:px-16 relative z-10">
      <div className="max-w-6xl mx-auto w-full space-y-10">
        <SectionHeading title="Experience" />

        {/* Section Tagline & Live Career Tracker */}
        <div className="space-y-4 -mt-8">
          <p className="text-sm md:text-base text-zinc-400 max-w-xl">
            Career progression across full-stack product development, real-time industrial IIoT platforms, and cloud deployments.
          </p>
          <LiveExperienceCounter startDateStr="2023-02-01T00:00:00" className="w-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 w-full pt-4">
          
          {/* ── LEFT: Company Selector & Timeline Track ── */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-3.5 overflow-x-auto lg:overflow-visible w-full lg:w-[320px] xl:w-[360px] flex-shrink-0 pb-3 lg:pb-0 custom-scrollbar snap-x snap-mandatory">
            {experience.map((exp, i) => {
              const isActive = activeIndex === i;
              const isCurrent = exp.endDate === 'Current';

              return (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={`relative flex-shrink-0 snap-start w-[270px] sm:w-[300px] lg:w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden group p-4 sm:p-4.5 ${
                    isActive
                      ? 'border-emerald-500/40 bg-gradient-to-r from-emerald-500/[0.08] to-transparent shadow-xl shadow-emerald-500/5'
                      : 'border-white/[0.06] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04]'
                  }`}
                >


                  <div className="flex items-center gap-3.5">
                    {/* Company Logo / Fallback */}
                    <div className={`w-12 h-12 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center border transition-all duration-300 ${exp.logoBg || 'bg-white'} ${
                      isActive ? 'border-emerald-500/40 shadow-md ring-1 ring-emerald-500/20' : 'border-white/10'
                    } ${exp.logoFit !== 'cover' ? 'p-1.5' : ''}`}>
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={exp.company}
                          className={`w-full h-full ${exp.logoFit === 'cover' ? 'object-cover' : 'object-contain'}`}
                          onError={(e) => { 
                            e.target.style.display = 'none'; 
                            if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex'; 
                          }}
                        />
                      ) : null}
                      <div className="w-full h-full hidden items-center justify-center bg-zinc-900 rounded-lg">
                        <Briefcase size={18} className="text-emerald-400" />
                      </div>
                    </div>

                    {/* Company Info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className={`font-bold text-sm sm:text-base truncate transition-colors ${isActive ? 'text-white' : 'text-zinc-300 group-hover:text-white'}`}>
                          {exp.company}
                        </h4>
                        {isCurrent && (
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" title="Current Role" />
                        )}
                      </div>

                      <p className="text-xs text-zinc-400 truncate mt-0.5">{exp.title}</p>

                      <div className="flex items-center gap-2 mt-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md border transition-colors whitespace-nowrap ${
                          isActive ? 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10' : 'border-white/5 text-zinc-500'
                        }`}>
                          {new Date(exp.startDate).getFullYear()} – {isCurrent ? 'Now' : new Date(exp.endDate).getFullYear()}
                        </span>
                        
                        <span className="text-[10px] font-mono text-zinc-500">
                          {getDuration(exp.startDate, exp.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* ── RIGHT: Role Detail Showcase Panel ── */}
          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {experience.map((exp, i) => {
                if (i !== activeIndex) return null;
                const isCurrent = exp.endDate === 'Current';

                return (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, y: 15, scale: 0.99 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.99 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="w-full rounded-3xl border border-white/10 bg-[#0d0d10] overflow-hidden shadow-2xl relative"
                  >
                    {/* Ambient Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/[0.07] rounded-full blur-3xl pointer-events-none" />

                    {/* Role Header */}
                    <div className="relative p-6 sm:p-8 lg:p-9 border-b border-white/5 z-10 space-y-5">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        
                        {/* Company Logo & Titles */}
                        <div className="flex items-center gap-4 sm:gap-5">
                          <div className={`w-16 h-16 sm:w-18 sm:h-18 rounded-2xl ${exp.logoBg || 'bg-white'} flex-shrink-0 overflow-hidden flex items-center justify-center shadow-xl border border-white/10 ${exp.logoFit !== 'cover' ? 'p-2' : ''}`}>
                            {exp.logo ? (
                              <img 
                                src={exp.logo} 
                                alt={exp.company} 
                                className={`w-full h-full ${exp.logoFit === 'cover' ? 'object-cover' : 'object-contain'}`} 
                              />
                            ) : (
                              <Briefcase size={28} className="text-zinc-800" />
                            )}
                          </div>

                          <div className="space-y-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                {exp.title}
                              </h3>
                              {isCurrent && (
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono font-medium tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                  Present
                                </span>
                              )}
                            </div>

                            <p className="text-base sm:text-lg text-emerald-400 font-semibold tracking-wide">
                              @ {exp.company}
                            </p>
                            {exp.summary && (
                              <p className="text-xs sm:text-sm text-zinc-300 mt-1 leading-relaxed max-w-xl">
                                {exp.summary}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Location / Role Type Chips */}
                        <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-400">
                          {exp.roleType && (
                            <span className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300">
                              {exp.roleType}
                            </span>
                          )}
                          {exp.location && (
                            <span className="flex items-center gap-1.5 text-zinc-400">
                              <MapPin size={12} className="text-zinc-500" />
                              {exp.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Date & Duration Info Pill Strip */}
                      <div className="flex flex-wrap items-center gap-3 pt-2 text-xs text-zinc-400 font-mono">
                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                          <Calendar size={13} className="text-emerald-400" />
                          {formatDate(exp.startDate)} — {formatDate(exp.endDate)}
                        </span>

                        <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5">
                          <Clock size={13} className="text-emerald-400" />
                          Duration: <strong className="text-white font-medium">{getDuration(exp.startDate, exp.endDate)}</strong>
                        </span>
                      </div>

                      {/* Skills / Tech Stack Used in this Role */}
                      {exp.skills && exp.skills.length > 0 && (
                        <div className="pt-2">
                          <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-2">
                            Technologies & Frameworks
                          </span>
                          <div className="flex flex-wrap gap-2 items-center">
                            {exp.skills.map((skill, idx) => (
                              <TechIconBadge key={idx} tech={skill} size={20} padding="p-2.5" />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Impact & Responsibilities */}
                    <div className="relative p-6 sm:p-8 lg:p-9 z-10 space-y-4">
                      <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2">
                        <Sparkles size={13} className="text-emerald-400" />
                        Key Engineering Deliverables & Impact
                      </h4>

                      <div className="space-y-3.5">
                        {exp.description.map((item, j) => (
                          <motion.div
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.08 + 0.1, duration: 0.3 }}
                            className="flex items-start gap-3.5 group/bullet"
                          >
                            <span className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/bullet:bg-emerald-500/20 transition-colors">
                              <CheckCircle2 size={12} className="text-emerald-400" />
                            </span>
                            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed group-hover/bullet:text-white transition-colors">
                              {item}
                            </p>
                          </motion.div>
                        ))}
                      </div>
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
