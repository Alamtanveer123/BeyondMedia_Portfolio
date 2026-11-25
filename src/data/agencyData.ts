import { 
  AgencyConfig, 
  ServiceItem, 
  PortfolioItem, 
  ClientHighlight, 
  WhyChooseUsItem, 
  ProcessStep, 
  TeamMember,
  TargetAudience 
} from '../types';

/**
 * BEYOND MEDIA - CENTRAL CONFIGURATION
 * All agency contact channels, social handles and settings are managed here.
 */
export const agencyConfig: AgencyConfig = {
  name: "Beyond Media",
  tagline: "Helping Brands Go Beyond.",
  subTagline: "We build brands, create engaging content and deliver strategic digital marketing solutions that help businesses grow.",
  bio: "Branding • Content • Performance Marketing",
  instagramHandle: "@beyondmedia.inn",
  instagramUrl: "https://www.instagram.com/beyondmedia.inn/",
  whatsappNumber: "919999999999", // Replace with agency's official WhatsApp number
  whatsappDisplay: "+91 99999 99999",
  email: "contact@beyondmedia.inn", // Official contact email
  location: "New Delhi, India (Serving Global Brands)",
  officeHours: "Mon - Sat: 10:00 AM - 7:00 PM IST",
  availableForProjects: true
};

export const agencyStats = [
  { value: "100%", label: "Bespoke Brand Strategy", subtext: "No generic templates" },
  { value: "9+", label: "Full-Funnel Capabilities", subtext: "From branding to PPC" },
  { value: "24/7", label: "Strategic Support", subtext: "Dedicated communication" },
  { value: "5x", label: "Performance Focus", subtext: "Targeted ROI & growth" },
];

export const targetAudiences: TargetAudience[] = [
  {
    id: "startups",
    title: "Startups & Emerging Brands",
    painPoint: "Struggling to establish a distinct brand presence and generate qualified early leads.",
    solution: "Rapid brand identity creation, high-converting launch landing pages, and agile PPC campaigns.",
    recommendedService: "Branding & Paid Advertising",
    icon: "Rocket"
  },
  {
    id: "small-businesses",
    title: "Small Businesses",
    painPoint: "Low local reach and inconsistent social media posting without tangible sales.",
    solution: "Geo-targeted social media marketing, local SEO dominance, and retention email flows.",
    recommendedService: "Social Media & SEO",
    icon: "Store"
  },
  {
    id: "restaurants",
    title: "Restaurants & Cafés",
    painPoint: "High customer acquisition cost and lack of enticing visual content to drive walk-ins.",
    solution: "Mouth-watering short-form video reels, influencer outreach, and weekend Meta ad specials.",
    recommendedService: "Video Editing & Social Media",
    icon: "UtensilsCrossed"
  },
  {
    id: "real-estate",
    title: "Real Estate Companies",
    painPoint: "Poor lead quality from traditional portals and low site visit conversions.",
    solution: "High-intent Google Search ads, immersive project walkthroughs, and automated WhatsApp nurturing.",
    recommendedService: "Paid Advertising & Video",
    icon: "Building2"
  },
  {
    id: "coaching",
    title: "Coaching & EdTech Institutes",
    painPoint: "Difficulty filling upcoming batches and building personal authority.",
    solution: "Webinar funnels, authority-building content marketing, and high-converting student enrollment ads.",
    recommendedService: "Performance Marketing & Content",
    icon: "GraduationCap"
  },
  {
    id: "ecommerce",
    title: "E-Commerce Brands",
    painPoint: "Rising ad spend with plateauing ROAS and high cart abandonment rates.",
    solution: "Conversion rate optimized storefronts, retargeting funnels, and dynamic email flows.",
    recommendedService: "Paid Ads & Website Dev",
    icon: "ShoppingBag"
  },
  {
    id: "personal-brands",
    title: "Personal Brands & Creators",
    painPoint: "Time-consuming content creation and lack of monetizable audience architecture.",
    solution: "Viral short-form editing, personal visual identity, and newsletter monetization funnels.",
    recommendedService: "Content & Video Editing",
    icon: "Sparkles"
  },
  {
    id: "growing-businesses",
    title: "Growing Scaleups",
    painPoint: "Fragmented marketing across multiple vendors without unified analytics.",
    solution: "End-to-end growth partner managing brand consistency, paid media scale, and monthly reporting.",
    recommendedService: "Full-Funnel Growth Partnership",
    icon: "TrendingUp"
  }
];

export const servicesData: ServiceItem[] = [
  {
    id: "seo",
    name: "Search Engine Optimization (SEO)",
    shortDesc: "Dominate search engine rankings, capture high-intent buyer traffic, and build compounding organic revenue.",
    fullDesc: "We implement rigorous technical SEO, data-backed keyword research, on-page architecture optimization, and high-authority link acquisition to secure top organic rankings for your business.",
    icon: "Search",
    benefits: [
      "Consistent high-intent organic traffic without ongoing ad costs",
      "Enhanced domain authority and Google search visibility",
      "Local map pack dominance for brick-and-mortar locations",
      "Sustainable long-term client acquisition engine"
    ],
    deliverables: [
      "Comprehensive Technical SEO Audit",
      "Competitor & High-Intent Keyword Mapping",
      "On-Page Optimization & Schema Markup",
      "Monthly Organic Growth & Ranking Reports"
    ],
    idealFor: "Businesses seeking sustainable, cost-effective organic customer acquisition over time.",
    badge: "Organic Growth"
  },
  {
    id: "social-media",
    name: "Social Media Marketing",
    shortDesc: "Turn silent followers into active brand advocates and consistent revenue with strategic social presence.",
    fullDesc: "Beyond Media engineers organic social media strategies across Instagram, LinkedIn, and Facebook that capture attention, communicate brand values, and drive active inbound inquiries.",
    icon: "Share2",
    benefits: [
      "Cohesive, aesthetic feed design reflecting top-tier professionalism",
      "Algorithm-friendly scheduling and viral engagement strategies",
      "Community management and active direct message conversion",
      "Consistent brand storytelling that builds consumer trust"
    ],
    deliverables: [
      "Monthly Content Calendar & Post Scheduling",
      "Carousel & Static Creative Graphic Design",
      "Hashtag & Audio Trend Curation",
      "DM-to-Lead Follow-up Scripts & Analytics"
    ],
    idealFor: "Brands wanting an active, stylish, and highly-credible digital footprint.",
    badge: "Core Expertise"
  },
  {
    id: "content-marketing",
    name: "Content Marketing",
    shortDesc: "Educate, engage, and persuade your target audience with authoritative brand storytelling.",
    fullDesc: "Content is the bridge between obscurity and industry leadership. We create compelling blog articles, case studies, lead magnets, and newsletter copy that positions your business as the definitive choice.",
    icon: "FileText",
    benefits: [
      "Establishes undisputed topical authority in your niche",
      "Generates qualified inbound leads via high-value magnets",
      "Nurtures prospects across extended sales cycles",
      "Fuels your SEO, email, and social distribution channels"
    ],
    deliverables: [
      "Content Strategy & Editorial Calendar",
      "SEO-Optimized Long-Form Articles & Guides",
      "Lead Magnets, Whitepapers & E-books",
      "Repurposing Framework for Multi-Platform Distribution"
    ],
    idealFor: "B2B, coaches, consultants, and companies selling higher-ticket offerings."
  },
  {
    id: "ppc-advertising",
    name: "Paid Advertising (PPC)",
    shortDesc: "Scalable customer acquisition on Meta Ads (Instagram/Facebook) and Google Ads with aggressive ROI focus.",
    fullDesc: "We engineer laser-targeted paid ad campaigns with rigorous A/B testing, scroll-stopping creative hooks, custom landing page alignment, and precise conversion tracking to maximize every dollar spent.",
    icon: "Target",
    benefits: [
      "Immediate surge in high-intent prospective client leads",
      "Granular demographic and behavioral audience targeting",
      "Continuous algorithmic optimization to lower CPA",
      "Direct attribution and transparent ROAS tracking"
    ],
    deliverables: [
      "Meta Ads & Google Ads Campaign Setup",
      "Creative Ad Copywriting & High-Converting Visuals",
      "Pixel, CAPI, and Conversion Tracking Configuration",
      "Real-Time Ad Spend & ROI Performance Dashboard"
    ],
    idealFor: "Businesses ready to accelerate revenue with predictable customer acquisition.",
    badge: "High ROI"
  },
  {
    id: "email-marketing",
    name: "Email Marketing & Automation",
    shortDesc: "Monetize your existing audience with high-converting automated sequences and personalized campaigns.",
    fullDesc: "Email delivers the highest ROI in digital marketing. We build automated welcome series, abandoned cart recovery funnels, re-engagement campaigns, and weekly newsletters that turn subscribers into repeat buyers.",
    icon: "Mail",
    benefits: [
      "Own your audience independent of social algorithm fluctuations",
      "Automated 24/7 revenue generation through smart triggered flows",
      "High deliverability rates with clean list hygiene",
      "Enhanced customer lifetime value (LTV) and repeat orders"
    ],
    deliverables: [
      "ESP Setup (Klaviyo, Mailchimp, ActiveCampaign)",
      "Automated Customer Journey & Flow Architecture",
      "Custom Branded Responsive Email Templates",
      "Segmentation, Subject Line A/B Testing & Weekly Sends"
    ],
    idealFor: "E-commerce stores, SaaS platforms, course creators, and service providers."
  },
  {
    id: "analytics-reporting",
    name: "Analytics & Reporting",
    shortDesc: "Transparent, real-time insights and data-informed recommendations to steer your growth decisions.",
    fullDesc: "No vanity metrics or confusing jargon. We set up enterprise analytics (GA4, Looker Studio, Meta Events) and provide clear, actionable monthly reporting showing exactly where your leads and revenue originate.",
    icon: "BarChart3",
    benefits: [
      "Clear visibility on which marketing channels generate actual revenue",
      "Elimination of wasted ad spend and low-performing campaigns",
      "Data-backed roadmap for scaling budgets and creative assets",
      "Honest, transparent reporting without hidden metrics"
    ],
    deliverables: [
      "Google Analytics 4 & Tag Manager Setup",
      "Interactive Custom Looker Studio Dashboard",
      "Attribution Modeling & Funnel Drop-off Analysis",
      "Monthly Strategic Growth Review Video & Call"
    ],
    idealFor: "Founders and marketing directors wanting transparent clarity on marketing ROI."
  },
  {
    id: "branding-creative",
    name: "Branding & Creative Design",
    shortDesc: "Bold visual identities, brand guideline systems, and striking collateral that make you unforgettable.",
    fullDesc: "Your brand is what people say about you when you leave the room. We forge memorable brand identities—from logo design and color theory to typography rules and packaging—that convey premium credibility.",
    icon: "Palette",
    benefits: [
      "Command premium pricing with cohesive luxury aesthetics",
      "Instant brand recognition across physical and digital touchpoints",
      "Comprehensive guidelines ensuring design consistency across teams",
      "Unique personality that outshines generic market competitors"
    ],
    deliverables: [
      "Primary & Secondary Logo Architecture",
      "Complete Brand Style Guide (Color, Typography, Imagery)",
      "Business Stationery & Digital Asset Kits",
      "Social Media Branding Templates & Vector Guidelines"
    ],
    idealFor: "New startups launching, or established companies undergoing rebranding.",
    badge: "Flagship Service"
  },
  {
    id: "video-editing",
    name: "Video Editing & Motion Graphics",
    shortDesc: "Dynamic Reels, TikToks, YouTube shorts, and cinematic commercials crafted for retention and viral reach.",
    fullDesc: "Short-form video is the #1 growth driver in modern marketing. Our post-production team crafts high-tempo, subtitled, sound-designed, and motion-enhanced video assets engineered to retain attention from second one.",
    icon: "Video",
    benefits: [
      "Massive organic reach on Instagram Reels, YouTube Shorts, & TikTok",
      "High audience retention rates through fast-paced visual hooks",
      "Professional sound design, SFX, color grading, and b-roll cuts",
      "Seamless turn-around of raw footage into polished content"
    ],
    deliverables: [
      "Pacing, Hook Optimization & Dynamic Subtitles",
      "Sound Design, Audio Cleanup & Licensed Music",
      "Motion Graphics, Lower Thirds & CTA Overlays",
      "Multi-Platform Aspect Ratio Exports (9:16, 16:9, 1:1)"
    ],
    idealFor: "Founders, restaurants, influencers, and brands investing in video-first marketing.",
    badge: "High Engagement"
  },
  {
    id: "website-development",
    name: "Website Development",
    shortDesc: "Blazing-fast, responsive, conversion-optimized websites and landing pages built to turn visitors into clients.",
    fullDesc: "We build modern, aesthetic, mobile-first web platforms using modern tech stacks. Designed with conversion science, micro-interactions, seamless contact forms, and rapid page speed that keeps bounce rates near zero.",
    icon: "Globe",
    benefits: [
      "Designed specifically for lead generation and client inquiries",
      "Flawless responsiveness across iPhone, Android, tablets, and desktops",
      "Sub-second load speeds boosting both SEO and user retention",
      "Easy content management and seamless CRM / WhatsApp integrations"
    ],
    deliverables: [
      "Custom UI/UX Wireframing & Interactive Prototyping",
      "Modern React / Next.js / Tailwind CSS Development",
      "Speed Optimization & Security Hardening",
      "Lead Capture Forms, WhatsApp Widgets & Analytics Integration"
    ],
    idealFor: "Any business needing a high-performance 24/7 digital sales representative."
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "proj-dps",
    title: "DPS Creative Concept & Academic Campaign",
    category: "Promotional Creatives",
    categoryLabel: "Promotional Creatives",
    type: "highlight",
    typeLabel: "Profile Highlight Concept",
    clientOrBrand: "DPS (Highlight Reference)",
    description: "High-impact educational admission campaign concept and social promotional creative suite referenced from Beyond Media's official Instagram highlights.",
    challenge: "Engaging modern parents and prospective students amidst a crowded educational landscape while maintaining academic prestige.",
    solution: "Bold typography hierarchy, vibrant contrast, concise value propositions on excellence, infrastructure, and holistic development.",
    impact: "Showcases structured educational creative direction with clear admission inquiry call-to-actions.",
    tags: ["Academic Branding", "Social Ad Banner", "Admission Campaign", "Typography"],
    aspectRatio: "square",
    featured: true,
    colors: ["#E50920", "#080808", "#C5A44D"],
    previewGradient: "from-red-950 via-neutral-900 to-black"
  },
  {
    id: "proj-green-natura",
    title: "Green Natura Social & Organic Identity",
    category: "Social Media Designs",
    categoryLabel: "Social Media Designs",
    type: "highlight",
    typeLabel: "Profile Highlight Concept",
    clientOrBrand: "Green Natura (Highlight Reference)",
    description: "Modern organic lifestyle creative design concept referenced in Beyond Media's Instagram profile highlights, focusing on fresh aesthetics and mindful wellness.",
    challenge: "Translating natural, botanical ethos into crisp modern digital visuals that stand out in crowded feeds.",
    solution: "Harmonious balance of earthy tones with bold Beyond Media contrast, crisp product mockups, and informative carousel layouts.",
    impact: "Refined aesthetic presence that blends wellness authenticity with high commercial appeal.",
    tags: ["Green Natura", "Organic Branding", "Feed Aesthetic", "Product Showcase"],
    aspectRatio: "square",
    featured: true,
    colors: ["#2E7D32", "#080808", "#FFFFFF"],
    previewGradient: "from-emerald-950 via-neutral-900 to-black"
  },
  {
    id: "proj-beyond-brand",
    title: "Beyond Media Official Visual Identity",
    category: "Branding",
    categoryLabel: "Branding & Identity",
    type: "sample",
    typeLabel: "Official Agency System",
    clientOrBrand: "Beyond Media Internal Identity",
    description: "The core design language of Beyond Media: Matte Black (#080808), Bold Red (#E50920), Pure White (#FFFFFF) with Gold (#C5A44D) logo accents.",
    challenge: "Creating an authoritative agency aesthetic that commands instant respect from high-ticket business clients.",
    solution: "Precision grid systems, minimalist kinetic typography, subtle red glow highlights, and gold luxury emblem accents.",
    impact: "A distinctive, memorable agency mark built for scale across all digital and print mediums.",
    tags: ["Brand Guide", "Visual Identity", "Black & Gold Logo", "Kinetic Typography"],
    aspectRatio: "wide",
    featured: true,
    colors: ["#080808", "#E50920", "#C5A44D"],
    previewGradient: "from-black via-neutral-950 to-red-950"
  },
  {
    id: "proj-restaurant-launch",
    title: "Culinary Flame — Dining Launch Campaign",
    category: "Social Media Designs",
    categoryLabel: "Social Media Designs",
    type: "concept",
    typeLabel: "Sample Concept Work",
    clientOrBrand: "Culinary Concept Suite",
    description: "High-contrast appetizing social promotional flyers and weekend booking creatives tailored for modern urban dining and café brands.",
    challenge: "Driving weekend table reservations through visually appetizing and urgent social media assets.",
    solution: "Saturated imagery, dark matte backgrounds with vivid red accents highlighting chef specials and reservation links.",
    impact: "Engineered specifically to elevate perceived culinary value and boost direct reservation clicks.",
    tags: ["Restaurant Promo", "Food Photography Layout", "Instagram Carousel", "Special Offers"],
    aspectRatio: "square",
    featured: true,
    colors: ["#E50920", "#181818", "#F59E0B"],
    previewGradient: "from-red-950 via-neutral-900 to-black"
  },
  {
    id: "proj-reels-retention",
    title: "High-Retention Short-Form Reels Suite",
    category: "Video Editing",
    categoryLabel: "Video Editing",
    type: "sample",
    typeLabel: "Sample Editing System",
    clientOrBrand: "Beyond Video Lab",
    description: "Fast-paced, kinetic captioning and sound-designed short-form video framework designed for viral reach on Instagram Reels and YouTube Shorts.",
    challenge: "Retaining viewer attention beyond the critical 3-second mark on algorithmic social feeds.",
    solution: "Visual zoom cuts every 1.8 seconds, animated text tracking, sound effects synced to kinetic gestures, and strong ending loops.",
    impact: "Consistently achieves over 65% average percentage viewed (APV) on test distributions.",
    tags: ["Short-Form Video", "Kinetic Subtitles", "Sound Design", "Viral Hooks"],
    aspectRatio: "tall",
    featured: true,
    colors: ["#080808", "#E50920", "#FFFFFF"],
    previewGradient: "from-neutral-950 via-red-950 to-black"
  },
  {
    id: "proj-meta-ads-scale",
    title: "Performance Ad Creatives & ROAS Hooks",
    category: "Advertising Campaigns",
    categoryLabel: "Paid Advertising",
    type: "concept",
    typeLabel: "Sample Ad Framework",
    clientOrBrand: "E-Commerce Growth Concept",
    description: "Multi-variant ad creative framework engineered to test scroll-stopping hooks, problem-agitation angles, and direct call-to-actions.",
    challenge: "Creative fatigue in paid advertising causing rising Customer Acquisition Costs (CAC).",
    solution: "Developing 5 distinct visual hook angles per product offer, combining UGC formats with polished brand framing.",
    impact: "Designed to unlock lower cost-per-click and scalable ad spend on Meta and Google.",
    tags: ["Meta Ads", "Paid Social", "ROAS Optimization", "A/B Creative"],
    aspectRatio: "square",
    featured: false,
    colors: ["#E50920", "#080808", "#C5A44D"],
    previewGradient: "from-red-950 via-black to-neutral-900"
  },
  {
    id: "proj-real-estate-web",
    title: "Apex Horizon — Luxury Real Estate Web Experience",
    category: "Website Projects",
    categoryLabel: "Website Projects",
    type: "concept",
    typeLabel: "Sample Web Project",
    clientOrBrand: "Apex Horizon Concept",
    description: "Dark-mode, ultra-fast luxury property showcase website featuring interactive floorplans, lead capture modals, and WhatsApp tour scheduling.",
    challenge: "Converting high-net-worth real estate buyers into scheduled private property walkthroughs.",
    solution: "Cinematic full-width imagery, smooth scroll interactions, zero lag loading, and persistent one-click VIP WhatsApp concierge.",
    impact: "Optimized for 4.2% visitor-to-inquiry conversion rate across mobile devices.",
    tags: ["Web Design", "React & Tailwind", "Lead Capture", "WhatsApp Booking"],
    aspectRatio: "wide",
    featured: true,
    colors: ["#080808", "#C5A44D", "#FFFFFF"],
    previewGradient: "from-black via-neutral-950 to-amber-950"
  },
  {
    id: "proj-fitness-rebrand",
    title: "Vanguard Fitness — High-Energy Social Creatives",
    category: "Promotional Creatives",
    categoryLabel: "Promotional Creatives",
    type: "concept",
    typeLabel: "Sample Creative Suite",
    clientOrBrand: "Vanguard Concept",
    description: "Bold red and matte black motivational membership drive banners and personal trainer spotlight carousels.",
    challenge: "Inspiring new gym signups with high-energy visual impact that cuts through standard fitness cliches.",
    solution: "Aggressive red lighting treatments, dynamic bold typography, and clear limited-time promotional offers.",
    impact: "High-contrast visual appeal engineered for local paid social promotions.",
    tags: ["Fitness Brand", "Membership Campaign", "Red Contrast", "Social Banner"],
    aspectRatio: "square",
    featured: false,
    colors: ["#E50920", "#080808", "#FFFFFF"],
    previewGradient: "from-red-950 via-neutral-900 to-black"
  }
];

export const clientHighlights: ClientHighlight[] = [
  {
    id: "dps-highlight",
    name: "DPS",
    category: "Education & Institutional",
    source: "Instagram Profile Highlight Reference",
    status: "Profile Highlight",
    summary: "Featured in Beyond Media's official Instagram highlights, representing academic campaigns, admission drives, and institutional promotional materials.",
    deliverables: ["Admission Campaign Creatives", "Institutional Social Media", "Event Announcements"],
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/30"
  },
  {
    id: "green-natura-highlight",
    name: "Green Natura",
    category: "Organic Lifestyle & Wellness",
    source: "Instagram Profile Highlight Reference",
    status: "Profile Highlight",
    summary: "Featured in Beyond Media's official Instagram highlights, demonstrating organic branding, wellness feed aesthetics, and natural product promotion.",
    deliverables: ["Botanical Feed Aesthetic", "Organic Brand Positioning", "Product Highlight Graphics"],
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
  },
  {
    id: "client-placeholder-1",
    name: "Your Brand Here",
    category: "Scaleup & Growth Partnership",
    source: "Open Client Slot",
    status: "Sample Showcase",
    summary: "We are actively taking on ambitious businesses ready to scale their branding, content, and performance marketing to the next level.",
    deliverables: ["Complete Brand Identity", "Full-Funnel Paid Ads", "Scalable Growth Strategy"],
    badgeColor: "bg-gold-500/10 text-brand-gold border-brand-gold/30"
  }
];

export const whyChooseUs: WhyChooseUsItem[] = [
  {
    id: "creative-thinking",
    title: "Creative Thinking",
    subtitle: "Ideas that pierce through feed fatigue",
    description: "We don't do cookie-cutter designs or boring stock photos. Every creative is crafted from scratch with psychological hooks designed to stop thumbs and evoke desire.",
    icon: "Lightbulb",
    metric: "100% Custom Visuals"
  },
  {
    id: "strategic-execution",
    title: "Strategic Execution",
    subtitle: "Art backed by commercial purpose",
    description: "Creativity without strategy is just art. We align every design, copy sentence, and video cut to direct commercial objectives: lead generation, brand authority, and revenue.",
    icon: "Target",
    metric: "Strategy-First Mindset"
  },
  {
    id: "consistent-communication",
    title: "Consistent Communication",
    subtitle: "Zero radio silence, total clarity",
    description: "You'll never wonder what we're working on. We provide dedicated WhatsApp channel support, structured weekly milestones, and rapid feedback turnarounds.",
    icon: "MessageSquare",
    metric: "Direct WhatsApp Line"
  },
  {
    id: "brand-focused-approach",
    title: "Brand-Focused Approach",
    subtitle: "Building long-term enterprise equity",
    description: "Quick hacks fade, but iconic brands endure. We protect your brand integrity with unified color palettes, typography discipline, and coherent narrative across all touchpoints.",
    icon: "ShieldCheck",
    metric: "Unified Brand Equity"
  },
  {
    id: "data-informed-decisions",
    title: "Data-Informed Decisions",
    subtitle: "Validated by metrics, not subjective guesswork",
    description: "We track Click-Through Rates (CTR), Cost Per Acquisition (CPA), Return On Ad Spend (ROAS), and engagement retention to continually double down on what works.",
    icon: "LineChart",
    metric: "Data-Backed Iteration"
  },
  {
    id: "customized-solutions",
    title: "Customized Solutions",
    subtitle: "Tailored to your specific growth stage",
    description: "Whether you're an ambitious local startup or an expanding e-commerce enterprise, our marketing solutions are bespoke to your audience, budget, and growth goals.",
    icon: "Sliders",
    metric: "Tailored Roadmaps"
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    tagline: "Uncover Your Core Advantage",
    description: "We deep-dive into your business, current bottlenecks, target customers, competitors, and unit economics to uncover your highest-leverage growth opportunities.",
    deliverable: "Audit Report & Opportunity Map",
    icon: "Compass"
  },
  {
    number: "02",
    title: "Strategize",
    tagline: "Blueprint The Growth Engine",
    description: "We architect a tailored action plan defining your visual tone, core messaging angles, marketing funnels, campaign budgets, and KPI milestones.",
    deliverable: "Strategic Brand & Media Roadmap",
    icon: "Layers"
  },
  {
    number: "03",
    title: "Create",
    tagline: "Craft Scroll-Stopping Assets",
    description: "Our design and content team builds high-converting creatives, video edits, ad copy, and web pages that embody the Beyond Media standard of excellence.",
    deliverable: "Production Creative Suite & Assets",
    icon: "Wand2"
  },
  {
    number: "04",
    title: "Execute",
    tagline: "Launch With Precision",
    description: "We deploy campaigns across paid channels, publish scheduled content calendars, activate email flows, and run strict conversion-tracking verification.",
    deliverable: "Live Campaigns & Multi-Channel Deployment",
    icon: "Rocket"
  },
  {
    number: "05",
    title: "Analyze & Improve",
    tagline: "Optimize For Compounding Scale",
    description: "We monitor performance daily, prune underperforming creatives, scale top-performing ads, and provide transparent insights on your growth.",
    deliverable: "Performance Analytics & Scale Plan",
    icon: "TrendingUp"
  }
];

/**
 * 5-Member Team Section
 * Formatted with editable placeholders as specified in project requirements.
 */
export const teamMembers: TeamMember[] = [
  {
    id: "team-1",
    name: "[Founder / Creative Director]",
    designation: "Founder & Creative Director",
    role: "Brand Strategy & Visual Direction",
    shortBio: "Leads creative vision, brand architecture, and campaign strategy for Beyond Media clients, ensuring bold and memorable execution.",
    avatarPlaceholder: "CD",
    expertise: ["Brand Architecture", "Creative Direction", "Campaign Concepting"],
    social: {
      instagram: "https://www.instagram.com/beyondmedia.inn/",
      linkedin: "#"
    },
    isPlaceholder: true
  },
  {
    id: "team-2",
    name: "[Lead Performance Marketer]",
    designation: "Head of Performance Marketing",
    role: "Paid Ads & ROAS Optimization",
    shortBio: "Specializes in high-intent Meta and Google PPC campaigns, audience segmentation, conversion rate optimization, and rapid budget scaling.",
    avatarPlaceholder: "PM",
    expertise: ["Meta Ads", "Google PPC", "Funnel Analytics", "ROAS Scaling"],
    social: {
      linkedin: "#",
      twitter: "#"
    },
    isPlaceholder: true
  },
  {
    id: "team-3",
    name: "[Senior UI/UX & Web Developer]",
    designation: "Lead UI/UX & Web Engineer",
    role: "Digital Experiences & Web Platforms",
    shortBio: "Crafts high-performance, dark-aesthetic responsive websites, landing pages, and interactive web tools engineered for maximum inquiry conversions.",
    avatarPlaceholder: "WD",
    expertise: ["React / Next.js", "Tailwind CSS", "Conversion UX", "Page Speed"],
    social: {
      linkedin: "#",
      twitter: "#"
    },
    isPlaceholder: true
  },
  {
    id: "team-4",
    name: "[Senior Content & Video Strategist]",
    designation: "Head of Video & Content",
    role: "Short-Form Video & Narrative",
    shortBio: "Master of visual hooks, kinetic motion graphics, and audio storytelling that capture audience attention and generate organic momentum.",
    avatarPlaceholder: "VS",
    expertise: ["Short-Form Video", "Kinetic Subtitles", "Motion Design", "Scriptwriting"],
    social: {
      instagram: "https://www.instagram.com/beyondmedia.inn/",
      linkedin: "#"
    },
    isPlaceholder: true
  },
  {
    id: "team-5",
    name: "[Brand & Social Media Manager]",
    designation: "Brand & Social Media Lead",
    role: "Community & Channel Distribution",
    shortBio: "Manages social media presence, community engagement, content distribution calendars, and organic brand positioning.",
    avatarPlaceholder: "SM",
    expertise: ["Instagram Growth", "Content Calendars", "Community Relations", "Copywriting"],
    social: {
      instagram: "https://www.instagram.com/beyondmedia.inn/",
      linkedin: "#"
    },
    isPlaceholder: true
  }
];

export const faqs = [
  {
    question: "How does Beyond Media differ from other digital marketing agencies?",
    answer: "Most agencies either focus purely on aesthetics (pretty designs with zero sales strategy) or pure performance (ugly ads that damage brand equity). Beyond Media bridges both: we build bold, world-class branding combined with aggressive performance marketing that actually converts into paying clients."
  },
  {
    question: "How do we get started working together?",
    answer: "You can click any 'Let's Build Your Brand' or 'WhatsApp Us' button to start an initial conversation. We'll discuss your current business objectives, review your existing assets, and propose a tailored strategy designed specifically for your stage of growth."
  },
  {
    question: "Can I choose individual services, or do I need a full package?",
    answer: "We offer both! You can engage Beyond Media for specific deliverables (such as a complete brand identity, dedicated video editing retainer, or landing page development) or partner with us for end-to-end full-funnel digital marketing."
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in working with small businesses, startups, restaurants, real estate firms, coaching & educational institutes, e-commerce brands, and personal creators looking to scale."
  },
  {
    question: "How long before we start seeing tangible results?",
    answer: "Paid advertising campaigns and web landing pages often generate qualified leads within the first 7 to 14 days of launch. Brand overhauls and organic SEO compound over 60 to 90 days, creating a permanent competitive moat."
  }
];
