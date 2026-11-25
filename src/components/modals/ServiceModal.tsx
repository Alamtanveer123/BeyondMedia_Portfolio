import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  CheckCircle2, 
  ArrowUpRight, 
  MessageCircle, 
  Sparkles,
  Search,
  Share2,
  FileText,
  Target,
  Mail,
  BarChart3,
  Palette,
  Video,
  Globe
} from 'lucide-react';
import { ServiceItem } from '../../types';
import { agencyConfig } from '../../data/agencyData';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry: (serviceName: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  if (!service) return null;

  // Icon mapping
  const iconComponents: Record<string, React.ReactNode> = {
    Search: <Search className="w-7 h-7 text-brand-red" />,
    Share2: <Share2 className="w-7 h-7 text-brand-red" />,
    FileText: <FileText className="w-7 h-7 text-brand-red" />,
    Target: <Target className="w-7 h-7 text-brand-red" />,
    Mail: <Mail className="w-7 h-7 text-brand-red" />,
    BarChart3: <BarChart3 className="w-7 h-7 text-brand-red" />,
    Palette: <Palette className="w-7 h-7 text-brand-red" />,
    Video: <Video className="w-7 h-7 text-brand-red" />,
    Globe: <Globe className="w-7 h-7 text-brand-red" />,
  };

  const whatsappMsg = encodeURIComponent(
    `Hello Beyond Media! I'm interested in your "${service.name}" service. Let's discuss pricing and details.`
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
          className="relative w-full max-w-2xl bg-[#111111] border border-[#262626] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden text-left"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 blur-3xl rounded-full pointer-events-none" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-5">
            <div className="p-3.5 rounded-2xl bg-surface-light border border-surface-border">
              {iconComponents[service.icon] || <Sparkles className="w-7 h-7 text-brand-red" />}
            </div>
            <div>
              {service.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-brand-red/15 border border-brand-red/30 text-brand-red mb-1">
                  {service.badge}
                </span>
              )}
              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-white">
                {service.name}
              </h3>
            </div>
          </div>

          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-6">
            {service.fullDesc}
          </p>

          {/* Benefits and Deliverables Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            {/* Benefits */}
            <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                Key Benefits
              </h4>
              <ul className="space-y-2">
                {service.benefits.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-red shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="p-4 rounded-2xl bg-[#161616] border border-[#222222]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
                Standard Deliverables
              </h4>
              <ul className="space-y-2">
                {service.deliverables.map((d, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0 mt-1.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ideal For */}
          <div className="p-3.5 rounded-xl bg-surface-border/40 border border-white/5 mb-6 text-xs text-neutral-400">
            <strong className="text-white">Ideal For: </strong> {service.idealFor}
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <button
              onClick={() => {
                onClose();
                onSelectForInquiry(service.name);
              }}
              className="w-full sm:flex-1 py-3 px-5 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-red-glow transition-all"
            >
              <span>Get Started With {service.name}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${agencyConfig.whatsappNumber}?text=${whatsappMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Discuss On WhatsApp</span>
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
