import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, UtensilsCrossed, CalendarDays, ShoppingBag } from 'lucide-react';
import { VegIcon } from './VegIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  onOpenReservation: () => void;
  orderCount: number;
  onOpenOrderDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReservation,
  orderCount,
  onOpenOrderDrawer,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About Us', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice */}
      <div className="bg-[#2D1B11] text-[#F3E8DE] text-xs py-1.5 px-4 text-center border-b border-[#442D1F]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Open Today: Lunch {RESTAURANT_INFO.hours.lunch} · Dinner {RESTAURANT_INFO.hours.dinner}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-xs text-[#E4D1C0]">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>
            <span className="text-[#6D4C3D]">|</span>
            <span className="text-emerald-400 font-medium">100% Pure Vegetarian Kitchen</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md border-b border-amber-100/80 py-2.5'
            : 'bg-[#FFFDF9] border-b border-amber-50 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-2.5 focus:outline-hidden"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#D9621E] to-[#B84C12] text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <UtensilsCrossed className="w-5 h-5 text-amber-100" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-bold text-xl sm:text-2xl text-[#2F1E14] tracking-tight group-hover:text-[#D9621E] transition-colors">
                    Apna Swad
                  </span>
                  <VegIcon size="sm" />
                </div>
                <span className="text-[11px] tracking-wider uppercase font-semibold text-emerald-800 -mt-0.5">
                  Pure Veg Restaurant
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm font-medium text-[#4A382D] hover:text-[#D9621E] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#D9621E] after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Estimated Order Tray Button */}
              {orderCount > 0 && (
                <button
                  type="button"
                  onClick={onOpenOrderDrawer}
                  className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold rounded-lg bg-amber-50 text-[#9C3F0A] border border-amber-200 hover:bg-amber-100 transition-colors cursor-pointer"
                  title="View estimated meal bill"
                >
                  <ShoppingBag className="w-4 h-4 text-[#D9621E]" />
                  <span>{orderCount} {orderCount === 1 ? 'item' : 'items'}</span>
                </button>
              )}

              {/* Book Table Button */}
              <button
                type="button"
                onClick={onOpenReservation}
                className="inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#D9621E] text-white text-xs sm:text-sm font-semibold shadow-sm hover:bg-[#B84C12] active:scale-95 transition-all cursor-pointer"
              >
                <CalendarDays className="w-4 h-4" />
                <span>Book a Table</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-[#4A382D] hover:bg-amber-100/60 transition-colors focus:outline-hidden"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-amber-100 bg-[#FFFDF9] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-3 py-2 rounded-lg text-base font-medium text-[#38261B] hover:bg-amber-50 hover:text-[#D9621E] transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-amber-100 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenReservation();
                  }}
                  className="w-full py-2.5 rounded-lg bg-[#D9621E] text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <CalendarDays className="w-4 h-4" />
                  <span>Book a Table</span>
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="w-full py-2 rounded-lg border border-amber-200 text-[#4A382D] font-medium text-xs flex items-center justify-center gap-2 hover:bg-amber-50"
                >
                  <Phone className="w-3.5 h-3.5 text-[#D9621E]" />
                  <span>Call Us: {RESTAURANT_INFO.phone}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
