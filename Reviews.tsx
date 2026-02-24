
import React from 'react';
import { Scissors, Youtube, Palette, Type, TrendingUp, FileText } from 'lucide-react';
import { useSettings } from '../SettingsContext';

export const Services: React.FC = () => {
  const { t } = useSettings();

  const serviceIcons = [
    <Scissors className="w-8 h-8" />,
    <Youtube className="w-8 h-8" />,
    <Palette className="w-8 h-8" />,
    <Type className="w-8 h-8" />,
    <FileText className="w-8 h-8" />,
    <TrendingUp className="w-8 h-8" />,
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden scroll-mt-20 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">{t.services.badge}</h2>
          <h3 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 dark:text-white">{t.services.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg">{t.services.desc}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service: any, idx: number) => (
            <div 
              key={idx} 
              className="glass p-10 rounded-3xl hover:border-blue-500/50 transition-all group hover:-translate-y-2 duration-300"
            >
              <div className="w-16 h-16 bg-blue-600/10 text-blue-500 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {serviceIcons[idx]}
              </div>
              <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors text-gray-900 dark:text-white">{service.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
