import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles, 
  MessageSquare, 
  User, 
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  Globe2,
  Github,
  Linkedin
} from 'lucide-react';
import { SectionHeading } from './UI';

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [selectedType, setSelectedType] = useState('Full-Time Role');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success'

  const myEmail = 'chauhanjalish005@gmail.com';

  // Live Ahmedabad local time clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }).format(now);
        setCurrentTime(timeString);
      } catch (err) {
        setCurrentTime('');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(myEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const projectTypes = [
    'Full-Time Role',
    'Contract / Freelance',
    'Industrial IIoT',
    'General Inquiry'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }

    setStatus('sending');

    // Prepare direct mailto URL
    const subject = encodeURIComponent(`[${selectedType}] Inquiry from ${formState.name}`);
    const body = encodeURIComponent(
      `Hi Jalish,\n\nName: ${formState.name}\nEmail: ${formState.email}\nInquiry Type: ${selectedType}\n\nMessage:\n${formState.message}\n\n---\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${myEmail}?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus('success');
      // Trigger mail composer in new window/tab
      window.open(mailtoUrl, '_blank');
    }, 600);
  };

  const handleReset = () => {
    setFormState({ name: '', email: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="w-full py-28 px-5 md:px-10 lg:px-16 relative z-10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full space-y-12">
        
        {/* Section Heading & Subtitle */}
        <div className="space-y-4">
          <SectionHeading title="Get In Touch" />
          <p className="text-sm md:text-base text-zinc-400 max-w-2xl -mt-8 leading-relaxed">
            Have an open software developer role, an engineering challenge, or an industrial automation idea? 
            My inbox is always open — let's build something exceptional together.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ── LEFT COLUMN: Status, Direct Cards & Timezone (5 cols) ── */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Live Availability Status Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-5 sm:p-6 rounded-3xl border border-emerald-500/25 bg-gradient-to-br from-emerald-500/[0.08] via-[#0f1412] to-[#0d0d10] shadow-xl shadow-emerald-500/5 relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                </span>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-400">
                  Current Status
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mt-2.5 tracking-tight">
                Available for Full-Time Roles
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 mt-1.5 leading-relaxed">
                Actively interviewing for Software Developer, Full-Stack, and Backend engineering positions. 
                Fast turnaround on interviews and code assessments.
              </p>

              <div className="mt-4 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Clock size={13} className="text-emerald-400" />
                  Response Time
                </span>
                <span className="text-emerald-300 font-medium">Within 24 Hours</span>
              </div>
            </motion.div>

            {/* Direct Email Card with 1-Click Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#101014]/90 backdrop-blur-xl shadow-xl space-y-3 group/card"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <Mail size={13} className="text-emerald-400" />
                  Direct Email
                </span>
                <span className="text-[11px] font-mono text-emerald-400/80">Preferred</span>
              </div>

              <div className="flex items-center justify-between gap-3 p-3 rounded-2xl bg-black/40 border border-white/5">
                <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate select-all">
                  {myEmail}
                </span>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  title="Copy email to clipboard"
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all duration-200 ${
                    copied
                      ? 'bg-emerald-500 text-black shadow-lg shadow-emerald-500/20'
                      : 'bg-white/10 text-white hover:bg-white/20 active:scale-95'
                  }`}
                >
                  {copied ? (
                    <>
                      <Check size={13} className="stroke-[2.5]" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={13} />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${myEmail}&su=Software%20Developer%20Opportunity`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-xs text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 font-medium"
                >
                  <span>Open in Gmail</span>
                  <ArrowUpRight size={13} />
                </a>

                <a
                  href={`mailto:${myEmail}`}
                  className="flex-1 text-center py-2 px-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/5 text-xs text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 font-medium"
                >
                  <span>Default Mail</span>
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </motion.div>

            {/* Location & Timezone Clock Card */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="p-5 sm:p-6 rounded-3xl border border-white/10 bg-[#101014]/90 backdrop-blur-xl shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin size={13} className="text-emerald-400" />
                  Location & Time
                </span>
                <span className="text-[11px] font-mono text-zinc-500">IST (UTC+5:30)</span>
              </div>

              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm sm:text-base font-semibold text-white">
                    Ahmedabad, India
                  </h4>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    Open to Remote & On-Site Relocation
                  </p>
                </div>

                {currentTime && (
                  <div className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-right">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 block">
                      Local Time
                    </span>
                    <span className="text-xs sm:text-sm font-mono font-bold text-emerald-400">
                      {currentTime}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Social Channels Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              <a
                href="https://www.linkedin.com/in/jalish-chauhan/"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0077B5]/15 border border-[#0077B5]/30 flex items-center justify-center text-[#0077B5] group-hover:scale-105 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-white block group-hover:text-emerald-300 transition-colors">
                    LinkedIn
                  </span>
                  <span className="text-[10px] text-zinc-400 block truncate font-mono">
                    Professional Profile
                  </span>
                </div>
              </a>

              <a
                href="https://github.com/jalishchauhan07"
                target="_blank"
                rel="noreferrer"
                className="p-4 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/20 transition-all duration-200 flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Github size={18} />
                </div>
                <div className="min-w-0">
                  <span className="text-xs font-semibold text-white block group-hover:text-emerald-300 transition-colors">
                    GitHub
                  </span>
                  <span className="text-[10px] text-zinc-400 block truncate font-mono">
                    Open Source Code
                  </span>
                </div>
              </a>
            </motion.div>

          </div>

          {/* ── RIGHT COLUMN: Interactive Contact Form (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-[#0e0e12]/95 backdrop-blur-2xl p-6 sm:p-8 lg:p-9 shadow-2xl relative overflow-hidden"
          >
            {/* Top accent badge */}
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Sparkles size={18} className="text-emerald-400" />
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                  Fill out the form below to initiate an email conversation directly.
                </p>
              </div>
            </div>

            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10">
                  <CheckCircle2 size={32} className="stroke-[2.5]" />
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Message Dispatched!
                </h4>

                <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
                  Your mail composer has been launched with your formatted message. 
                  If it didn't open automatically, feel free to write directly to{' '}
                  <strong className="text-white font-mono">{myEmail}</strong>.
                </p>

                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={handleReset}
                    type="button"
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-colors"
                  >
                    Send Another Note
                  </button>

                  <button
                    onClick={handleCopyEmail}
                    type="button"
                    className="px-6 py-2.5 rounded-full bg-emerald-500 text-black text-xs font-bold tracking-wide transition-transform hover:scale-105"
                  >
                    {copied ? 'Copied Email!' : 'Copy Email Address'}
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 pt-6">
                
                {/* Inquiry Type Chips */}
                <div className="space-y-2.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-zinc-400 block">
                    What are you looking for?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => {
                      const isSelected = selectedType === type;
                      return (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                            isSelected
                              ? 'bg-emerald-500 text-black font-semibold shadow-md shadow-emerald-500/20'
                              : 'bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/5'
                          }`}
                        >
                          {type}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Inputs in Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label 
                      htmlFor="contact-name"
                      className="text-xs font-mono uppercase tracking-wider text-zinc-400 block"
                    >
                      Your Name *
                    </label>
                    <div className="relative">
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 text-white placeholder-zinc-600 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label 
                      htmlFor="contact-email"
                      className="text-xs font-mono uppercase tracking-wider text-zinc-400 block"
                    >
                      Email Address *
                    </label>
                    <div className="relative">
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 text-white placeholder-zinc-600 text-sm outline-none transition-all duration-200"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-2">
                  <label 
                    htmlFor="contact-message"
                    className="text-xs font-mono uppercase tracking-wider text-zinc-400 block"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about the role, project goals, tech stack, or questions..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/30 text-white placeholder-zinc-600 text-sm outline-none transition-all duration-200 resize-none leading-relaxed"
                  />
                </div>

                {/* Submit Action Button */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-[11px] font-mono text-zinc-500">
                    No spam ever • Directly reaches my primary inbox
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-emerald-500 text-black font-bold text-sm tracking-wide hover:bg-emerald-400 transition-all duration-200 shadow-xl shadow-emerald-500/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                  >
                    {status === 'sending' ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>
                </div>

              </form>
            )}

          </motion.div>

        </div>

      </div>
    </section>
  );
};
