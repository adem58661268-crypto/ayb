
import React from 'react';
import { CheckCircle2, Award, Zap, Lightbulb } from 'lucide-react';
import { useSettings } from '../SettingsContext';

export const About: React.FC = () => {
  const { t } = useSettings();

  const highlightIcons = [
    <Award className="text-blue-500" />,
    <Zap className="text-blue-500" />,
    <Lightbulb className="text-blue-500" />,
    <CheckCircle2 className="text-blue-500" />,
  ];

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-[#0d0d0d] scroll-mt-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center lg:text-right">
          <div className="flex flex-col items-center lg:items-start">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">{t.about.badge}</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-gray-900 dark:text-white">
              {t.about.title}
            </h3>
            
            <div className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-12 space-y-6">
              <p>{t.about.desc1}</p>
              <p>
                <span className="text-gray-900 dark:text-white font-bold">{t.about.desc2.split(',')[0]}</span>
                {t.about.desc2.substring(t.about.desc2.indexOf(','))}
              </p>
              <p className="text-blue-600 dark:text-blue-400/90 border-r-2 border-blue-500/30 pr-4 italic">
                {t.about.desc3}
              </p>
              <p>{t.about.desc4}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12 w-full">
              {t.about.highlights.map((text: string, idx: number) => (
                <div key={idx} className="flex items-center gap-4 glass p-6 rounded-2xl border-blue-500/10 hover:border-blue-500/30 transition-colors">
                  <div className="bg-blue-600/10 p-3 rounded-lg">
                    {highlightIcons[idx]}
                  </div>
                  <span className="font-bold text-gray-800 dark:text-gray-200 text-lg">{text}</span>
                </div>
              ))}
            </div>

            <div className="w-full bg-blue-600/5 border-r-4 border-blue-600 p-8 rounded-l-2xl italic text-blue-600 dark:text-blue-400 text-xl font-medium">
              "{t.about.quote}"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
