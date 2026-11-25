import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, MessageCircle, ExternalLink, ShieldCheck, Tag } from 'lucide-react';
import { PortfolioItem } from '../../types';
import { agencyConfig } from '../../data/agencyData';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectForInquiry: (projectName: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onSelectForInquiry,
}) => {
  if (!item) return null;

  const whatsappMsg = encodeURIComponent(
    `Hello Beyond Media! I saw the "${item.title}" project in your portfolio and would like similar creative work for my brand.`
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          className="relative w-full max-w-3xl bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Visual Showcase Banner */}
          <div className={`w-full h-48 sm:h-64 rounded-2xl bg-gradient-to-br ${item.previewGradient} border border-[#222222] p-6 flex flex-col justify-between relative overflow-hidden mb-6`}>
            {/* Visual patterns */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-brand-red/20 blur-2xl" />

            <div className="relative z-10 flex items-center justify-between">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-black/60 border border-white/10 text-white backdrop-blur-md">
                {item.categoryLabel}
              </span>
              <span className={`px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                item.type === 'highlight' 
                  ? 'bg-brand-red/20 border-brand-red/40 text-brand-red' 
                  : item.type === 'sample' 
                  ? 'bg-brand-gold/20 border-brand-gold/40 text-brand-gold' 
                  : 'bg-white/10 border-white/20 text-neutral-300'
              }`}>
                {item.typeLabel}
              </span>
            </div>

            <div className="relative z-10">
              <p className="text-xs font-semibold text-brand-gold uppercase tracking-widest mb-1">
                {item.clientOrBrand}
              </p>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                {item.title}
              </h3>
            </div>
          </div>

          {/* Project Details Content */}
          <div className="space-y-4 mb-6">
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {item.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {item.challenge && (
                <div className="p-4 rounded-xl bg-[#161616] border border-[#222222]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red mb-1.5">
                    The Challenge
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              )}

              {item.solution && (
                <div className="p-4 rounded-xl bg-[#161616] border border-[#222222]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-brand-gold mb-1.5">
                    The Beyond Media Solution
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              )}
            </div>

            {item.impact && (
              <div className="p-3.5 rounded-xl bg-brand-red/5 border border-brand-red/20 text-xs text-neutral-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Commercial Impact: </strong>
                  <span>{item.impact}</span>
                </div>
              </div>
            )}

            {/* Tags and Palette */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs text-neutral-400 flex items-center gap-1 mr-1">
                <Tag className="w-3.5 h-3.5" /> Tags:
              </span>
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg bg-surface-light border border-surface-border text-[11px] text-neutral-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-3 border-t border-[#222222]">
            <button
              onClick={() => {
                onClose();
                onSelectForInquiry(`Project Inquiry: ${item.title}`);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-red-glow transition-all"
            >
              <span>Build A Similar Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${agencyConfig.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss via WhatsApp</span>
            </a>

            <a
              href={agencyConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-4 rounded-xl bg-surface-light hover:bg-[#222222] border border-surface-border text-white text-xs sm:text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-brand-gold" />
              <span>View On Instagram</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
