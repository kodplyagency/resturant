import React from 'react';
import { UtensilsCrossed, ArrowUp, Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';
import { VegIcon } from './VegIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#24170E] text-[#EDE0D4] border-t border-[#3A2619] pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3E291C]">
          {/* Col 1: Brand & Pure Veg Statement (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D9621E] to-[#B84C12] text-white flex items-center justify-center shadow-sm">
                <UtensilsCrossed className="w-5 h-5 text-amber-100" />
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white block">
                  {RESTAURANT_INFO.name}
                </span>
                <span className="text-xs text-amber-300 font-medium -mt-1 block">
                  {RESTAURANT_INFO.hindiTag}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C9B3A2] leading-relaxed">
              {RESTAURANT_INFO.subtitle}
            </p>

            {/* Vegetarian Restaurant Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-700/50 text-emerald-300 text-xs font-semibold">
              <VegIcon size="sm" />
              <span>100% Certified Pure Vegetarian Restaurant</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#C9B3A2]">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Opening Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Opening Hours
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#C9B3A2]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Daily Lunch Session</p>
                  <p>{RESTAURANT_INFO.hours.lunch}</p>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Daily Dinner Session</p>
                  <p>{RESTAURANT_INFO.hours.dinner}</p>
                </div>
              </div>
              <p className="text-xs text-emerald-400 pt-1 font-medium">
                {RESTAURANT_INFO.hours.days}
              </p>
            </div>
          </div>

          {/* Col 4: Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Contact Details
            </h4>
            <div className="space-y-2 text-xs text-[#C9B3A2]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-amber-300">
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/91989898989`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300"
                >
                  WhatsApp: +91 989898989
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenReservation}
                className="w-full py-2 px-3 rounded-lg bg-[#D9621E] hover:bg-[#B84C12] text-white text-xs font-semibold cursor-pointer shadow-sm transition-all"
              >
                Reserve a Table Online
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8917F]">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Apna Swad Pure Veg Restaurant. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
              <span>for Indian food lovers</span>
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#332014] hover:bg-[#442C1D] text-amber-200 transition-colors cursor-pointer"
              title="Scroll to top"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
