import React, { useState, useMemo } from 'react';
import { Search, Plus, Check, Sparkles, Flame, Leaf } from 'lucide-react';
import { VegIcon } from './VegIcon';
import { MENU_ITEMS, MenuItem } from '../data/restaurantData';

interface MenuSectionProps {
  onAddItemToEstimator: (item: MenuItem) => void;
  orderItems: Record<string, number>;
}

export const MenuSection: React.FC<MenuSectionProps> = ({
  onAddItemToEstimator,
  orderItems,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [jainFilterOnly, setJainFilterOnly] = useState<boolean>(false);

  const categories = [
    { id: 'all', label: 'All Dishes' },
    { id: 'north-indian', label: 'North Indian' },
    { id: 'breads', label: 'Indian Breads' },
    { id: 'rice-biryani', label: 'Rice & Biryani' },
    { id: 'south-indian', label: 'South Indian' },
    { id: 'starters', label: 'Starters' },
    { id: 'beverages', label: 'Beverages' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category filter
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }
      // Jain filter
      if (jainFilterOnly && !item.jainAvailable) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesHindi = item.hindiName?.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        return matchesName || matchesHindi || matchesDesc;
      }
      return true;
    });
  }, [activeCategory, searchQuery, jainFilterOnly]);

  return (
    <section id="menu" className="py-16 sm:py-20 bg-[#FFFDF9] border-t border-b border-amber-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2.5">
            <VegIcon size="sm" />
            <span className="text-xs font-semibold uppercase tracking-widest text-emerald-800">
              Fresh Daily Preparations
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1B11]">
            Our Authentic Food Menu
          </h2>
          <p className="mt-3 text-base text-[#654D3D] leading-relaxed">
            Prepared with fresh vegetables, pure dairy, fragrant spices, and traditional techniques.
            Modest family prices with zero compromises on hygiene and authenticity.
          </p>
        </div>

        {/* Search & Dietary Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 bg-[#F8F3EA] p-3.5 rounded-2xl border border-amber-200/60">
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C705D]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes (e.g. Paneer, Dosa, Naan, Dal, Biryani)..."
              className="w-full pl-10 pr-4 py-2 text-sm bg-white rounded-xl border border-amber-200/80 text-[#2C1B11] placeholder:text-[#9C8271] focus:outline-hidden focus:ring-2 focus:ring-[#D9621E]/30 focus:border-[#D9621E]"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Jain Toggle & Clear filters */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setJainFilterOnly(!jainFilterOnly)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                jainFilterOnly
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'bg-white text-emerald-900 border border-emerald-200 hover:bg-emerald-50'
              }`}
            >
              <Leaf className="w-3.5 h-3.5 text-emerald-500" />
              <span>Jain Friendly (No Onion/Garlic)</span>
            </button>
          </div>
        </div>

        {/* Category Tabs (Segmented functional controls) */}
        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-3 mb-10 scrollbar-thin">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#D9621E] text-white shadow-sm'
                    : 'bg-[#F4ECE1] text-[#4E392B] hover:bg-[#EBDDCF] hover:text-[#281A11]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#FAF6F0] rounded-2xl border border-amber-200/50">
            <p className="text-base font-semibold text-[#4A3525]">No dishes found</p>
            <p className="text-sm text-[#7D6352] mt-1">
              Try adjusting your search query or reset the dietary filter.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
                setJainFilterOnly(false);
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-[#D9621E] text-white text-xs font-semibold hover:bg-[#B84C12]"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredItems.map((item) => {
              const countInEstimator = orderItems[item.id] || 0;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-amber-100/90 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group"
                >
                  {/* Dish Image Container */}
                  <div className="relative h-48 w-full overflow-hidden bg-stone-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Subtle Top Indicator Labels */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <VegIcon size="sm" className="bg-white/95 backdrop-blur-xs p-1 rounded-md shadow-xs" />
                      {item.isPopular && (
                        <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-amber-500/95 text-stone-900 shadow-xs backdrop-blur-xs">
                          Customer Favorite
                        </span>
                      )}
                      {item.isChefSpecial && !item.isPopular && (
                        <span className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#D9621E]/95 text-white shadow-xs backdrop-blur-xs">
                          Chef Special
                        </span>
                      )}
                    </div>

                    {/* Price Tag */}
                    <div className="absolute bottom-3 right-3 bg-[#2D1B11]/90 backdrop-blur-xs text-amber-200 font-display font-bold text-base px-3 py-1 rounded-lg shadow-sm border border-amber-400/30">
                      ₹{item.price}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Dish Name & Hindi transliteration */}
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display font-bold text-lg text-[#2A1A10] group-hover:text-[#D9621E] transition-colors leading-snug">
                            {item.name}
                          </h3>
                          {item.hindiName && (
                            <span className="text-xs text-[#8C6D58] font-medium block -mt-0.5">
                              {item.hindiName}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="mt-2 text-xs sm:text-sm text-[#5C4638] leading-relaxed line-clamp-3">
                        {item.description}
                      </p>

                      {/* Item Attributes as clean unboxed inline text */}
                      <div className="mt-3 flex items-center gap-2 text-xs text-[#7F6452]">
                        {item.jainAvailable && (
                          <span className="text-emerald-700 font-medium">Jain option available</span>
                        )}
                        {item.jainAvailable && item.spiciness && <span aria-hidden="true">·</span>}
                        {item.spiciness && (
                          <span className="inline-flex items-center gap-1">
                            <Flame className="w-3 h-3 text-orange-600" />
                            <span>{item.spiciness}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Add to Estimator Button */}
                    <div className="pt-4 mt-3 border-t border-amber-100 flex items-center justify-between">
                      <span className="text-xs text-[#826958]">Freshly cooked to order</span>
                      <button
                        type="button"
                        onClick={() => onAddItemToEstimator(item)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                          countInEstimator > 0
                            ? 'bg-amber-100 text-[#9C3F0A] hover:bg-amber-200'
                            : 'bg-[#F6EFE6] text-[#3D281C] hover:bg-[#D9621E] hover:text-white'
                        }`}
                        title="Add to meal bill estimator"
                      >
                        {countInEstimator > 0 ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Added ({countInEstimator})</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add to Tray</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note on Prices */}
        <div className="mt-10 p-4 rounded-xl bg-[#FAF5EC] border border-amber-200/60 text-center text-xs text-[#6F5747]">
          <span>
            Prices are in Indian Rupees (₹). GST applicable as per government norms. 100% pure vegetarian preparation.
            Jain options (without onion, garlic, or root vegetables) can be prepared fresh on request.
          </span>
        </div>
      </div>
    </section>
  );
};
