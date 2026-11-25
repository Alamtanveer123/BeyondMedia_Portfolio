import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 'md', 
  showText = true 
}) => {
  const sizeMap = {
    sm: { icon: 'w-7 h-7', text: 'text-lg', sub: 'text-[9px]' },
    md: { icon: 'w-9 h-9', text: 'text-xl', sub: 'text-[10px]' },
    lg: { icon: 'w-12 h-12', text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 'w-16 h-16', text: 'text-3xl', sub: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <a href="#" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Black & Gold Logo Emblem */}
      <motion.div 
        whileHover={{ scale: 1.05, rotate: 2 }}
        whileTap={{ scale: 0.96 }}
        className={`relative ${currentSize.icon} rounded-xl bg-[#080808] border border-brand-gold/40 flex items-center justify-center p-1.5 shadow-gold-glow/20 group-hover:border-brand-red group-hover:shadow-red-glow/40 transition-all duration-300`}
      >
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
          {/* Gold 'B' Monogram */}
          <path 
            d="M26 22H54C63.9411 22 72 30.0589 72 40C72 46.0645 68.9959 51.4262 64.3905 54.6853C70.218 57.9579 74 64.2731 74 71C74 81.4934 65.4934 90 55 90H26V22Z" 
            fill="url(#logoGoldGrad)" 
            fillOpacity="0.15" 
            stroke="url(#logoGoldGrad)" 
            strokeWidth="4"
          />
          <path 
            d="M38 34H52C56.4183 34 60 37.5817 60 42C60 46.4183 56.4183 50 52 50H38V34Z" 
            fill="#080808" 
            stroke="url(#logoGoldGrad)" 
            strokeWidth="3.5"
          />
          <path 
            d="M38 60H54C58.4183 60 62 63.5817 62 68C62 72.4183 58.4183 76 54 76H38V60Z" 
            fill="#080808" 
            stroke="url(#logoGoldGrad)" 
            strokeWidth="3.5"
          />
          {/* Bold Red Ascending Vector (Go Beyond) */}
          <path 
            d="M70 18L88 6M88 6H76M88 6V18" 
            stroke="#E50920" 
            strokeWidth="5" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle cx="88" cy="6" r="4" fill="#E50920" className="animate-pulse" />
          <defs>
            <linearGradient id="logoGoldGrad" x1="26" y1="22" x2="74" y2="90" gradientUnits="userSpaceOnUse">
              <stop stopColor="#DFC16C"/>
              <stop offset="0.5" stopColor="#C5A44D"/>
              <stop offset="1" stopColor="#8A7030"/>
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Brand Logotype Typography */}
      {showText && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-display font-extrabold tracking-wider text-white ${currentSize.text} leading-none`}>
              BEYOND
            </span>
            <span className={`font-display font-bold tracking-widest text-brand-red ${currentSize.text} leading-none`}>
              MEDIA
            </span>
          </div>
          <span className={`font-sans tracking-[0.25em] text-neutral-400 uppercase font-semibold ${currentSize.sub} mt-0.5 group-hover:text-brand-gold transition-colors duration-300`}>
            Agency
          </span>
        </div>
      )}
    </a>
  );
};
