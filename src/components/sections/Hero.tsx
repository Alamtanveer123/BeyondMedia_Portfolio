import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Sparkles, 
  ChevronRight, 
  Flame,
  Rocket,
  Store,
  UtensilsCrossed,
  Building2,
  GraduationCap,
  ShoppingBag,
  TrendingUp,
  Instagram
} from 'lucide-react';
import { agencyConfig, agencyStats, targetAudiences } from '../../data/agencyData';

interface HeroProps {
  onExploreWork: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenConsultation }) => {
  const [selectedAudience, setSelectedAudience] = useState(targetAudiences[0]);

  const audienceIcons: Record<string, React.ReactNode> = {
    Rocket: <Rocket className="w-4 h-4" />,
    Store: <Store className="w-4 h-4" />,
    UtensilsCrossed: <UtensilsCrossed className="w-4 h-4" />,
    Building2: <Building2 className="w-4 h-4" />,
    GraduationCap: <GraduationCap className="w-4 h-4" />,
    ShoppingBag: <ShoppingBag className="w-4 h-4" />,
    Sparkles: <Sparkles className="w-4 h-4" />,
    TrendingUp: <TrendingUp className="w-4 h-4" />,
  };

  return (
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden bg-[#080808]">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
      
      {/* Top subtle red glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[350px] bg-gradient-to-tr from-brand-red/20 via-brand-red/10 to-transparent blur-[120px] rounded-full pointer-events-none" />

      {/* Gold accent ambient glow */}
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-brand-gold/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Top Tag & Official Bio */}
        <div className="flex flex-col items-center text-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-light border border-[#262626] backdrop-blur-xl shadow-lg mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-brand-red animate-ping" />
            <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
              Official Agency
            </span>
            <span className="text-neutral-500">•</span>
            <a 
              href={agencyConfig.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-semibold text-neutral-300 hover:text-white transition-colors flex items-center gap-1"
            >
              <Instagram className="w-3.5 h-3.5 text-brand-gold" />
              {agencyConfig.instagramHandle}
            </a>
          </motion.div>

          {/* Sub bio badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-widest text-neutral-400 uppercase"
          >
            {agencyConfig.bio}
          </motion.div>
        </div>

        {/* Central Kinetic Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05]"
          >
            Helping Brands <br />
            <span className="relative inline-block mt-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-red-500 to-brand-gold">
                Go Beyond.
              </span>
              {/* Subtle underline stroke accent */}
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.8 }}
                className="absolute -bottom-2 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-brand-red to-brand-gold rounded-full"
              />
            </span>
          </motion.h1>

          {/* Supporting Headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 sm:mt-8 text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal max-w-3xl mx-auto leading-relaxed"
          >
            {agencyConfig.subTagline}
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5"
          >
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-base font-extrabold tracking-wide flex items-center justify-center gap-2.5 shadow-red-glow hover:shadow-red-glow-lg transition-all duration-300 group"
            >
              <span>Let's Build Your Brand</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <button
              onClick={onExploreWork}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-[#141414] hover:bg-[#1a1a1a] border border-[#2b2b2b] hover:border-brand-gold/60 text-white text-base font-bold tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 group"
            >
              <Sparkles className="w-4 h-4 text-brand-gold group-hover:rotate-12 transition-transform" />
              <span>Explore Our Work</span>
            </button>
          </motion.div>
        </div>

        {/* Dynamic Logo Animation Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="my-14 sm:my-16 max-w-3xl mx-auto"
        >
          <div className="relative p-6 sm:p-8 rounded-3xl bg-surface/80 border border-surface-border shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#080808] border-2 border-brand-gold/60 p-2.5 shadow-gold-glow flex items-center justify-center shrink-0">
                <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                  <path 
                    d="M26 22H54C63.9411 22 72 30.0589 72 40C72 46.0645 68.9959 51.4262 64.3905 54.6853C70.218 57.9579 74 64.2731 74 71C74 81.4934 65.4934 90 55 90H26V22Z" 
                    fill="url(#heroGold)" 
                    fillOpacity="0.2" 
                    stroke="url(#heroGold)" 
                    strokeWidth="4"
                  />
                  <path 
                    d="M38 34H52C56.4183 34 60 37.5817 60 42C60 46.4183 56.4183 50 52 50H38V34Z" 
                    fill="#080808" 
                    stroke="url(#heroGold)" 
                    strokeWidth="3.5"
                  />
                  <path 
                    d="M38 60H54C58.4183 60 62 63.5817 62 68C62 72.4183 58.4183 76 54 76H38V60Z" 
                    fill="#080808" 
                    stroke="url(#heroGold)" 
                    strokeWidth="3.5"
                  />
                  <path 
                    d="M70 18L88 6M88 6H76M88 6V18" 
                    stroke="#E50920" 
                    strokeWidth="5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                  <circle cx="88" cy="6" r="4" fill="#E50920" className="animate-ping" />
                  <defs>
                    <linearGradient id="heroGold" x1="26" y1="22" x2="74" y2="90" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#DFC16C"/>
                      <stop offset="0.5" stopColor="#C5A44D"/>
                      <stop offset="1" stopColor="#8A7030"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white">
                    BEYOND MEDIA
                  </h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-gold/15 text-brand-gold border border-brand-gold/30">
                    Official Identity
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                  Matte Black • Bold Red • Elegant Gold. Precision-built to drive client acquisition.
                </p>
              </div>
            </div>

            <div className="w-full sm:w-auto flex sm:flex-col items-center justify-between sm:items-end gap-2 text-right">
              <span className="text-xs text-neutral-400">Status</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Accepting New Clients
              </div>
            </div>
          </div>
        </motion.div>

        {/* Agency Key Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-16">
          {agencyStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-surface/60 border border-surface-border text-center backdrop-blur-md hover:border-brand-red/40 transition-colors"
            >
              <div className="font-display font-black text-3xl sm:text-4xl text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-200">
                  {stat.value}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-brand-red mt-1">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 mt-0.5">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Target Audience Playbook Selector */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#0e0e0e] border border-[#222222] shadow-2xl"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-red mb-1">
                <Flame className="w-4 h-4" />
                Tailored Solutions For Your Industry
              </div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-white">
                How Beyond Media Scales Your Specific Business:
              </h3>
            </div>
            <span className="text-xs text-neutral-400">
              Select your category below:
            </span>
          </div>

          {/* Audience Filter Pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {targetAudiences.map((aud) => {
              const isSelected = selectedAudience.id === aud.id;
              return (
                <button
                  key={aud.id}
                  onClick={() => setSelectedAudience(aud)}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-brand-red text-white shadow-red-glow'
                      : 'bg-[#181818] text-neutral-300 hover:text-white hover:bg-[#222222] border border-[#262626]'
                  }`}
                >
                  {audienceIcons[aud.icon]}
                  <span>{aud.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Selected Audience Playbook Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedAudience.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-5 rounded-2xl bg-[#141414] border border-[#262626] grid grid-cols-1 md:grid-cols-3 gap-5 items-center"
            >
              <div className="md:col-span-2 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-lg bg-brand-red/10 text-brand-red">
                    {audienceIcons[selectedAudience.icon]}
                  </span>
                  <h4 className="text-base font-bold text-white">
                    {selectedAudience.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-neutral-400">
                  <span className="text-red-400 font-semibold">Common Bottleneck: </span>
                  {selectedAudience.painPoint}
                </p>
                <p className="text-xs sm:text-sm text-neutral-200">
                  <span className="text-brand-gold font-semibold">Our Strategy: </span>
                  {selectedAudience.solution}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1b1b1b] border border-[#2a2a2a] text-center md:text-left flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400">
                    Recommended Package
                  </span>
                  <div className="text-sm font-bold text-white mt-1 mb-3">
                    {selectedAudience.recommendedService}
                  </div>
                </div>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-2 px-3 rounded-lg bg-brand-red/20 border border-brand-red/40 text-brand-red hover:bg-brand-red hover:text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Inquire For This Playbook</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
