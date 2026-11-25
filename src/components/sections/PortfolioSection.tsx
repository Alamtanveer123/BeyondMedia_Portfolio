import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Info, 
  Eye,
  Instagram
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { portfolioData, agencyConfig } from '../../data/agencyData';
import { PortfolioItem, ProjectCategory } from '../../types';

interface PortfolioSectionProps {
  onSelectItem: (item: PortfolioItem) => void;
  onInquireDirect: (projectName: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onSelectItem,
  onInquireDirect,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  const categories: ProjectCategory[] = [
    'All',
    'Social Media Designs',
    'Promotional Creatives',
    'Branding',
    'Video Editing',
    'Advertising Campaigns',
    'Website Projects',
  ];

  const filteredItems = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter((item) => item.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden border-t border-[#181818]">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-red/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Curated Creative Portfolio"
          badgeColor="gold"
          title="Scroll-Stopping Creative &"
          highlightText="High-Impact Campaigns."
          subtitle="Explore our portfolio of social media designs, promotional campaign assets, branding guidelines, high-retention video reels, and conversion websites."
        />

        {/* Concept Work Transparency Notice */}
        <div className="max-w-3xl mx-auto mb-10 p-3.5 rounded-2xl bg-surface/80 border border-[#222222] flex items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              <strong className="text-white">Authenticity Standard: </strong> All works are transparently categorized as verified profile highlights, internal agency systems, or sample concept suites.
            </span>
          </div>
          <a
            href={agencyConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1 text-brand-red hover:underline shrink-0 font-semibold"
          >
            <span>Live IG Feed</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-red text-white shadow-red-glow scale-105'
                    : 'bg-[#141414] text-neutral-400 hover:text-white hover:bg-[#1f1f1f] border border-[#222222]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl bg-[#121212] border border-[#222222] hover:border-brand-red/40 hover:shadow-red-glow/30 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Artwork Card Top */}
                  <div 
                    onClick={() => onSelectItem(item)}
                    className={`relative w-full h-56 sm:h-64 bg-gradient-to-br ${item.previewGradient} p-5 flex flex-col justify-between overflow-hidden cursor-pointer`}
                  >
                    <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-sm z-20">
                      <span className="px-4 py-2 rounded-xl bg-brand-red text-white text-xs font-bold flex items-center gap-1.5 shadow-lg">
                        <Eye className="w-3.5 h-3.5" />
                        Quick Preview
                      </span>
                    </div>

                    {/* Badge header */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 border border-white/10 text-white backdrop-blur-md">
                        {item.categoryLabel}
                      </span>
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${
                        item.type === 'highlight' 
                          ? 'bg-brand-red/20 border-brand-red/40 text-brand-red' 
                          : item.type === 'sample' 
                          ? 'bg-brand-gold/20 border-brand-gold/40 text-brand-gold' 
                          : 'bg-white/10 border-white/20 text-neutral-300'
                      }`}>
                        {item.typeLabel}
                      </span>
                    </div>

                    {/* Card Interior Monogram / Artwork Graphic */}
                    <div className="relative z-10 my-auto text-center">
                      <div className="inline-block p-4 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md group-hover:scale-105 transition-transform duration-300">
                        <span className="font-display font-black text-2xl tracking-wider text-white">
                          {item.title.split(' ')[0]}
                        </span>
                        <div className="text-[10px] uppercase font-bold text-brand-gold tracking-widest mt-0.5">
                          {item.clientOrBrand}
                        </div>
                      </div>
                    </div>

                    {/* Color Swatch Indicators */}
                    <div className="relative z-10 flex items-center gap-1.5">
                      {item.colors.map((c, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-3 h-3 rounded-full border border-black/40 shadow-sm"
                          style={{ backgroundColor: c }}
                          title={c}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="p-6">
                    <div className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-1">
                      {item.clientOrBrand}
                    </div>

                    <h3 
                      onClick={() => onSelectItem(item)}
                      className="font-display font-extrabold text-xl text-white mb-2.5 group-hover:text-brand-red transition-colors cursor-pointer"
                    >
                      {item.title}
                    </h3>

                    <p className="text-neutral-300 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {item.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-[#181818] border border-[#242424] text-[10px] text-neutral-400"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-6 pt-0 border-t border-[#1c1c1c] flex items-center justify-between gap-3 mt-auto">
                  <button
                    onClick={() => onSelectItem(item)}
                    className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1 transition-colors"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-red" />
                  </button>

                  <button
                    onClick={() => onInquireDirect(`Creative Concept: ${item.title}`)}
                    className="px-3 py-1.5 rounded-lg bg-surface-light hover:bg-brand-red hover:text-white border border-surface-border text-xs font-bold text-neutral-200 transition-all"
                  >
                    Inquire Similar
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Portfolio Bottom Instagram Callout */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 p-4 px-6 rounded-2xl bg-surface border border-surface-border">
            <span className="text-xs sm:text-sm text-neutral-300">
              Want to see daily creative drops and behind-the-scenes designs?
            </span>
            <a
              href={agencyConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-red-glow transition-all"
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Follow @beyondmedia.inn</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
