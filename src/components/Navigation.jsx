import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Github, Linkedin, Send, Sparkles } from 'lucide-react';

export const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const items = [
    { label: "Home", id: "home" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* ── Desktop Floating Glass Capsule ── */}
      <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className={`flex items-center gap-1.5 p-1.5 rounded-full border transition-all duration-300 shadow-2xl ${
            scrolled 
              ? 'bg-[#0d0d10]/90 backdrop-blur-2xl border-white/15 shadow-black/80 scale-[0.98]' 
              : 'bg-[#0d0d10]/70 backdrop-blur-xl border-white/10 shadow-black/60'
          }`}
        >
          {/* Brand Monogram Chip */}
          <a
            href="#home"
            className="flex items-center gap-2 pl-3 pr-3.5 py-1.5 rounded-full hover:bg-white/5 transition-colors group"
            title="Go to Home"
          >
            <span className="w-6 h-6 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white group-hover:scale-105 transition-transform">
              JC
            </span>
            <span className="text-xs font-semibold tracking-wide text-zinc-200 group-hover:text-white transition-colors">
              Jalish
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </a>

          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* Navigation Links */}
          <div className="flex items-center gap-0.5">
            {items.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-pill"
                      className="absolute inset-0 bg-white/10 border border-white/15 rounded-full shadow-inner"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          <div className="h-4 w-px bg-white/10 mx-1" />

          {/* Direct Contact CTA Pill */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 hover:bg-emerald-400 hover:text-black transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={13} />
          </a>
        </motion.nav>
      </header>

      {/* ── Mobile Floating Header Bar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden p-3 sm:p-4">
        <div className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-[#0d0d10]/90 backdrop-blur-xl border border-white/10 shadow-2xl">
          <a href="#home" className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white">
              JC
            </span>
            <span className="text-sm font-bold text-white tracking-tight">Jalish Chauhan</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-zinc-300 hover:text-white bg-white/5 border border-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mt-2 w-full rounded-2xl bg-[#0f0f13]/95 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden p-4 space-y-4"
            >
              <div className="flex flex-col space-y-1">
                {items.map((item, i) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                        isActive
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-semibold'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-[11px] font-mono text-zinc-500">
                        0{i + 1}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Drawer Footer Actions */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-emerald-500/20"
                >
                  <span>Get in Touch</span>
                  <Send size={13} />
                </a>

                <div className="flex items-center gap-2">
                  <a
                    href="https://github.com/jalishchauhan07"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jalish-chauhan/"
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
