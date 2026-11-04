import React, { useState } from 'react';
import { Star, MessageSquarePlus, User, Heart, X, Check } from 'lucide-react';
import { SAMPLE_REVIEWS, Review } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>(SAMPLE_REVIEWS);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newReview, setNewReview] = useState({
    name: '',
    role: 'Local Diner',
    rating: 5,
    favoriteDish: '',
    comment: '',
  });
  const [submittedThanks, setSubmittedThanks] = useState<boolean>(false);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const created: Review = {
      id: `custom-rev-${Date.now()}`,
      name: newReview.name,
      role: newReview.role || 'Dining Guest',
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment,
      favoriteDish: newReview.favoriteDish || 'Special Thali',
    };

    setReviews([created, ...reviews]);
    setSubmittedThanks(true);
    setTimeout(() => {
      setSubmittedThanks(false);
      setShowAddModal(false);
      setNewReview({
        name: '',
        role: 'Local Diner',
        rating: 5,
        favoriteDish: '',
        comment: '',
      });
    }, 1500);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#FFFDF9] border-t border-amber-100/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-1.5 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C190D]">
            Loved by Indian Families & Students
          </h2>

          <p className="mt-3 text-base text-[#654C3C] leading-relaxed">
            Read how everyday diners, college groups, and joint families describe their meals at Apna Swad.
          </p>

          {/* Mandatory Demonstration Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs text-[#7A5B45]">
            <span className="font-semibold text-[#B84C12]">Demonstration Showcase:</span>
            <span>Illustrative reviews reflecting authentic Indian family dining sentiments.</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF6EF] rounded-2xl p-5 sm:p-6 border border-amber-200/60 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < rev.rating
                            ? 'fill-amber-400 text-amber-400'
                            : 'fill-stone-200 text-stone-200'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#8A6F5C]">{rev.date}</span>
                </div>

                {/* Review Text */}
                <p className="text-sm text-[#453123] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Favorite Dish */}
              <div className="mt-5 pt-4 border-t border-amber-200/60 flex items-center justify-between gap-3">
                <div>
                  <h4 className="font-bold text-sm text-[#27170B]">{rev.name}</h4>
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-1 text-xs text-[#7F6452] mt-0.5">
                    <span>{rev.role}</span>
                  </div>
                </div>

                {rev.favoriteDish && (
                  <div className="text-right">
                    <span className="text-[10px] text-[#917664] uppercase tracking-wider block">
                      Favorite
                    </span>
                    <span className="text-xs font-semibold text-[#B84C12] truncate max-w-[120px] block">
                      {rev.favoriteDish}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Action: Share Your Experience */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-amber-300 text-[#40291B] font-semibold text-sm hover:bg-amber-50 hover:border-amber-400 shadow-2xs transition-all cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#D9621E]" />
            <span>Share Your Dining Feedback</span>
          </button>
        </div>
      </div>

      {/* Review Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-amber-200">
            <div className="flex items-center justify-between pb-3 border-b border-amber-100">
              <h3 className="font-display font-bold text-lg text-[#2A170C]">
                Share Your Dining Experience
              </h3>
              <button
                type="button"
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submittedThanks ? (
              <div className="py-8 text-center text-emerald-700 space-y-2">
                <Check className="w-10 h-10 mx-auto bg-emerald-100 rounded-full p-2" />
                <p className="font-bold text-base">Thank you for your feedback!</p>
                <p className="text-xs text-stone-600">Your review was added to this demonstration session.</p>
              </div>
            ) : (
              <form onSubmit={handleAddReview} className="space-y-4 mt-4">
                <div>
                  <label className="block text-xs font-bold text-[#4B3425] uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    placeholder="e.g. Anand Joshi"
                    required
                    className="w-full px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#4B3425] uppercase tracking-wider mb-1">
                      Dining Type
                    </label>
                    <select
                      value={newReview.role}
                      onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                      className="w-full px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm focus:outline-hidden"
                    >
                      <option value="Family Dinner">Family Dinner</option>
                      <option value="College Student">College Student</option>
                      <option value="Weekend Regular">Weekend Regular</option>
                      <option value="Couple Dining">Couple Dining</option>
                      <option value="Office Lunch">Office Lunch</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#4B3425] uppercase tracking-wider mb-1">
                      Rating
                    </label>
                    <select
                      value={newReview.rating}
                      onChange={(e) =>
                        setNewReview({ ...newReview, rating: Number(e.target.value) })
                      }
                      className="w-full px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm focus:outline-hidden"
                    >
                      <option value={5}>5 Stars - Excellent</option>
                      <option value={4}>4 Stars - Very Good</option>
                      <option value={3}>3 Stars - Good</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B3425] uppercase tracking-wider mb-1">
                    Favorite Dish
                  </label>
                  <input
                    type="text"
                    value={newReview.favoriteDish}
                    onChange={(e) =>
                      setNewReview({ ...newReview, favoriteDish: e.target.value })
                    }
                    placeholder="e.g. Masala Dosa, Dal Tadka, Paneer Tikka"
                    className="w-full px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#4B3425] uppercase tracking-wider mb-1">
                    Your Feedback
                  </label>
                  <textarea
                    rows={3}
                    value={newReview.comment}
                    onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                    placeholder="Share your experience about food taste, hygiene, and service..."
                    required
                    className="w-full px-3.5 py-2 bg-[#FAF7F2] rounded-xl border border-amber-200 text-sm focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]"
                  />
                </div>

                <div className="pt-2 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-4 py-2 rounded-xl text-stone-600 hover:bg-stone-100 text-xs font-semibold cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-[#D9621E] hover:bg-[#B84C12] text-white text-xs font-bold shadow-sm cursor-pointer"
                  >
                    Submit Feedback
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
