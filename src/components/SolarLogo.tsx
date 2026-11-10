import React from 'react';
import { BRAND_INFO } from '../data/content';

interface SolarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  withBorder?: boolean;
}

export const SolarLogo: React.FC<SolarLogoProps> = ({
  className = '',
  size = 'md',
  withBorder = true,
}) => {
  const sizeClasses: Record<string, string> = {
    sm: 'w-9 h-9',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
    custom: '',
  };

  return (
    <div
      className={`relative rounded-full overflow-hidden flex-shrink-0 bg-[#31483D] flex items-center justify-center select-none ${
        sizeClasses[size] || sizeClasses.md
      } ${withBorder ? 'border border-[#D4AF37]/50 shadow-md shadow-[#D4AF37]/15' : ''} ${className}`}
    >
      <img
        src="./logo.svg"
        alt="Solar Zensorial"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="sync"
        onError={(e) => {
          // Fallback to base64 if relative path fails in any unusual environment
          const target = e.currentTarget;
          if (target.src !== BRAND_INFO.logoUrl) {
            target.src = BRAND_INFO.logoUrl;
          }
        }}
      />
    </div>
  );
};
