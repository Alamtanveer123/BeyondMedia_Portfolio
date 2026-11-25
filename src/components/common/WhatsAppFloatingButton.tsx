import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { agencyConfig } from '../../data/agencyData';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMsg = encodeURIComponent("Hello Beyond Media! I saw your portfolio and would like to discuss a digital marketing & branding project for my business.");
  const whatsappUrl = `https://wa.me/${agencyConfig.whatsappNumber}?text=${defaultMsg}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip / Mini Chat Popover */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            className="mb-3 w-72 sm:w-80 rounded-2xl bg-[#121212] border border-[#222222] shadow-2xl p-4 text-left backdrop-blur-xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#222222]">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-brand-red/20 border border-brand-red/50 flex items-center justify-center text-xs font-bold text-white">
                    BM
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#121212]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Beyond Media Support</h4>
                  <p className="text-[11px] text-emerald-400 font-medium">Online • Instant WhatsApp Chat</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Close message"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-neutral-300 my-3 leading-relaxed">
              Looking to scale your brand with branding, content, or paid ads? Let's discuss your project directly on WhatsApp.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold tracking-wide transition-colors shadow-lg shadow-emerald-950/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              Chat on WhatsApp ({agencyConfig.whatsappDisplay})
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Floating Action Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-br from-brand-red to-[#B80616] text-white shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 flex items-center justify-center border border-white/20"
        aria-label="Contact Beyond Media on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border border-black"></span>
        </span>
        <MessageCircle className="w-6 h-6 fill-white text-white group-hover:rotate-6 transition-transform" />
      </motion.button>
    </div>
  );
};
