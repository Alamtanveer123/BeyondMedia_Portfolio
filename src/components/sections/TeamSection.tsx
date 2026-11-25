import React from 'react';
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Linkedin, 
  Edit3 
} from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { teamMembers, agencyConfig } from '../../data/agencyData';

export const TeamSection: React.FC = () => {
  return (
    <section id="team" className="py-24 sm:py-32 bg-[#090909] relative overflow-hidden border-t border-[#181818]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-brand-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Leadership & Creative Specialists"
          badgeColor="red"
          title="The Multi-Disciplinary Minds"
          highlightText="Behind Beyond Media."
          subtitle="A five-member core unit of strategists, creative directors, media buyers, and web engineers dedicated to building high-converting brand engines."
        />

        {/* Editable Notice Standard */}
        <div className="max-w-3xl mx-auto mb-12 p-3.5 rounded-2xl bg-surface/90 border border-[#242424] flex items-center justify-between gap-3 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-brand-gold shrink-0" />
            <span>
              <strong className="text-white">Agency Roster: </strong> All team cards are configured with clean editable placeholders in <code className="text-brand-red bg-black/40 px-1 py-0.5 rounded">src/data/agencyData.ts</code> ready for official names and portraits.
            </span>
          </div>
        </div>

        {/* 5-Member Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative rounded-3xl p-6 bg-[#111111] border border-[#222222] hover:border-brand-red/40 hover:shadow-red-glow/20 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Monogram / Avatar Frame */}
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#141414] to-[#0a0a0a] border border-[#282828] group-hover:border-brand-gold/50 transition-colors flex flex-col items-center justify-center p-4 relative overflow-hidden mb-5">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                  
                  {/* Monogram Symbol */}
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#080808] border border-brand-gold/40 flex items-center justify-center shadow-gold-glow/20 group-hover:scale-105 transition-transform">
                    <span className="font-display font-black text-lg text-white">
                      {member.avatarPlaceholder}
                    </span>
                  </div>

                  <span className="relative z-10 mt-3 text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    {member.role.split('&')[0]}
                  </span>
                </div>

                {/* Designation and Name */}
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red block mb-1">
                  {member.designation}
                </span>

                <h3 className="font-display font-extrabold text-lg text-white mb-2">
                  {member.name}
                </h3>

                <p className="text-neutral-400 text-xs leading-relaxed mb-4">
                  {member.shortBio}
                </p>

                {/* Expertise tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {member.expertise.map((exp) => (
                    <span
                      key={exp}
                      className="px-2 py-0.5 rounded-md bg-[#181818] border border-[#242424] text-[9px] text-neutral-300 font-medium"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-[#1e1e1e] flex items-center justify-between">
                <span className="text-[10px] text-neutral-400">Beyond Roster</span>
                <div className="flex items-center gap-2">
                  <a
                    href={agencyConfig.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-[#181818] hover:bg-brand-red hover:text-white text-neutral-400 transition-colors"
                    aria-label={`${member.designation} Instagram`}
                  >
                    <Instagram className="w-3 h-3" />
                  </a>
                  <a
                    href="#"
                    className="p-1.5 rounded-lg bg-[#181818] hover:bg-white hover:text-black text-neutral-400 transition-colors"
                    aria-label={`${member.designation} LinkedIn`}
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
