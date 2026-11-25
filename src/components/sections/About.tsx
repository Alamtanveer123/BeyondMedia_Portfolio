import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ArrowUpRight, 
  Instagram, 
  Target, 
  Layers, 
  TrendingUp, 
  Award 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { agencyConfig } from '../../data/agencyData';

interface AboutProps {
  onOpenConsultation: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenConsultation }) => {
  const pillars = [
    {
      title: "Branding",
      desc: "Creating bold, enduring visual identities and design guidelines that position you as an undisputed market authority.",
      icon: <Award className="w-5 h-5 text-brand-gold" />
    },
    {
      title: "Content",
      desc: "Crafting captivating short-form video reels, authoritative articles, and social creatives that dominate attention.",
      icon: <Sparkles className="w-5 h-5 text-brand-red" />
    },
    {
      title: "Digital Marketing",
      desc: "Comprehensive multi-channel outreach across SEO, social channels, and automated nurture sequences.",
      icon: <Layers className="w-5 h-5 text-white" />
    },
    {
      title: "Performance Marketing",
      desc: "Hyper-targeted Meta and Google paid ad campaigns built for high Return on Ad Spend (ROAS) and low CPA.",
      icon: <Target className="w-5 h-5 text-brand-red" />
    },
    {
      title: "Business Growth",
      desc: "Turning one-off visitors into high-ticket paying clients through seamless conversion funnels and web experiences.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden border-t border-[#181818]">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-red/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="About Beyond Media"
          badgeColor="red"
          title="Engineered For Brands Ready To"
          highlightText="Break The Mold."
          subtitle="Beyond Media is a modern digital marketing agency built on one core conviction: great creative and ruthless performance marketing must work together."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed"
          >
            <p className="font-display text-2xl sm:text-3xl text-white font-extrabold leading-tight">
              We don't do passive marketing. <br />
              <span className="text-brand-red">We help ambitious brands go beyond their limits.</span>
            </p>

            <p>
              In today's hyper-crowded digital ecosystem, average marketing is invisible marketing. Consumers scroll through thousands of generic posts every single day. If your brand doesn't command attention within seconds, your advertising dollars vanish into thin air.
            </p>

            <p>
              At <strong className="text-white">Beyond Media</strong>, we bridge the gap between creative artistry and commercial conversion. Rooted in our visual identity of Matte Black, Bold Red, and Refined Gold, our creative studio delivers scroll-stopping content while our performance team builds scalable client acquisition funnels.
            </p>

            {/* Instagram Reference Pill Box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-surface border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-brand-red/10 border border-brand-red/30">
                  <Instagram className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Follow Our Official Creative Feed</h4>
                  <p className="text-xs text-neutral-400">{agencyConfig.instagramHandle} • Verified Agency Profile</p>
                </div>
              </div>

              <a
                href={agencyConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-surface-light hover:bg-[#252525] border border-surface-border text-white text-xs font-bold transition-all flex items-center gap-1.5"
              >
                <span>Visit Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
              </a>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold tracking-wide shadow-red-glow transition-all"
              >
                <span>Partner With Beyond Media</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Right Visual Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-[#141414] to-[#0d0d0d] border border-[#242424] p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-gold/10 blur-3xl rounded-full pointer-events-none" />

              <div className="flex items-center justify-between pb-6 border-b border-[#202020] mb-6">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                    Our Core Operating Model
                  </span>
                  <h4 className="text-xl font-display font-black text-white mt-0.5">
                    The Beyond Advantage
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#080808] border border-brand-gold/40 flex items-center justify-center text-brand-gold font-bold text-xs">
                  BM
                </div>
              </div>

              {/* 5 Approach Pillars List */}
              <div className="space-y-4">
                {pillars.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#181818]/80 border border-[#222222] hover:border-brand-red/30 transition-all flex items-start gap-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-[#111111] border border-[#282828] group-hover:scale-105 transition-transform shrink-0">
                      {pillar.icon}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-white group-hover:text-brand-red transition-colors">
                        {pillar.title}
                      </h5>
                      <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Quote Banner */}
              <div className="mt-6 pt-5 border-t border-[#202020] text-center">
                <p className="text-xs italic text-neutral-400">
                  "Branding gets you remembered. Content gets you trusted. Performance marketing gets you paid."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
