export interface AgencyConfig {
  name: string;
  tagline: string;
  subTagline: string;
  bio: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappNumber: string; // e.g. "+919876543210" without spaces for api link
  whatsappDisplay: string;
  email: string;
  location: string;
  officeHours: string;
  availableForProjects: boolean;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  icon: string;
  benefits: string[];
  deliverables: string[];
  idealFor: string;
  badge?: string;
}

export type ProjectCategory = 
  | 'All'
  | 'Social Media Designs'
  | 'Promotional Creatives'
  | 'Branding'
  | 'Video Editing'
  | 'Advertising Campaigns'
  | 'Website Projects';

export interface PortfolioItem {
  id: string;
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  type: 'concept' | 'highlight' | 'sample';
  typeLabel: string;
  clientOrBrand: string;
  description: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  tags: string[];
  aspectRatio?: 'square' | 'wide' | 'tall';
  featured: boolean;
  colors: string[];
  previewGradient: string;
}

export interface ClientHighlight {
  id: string;
  name: string;
  category: string;
  source: string;
  status: 'Profile Highlight' | 'Concept Initiative' | 'Sample Showcase';
  summary: string;
  deliverables: string[];
  badgeColor?: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  metric: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
  icon: string;
}

export interface TeamMember {
  id: string;
  name: string;
  designation: string;
  role: string;
  shortBio: string;
  avatarPlaceholder: string;
  expertise: string[];
  social: {
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
  isPlaceholder: boolean;
}

export interface TargetAudience {
  id: string;
  title: string;
  painPoint: string;
  solution: string;
  recommendedService: string;
  icon: string;
}
