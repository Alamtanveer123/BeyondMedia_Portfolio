import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Compass, 
  Layers, 
  Wand2, 
  Rocket, 
  TrendingUp, 
  CheckCircle2 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { processSteps } from '../../data/agencyData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    Wand2: <Wand2 className="w-6 h-6" />,
    Rocket: <Rocket className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
  };

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden border-t border-[#181818]">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-red/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Our Proven Methodology"
          badgeColor="gold"
          title="From Concept To Scale:"
          highlightText="Our 5-Step Process."
          subtitle="Every breakthrough marketing campaign follows a structured journey. Here is how we take your brand from discovery to compounding commercial scale."
        />

        {/* Desktop Animated Horizontal Timeline (lg and above) */}
        <div className="hidden lg:block mb-16">
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute top-12 left-10 right-10 h-1 bg-[#1e1e1e] z-0" />
            <motion.div 
              className="absolute top-12 left-10 h-1 bg-gradient-to-r from-brand-red via-brand-gold to-brand-red z-0"
              initial={{ width: '0%' }}
              whileInView={{ width: '92%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />

            {/* 5 Step Nodes */}
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {processSteps.map((step, idx) => {
                const isSelected = activeStep === idx;

                return (
                  <div
                    key={step.number}
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center cursor-pointer group"
                  >
                    {/* Node circle */}
                    <div className={`w-24 h-24 rounded-3xl p-1 mb-4 transition-all duration-300 flex items-center justify-center ${
                      isSelected
                        ? 'bg-gradient-to-br from-brand-red to-brand-gold shadow-red-glow scale-105'
                        : 'bg-[#141414] border border-[#2a2a2a] group-hover:border-brand-red/50'
                    }`}>
                      <div className="w-full h-full rounded-[22px] bg-[#0c0c0c] flex flex-col items-center justify-center p-2">
                        <span className={`text-[10px] font-bold tracking-widest ${
                          isSelected ? 'text-brand-gold' : 'text-neutral-400'
                        }`}>
                          {step.number}
                        </span>
                        <div className={`mt-0.5 ${isSelected ? 'text-brand-red' : 'text-neutral-400'}`}>
                          {iconMap[step.icon]}
                        </div>
                      </div>
                    </div>

                    <h4 className={`text-base font-display font-extrabold transition-colors ${
                      isSelected ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'
                    }`}>
                      {step.title}
                    </h4>

                    <span className="text-[11px] text-brand-gold font-semibold mt-0.5">
                      {step.tagline}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Step Deep-Dive Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-12 p-8 rounded-3xl bg-[#111111] border border-[#262626] grid grid-cols-1 md:grid-cols-3 gap-8 items-center shadow-2xl"
          >
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-red/15 text-brand-red border border-brand-red/30">
                  Step {processSteps[activeStep].number} of 05
                </span>
                <span className="text-xs text-brand-gold font-semibold">
                  {processSteps[activeStep].tagline}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
                {processSteps[activeStep].title} Phase
              </h3>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                {processSteps[activeStep].description}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#181818] border border-[#2a2a2a] space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                Key Milestone Deliverable
              </span>
              <div className="flex items-start gap-2 text-sm font-bold text-white">
                <CheckCircle2 className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{processSteps[activeStep].deliverable}</span>
              </div>
              <p className="text-xs text-neutral-400 pt-1">
                Completed with full client transparency and milestone verification.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile / Tablet Vertical Timeline (below lg) */}
        <div className="lg:hidden space-y-6">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-3xl bg-[#111111] border border-[#242424] overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-brand-red/10 border border-brand-red/30 flex items-center justify-center text-brand-red">
                    {iconMap[step.icon]}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                      Phase {step.number}
                    </span>
                    <h3 className="text-xl font-display font-extrabold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs font-semibold text-brand-red mb-2">
                {step.tagline}
              </p>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4">
                {step.description}
              </p>

              <div className="p-3 rounded-xl bg-[#161616] border border-[#202020] flex items-center gap-2 text-xs text-neutral-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                <span><strong>Deliverable: </strong>{step.deliverable}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
