import React from 'react';
import { 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  MessageCircle,
  ExternalLink,
  Heart
} from 'lucide-react';
import { Logo } from './Logo';
import { agencyConfig } from '../../data/agencyData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { name: 'Branding & Creative Design', href: '#services' },
    { name: 'Paid Advertising (PPC)', href: '#services' },
    { name: 'Social Media Marketing', href: '#services' },
    { name: 'Short-Form Video Editing', href: '#services' },
    { name: 'Search Engine Optimization', href: '#services' },
    { name: 'Website Development', href: '#services' },
  ];

  const quickLinks = [
    { name: 'About Beyond Media', href: '#about' },
    { name: 'Portfolio & Work', href: '#work' },
    { name: 'Client Highlights', href: '#highlights' },
    { name: 'Our 5-Step Process', href: '#process' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Leadership & Team', href: '#team' },
    { name: 'Contact & Inquiry', href: '#contact' },
  ];

  return (
    <footer className="relative bg-[#050505] border-t border-[#1a1a1a] text-neutral-400 overflow-hidden pt-16 pb-12">
      {/* Background red glow accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-gradient-to-b from-brand-red/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#181818]">
          {/* Agency Bio Column */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size="lg" />
            <p className="text-white font-medium text-sm sm:text-base">
              "{agencyConfig.tagline}"
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Beyond Media is a premier digital marketing agency dedicated to turning ambitious businesses into high-converting market leaders through bespoke branding, viral content, and high-ROI performance marketing.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={agencyConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-white hover:text-brand-red hover:border-brand-red/40 transition-all hover:scale-105"
                aria-label="Beyond Media Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${agencyConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-white hover:text-[#25D366] hover:border-[#25D366]/40 transition-all hover:scale-105"
                aria-label="Beyond Media WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${agencyConfig.email}`}
                className="w-10 h-10 rounded-xl bg-surface border border-surface-border flex items-center justify-center text-white hover:text-brand-gold hover:border-brand-gold/40 transition-all hover:scale-105"
                aria-label="Beyond Media Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            {/* Official Instagram Handle Box */}
            <div className="p-3.5 rounded-xl bg-[#0c0c0c] border border-[#222222] inline-flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-red animate-pulse" />
              <div className="text-xs">
                <span className="text-neutral-400">Official Instagram: </span>
                <a 
                  href={agencyConfig.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white font-bold hover:text-brand-red transition-colors inline-flex items-center gap-1 ml-1"
                >
                  {agencyConfig.instagramHandle}
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesLinks.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-brand-red transition-colors hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a 
                href={`mailto:${agencyConfig.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                <span>{agencyConfig.email}</span>
              </a>

              <a 
                href={`https://wa.me/${agencyConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{agencyConfig.whatsappDisplay} (WhatsApp)</span>
              </a>

              <div className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>{agencyConfig.location}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-red/10 border border-brand-red/30 text-brand-red hover:bg-brand-red hover:text-white text-xs font-bold transition-all"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© {currentYear} Beyond Media. All rights reserved. Helping Brands Go Beyond.</p>
          <div className="flex items-center gap-4">
            <span>Branding • Content • Performance Marketing</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              Engineered with <Heart className="w-3 h-3 text-brand-red fill-brand-red inline" /> for Client Growth
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
