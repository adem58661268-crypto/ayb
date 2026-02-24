
import React, { useRef } from 'react';
import { Palette, MousePointer2, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export const ThumbnailService: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const thumbnails = [
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?auto=format&fit=crop&q=80&w=800', 
      title: 'تصميم ألعاب (Gaming)' 
    },
    { 
      id: 2, 
      url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800', 
      title: 'تصميم تقني (Tech)' 
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800', 
      title: 'تصميم رياضي (Sports)' 
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1501503060443-ef4ed1670242?auto=format&fit=crop&q=80&w=800', 
      title: 'تصميم تعليمي (Educational)' 
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo = direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="glass p-8 md:p-16 rounded-[40px] border-blue-500/20 relative overflow-hidden group">
          {/* Decorative Background Elements */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full group-hover:bg-blue-600/20 transition-colors duration-700" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/10 blur-[80px] rounded-full group-hover:bg-purple-600/20 transition-colors duration-700" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Header Content */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full mb-6 font-bold text-sm">
                <Sparkles size={16} />
                <span>خدمة مميزة جداً</span>
              </div>
              
              <h3 className="text-4xl md:text-6xl font-black mb-6 leading-tight text-gray-900 dark:text-white">
                تصميم صور مصغرة جذابة لليوتيوب
                <span className="inline-block mr-4 transform hover:scale-125 transition-transform cursor-default">🎨</span>
              </h3>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto">
                أقدّم لك صور مصغرة جذابة تجذب المشاهدين منذ اللحظة الأولى، تعكس محتوى الفيديو وتزيد من نسبة النقر (CTR). الصور مصممة بأسلوب عصري واحترافي مع مراعاة الهوية البصرية لقناتك.
              </p>

              {/* Feature Tags */}
              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold bg-gray-100 dark:bg-white/5 px-6 py-3 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-blue-500/30 transition-colors">
                  <MousePointer2 size={18} className="text-blue-500" />
                  <span>زيادة نسبة النقر CTR</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 font-bold bg-gray-100 dark:bg-white/5 px-6 py-3 rounded-2xl border border-gray-200 dark:border-white/5 hover:border-purple-500/30 transition-colors">
                  <Palette size={18} className="text-purple-500" />
                  <span>هوية بصرية موحدة</span>
                </div>
              </div>
            </div>

            {/* Visual Carousel - Positioned exactly under the CTR/Identity tags */}
            <div className="w-full mb-12">
              <div className="relative group/carousel">
                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-8 z-20 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                  <button 
                    onClick={() => scroll('left')}
                    className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xl border border-gray-200"
                  >
                    <ChevronLeft size={28} />
                  </button>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-8 z-20 hidden md:block opacity-0 group-hover/carousel:opacity-100 transition-opacity">
                  <button 
                    onClick={() => scroll('right')}
                    className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xl border border-gray-200"
                  >
                    <ChevronRight size={28} />
                  </button>
                </div>

                <div 
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-6"
                >
                  {thumbnails.map((thumb) => (
                    <div 
                      key={thumb.id}
                      className="min-w-[90%] md:min-w-[45%] lg:min-w-[32%] snap-center"
                    >
                      <div className="relative aspect-video rounded-3xl overflow-hidden border-2 border-gray-200 dark:border-white/10 shadow-2xl group/item">
                        <img 
                          src={thumb.url} 
                          alt={thumb.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/item:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex items-end p-6">
                           <span className="text-white font-bold text-sm bg-blue-600/90 backdrop-blur-md px-4 py-1 rounded-full border border-white/10">
                             {thumb.title}
                           </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-2 flex flex-col items-center gap-2">
                  <span className="text-gray-500 text-xs font-bold animate-pulse">اسحب لرؤية المزيد من النماذج</span>
                  <div className="flex gap-1">
                    {thumbnails.map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-600/30 group-hover:bg-blue-600/60 transition-colors" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a 
                href="https://wa.me/message/SMS2BUE5RWZTA1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-black font-black px-12 py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl active:scale-95"
              >
                اطلب تصاميمك الآن
                <ChevronRight className="rotate-180" size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
