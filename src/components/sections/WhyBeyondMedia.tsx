import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Target, 
  MessageSquare, 
  ShieldCheck, 
  LineChart, 
  Sliders, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { whyChooseUs } from '../../data/agencyData';

interface WhyBeyondMediaProps {
  onOpenConsultation: () => void;
}

export const WhyBeyondMedia: React.FC<WhyBeyondMediaProps> = ({ onOpenConsultation }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Lightbulb: <Lightbulb className="w-6 h-6 text-brand-gold" />,
    Target: <Target className="w-6 h-6 text-brand-red" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-emerald-400" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
    LineChart: <LineChart className="w-6 h-6 text-brand-red" />,
    Sliders: <Sliders className="w-6 h-6 text-white" />,
  };

  return (
    <section id="why-us" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden border-t border-[#181818]">
      {/* Background atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-red/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="The Beyond Standard"
          badgeColor="red"
          title="Why Leading Brands Choose"
          highlightText="Beyond Media."
          subtitle="We blend bold creative vision with data-informed performance to build campaigns that convert attention into sustainable enterprise revenue."
        />

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {whyChooseUs.map((pillar, idx) => (
            <motion.div
              key={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative rounded-3xl p-6 sm:p-8 bg-[#111111] border border-[#222222] hover:border-brand-red/40 hover:shadow-red-glow/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Metric pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3.5 rounded-2xl bg-[#181818] border border-[#262626] group-hover:scale-105 transition-transform">
                    {iconMap[pillar.icon]}
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-surface-light border border-surface-border text-brand-gold">
                    {pillar.metric}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-1.5 group-hover:text-brand-red transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs font-semibold text-brand-gold uppercase tracking-wider mb-3">
                  {pillar.subtitle}
                </p>

                <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#1f1f1f] flex items-center justify-between text-xs text-neutral-400">
                <span>Beyond Standard #{idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Conversion Prompt */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-brand-red hover:bg-brand-red-hover text-white text-sm sm:text-base font-bold tracking-wide shadow-red-glow transition-all"
          >
            <span>Experience The Beyond Media Difference</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
