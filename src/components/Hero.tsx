import React from 'react';
import { Utensils, CalendarDays, Sparkles, ShieldCheck, HeartHandshake, Clock } from 'lucide-react';
import { VegIcon } from './VegIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onExploreMenu: () => void;
  onBookTable: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onBookTable }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#FAF6F0] pt-6 pb-16 lg:py-16">
      {/* Subtle warm decorative background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/25 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Authentic Welcoming Copy */}
          <div className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left">
            {/* 100% Pure Vegetarian Label */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 shadow-2xs">
                <VegIcon size="md" />
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-emerald-900">
                  {RESTAURANT_INFO.vegBadge}
                </span>
                <span className="text-emerald-400">·</span>
                <span className="text-xs text-emerald-800 font-medium hidden sm:inline">
                  Separate Veg Kitchen
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <span className="text-xs sm:text-sm tracking-widest uppercase font-semibold text-[#B84C12]">
                Welcome to Apna Swad Pure Veg Restaurant
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2A1A10] leading-tight tracking-tight">
                Pure Veg.{' '}
                <span className="text-[#D9621E] underline decoration-amber-300 decoration-wavy decoration-2">
                  Pure Happiness.
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#5A4537] leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {RESTAURANT_INFO.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                type="button"
                onClick={onExploreMenu}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#D9621E] text-white text-base font-semibold shadow-md hover:bg-[#B84C12] hover:shadow-lg active:scale-98 transition-all cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-amber-200" />
                <span>Explore Our Menu</span>
              </button>

              <button
                type="button"
                onClick={onBookTable}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#382315] border-2 border-amber-200/90 text-base font-semibold hover:bg-amber-50 hover:border-amber-300 active:scale-98 transition-all cursor-pointer shadow-2xs"
              >
                <CalendarDays className="w-4 h-4 text-[#D9621E]" />
                <span>Book a Table</span>
              </button>
            </div>

            {/* Restaurant Pillars */}
            <div className="pt-4 border-t border-amber-200/70 grid grid-cols-3 gap-2 sm:gap-4 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="p-2 rounded-lg bg-amber-100/80 text-[#B84C12] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2D1B11]">Fresh & Pure</h4>
                  <p className="text-[11px] text-[#715746] hidden sm:block">Farm paneer & spices</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="p-2 rounded-lg bg-emerald-100/80 text-emerald-800 shrink-0">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2D1B11]">Family Dining</h4>
                  <p className="text-[11px] text-[#715746] hidden sm:block">Comfortable AC hall</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2">
                <div className="p-2 rounded-lg bg-orange-100/80 text-[#D9621E] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2D1B11]">Pocket Friendly</h4>
                  <p className="text-[11px] text-[#715746] hidden sm:block">Medium budget rates</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large realistic restaurant photograph */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Outer decorative card frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-amber-200/50 via-orange-100/40 to-emerald-100/40 rounded-3xl blur-md -z-10" />

              <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-amber-100">
                <img
                  src={RESTAURANT_INFO.images.hero}
                  alt="Authentic Indian family dining at Apna Swad Pure Veg Restaurant"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[480px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />

                {/* Floating caption overlay */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#2F1D13] to-[#4A3224] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
                    <div>
                      <p className="text-xs sm:text-sm font-medium text-amber-100">
                        Everyday Family Diners & College Groups
                      </p>
                      <p className="text-[11px] text-[#D8C5B5]">
                        Clean wooden tables · Prompt service · Homestyle taste
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-semibold bg-white/10 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-auto">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Serving 11:30 AM – 11:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
