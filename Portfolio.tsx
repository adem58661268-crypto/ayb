
import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Reviews: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const reviews = [
    {
      id: 1,
      name: "أحمد العتيبي",
      role: "صانع محتوى تقني",
      comment: "تعاملت مع العديد من المحررين، لكن AYB Editor يتميز بفهمه العميق للمحتوى وما يريده المشاهد. المونتاج زاد من مدة الاحتفاظ بالمشاهد بشكل ملحوظ.",
      avatar: "https://i.pravatar.cc/150?img=11" // صورة رجل
    },
    {
      id: 2,
      name: "سارة محمود",
      role: "مديرة متجر إلكتروني",
      comment: "فيديوهات الريلز التي صنعها لمتجري كانت مبهرة، الألوان والإيقاع ساعدوا جداً في زيادة المبيعات. التزام تام بالمواعيد واحترافية عالية.",
      avatar: "https://i.pravatar.cc/150?img=5" // صورة امرأة
    },
    {
      id: 3,
      name: "ياسر خالد",
      role: "مقدم بودكاست",
      comment: "عمل جبار في هندسة الصوت وإضافة الـ Subtitles. الموقع أصبح أكثر احترافية بفضل لمساته الإبداعية. أنصح به بشدة.",
      avatar: "https://i.pravatar.cc/150?img=12" // صورة رجل
    },
    {
      id: 4,
      name: "نورا فيصل",
      role: "مدربة حياة",
      comment: "قدم لي استشارة محتوى قبل البدء بالمونتاج، وهذا ما جعل الفيديو النهائي مختلفاً تماماً عما كنت أتخيل. شكراً جزيلاً.",
      avatar: "https://i.pravatar.cc/150?img=9" // صورة امرأة
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="reviews" className="py-24 bg-white dark:bg-[#0a0a0a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div className="text-center md:text-right rtl:text-right ltr:text-left mb-8 md:mb-0">
            <h2 className="text-blue-500 font-bold tracking-widest uppercase mb-4">آراء العملاء</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white">ماذا يقولون عن عملي؟</h3>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={() => scroll('right')} 
              className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-900 dark:text-white"
              aria-label="السابق"
            >
              <ChevronRight />
            </button>
            <button 
              onClick={() => scroll('left')} 
              className="w-14 h-14 glass rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-gray-900 dark:text-white"
              aria-label="التالي"
            >
              <ChevronLeft />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 hide-scrollbar snap-x snap-mandatory pb-10"
        >
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="min-w-full md:min-w-[450px] glass p-10 rounded-3xl snap-center relative group overflow-hidden"
            >
              <Quote className="absolute top-6 left-6 w-12 h-12 text-blue-600/10 group-hover:text-blue-600/20 transition-colors" />
              
              <div className="flex gap-1 text-yellow-500 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed italic">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-14 h-14 rounded-full border-2 border-blue-500 object-cover" 
                />
                <div>
                  <h4 className="font-black text-gray-900 dark:text-white text-lg">{review.name}</h4>
                  <p className="text-blue-500 text-sm font-bold">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
