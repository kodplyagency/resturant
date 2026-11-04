import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  MessageCircle,
  Instagram,
  Facebook,
  ExternalLink,
  Edit3,
  Check,
  Send,
} from 'lucide-react';
import { VegIcon } from './VegIcon';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactSection: React.FC = () => {
  const [address, setAddress] = useState<string>(RESTAURANT_INFO.address);
  const [phone, setPhone] = useState<string>(RESTAURANT_INFO.phone);
  const [isEditingAddress, setIsEditingAddress] = useState<boolean>(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim() || !inquiryMessage.trim()) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryMessage('');
    }, 3000);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(RESTAURANT_INFO.whatsappMessage);
    window.open(`https://wa.me/91989898989?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAF5EB] relative border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 mb-2">
            <VegIcon size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
              Visit Us or Get in Touch
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C190D]">
            Locate Apna Swad & Contact Us
          </h2>
          <p className="mt-3 text-base text-[#61493A] leading-relaxed">
            Conveniently located in the city center with ample parking, easy public transit access,
            and comfortable family dining halls.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* Restaurant identity card */}
            <div className="bg-white p-6 rounded-2xl border border-amber-200/80 shadow-2xs space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#2B180C]">
                    {RESTAURANT_INFO.name}
                  </h3>
                  <p className="text-xs text-[#8C6D58] font-medium mt-0.5">
                    {RESTAURANT_INFO.hindiTag}
                  </p>
                </div>
                <div className="p-2 bg-emerald-50 rounded-xl border border-emerald-200">
                  <VegIcon size="md" />
                </div>
              </div>

              {/* Address with clearly marked placeholder & in-place edit */}
              <div className="pt-2 border-t border-amber-100">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100/80 text-[#D9621E] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#4B3425] uppercase tracking-wider">
                        Address <span className="text-[10px] text-[#B84C12] font-normal">[Placeholder - Editable]</span>
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsEditingAddress(!isEditingAddress)}
                        className="text-xs text-[#D9621E] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        {isEditingAddress ? <Check className="w-3.5 h-3.5" /> : <Edit3 className="w-3.5 h-3.5" />}
                        <span>{isEditingAddress ? 'Done' : 'Edit'}</span>
                      </button>
                    </div>

                    {isEditingAddress ? (
                      <div className="mt-2 space-y-2">
                        <textarea
                          rows={2}
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className="w-full text-xs p-2 bg-[#FAF7F2] rounded-lg border border-amber-300 focus:outline-hidden"
                        />
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Phone number placeholder"
                          className="w-full text-xs p-2 bg-[#FAF7F2] rounded-lg border border-amber-300 focus:outline-hidden"
                        />
                      </div>
                    ) : (
                      <>
                        <p className="text-xs sm:text-sm text-[#523C2D] mt-1 leading-relaxed">
                          {address}
                        </p>
                        <p className="text-[11px] text-[#917664] mt-0.5 italic">
                          (Landmarks: Opp. Central Bus Stand, 300m from Metro Gate 2)
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Phone placeholder */}
              <div className="pt-3 border-t border-amber-100 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100/80 text-[#D9621E] shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4B3425] uppercase tracking-wider block">
                    Phone Numbers <span className="text-[10px] text-[#B84C12] font-normal">[Placeholders]</span>
                  </span>
                  <div className="mt-1 flex flex-col gap-0.5 text-xs sm:text-sm font-semibold text-[#2B180C]">
                    <a href={`tel:${phone}`} className="hover:text-[#D9621E] transition-colors">
                      {phone}
                    </a>
                    <span className="text-xs font-normal text-[#6F5543]">{RESTAURANT_INFO.phoneAlt}</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="pt-3 border-t border-amber-100 flex items-start gap-3">
                <div className="p-2 rounded-lg bg-amber-100/80 text-[#D9621E] shrink-0 mt-0.5">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#4B3425] uppercase tracking-wider block">
                    Daily Timings
                  </span>
                  <div className="mt-1 space-y-0.5 text-xs text-[#523C2D]">
                    <p><strong className="text-[#2B180C]">Lunch:</strong> {RESTAURANT_INFO.hours.lunch}</p>
                    <p><strong className="text-[#2B180C]">Dinner:</strong> {RESTAURANT_INFO.hours.dinner}</p>
                    <p className="text-[11px] text-emerald-800 font-medium">{RESTAURANT_INFO.hours.days}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect Buttons (WhatsApp & Social) */}
            <div className="bg-white p-5 rounded-2xl border border-amber-200/80 shadow-2xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#4B3425] block">
                Connect Directly
              </span>

              {/* WhatsApp Button */}
              <button
                type="button"
                onClick={handleWhatsAppClick}
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Chat on WhatsApp (+91 989898989)</span>
              </button>

              <div className="grid grid-cols-2 gap-3 pt-1">
                {/* Instagram Icon / Button */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-stone-200 text-[#493223] hover:bg-amber-50 hover:border-amber-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4 text-pink-600" />
                  <span>Instagram</span>
                </a>

                {/* Facebook Icon / Button */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl border border-stone-200 text-[#493223] hover:bg-amber-50 hover:border-amber-300 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
                >
                  <Facebook className="w-4 h-4 text-blue-600" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Google Maps Integration Placeholder & Quick Message */}
          <div className="lg:col-span-7 space-y-6">
            {/* Google Maps Integration Placeholder Card */}
            <div className="bg-white rounded-2xl border border-amber-200/80 shadow-2xs overflow-hidden">
              <div className="p-4 bg-[#FAF4EA] border-b border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#D9621E]" />
                  <span className="font-semibold text-xs text-[#352216]">
                    Google Maps Integration [Placeholder]
                  </span>
                </div>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-[#D9621E] hover:underline font-semibold"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Styled Interactive Map Mockup */}
              <div className="relative h-64 sm:h-72 bg-[#E9E4DC] flex items-center justify-center overflow-hidden">
                {/* Visual map road grid representation */}
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#8b7355_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/2 left-0 right-0 h-4 bg-stone-300 transform -rotate-6" />
                <div className="absolute top-0 bottom-0 left-1/3 w-4 bg-stone-300 transform -rotate-6" />
                <div className="absolute top-0 bottom-0 right-1/4 w-3 bg-stone-300 transform rotate-12" />

                {/* Map Pin Marker */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="p-3 bg-[#D9621E] text-white rounded-full shadow-xl ring-4 ring-white animate-bounce">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="mt-2 bg-[#2E1A0F] text-white px-3 py-1 rounded-lg text-xs font-semibold shadow-lg border border-amber-300/40 flex items-center gap-1.5">
                    <VegIcon size="sm" />
                    <span>Apna Swad Pure Veg</span>
                  </div>
                </div>

                {/* Map Overlay Badge */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 text-[11px] text-[#4C3526]">
                  <span>City Center Location · Metro 300m · Valet Available</span>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div className="bg-white p-6 sm:p-7 rounded-2xl border border-amber-200/80 shadow-2xs">
              <h3 className="font-display font-bold text-lg text-[#2B180C] mb-1">
                Send Us a Quick Message
              </h3>
              <p className="text-xs text-[#705646] mb-4">
                Have questions about banquet catering, party bookings, or specific Jain menu inquiries?
              </p>

              {inquirySent ? (
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Thank you! Your inquiry has been sent to our desk. We will respond shortly.</span>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      value={inquiryName}
                      onChange={(e) => setInquiryName(e.target.value)}
                      placeholder="Your Full Name"
                      required
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-xs text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]"
                    />
                    <input
                      type="email"
                      placeholder="Email Address (Optional)"
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-xs text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]"
                    />
                  </div>
                  <textarea
                    rows={3}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Your inquiry or catering requirement..."
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-xs text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#D9621E] hover:bg-[#B84C12] text-white text-xs font-bold shadow-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
