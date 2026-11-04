import React from 'react';

interface VegIconProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showText?: boolean;
}

export const VegIcon: React.FC<VegIconProps> = ({ size = 'sm', className = '', showText = false }) => {
  const sizeMap = {
    sm: 'w-4 h-4 p-[2px]',
    md: 'w-5 h-5 p-[3px]',
    lg: 'w-6 h-6 p-1',
  };

  const dotMap = {
    sm: 'w-2 h-2',
    md: 'w-2.5 h-2.5',
    lg: 'w-3 h-3',
  };

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      <span
        title="100% Pure Vegetarian"
        className={`inline-flex items-center justify-center border-2 border-emerald-600 rounded bg-white shadow-2xs flex-shrink-0 ${sizeMap[size]}`}
      >
        <span className={`rounded-full bg-emerald-600 ${dotMap[size]}`} />
      </span>
      {showText && (
        <span className="text-xs font-semibold tracking-wide text-emerald-800 uppercase">
          100% Pure Veg
        </span>
      )}
    </div>
  );
};
