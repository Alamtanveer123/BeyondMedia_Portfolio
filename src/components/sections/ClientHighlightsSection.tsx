import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  ExternalLink, 
  Bookmark, 
  PlusCircle, 
  Instagram 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { clientHighlights, agencyConfig } from '../../data/agencyData';

interface ClientHighlightsSectionProps {
  onOpenConsultation: () => void;
}

export const ClientHighlightsSection: React.FC<ClientHighlightsSectionProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section id="highlights" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-[#181818]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Featured References & Project Highlights"
          badgeColor="gold"
          title="Curated Brand Showcases &"
          highlightText="Instagram Highlights."
          subtitle="References from Beyond Media's official Instagram profile stories and highlight reels, alongside open partnership slots for upcoming businesses."
        />

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {clientHighlights.map((client, idx) => (
            <motion.div
              key={client.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-[#121212] border border-[#242424] hover:border-brand-gold/40 transition-all flex flex-col justify-between group shadow-xl"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${client.badgeColor}`}>
                    {client.status}
                  </span>

                  <span className="text-[11px] font-semibold text-neutral-400">
                    {client.category}
                  </span>
                </div>

                {/* Name / Brand Title */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1a1a1a] border border-[#303030] flex items-center justify-center font-display font-black text-xl text-white group-hover:border-brand-red transition-colors">
                    {client.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-2xl text-white">
                      {client.name}
                    </h3>
                    <p className="text-[11px] text-neutral-400 font-medium">
                      {client.source}
                    </p>
                  </div>
                </div>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6 mt-4">
                  {client.summary}
                </p>

                {/* Deliverables tags */}
                <div className="space-y-2 mb-6 pt-4 border-t border-[#202020]">
                  <span className="text-[11px] uppercase font-bold tracking-wider text-neutral-400 block mb-2">
                    Scope & Assets
                  </span>
                  {client.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#202020]">
                {client.id === 'client-placeholder-1' ? (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full py-2.5 px-4 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-black text-xs font-bold tracking-wide transition-colors flex items-center justify-center gap-1.5 shadow-gold-glow"
                  >
                    <PlusCircle className="w-4 h-4" />
                    <span>Claim Client Slot</span>
                  </button>
                ) : (
                  <a
                    href={agencyConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-surface-light hover:bg-[#202020] border border-[#2a2a2a] text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Instagram className="w-3.5 h-3.5 text-brand-red" />
                    <span>View Highlight on Instagram</span>
                    <ExternalLink className="w-3 h-3 text-neutral-400" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Authentic Agency Assurance Box */}
        <div className="p-6 rounded-3xl bg-[#0e0e0e] border border-[#202020] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Bookmark className="w-4 h-4 text-brand-red" />
              Verified Client Integrity Policy
            </h4>
            <p className="text-xs text-neutral-400 max-w-2xl">
              Beyond Media never publishes fabricated case studies or unconfirmed endorsements. Every project featured is either verified directly from our public Instagram profile highlights (@beyondmedia.inn) or clearly demarcated as internal agency concept work.
            </p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold tracking-wide shadow-red-glow shrink-0 transition-all flex items-center gap-2"
          >
            <span>Start Your Brand Campaign</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
