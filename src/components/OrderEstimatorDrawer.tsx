import React from 'react';
import { X, Plus, Minus, Trash2, MessageCircle, UtensilsCrossed } from 'lucide-react';
import { MenuItem, RESTAURANT_INFO } from '../data/restaurantData';

interface OrderEstimatorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: Record<string, number>;
  menuItems: MenuItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onClearOrder: () => void;
  onOpenReservationWithOrder: () => void;
}

export const OrderEstimatorDrawer: React.FC<OrderEstimatorDrawerProps> = ({
  isOpen,
  onClose,
  orderItems,
  menuItems,
  onUpdateQuantity,
  onClearOrder,
  onOpenReservationWithOrder,
}) => {
  if (!isOpen) return null;

  // Calculate items and pricing
  const orderedList = Object.entries(orderItems)
    .map(([id, quantity]) => {
      const item = menuItems.find((m) => m.id === id);
      return item ? { ...item, quantity } : null;
    })
    .filter((item): item is MenuItem & { quantity: number } => item !== null && item.quantity > 0);

  const subtotal = orderedList.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = Math.round(subtotal * 0.05); // 5% GST for Indian restaurants
  const total = subtotal + gst;

  // Build WhatsApp pre-order message
  const handleWhatsAppPreOrder = () => {
    const dishSummary = orderedList
      .map((item) => `• ${item.quantity}x ${item.name} (₹${item.price * item.quantity})`)
      .join('\n');

    const message = `Namaste Apna Swad! I am planning a dining visit / takeaway. Here is my selected order estimate:\n\n${dishSummary}\n\n*Estimated Total:* ₹${total} (incl. 5% GST)\n\nPlease let me know table / preparation availability!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/91989898989?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#FFFDF9] h-full shadow-2xl flex flex-col border-l border-amber-200">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-amber-100 bg-[#FAF4EA] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#D9621E] text-white flex items-center justify-center">
              <UtensilsCrossed className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-[#2C1A0F]">Meal Bill Estimator</h3>
              <p className="text-xs text-[#7B6353]">Plan your family dining bill</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-500 hover:text-stone-800 hover:bg-amber-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3.5">
          {orderedList.length === 0 ? (
            <div className="text-center py-16 text-[#7E6554]">
              <p className="font-medium text-sm">Your meal tray is empty</p>
              <p className="text-xs mt-1">Browse our menu and click "+ Add to Tray" to estimate your dining cost.</p>
            </div>
          ) : (
            orderedList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-amber-100 shadow-2xs"
              >
                <div className="flex-1 min-w-0 pr-3">
                  <h4 className="text-xs sm:text-sm font-semibold text-[#2C1A0F] truncate">{item.name}</h4>
                  <p className="text-xs text-[#856C5B]">₹{item.price} each</p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="w-7 h-7 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 flex items-center justify-center text-xs cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs sm:text-sm font-bold text-stone-800 w-5 text-center">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="w-7 h-7 rounded-lg bg-[#D9621E] hover:bg-[#B84C12] text-white flex items-center justify-center text-xs cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-medium text-xs sm:text-sm text-[#2C1A0F] w-14 text-right">
                    ₹{item.price * item.quantity}
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with totals */}
        {orderedList.length > 0 && (
          <div className="p-4 sm:p-5 border-t border-amber-100 bg-[#FAF4EA] space-y-3">
            <div className="space-y-1.5 text-xs text-[#5E4738]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between">
                <span>GST (5% applicable restaurant tax)</span>
                <span>₹{gst}</span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#2A1A10] pt-1 border-t border-amber-200">
                <span>Estimated Total</span>
                <span className="text-[#D9621E]">₹{total}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="button"
                onClick={onOpenReservationWithOrder}
                className="w-full py-2.5 rounded-xl bg-[#D9621E] hover:bg-[#B84C12] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Book Table with this Order</span>
              </button>

              <button
                type="button"
                onClick={handleWhatsAppPreOrder}
                className="w-full py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Send Order Inquiry via WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={onClearOrder}
                className="w-full py-1 text-[11px] text-[#856D5C] hover:text-red-700 flex items-center justify-center gap-1 cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>Clear Tray</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
