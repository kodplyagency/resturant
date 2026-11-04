import React from 'react';
import { ShieldCheck, Heart, Sparkles, ChefHat, Users, CheckCircle2 } from 'lucide-react';
import { VegIcon } from './VegIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF5EC] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Authentic Staff Hospitality Photo */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl bg-white shadow-xl border border-amber-200/80">
                <img
                  src={RESTAURANT_INFO.images.staff}
                  alt="Attentive Indian waiter serving Indian family diners at Apna Swad Pure Veg Restaurant"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                />

                {/* Sub-card overlay: Cleanliness & Pure Veg Pledge */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-[#2B1B10] to-[#3E2919] text-white flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-600/30 border border-emerald-500/40 text-emerald-400">
                      <ChefHat className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-amber-100">
                        Atithi Devo Bhava (Guest is God)
                      </p>
                      <p className="text-xs text-[#DAC6B5]">
                        Serving with genuine smiles and heartfelt Indian hospitality
                      </p>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800/60 border border-emerald-500/40 text-emerald-200 text-xs font-semibold">
                    <VegIcon size="sm" />
                    <span>Pure Veg Only</span>
                  </div>
                </div>
              </div>

              {/* Floating Stat Stamp */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-white p-3 sm:p-4 rounded-xl shadow-lg border border-amber-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 text-[#B84C12] flex items-center justify-center font-bold text-lg">
                  100%
                </div>
                <div>
                  <div className="text-xs font-bold text-[#2A1A10]">Pure Vegetarian</div>
                  <div className="text-[11px] text-[#715746]">No meat, no eggs, ever</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Friendly About Story */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <VegIcon size="sm" />
                <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
                  Our Humble Beginning & Purpose
                </span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2D1A0E] leading-tight">
                Authentic Flavours, Honest Cooking & Warm Hospitality
              </h2>
            </div>

            <p className="text-base text-[#5C4535] leading-relaxed">
              At <strong className="text-[#2C190D]">Apna Swad Pure Veg Restaurant</strong>, we set out with a simple
              conviction: every Indian family, college student, neighborhood couple, and group of friends deserves a
              welcoming place to savor real, piping-hot vegetarian meals that feel like home — without burning a hole in the pocket.
            </p>

            <p className="text-base text-[#5C4535] leading-relaxed">
              We never believe in high-priced restaurant pretension or artificial frozen gravies. Every morning, our
              kitchen comes alive with freshly delivered malai paneer, hand-ground coriander and cumin seeds, freshly
              kneaded wheat atta for tandoori rotis, and aromatic slow-simmered dals prepared in pure desi ghee.
            </p>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-3.5 rounded-xl bg-white/90 border border-amber-200/70 shadow-2xs">
                <div className="flex items-center gap-2 text-[#D9621E] font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4 text-emerald-700" />
                  <span>Strict Pure Veg Kitchen</span>
                </div>
                <p className="text-xs text-[#6F5747] mt-1.5 leading-normal">
                  Zero non-vegetarian contamination. Separate Jain cookware available for satvik meals.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/90 border border-amber-200/70 shadow-2xs">
                <div className="flex items-center gap-2 text-[#D9621E] font-semibold text-sm">
                  <Sparkles className="w-4 h-4 text-amber-600" />
                  <span>Fresh Daily Ingredients</span>
                </div>
                <p className="text-xs text-[#6F5747] mt-1.5 leading-normal">
                  Farm-fresh vegetables, dairy paneer made each morning, and stone-ground spices.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/90 border border-amber-200/70 shadow-2xs">
                <div className="flex items-center gap-2 text-[#D9621E] font-semibold text-sm">
                  <Users className="w-4 h-4 text-[#D9621E]" />
                  <span>Affordable Family Dining</span>
                </div>
                <p className="text-xs text-[#6F5747] mt-1.5 leading-normal">
                  Generous portions at comfortable prices. Perfect for family weekends and college meetups.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white/90 border border-amber-200/70 shadow-2xs">
                <div className="flex items-center gap-2 text-[#D9621E] font-semibold text-sm">
                  <Heart className="w-4 h-4 text-rose-600" />
                  <span>Spotless Cleanliness</span>
                </div>
                <p className="text-xs text-[#6F5747] mt-1.5 leading-normal">
                  Air-conditioned hygienic dining, sanitized stainless steel thalis, and filtered drinking water.
                </p>
              </div>
            </div>

            {/* Quick Summary Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-medium text-[#4D382B]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Air-conditioned family seating
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Special Jain food menu
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Comfortable party & group tables
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
