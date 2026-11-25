import React, { useState } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { WhatsAppFloatingButton } from './components/common/WhatsAppFloatingButton';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { ServicesSection } from './components/sections/ServicesSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ClientHighlightsSection } from './components/sections/ClientHighlightsSection';
import { WhyBeyondMedia } from './components/sections/WhyBeyondMedia';
import { ProcessSection } from './components/sections/ProcessSection';
import { TeamSection } from './components/sections/TeamSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';
import { ServiceModal } from './components/modals/ServiceModal';
import { PortfolioModal } from './components/modals/PortfolioModal';
import { ServiceItem, PortfolioItem } from './types';

export const App: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [prefilledInquiry, setPrefilledInquiry] = useState<string>('');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledInquiry(serviceName);
    }
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const workElement = document.getElementById('work');
    if (workElement) {
      workElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F3F4F6] selection:bg-[#E50920] selection:text-white relative">
      {/* Navigation */}
      <Navbar onOpenConsultation={() => scrollToContact()} />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreWork={scrollToWork}
          onOpenConsultation={() => scrollToContact()}
        />

        {/* 2. About Section */}
        <About
          onOpenConsultation={() => scrollToContact()}
        />

        {/* 3. Services Section (9 Core Offerings) */}
        <ServicesSection
          onSelectService={(svc) => setSelectedService(svc)}
          onInquireDirect={(svcName) => scrollToContact(svcName)}
        />

        {/* 4. Curated Portfolio & Creative Gallery */}
        <PortfolioSection
          onSelectItem={(item) => setSelectedProject(item)}
          onInquireDirect={(projectName) => scrollToContact(projectName)}
        />

        {/* 5. Client & Project Highlights (DPS & Green Natura) */}
        <ClientHighlightsSection
          onOpenConsultation={() => scrollToContact()}
        />

        {/* 6. Why Choose Beyond Media (6 Core Pillars) */}
        <WhyBeyondMedia
          onOpenConsultation={() => scrollToContact()}
        />

        {/* 7. Our 5-Step Process (Discover, Strategize, Create, Execute, Analyze) */}
        <ProcessSection />

        {/* 8. 5-Member Core Team */}
        <TeamSection />

        {/* 9. FAQ Section */}
        <FAQSection />

        {/* 10. Contact & Lead Generation Section */}
        <ContactSection prefilledService={prefilledInquiry} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating 24/7 WhatsApp Concierge */}
      <WhatsAppFloatingButton />

      {/* Service Detail Deep-Dive Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={(svcName) => scrollToContact(svcName)}
      />

      {/* Portfolio Item Detail Modal */}
      <PortfolioModal
        item={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectForInquiry={(projectName) => scrollToContact(projectName)}
      />
    </div>
  );
};

export default App;
