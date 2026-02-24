
import React from 'react';
import { MessageCircle, Heart, ArrowUp } from 'lucide-react';
import { useSettings } from '../SettingsContext';

export const Footer: React.FC = () => {
  const { t } = useSettings();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-100 dark:bg-[#050505] pt-24 pb-12 border-t border-gray-200 dark:border-white/5 scroll-mt-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 dark:text-white">{t.footer.ready}</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-12">
            {t.footer.desc}
          </p>
          <a 
            href="https://wa.me/message/SMS2BUE5RWZTA1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl text-2xl font-black transition-all hover:shadow-[0_0_50px_-10px_rgba(37,99,235,0.7)] group"
          >
            {t.footer.cta}
            <MessageCircle size={28} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-gray-200 dark:border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tighter">ayb <span className="text-blue-500">Editor</span></span>
          </div>
          
          <p className="text-gray-500 flex items-center gap-2 font-medium">
            {t.footer.rights} © {t.footer.madeWith} <Heart size={14} className="text-red-500 fill-red-500" /> بواسطة ayb Editor
          </p>

          <button 
            onClick={scrollToTop}
            className="glass w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all text-gray-900 dark:text-white"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
