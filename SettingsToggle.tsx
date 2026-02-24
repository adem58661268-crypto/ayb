
import React from 'react';
import { PlayCircle, MessageCircle } from 'lucide-react';
import { useSettings } from '../SettingsContext';

interface NavbarProps {
  scrolled: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const { t } = useSettings();

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <PlayCircle className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white uppercase">
            ayb <span className="text-blue-500">Editor</span>
          </span>
        </div>

        {/* The Only Action Button */}
        <a
          href="https://wa.me/message/SMS2BUE5RWZTA1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 md:px-8 md:py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-blue-600/20 group"
        >
          <span className="hidden sm:inline">{t.nav.contact}</span>
          <span className="sm:hidden">{t.nav.contactShort}</span>
          <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
        </a>
      </div>
    </nav>
  );
};
