import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export const Navigation = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const items = ["Home", "Projects", "Experience", "Skills", "Contact"];

  return (
    <nav className="fixed w-full md:w-auto md:top-6 md:left-1/2 md:-translate-x-1/2 z-[60] transition-all duration-300">
      <div className="md:hidden flex items-center justify-between px-6 py-4 bg-surface/90 backdrop-blur-xl border-b border-white/5">
        <div className="text-gray-200 text-lg font-bold tracking-tight">JC.</div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div className={`
        md:flex items-center gap-1 p-1.5 rounded-full md:bg-white/[0.02] md:backdrop-blur-2xl md:border md:border-white/10 shadow-2xl
        ${isOpen ? "flex" : "hidden"} flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto bg-surface/95 md:bg-transparent border-b border-white/5 md:border-none py-6 md:py-1.5
      `}>
        {items.map((item) => {
          const sectionId = item === "Projects" ? "projects" : item.toLowerCase();
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={item}
              href={`#${sectionId}`}
              onClick={() => setIsOpen(false)}
              className={`
                relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 w-full md:w-auto text-center
                ${isActive ? "text-white" : "text-gray-400 hover:text-white"}
              `}
            >
              {isActive && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full md:block hidden"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 tracking-wide">{item}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};
