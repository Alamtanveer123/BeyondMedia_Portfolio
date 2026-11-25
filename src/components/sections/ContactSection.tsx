import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  MessageCircle, 
  Instagram, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  ArrowUpRight 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { agencyConfig, servicesData } from '../../data/agencyData';

interface ContactSectionProps {
  prefilledService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    whatsappNumber: '',
    serviceRequired: prefilledService || 'Branding & Creative Design',
    projectDescription: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update prefilled service if changed from outside
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, serviceRequired: prefilledService }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.whatsappNumber.trim()) {
      setErrorMsg('Please complete all required fields (Name, Email, WhatsApp Number).');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  // Build WhatsApp inquiry link from current form fields
  const buildWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Beyond Media! My name is ${formData.name || 'there'} from ${formData.businessName || 'my business'}.\n\n` +
      `Service: ${formData.serviceRequired}\n` +
      `Email: ${formData.email || 'N/A'}\n` +
      `Project Brief: ${formData.projectDescription || 'I would like to scale my brand with Beyond Media.'}`
    );
    return `https://wa.me/${agencyConfig.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden border-t border-[#181818]">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-brand-red/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direct Client Acquisition"
          badgeColor="red"
          title="Let's Take Your"
          highlightText="Brand Beyond."
          subtitle="Ready to command your market? Fill in your project specifications below, or reach out to us directly via WhatsApp for an immediate consultation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Agency Channels & Social Verification */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#121212] border border-[#222222] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-36 h-36 bg-brand-red/10 blur-2xl pointer-events-none" />

              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold">
                Instant Inquiries
              </span>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mt-1 mb-4">
                Let's Talk Growth
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-6">
                Whether you need a complete ground-up brand identity, high-tempo short-form video reels, or paid performance campaigns, our team is ready.
              </p>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                {/* WhatsApp Priority Line */}
                <a
                  href={`https://wa.me/${agencyConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#161616] border border-[#282828] hover:border-[#25D366]/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#25D366]/15 text-[#25D366] group-hover:scale-105 transition-transform">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                        Priority Channel
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        WhatsApp: {agencyConfig.whatsappDisplay}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>

                {/* Instagram Profile */}
                <a
                  href={agencyConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-[#161616] border border-[#282828] hover:border-brand-red/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-brand-red/15 text-brand-red group-hover:scale-105 transition-transform">
                      <Instagram className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-red">
                        Official Feed
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {agencyConfig.instagramHandle}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>

                {/* Email Channel */}
                <a
                  href={`mailto:${agencyConfig.email}`}
                  className="p-4 rounded-2xl bg-[#161616] border border-[#282828] hover:border-brand-gold/50 flex items-center justify-between group transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-brand-gold/15 text-brand-gold group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-brand-gold">
                        Business Enquiries
                      </span>
                      <h4 className="text-sm font-bold text-white">
                        {agencyConfig.email}
                      </h4>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                </a>
              </div>

              {/* Central Config Editable Note */}
              <div className="mt-6 pt-4 border-t border-[#202020] text-[11px] text-neutral-400 flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>
                  All contact coordinates are centralized in <code className="text-white">agencyConfig</code> for instantaneous updates.
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Lead Generation & Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#121212] border border-[#262626] shadow-2xl relative">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    Proposal Request Received!
                  </h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{formData.name}</strong>. A Beyond Media strategist will review your requirements for <strong className="text-brand-red">{formData.serviceRequired}</strong> and reach out to you within 24 hours.
                  </p>

                  <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Speed Up Response on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-surface-light border border-surface-border text-xs sm:text-sm font-semibold text-neutral-300 hover:text-white"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#202020] mb-2">
                    <div>
                      <h4 className="text-lg font-display font-extrabold text-white">
                        Project Discovery Form
                      </h4>
                      <p className="text-xs text-neutral-400">
                        Fill in your project brief for a complimentary strategy call.
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/20">
                      Step 1 of 1
                    </span>
                  </div>

                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1.5 uppercase tracking-wider">
                        Your Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2b2b2b] text-white text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1.5 uppercase tracking-wider">
                        Business / Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="e.g. Apex Living / Cafe Roma"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2b2b2b] text-white text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1.5 uppercase tracking-wider">
                        Email Address <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2b2b2b] text-white text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                      />
                    </div>

                    {/* WhatsApp Number */}
                    <div>
                      <label className="block text-xs font-bold text-neutral-300 mb-1.5 uppercase tracking-wider">
                        WhatsApp Number <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.whatsappNumber}
                        onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2b2b2b] text-white text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Service Required
                    </label>
                    <select
                      value={formData.serviceRequired}
                      onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2b2b2b] text-white text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all cursor-pointer"
                    >
                      {servicesData.map((svc) => (
                        <option key={svc.id} value={svc.name} className="bg-[#141414] text-white">
                          {svc.name}
                        </option>
                      ))}
                      <option value="Full-Funnel Retainer (Branding + Content + Ads)" className="bg-[#141414] text-white">
                        Full-Funnel Retainer (Branding + Content + Ads)
                      </option>
                      <option value="Custom Project / Other" className="bg-[#141414] text-white">
                        Custom Project / Other
                      </option>
                    </select>
                  </div>

                  {/* Project Description */}
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 mb-1.5 uppercase tracking-wider">
                      Project Goals & Requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.projectDescription}
                      onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                      placeholder="Tell us about your brand, current targets, timeline, and what you aim to achieve..."
                      className="w-full px-4 py-3 rounded-xl bg-[#181818] border border-[#2b2b2b] text-white text-xs sm:text-sm focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                    />
                  </div>

                  {/* Submit CTA Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3.5 px-6 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2 shadow-red-glow hover:shadow-red-glow-lg transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Project Brief</span>
                    </button>

                    <a
                      href={buildWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 fill-white" />
                      <span>Direct WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
