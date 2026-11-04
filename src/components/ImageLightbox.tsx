import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { GalleryItem } from '../data/restaurantData';

interface ImageLightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  item,
  onClose,
  onNext,
  onPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrev]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer z-10"
        aria-label="Close image viewer"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        type="button"
        onClick={onPrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 transition-colors cursor-pointer z-10"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={onNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 sm:p-3 rounded-full bg-black/40 hover:bg-black/70 transition-colors cursor-pointer z-10"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main card */}
      <div className="max-w-4xl w-full bg-[#1A120B] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col">
        <div className="relative max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
        <div className="p-4 sm:p-6 bg-[#251A12] border-t border-white/10 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              {item.category}
            </span>
            <h3 className="text-lg sm:text-xl font-bold font-display text-white mt-0.5">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-2xl">
              {item.description}
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 text-xs text-amber-200/80">
            <ZoomIn className="w-4 h-4" />
            <span>High-Res Indian Dining Photography</span>
          </div>
        </div>
      </div>
    </div>
  );
};
