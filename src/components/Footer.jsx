import React from 'react';
import { Github, Linkedin } from 'lucide-react';

export { Skills } from './Skills';
export { Contact } from './Contact';

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
