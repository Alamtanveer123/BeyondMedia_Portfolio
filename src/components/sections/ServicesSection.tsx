import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Share2, 
  FileText, 
  Target, 
  Mail, 
  BarChart3, 
  Palette, 
  Video, 
  Globe, 
  ArrowUpRight, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { servicesData } from '../../data/agencyData';
import { ServiceItem } from '../../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onInquireDirect: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onInquireDirect,
}) => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const iconMap: Record<string, React.ReactNode> = {
    Search: <Search className="w-6 h-6" />,
    Share2: <Share2 className="w-6 h-6" />,
    FileText: <FileText className="w-6 h-6" />,
    Target: <Target className="w-6 h-6" />,
    Mail: <Mail className="w-6 h-6" />,
    BarChart3: <BarChart3 className="w-6 h-6" />,
    Palette: <Palette className="w-6 h-6" />,
    Video: <Video className="w-6 h-6" />,
    Globe: <Globe className="w-6 h-6" />,
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#080808] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand-red/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Full-Service Agency Capabilities"
          badgeColor="red"
          title="Comprehensive Growth Solutions Built For"
          highlightText="Market Dominance."
          subtitle="Every business needs a coordinated marketing engine. Discover our 9 core digital marketing services designed to acquire high-value paying clients."
        />

        {/* 9 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, idx) => {
            const isHovered = hoveredService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.07 }}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative rounded-3xl p-6 sm:p-8 bg-[#111111] border transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'border-brand-red/50 shadow-red-glow bg-[#151515] -translate-y-1.5'
                    : 'border-[#222222] hover:border-[#333333]'
                }`}
              >
                <div>
                  {/* Top Header with Icon and Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl border transition-colors ${
                      isHovered
                        ? 'bg-brand-red text-white border-brand-red shadow-red-glow/40'
                        : 'bg-[#181818] text-brand-red border-[#262626]'
                    }`}>
                      {iconMap[service.icon] || <Sparkles className="w-6 h-6" />}
                    </div>

                    {service.badge && (
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-red/15 border border-brand-red/30 text-brand-red">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title and Short Description */}
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white mb-3">
                    {service.name}
                  </h3>

                  <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="space-y-2 mb-6 pt-3 border-t border-[#202020]">
                    {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom CTA Actions */}
                <div className="pt-4 border-t border-[#202020] flex items-center justify-between gap-3">
                  <button
                    onClick={() => onSelectService(service)}
                    className="text-xs font-bold text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors group"
                  >
                    <span>Learn More</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => onInquireDirect(service.name)}
                    className="px-3.5 py-2 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white text-xs font-bold transition-all shadow-sm"
                  >
                    Get Proposal
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#111111] to-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
        >
          <div>
            <h4 className="text-lg sm:text-xl font-display font-extrabold text-white">
              Need a Customized Cross-Channel Marketing Strategy?
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              We combine branding, short-form video, and paid performance into an integrated growth retainer.
            </p>
          </div>

          <button
            onClick={() => onInquireDirect("Custom Full-Funnel Retainer")}
            className="px-6 py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold tracking-wide shadow-red-glow shrink-0 transition-all flex items-center gap-2"
          >
            <span>Request Custom Strategy Call</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
