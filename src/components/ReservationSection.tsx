import React, { useState } from 'react';
import {
  CalendarDays,
  Clock,
  Users,
  Phone,
  User,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationFormState {
  name: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  specialRequests: string;
}

export const ReservationSection: React.FC = () => {
  // Today's date in YYYY-MM-DD for default
  const today = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState<ReservationFormState>({
    name: '',
    phone: '',
    date: today,
    time: '07:30 PM',
    guests: '4 Guests',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const timeSlots = [
    // Lunch
    '12:00 PM',
    '12:30 PM',
    '01:00 PM',
    '01:30 PM',
    '02:00 PM',
    '02:30 PM',
    '03:00 PM',
    // Dinner
    '07:00 PM',
    '07:30 PM',
    '08:00 PM',
    '08:30 PM',
    '09:00 PM',
    '09:30 PM',
    '10:00 PM',
  ];

  const guestOptions = [
    '1 Guest',
    '2 Guests',
    '3 Guests',
    '4 Guests (Family)',
    '5 Guests',
    '6 Guests',
    '8 Guests',
    '10+ Guests (Group/Party)',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Frontend validation
    if (!formData.name.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Please enter a valid mobile number (e.g. 989898989).');
      return;
    }
    if (!formData.date) {
      setErrorMsg('Please select a reservation date.');
      return;
    }

    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: today,
      time: '07:30 PM',
      guests: '4 Guests',
      specialRequests: '',
    });
    setErrorMsg('');
  };

  const handleWhatsAppConfirmation = () => {
    const text = `Namaste Apna Swad! I would like to book a table:\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Date: ${formData.date}\n• Time: ${formData.time}\n• Party Size: ${formData.guests}\n• Special Requests: ${formData.specialRequests || 'None'}\n\nPlease let me know table confirmation!`;
    const url = `https://wa.me/91989898989?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="reservations" className="py-16 sm:py-24 bg-[#FAF5EB] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#B84C12]">
              Dining Reservations
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C190D] mt-1">
              Book a Table for Your Family
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#614837] leading-relaxed">
              Reserve your spot ahead of time to avoid waiting during peak lunch and dinner hours.
              We hold tables for 15 minutes past booking time.
            </p>
          </div>

          {/* Form Card or Submission Result */}
          <div className="bg-white rounded-3xl shadow-xl border border-amber-200/80 p-6 sm:p-10">
            {isSubmitted ? (
              /* Honest Frontend Submission Explanation */
              <div className="space-y-6">
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-stone-800 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-[#2A180C]">
                        Reservation Request Recorded on Frontend
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5D4636] mt-1 leading-relaxed">
                        Thank you, <strong>{formData.name}</strong>! Your table details have been captured.
                      </p>
                    </div>
                  </div>

                  {/* Backend Notice Requirement */}
                  <div className="p-3.5 rounded-xl bg-amber-100/70 border border-amber-300/70 flex items-start gap-2.5 text-xs text-[#523A2A]">
                    <AlertCircle className="w-4 h-4 text-[#B84C12] shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-semibold block text-[#3A2416]">
                        System Notice regarding Backend Connectivity:
                      </strong>
                      <span>
                        This website operates in frontend demonstration mode without a live database booking server.
                        To ensure your table is physically reserved at our restaurant, please dispatch your request via
                        WhatsApp or phone call to our host desk using the buttons below.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Reservation Summary Details */}
                <div className="bg-[#FAF6EE] p-4 sm:p-5 rounded-2xl border border-amber-100 space-y-3 text-sm text-[#3E2B1F]">
                  <h4 className="font-bold text-[#2A180C] text-sm uppercase tracking-wider">
                    Summary of Your Booking Request:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
                    <div>
                      <span className="text-[#7A6150]">Guest Name: </span>
                      <span className="font-semibold">{formData.name}</span>
                    </div>
                    <div>
                      <span className="text-[#7A6150]">Contact Number: </span>
                      <span className="font-semibold">{formData.phone}</span>
                    </div>
                    <div>
                      <span className="text-[#7A6150]">Date: </span>
                      <span className="font-semibold">{formData.date}</span>
                    </div>
                    <div>
                      <span className="text-[#7A6150]">Time Slot: </span>
                      <span className="font-semibold">{formData.time}</span>
                    </div>
                    <div>
                      <span className="text-[#7A6150]">Number of Guests: </span>
                      <span className="font-semibold">{formData.guests}</span>
                    </div>
                    <div>
                      <span className="text-[#7A6150]">Special Requests: </span>
                      <span className="font-semibold">
                        {formData.specialRequests || 'Standard dining'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Direct Connect Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppConfirmation}
                    className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp (+91 989898989)</span>
                  </button>

                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="w-full sm:w-auto py-3 px-5 rounded-xl border border-amber-300 text-[#473022] hover:bg-amber-50 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D9621E]" />
                    <span>Call Desk</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="w-full sm:w-auto py-3 px-4 rounded-xl text-stone-600 hover:text-stone-900 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>New Booking</span>
                  </button>
                </div>
              </div>
            ) : (
              /* The Reservation Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Customer Name */}
                  <div>
                    <label
                      htmlFor="res-name"
                      className="block text-xs font-bold uppercase tracking-wider text-[#4E392B] mb-1.5"
                    >
                      Customer Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#8C715E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        id="res-name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Sharma"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="res-phone"
                      className="block text-xs font-bold uppercase tracking-wider text-[#4E392B] mb-1.5"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#8C715E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        id="res-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 989898989"
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
                      />
                    </div>
                  </div>

                  {/* Date */}
                  <div>
                    <label
                      htmlFor="res-date"
                      className="block text-xs font-bold uppercase tracking-wider text-[#4E392B] mb-1.5"
                    >
                      Date <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <CalendarDays className="w-4 h-4 text-[#8C715E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="date"
                        id="res-date"
                        name="date"
                        value={formData.date}
                        min={today}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <label
                      htmlFor="res-time"
                      className="block text-xs font-bold uppercase tracking-wider text-[#4E392B] mb-1.5"
                    >
                      Time Slot <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-[#8C715E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="res-time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
                      >
                        {timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Number of Guests */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="res-guests"
                      className="block text-xs font-bold uppercase tracking-wider text-[#4E392B] mb-1.5"
                    >
                      Number of Guests
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#8C715E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <select
                        id="res-guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
                      >
                        {guestOptions.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="res-special"
                      className="block text-xs font-bold uppercase tracking-wider text-[#4E392B] mb-1.5"
                    >
                      Special Requests
                    </label>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-[#8C715E] absolute left-3.5 top-3" />
                      <textarea
                        id="res-special"
                        name="specialRequests"
                        rows={3}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        placeholder="e.g. Jain food required, High chair for toddler, Birthday celebration, Quiet AC corner table..."
                        className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm text-[#2A180C] focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-full bg-[#D9621E] hover:bg-[#B84C12] text-white font-bold text-base shadow-md hover:shadow-lg active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <CalendarDays className="w-5 h-5 text-amber-200" />
                    <span>Reserve My Table</span>
                  </button>

                  <p className="mt-3 text-center text-xs text-[#7A6150]">
                    No advance payment required for regular dining tables · Inquiries confirmed promptly via call or WhatsApp.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
