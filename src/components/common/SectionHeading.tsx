import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'red' | 'gold' | 'neutral';
  title: string;
  highlightText?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeColor = 'red',
  title,
  highlightText,
  subtitle,
  centered = true,
  className = '',
}) => {
  const badgeStyles = {
    red: 'bg-brand-red/10 border-brand-red/30 text-brand-red shadow-red-glow/20',
    gold: 'bg-brand-gold/10 border-brand-gold/30 text-brand-gold shadow-gold-glow/20',
    neutral: 'bg-white/5 border-white/10 text-neutral-300',
  };

  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12 sm:mb-16 ${className}`}>
      {badge && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase border mb-4 backdrop-blur-md"
        >
          <span className={`w-2 h-2 rounded-full ${badgeColor === 'red' ? 'bg-brand-red animate-ping' : badgeColor === 'gold' ? 'bg-brand-gold' : 'bg-white'}`} />
          <span className={badgeStyles[badgeColor]}>{badge}</span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-[1.15]"
      >
        {title}{' '}
        {highlightText && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-brand-gold drop-shadow-sm">
            {highlightText}
          </span>
        )}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-base sm:text-lg text-neutral-400 font-normal leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
