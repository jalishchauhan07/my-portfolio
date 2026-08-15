import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ScrollArea from 'react-scrollbar';
import 'react-scrollbar/dist/css/scrollArea.css';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, X, ExternalLink, ChevronRight } from 'lucide-react';
import { SectionHeading } from './UI';
import { projects } from '../data/data';

const getInitials = (title) => title.trim().substring(0, 2).toUpperCase();

const cardAccents = [
  { glow: 'rgba(16,185,129,0.18)',  tagBg: 'rgba(16,185,129,0.12)',  tagText: '#6ee7b7', tagBorder: 'rgba(16,185,129,0.35)',  dot: '#34d399', badge: '#34d399' },
  { glow: 'rgba(59,130,246,0.18)',  tagBg: 'rgba(59,130,246,0.12)',  tagText: '#93c5fd', tagBorder: 'rgba(59,130,246,0.35)',  dot: '#60a5fa', badge: '#60a5fa' },
  { glow: 'rgba(249,115,22,0.18)',  tagBg: 'rgba(249,115,22,0.12)',  tagText: '#fdba74', tagBorder: 'rgba(249,115,22,0.35)',  dot: '#fb923c', badge: '#fb923c' },
  { glow: 'rgba(139,92,246,0.18)',  tagBg: 'rgba(139,92,246,0.12)',  tagText: '#c4b5fd', tagBorder: 'rgba(139,92,246,0.35)',  dot: '#a78bfa', badge: '#a78bfa' },
];

/* ────────────────────────────────────────────────────────────
   Modal – rendered in a Portal so it's always above the nav
   ──────────────────────────────────────────────────────────── */
const ProjectModal = ({ project, index, onClose }) => {
  const [imgError, setImgError] = useState(false);
  const accent = cardAccents[index % cardAccents.length];

  /* lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  /* close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const modal = (
    <AnimatePresence>
      {/* full-screen overlay */}
      <motion.div
        key="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22 }}
        style={{
          position: 'fixed', inset: 0,
          zIndex: 99999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '16px',
        }}
      >
        {/* backdrop */}
        <div
          onClick={onClose}
          style={{
            position: 'absolute', inset: 0,
            background: 'rgba(0,0,0,0.82)',
            backdropFilter: 'blur(18px)',
            WebkitBackdropFilter: 'blur(18px)',
          }}
        />

        {/* dialog card */}
        <motion.div
          key="modal-card"
          initial={{ opacity: 0, scale: 0.93, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.93, y: 28 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          style={{
            position: 'relative',
            width: '100%', maxWidth: 640,
            maxHeight: '88vh',
            background: '#141414',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 28,
            boxShadow: `0 40px 100px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.04)`,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* ── react-scrollbar ScrollArea ── */}
          <ScrollArea
            speed={0.8}
            smoothScrolling
            style={{ maxHeight: 'calc(88vh)', width: '100%' }}
            verticalScrollbarStyle={{ borderRadius: 6, backgroundColor: 'rgba(16,185,129,0.5)' }}
            verticalContainerStyle={{ borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.04)' }}
          >

            {/* Hero image */}
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/8', background: '#0a0a0a', flexShrink: 0 }}>
              {project.image && !imgError ? (
                <img
                  src={project.image}
                  alt={project.title}
                  onError={() => setImgError(true)}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 96, fontWeight: 900, color: 'rgba(255,255,255,0.06)', letterSpacing: '-0.05em' }}>
                    {getInitials(project.title)}
                  </span>
                </div>
              )}
              {/* gradient vignette */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, #141414 0%, transparent 55%)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Content */}
            <div style={{ padding: '0 28px 32px', marginTop: -8 }}>

              {/* Tag row */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 16 }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  fontSize: 11, fontWeight: 700, letterSpacing: '0.04em',
                  padding: '5px 12px', borderRadius: 99,
                  background: accent.tagBg, color: accent.tagText, border: `1px solid ${accent.tagBorder}`,
                }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: accent.dot, flexShrink: 0 }} />
                  Web Application
                </span>
                {project.tech.slice(0, 3).map((t, j) => (
                  <span key={j} style={{
                    fontSize: 11, fontFamily: 'monospace',
                    padding: '5px 12px', borderRadius: 99,
                    background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.55)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h2 style={{ fontSize: 'clamp(1.6rem, 5vw, 2.25rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.2, margin: '0 0 12px' }}>
                {project.title}
              </h2>

              <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', margin: '16px 0' }} />

              {/* Description */}
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 15, lineHeight: 1.75, fontWeight: 300, margin: '0 0 24px' }}>
                {project.description}
              </p>

              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 24 }}>
                {[
                  { label: 'Stack', value: project.tech[0] },
                  { label: 'Type', value: 'Full Stack' },
                  { label: 'Status', value: 'Live ✦' },
                ].map((item, k) => (
                  <div key={k} style={{
                    background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16, padding: '14px 12px', textAlign: 'center',
                  }}>
                    <p style={{ fontSize: 10, fontFamily: 'monospace', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.12em', margin: '0 0 6px' }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: 13, fontWeight: 600, color: k === 2 ? accent.badge : '#fff', margin: 0 }}>
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* All tech tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
                {project.tech.map((t, j) => (
                  <span key={j} style={{
                    fontSize: 12, fontFamily: 'monospace', fontWeight: 500,
                    padding: '6px 14px', borderRadius: 10,
                    background: accent.tagBg, color: accent.tagText, border: `1px solid ${accent.tagBorder}`,
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  width: '100%', padding: '14px 20px', borderRadius: 16,
                  background: '#fff', color: '#000', fontWeight: 700, fontSize: 14,
                  letterSpacing: '0.02em', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#d1fae5'}
                onMouseLeave={e => e.currentTarget.style.background = '#fff'}
              >
                <ExternalLink size={15} />
                Open Live Project
                <ChevronRight size={15} />
              </a>
            </div>
          </ScrollArea>

          {/* Close button – always floats above scroll */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute', top: 16, right: 16,
              width: 36, height: 36, borderRadius: '50%',
              background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.18)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', transition: 'background 0.2s',
              zIndex: 10,
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'}
            onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.65)'}
          >
            <X size={15} color="#fff" />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return ReactDOM.createPortal(modal, document.body);
};

/* ────────────────────────────────────────────────────────────
   Featured Card (first project — full-width cinematic)
   ──────────────────────────────────────────────────────────── */
const FeaturedCard = ({ project, index, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const accent = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group"
      style={{
        position: 'relative', width: '100%', borderRadius: 24, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
        background: '#0d0d0d', transition: 'border-color 0.4s',
        boxShadow: `0 0 60px ${accent.glow}`,
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', width: '100%', aspectRatio: '21/9', overflow: 'hidden', background: '#111' }}>
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="group-hover:scale-[1.04]"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 140, fontWeight: 900, color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.05em' }}>
              {getInitials(project.title)}
            </span>
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d0d 0%, transparent 55%)', pointerEvents: 'none' }} />
      </div>

      {/* Info bar */}
      <div style={{ padding: '0 28px 28px', marginTop: -4, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <div style={{ display: 'flex', gap: 8, marginBottom: 10 }}>
            <span style={{
              fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '4px 12px', borderRadius: 99,
              background: accent.tagBg, color: accent.tagText, border: `1px solid ${accent.tagBorder}`,
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: accent.dot, animation: 'pulse 2s infinite' }} />
              Featured
            </span>
          </div>
          <h3 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.1, margin: 0 }}>
            {project.title}
          </h3>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginTop: 8, maxWidth: 480 }} className="line-clamp-2">
            {project.description}
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, justifyContent: 'flex-end' }}>
            {project.tech.slice(0, 3).map((t, j) => (
              <span key={j} style={{ fontSize: 11, fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', border: '1px solid rgba(255,255,255,0.1)', padding: '3px 10px', borderRadius: 8 }}>{t}</span>
            ))}
          </div>
          <div className="group-hover:bg-white group-hover:border-white" style={{
            width: 44, height: 44, borderRadius: 14,
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            transition: 'background 0.3s, border-color 0.3s',
          }}>
            <ArrowUpRight size={18} className="group-hover:text-black" style={{ color: 'rgba(255,255,255,0.5)', transition: 'color 0.3s' }} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────
   Grid Card (remaining projects)
   ──────────────────────────────────────────────────────────── */
const GridCard = ({ project, index, onClick }) => {
  const [imgError, setImgError] = useState(false);
  const accent = cardAccents[index % cardAccents.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onClick={onClick}
      className="group"
      style={{
        position: 'relative', borderRadius: 20, overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)', cursor: 'pointer',
        background: '#0d0d0d', transition: 'border-color 0.4s',
        boxShadow: `0 0 40px ${accent.glow}`,
        display: 'flex', flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#111' }}>
        {project.image && !imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="group-hover:scale-[1.06]"
            style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.7s ease-out', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: 90, fontWeight: 900, color: 'rgba(255,255,255,0.04)', letterSpacing: '-0.05em', lineHeight: 1 }}>
              {getInitials(project.title)}
            </span>
          </div>
        )}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0d0d0d 0%, transparent 50%)', pointerEvents: 'none' }} />
        <div className="opacity-0 group-hover:opacity-100" style={{
          position: 'absolute', top: 14, right: 14,
          width: 38, height: 38, borderRadius: 12,
          background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'opacity 0.3s',
        }}>
          <ArrowUpRight size={16} color="#fff" />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 10 }}>
          {project.tech.slice(0, 2).map((t, j) => (
            <span key={j} style={{
              fontSize: 10, fontFamily: 'monospace', fontWeight: 600,
              padding: '4px 10px', borderRadius: 8,
              background: accent.tagBg, color: accent.tagText, border: `1px solid ${accent.tagBorder}`,
            }}>{t}</span>
          ))}
        </div>
        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '0 0 6px', lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', lineHeight: 1.65, flex: 1, margin: 0 }} className="line-clamp-3">
          {project.description}
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 14, fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,0.3)' }} className="group-hover:text-white/60" >
          View Details <ChevronRight size={13} />
        </div>
      </div>
    </motion.div>
  );
};

/* ────────────────────────────────────────────────────────────
   Main Section
   ──────────────────────────────────────────────────────────── */
export const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="w-full py-32 px-5 md:px-10 relative z-10">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading number="01" title="Selected Works" />

        <div style={{ marginBottom: 20 }}>
          <FeaturedCard project={featured} index={0} onClick={() => setSelected({ project: featured, index: 0 })} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 }}>
          {rest.map((project, i) => (
            <GridCard key={i} project={project} index={i + 1} onClick={() => setSelected({ project, index: i + 1 })} />
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal
          project={selected.project}
          index={selected.index}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
};
