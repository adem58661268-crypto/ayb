
import React, { useState } from 'react';
import { useSettings } from '../SettingsContext';
import { Globe, Sun, Moon, Settings } from 'lucide-react';

export const SettingsToggle: React.FC = () => {
  const { language, setLanguage, theme, setTheme } = useSettings();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-[100] flex flex-col items-end gap-3">
      {isOpen && (
        <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Language Switcher */}
          <div className="glass p-2 rounded-2xl flex flex-col gap-1 shadow-2xl border-white/10">
            <button
              onClick={() => setLanguage('ar')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${language === 'ar' ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
            >
              العربية
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${language === 'en' ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage('fr')}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${language === 'fr' ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
            >
              Français
            </button>
          </div>

          {/* Theme Switcher */}
          <div className="glass p-2 rounded-2xl flex gap-1 shadow-2xl border-white/10">
            <button
              onClick={() => setTheme('light')}
              className={`p-3 rounded-xl transition-all ${theme === 'light' ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
              title="Light Mode"
            >
              <Sun size={20} />
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-3 rounded-xl transition-all ${theme === 'dark' ? 'bg-blue-600 text-white' : 'hover:bg-white/5 text-gray-400'}`}
              title="Dark Mode"
            >
              <Moon size={20} />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110 active:scale-95 ${isOpen ? 'bg-red-600 text-white rotate-90' : 'bg-blue-600 text-white'}`}
      >
        {isOpen ? <Settings size={28} /> : <Globe size={28} />}
      </button>
    </div>
  );
};
