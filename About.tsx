
import React, { useState, useEffect } from 'react';
import { Play, ExternalLink, ArrowLeftRight, X, AlertCircle, MessageCircle, Download } from 'lucide-react';
import { useSettings } from '../SettingsContext';

export const Portfolio: React.FC = () => {
  const { t, language } = useSettings();
  const [filter, setFilter] = useState(t.portfolio.filterAll);
  const [selectedVideo, setSelectedVideo] = useState<{id: string, isShort: boolean, downloadUrl?: string} | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(true);

  // Update filter when language changes
  useEffect(() => {
    setFilter(t.portfolio.filterAll);
  }, [language, t.portfolio.filterAll]);

  // إغلاق النافذة عند الضغط على مفتاح Escape
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideo();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const projects = [
    { 
      id: 6, 
      title: 'قبل وبعد المونتاج - الاحترافية في التفاصيل', 
      category: 'قبل وبعد', 
      thumb: 'https://img.youtube.com/vi/AkHLjw1dDtg/maxresdefault.jpg',
      videoId: 'AkHLjw1dDtg',
      isShort: true,
      downloadUrl: '#'
    },
    { 
      id: 7, 
      title: 'قبل وبعد المونتاج - تحويل المحتوى الخام', 
      category: 'قبل وبعد', 
      thumb: 'https://img.youtube.com/vi/7n6J8-pbJ2E/maxresdefault.jpg',
      videoId: '7n6J8-pbJ2E',
      isShort: true,
      downloadUrl: '#'
    },
    { 
      id: 1, 
      title: 'فيديو تسويقي لشركة تقنية', 
      category: 'إعلاني', 
      thumb: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      videoId: 'dQw4w9WgXcQ',
      isShort: false,
      downloadUrl: '#'
    },
    { 
      id: 3, 
      title: 'ريلز رياضي محفز', 
      category: 'ريلز', 
      thumb: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&q=80&w=800',
      videoId: 'dQw4w9WgXcQ',
      isShort: true,
      downloadUrl: '#'
    },
    { 
      id: 2, 
      title: 'رحلة استكشافية - مدونة فيديو', 
      category: 'يوتيوب', 
      thumb: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800',
      videoId: 'dQw4w9WgXcQ',
      isShort: false,
      downloadUrl: '#'
    },
    { 
      id: 4, 
      title: 'بودكاست حواري احترافي', 
      category: 'بودكاست', 
      thumb: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=800',
      videoId: 'dQw4w9WgXcQ',
      isShort: false,
      downloadUrl: '#'
    },
    { 
      id: 5, 
      title: 'إعلان تطبيق جوال', 
      category: 'إعلاني', 
      thumb: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      videoId: 'dQw4w9WgXcQ',
      isShort: false,
      downloadUrl: '#'
    },
  ];

  const categories = [t.portfolio.filterAll, 'ريلز', 'يوتيوب', 'قبل وبعد', 'إعلاني', 'بودكاست'];

  const openVideo = (id: string, isShort: boolean, downloadUrl?: string) => {
    setSelectedVideo({ id, isShort, downloadUrl });
    setIsVideoLoading(true);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-[#0d0d0d] scroll-mt-20 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="md:w-1/2 text-right rtl:text-right ltr:text-left">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">{t.portfolio.badge}</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-4 text-gray-900 dark:text-white">{t.portfolio.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t.portfolio.desc}</p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'glass text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(p => filter === t.portfolio.filterAll || p.category === filter).map((project) => (
            <div 
              key={project.id} 
              onClick={() => openVideo(project.videoId, project.isShort, project.downloadUrl)}
              className="group relative rounded-3xl overflow-hidden glass border-0 hover:shadow-2xl hover:shadow-blue-600/10 transition-all duration-500 cursor-pointer"
            >
              <div className="relative aspect-video overflow-hidden bg-black/40">
                <img 
                  src={project.thumb} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                
                {project.category === 'قبل وبعد' && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="bg-blue-600 text-white text-xs font-black px-3 py-1 rounded-full flex items-center gap-2 shadow-xl animate-pulse">
                      <ArrowLeftRight size={12} />
                      <span>قبل وبعد</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end text-right rtl:text-right ltr:text-left">
                <div className="flex-1">
                  <span className="text-blue-500 text-xs font-bold bg-blue-500/10 px-3 py-1 rounded-md mb-2 inline-block border border-blue-500/20">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-1">{project.title}</h4>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-all duration-300 hover:bg-blue-600 hover:text-white shrink-0 ml-4 shadow-xl">
                  <Play fill="currentColor" size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal - Instant Play Implementation */}
        {selectedVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 md:p-8">
            <div 
              className="absolute inset-0 bg-black/95 backdrop-blur-sm" 
              onClick={closeVideo}
            ></div>
            
            <div className={`relative w-full ${selectedVideo.isShort ? 'max-w-[400px] aspect-[9/16]' : 'max-w-5xl aspect-video'} bg-black rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl z-10 border border-white/10`}>
              
              {/* Controls */}
              <div className="absolute top-2 right-2 md:top-4 md:right-4 z-50">
                <button 
                  onClick={closeVideo}
                  className="bg-black/60 hover:bg-red-600 text-white p-2 rounded-full transition-all backdrop-blur-md border border-white/10"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="absolute top-2 left-2 md:top-4 md:left-4 z-50 flex gap-2">
                {selectedVideo.downloadUrl && selectedVideo.downloadUrl !== '#' && (
                  <a 
                    href={selectedVideo.downloadUrl}
                    download
                    className="bg-emerald-600 hover:bg-emerald-500 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-lg flex items-center gap-2"
                  >
                    <Download size={14} />
                    تحميل
                  </a>
                )}
                <a 
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <ExternalLink size={14} />
                  يوتيوب
                </a>
              </div>
              
              {/* The Iframe - Clean URL for fast loading */}
              <div className="w-full h-full flex items-center justify-center bg-black relative">
                {isVideoLoading && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20">
                    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-blue-500 font-bold animate-pulse">{t.portfolio.loading}</p>
                  </div>
                )}
                <iframe 
                  src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&mute=0&rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                  title="Video Player"
                  onLoad={() => setIsVideoLoading(false)}
                ></iframe>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-600/10 text-blue-600 dark:text-blue-400 px-6 py-3 rounded-full mb-8 border border-blue-600/20">
            <AlertCircle size={20} />
            <span className="text-sm font-black">{t.portfolio.instantPlay}</span>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p className="text-gray-600 dark:text-gray-400 text-lg">أعمل دائماً على تقديم أفضل جودة بصرية وصوتية لضمان وصول رسالتك للجمهور.</p>
            <a 
              href="https://wa.me/message/SMS2BUE5RWZTA1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-2xl font-black transition-all transform hover:-translate-y-1 shadow-2xl shadow-blue-600/20"
            >
              {t.portfolio.cta}
              <MessageCircle size={20} className="mr-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
