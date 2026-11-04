import React, { useState } from 'react';
import { Eye, Utensils } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/restaurantData';
import { ImageLightbox } from './ImageLightbox';

export const GallerySection: React.FC = () => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);

  const handleNext = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex((selectedItemIndex + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrev = () => {
    if (selectedItemIndex !== null) {
      setSelectedItemIndex(
        (selectedItemIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      );
    }
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <Utensils className="w-4 h-4 text-[#D9621E]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B84C12]">
              Moments at Apna Swad
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1A0F]">
            Restaurant & Food Gallery
          </h2>
          <p className="mt-3 text-base text-[#614A3B] leading-relaxed">
            Take a visual tour through our welcoming dining spaces, sizzling tandoori items,
            traditional steel thalis, golden dosas, and joyful family gatherings.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItemIndex(index)}
              className="group relative rounded-2xl overflow-hidden bg-stone-100 border border-amber-100 shadow-2xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Container with fixed aspect ratio */}
              <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Subtle dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                {/* Quick View Floating Eye Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-xs text-[#2C1A0F] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-1 group-hover:translate-y-0">
                  <Eye className="w-4 h-4" />
                </div>

                {/* In-Image Caption */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 text-white">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-300 block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg sm:text-xl font-bold leading-snug text-white drop-shadow-xs">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-200 mt-1 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on authentic experience */}
        <div className="mt-8 text-center text-xs text-[#7F6757]">
          <span>Click any image to view in high definition · All photographs depict authentic Indian vegetarian dining</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      <ImageLightbox
        item={selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null}
        onClose={() => setSelectedItemIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
