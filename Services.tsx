
import React from 'react';
import { MessageCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useSettings } from '../SettingsContext';

export const Hero: React.FC = () => {
  const { t } = useSettings();

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-10">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.1)_0%,_transparent_70%)] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-800/20 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 bg-blue-600/10 border border-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-8 animate-pulse">
          <Sparkles size={18} />
          <span className="text-sm font-bold">{t.hero.badge}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight text-gray-900 dark:text-white">
          {t.hero.title1} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-500">{t.hero.title2}</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 font-medium">
          {t.hero.desc}
        </p>

        <div className="flex flex-col items-center gap-12 w-full">
          {/* Main CTA Button */}
          <a
            href="https://wa.me/message/SMS2BUE5RWZTA1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all transform hover:translate-y-[-4px] hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)] group w-full sm:w-auto justify-center"
          >
            {t.hero.cta}
            <MessageCircle className="group-hover:rotate-12 transition-transform" />
          </a>

          {/* Logo Section - The 3D Mascot */}
          <div className="relative mt-4 group">
            <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="logo.png" 
              alt="ayb Editor Mascot" 
              className="w-64 h-auto md:w-80 lg:w-[400px] drop-shadow-[0_20px_50px_rgba(139,92,246,0.3)] animate-[float_6s_easeInOut_infinite] relative z-10"
              onError={(e) => {
                // Fallback style if image not found during initial setup
                e.currentTarget.style.display = 'none';
              }}
            />
            {/* Custom Animation using Tailwind arbitrary values or global CSS would be better, 
                but we'll use a standard float effect */}
            <style>{`
              @keyframes float {
                0% { transform: translateY(0px) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(2deg); }
                100% { transform: translateY(0px) rotate(0deg); }
              }
              .animate-float {
                animation: float 6s ease-in-out infinite;
              }
            `}</style>
          </div>
        </div>

        <div className="mt-16 animate-bounce opacity-50">
          <a href="#about" className="text-gray-500 hover:text-blue-500 transition-colors">
            <ChevronDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};
