/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AboutSection } from './components/AboutSection';
import { GallerySection } from './components/GallerySection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { OrderEstimatorDrawer } from './components/OrderEstimatorDrawer';
import { MENU_ITEMS, MenuItem } from './data/restaurantData';
import { CalendarDays, MessageCircle } from 'lucide-react';

export default function App() {
  const [orderItems, setOrderItems] = useState<Record<string, number>>({});
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);

  // Total quantity of items in meal estimator tray
  const totalItemCount = Object.values(orderItems).reduce((sum, qty) => sum + qty, 0);

  const handleAddItemToEstimator = (item: MenuItem) => {
    setOrderItems((prev) => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1,
    }));
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) => {
      const current = prev[itemId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const handleClearOrder = () => {
    setOrderItems({});
  };

  const scrollToReservation = () => {
    const el = document.getElementById('reservations');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.getElementById('menu');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenReservationWithOrder = () => {
    setIsOrderDrawerOpen(false);
    scrollToReservation();
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent(
      'Namaste Apna Swad! I am visiting your website and would like to ask a quick question.'
    );
    window.open(`https://wa.me/91989898989?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#261C14] flex flex-col selection:bg-amber-200 selection:text-stone-900">
      {/* Navigation Header */}
      <Navbar
        onOpenReservation={scrollToReservation}
        orderCount={totalItemCount}
        onOpenOrderDrawer={() => setIsOrderDrawerOpen(true)}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreMenu={scrollToMenu}
          onBookTable={scrollToReservation}
        />

        {/* 2. Menu Section with Categories & Prices */}
        <MenuSection
          onAddItemToEstimator={handleAddItemToEstimator}
          orderItems={orderItems}
        />

        {/* 3. About Us with Staff & Hospitality Photo */}
        <AboutSection />

        {/* 4. Photo Gallery with 6 required themes & Lightbox */}
        <GallerySection />

        {/* 5. Table Reservations with Frontend-Friendly Flow */}
        <ReservationSection />

        {/* 6. Customer Reviews Demonstration Showcase */}
        <ReviewsSection />

        {/* 7. Contact Details, Maps Placeholder & Timings */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenReservation={scrollToReservation} />

      {/* Meal Bill Estimator Drawer */}
      <OrderEstimatorDrawer
        isOpen={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        orderItems={orderItems}
        menuItems={MENU_ITEMS}
        onUpdateQuantity={handleUpdateQuantity}
        onClearOrder={handleClearOrder}
        onOpenReservationWithOrder={handleOpenReservationWithOrder}
      />

      {/* Floating Action Buttons on mobile / desktop bottom right */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        {/* WhatsApp Quick Chat */}
        <button
          type="button"
          onClick={handleOpenWhatsApp}
          className="w-12 h-12 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          title="Chat with Apna Swad on WhatsApp"
          aria-label="WhatsApp chat"
        >
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        </button>

        {/* Book Table Floating Button on Mobile */}
        <button
          type="button"
          onClick={scrollToReservation}
          className="sm:hidden flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-[#D9621E] text-white text-xs font-bold shadow-lg hover:bg-[#B84C12] active:scale-95 transition-all cursor-pointer"
        >
          <CalendarDays className="w-4 h-4" />
          <span>Book Table</span>
        </button>
      </div>
    </div>
  );
}
