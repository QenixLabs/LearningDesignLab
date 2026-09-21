import type { SanityImageSource } from '@sanity/image-url';

// ---------- Team ----------
export interface SanityTeamMember {
  name: string;
  role: string;
  description?: string;
  image?: SanityImageSource;
  imagePosition?: string;
  linkedin?: string;
  isFounder: boolean;
}

export const TEAM_QUERY = `
  *[_type == "teamMember"] | order(orderRank asc) {
    name, role, "description": bio, image, imagePosition, linkedin, isFounder
  }
`;

// ---------- Publications ----------
export interface SanityPublication {
  citation: string;
  title: string;
  venue?: string;
  type: string;
  href: string;
}

export const PUBLICATIONS_QUERY = `
  *[_type == "publication"] | order(orderRank asc) {
    citation, title, "venue": coalesce(venue, ''), type, href
  }
`;

// ---------- Conferences ----------
export interface SanityConference {
  title: string;
  year?: string;
  location?: string;
  description?: string;
  image?: SanityImageSource;
  images?: SanityImageSource[];
  imageAlt: string;
  imagePosition?: string;
  actions?: { label: string; href: string }[];
  tags?: string[];
}

export const CONFERENCES_QUERY = `
  *[_type == "conference"] | order(orderRank asc) {
    title, "year": coalesce(year, ''), "location": coalesce(location, ''),
    "description": coalesce(description, ''), image, images, imageAlt,
    imagePosition, actions, tags
  }
`;

// ---------- Projects ----------
export interface SanityProject {
  section: string;
  client: string;
  title: string;
  description: string;
  image?: SanityImageSource;
  imageAlt: string;
  actions?: { label: string; href: string }[];
  caseStudySlug?: string;
  caseStudy?: { slug?: string };
}

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(orderRank asc) {
    section, client, title, description, image, imageAlt, actions,
    caseStudySlug,
    "caseStudy": caseStudy->{ "slug": slug.current }
  }
`;

// ---------- Case Studies ----------
export interface SanityCaseStudy {
  slug: { current: string };
  client: string;
  title: string;
  subtitle?: string;
  category?: string;
  heroImage?: SanityImageSource;
  heroImageAlt?: string;
  nutshell?: { label: string; value: string }[];
  intro?: string;
  challengeCallout?: string;
  sections?: {
    heading?: string;
    level?: number;
    paragraphs?: string[];
    list?: string[];
    gridItems?: { title: string; description: string }[];
  }[];
  curriculumStructure?: {
    title: string;
    description?: string;
    themes?: { theme: string; courses: string[] }[];
    stages?: { stage: string; title: string; description: string }[];
  };
  quote?: {
    text: string;
    attribution: string;
    role: string;
  };
  impactStats?: {
    value: string;
    label: string;
    subtext?: string;
  }[];
  lessonsLearned?: {
    number: number;
    text: string;
  }[];
  actions?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
}

export const CASE_STUDIES_QUERY = `
  *[_type == "caseStudy"] | order(orderRank asc) {
    slug, client, title, subtitle, category, heroImage, heroImageAlt,
    nutshell, intro, challengeCallout, sections, curriculumStructure,
    quote, impactStats, lessonsLearned, actions
  }
`;

export const CASE_STUDY_BY_SLUG_QUERY = `
  *[_type == "caseStudy" && slug.current == $slug][0] {
    slug, client, title, subtitle, category, heroImage, heroImageAlt,
    nutshell, intro, challengeCallout, sections, curriculumStructure,
    quote, impactStats, lessonsLearned, actions
  }
`;

// ---------- Testimonials ----------
export interface SanityTestimonial {
  quote: string;
  highlight?: string;
  attribution: string;
}

export const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(orderRank asc) { quote, highlight, attribution }
`;

// ---------- Singletons ----------
export interface SanitySiteSettings {
  contactEmail: string;
  linkedinUrl?: string;
  footerTagline?: string;
}

export const SITE_SETTINGS_QUERY = `
  *[_id == "siteSettings"][0] { contactEmail, linkedinUrl, footerTagline }
`;

export interface SanityHomePage {
  heroTitle: string;
  heroSubtext: string;
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  stats?: { value: number; suffix?: string; label: string }[];
  selectedWorkProjects?: string[];
  selectedWorkScholarships?: string[];
  selectedWorkBlogs?: string[];
  presentations?: { name: string; image?: SanityImageSource }[];
  verticalsHeading?: string;
  verticals?: { label: string; image?: SanityImageSource }[];
  differentiatorsHeading?: string;
  differentiators?: { title: string; description: string }[];
  selectedWorkHeading?: string;
  contactHeading?: string;
  contactSubtext?: string;
}

export const HOME_PAGE_QUERY = `
  *[_id == "homePage"][0] {
    heroTitle, heroSubtext, primaryCtaLabel, secondaryCtaLabel,
    stats, selectedWorkProjects, selectedWorkScholarships, selectedWorkBlogs,
    presentations,
    verticalsHeading, verticals,
    differentiatorsHeading, differentiators,
    selectedWorkHeading,
    contactHeading, contactSubtext
  }
`;

export interface SanityServiceItem {
  title?: string;
  description?: string;
  text?: string;
}

export interface SanityServiceSector {
  title: string;
  description?: string;
  image?: SanityImageSource;
}

export interface SanityServiceOffering {
  label: string;
  highlight?: string;
}

export interface SanityMethodologyField {
  name: string;
  highlight?: boolean;
}

export interface SanityServiceProofPoint {
  title: string;
  image?: SanityImageSource;
}

export interface SanityServiceWorkshop {
  title: string;
  meta?: string;
  description: string;
}

export interface SanityServiceCard {
  title: string;
  paragraphs: string[];
}

export interface SanityServiceExampleProject {
  title: string;
  image?: SanityImageSource;
}

export interface SanityServicePartner {
  name: string;
  logo?: SanityImageSource;
}

export interface SanityServicePage {
  serviceId: string;
  number?: string;
  title: string;
  description: string;
  items?: SanityServiceItem[];
  itemsHeading?: string;
  approachNote?: string;
  outcomeNote?: string;
  differentiator?: string;
  cta?: string;
  dark?: boolean;

  // Hero section
  heroHeading?: string;
  heroSubtext?: string;
  heroCtaLabel?: string;
  heroStats?: { value: number; suffix?: string; label: string; decimals?: number }[];
  heroFootnote?: string;

  // Problem section
  problemHeading?: string;
  problemText?: string;
  problemParagraphs?: string[];

  // Process / Strategy section
  processHeading?: string;
  processSteps?: string[];

  // Offerings section (Course Development)
  offeringsHeading?: string;
  offerings?: (SanityServiceOffering | string)[];

  // Faculty workshops & accelerator
  workshopsHeading?: string;
  workshops?: SanityServiceWorkshop[];
  acceleratorHeading?: string;
  acceleratorMeta?: string;
  acceleratorParagraphs?: string[];

  // Service Cards (Research & Evaluation / Advisory)
  serviceCardsHeading?: string;
  serviceCards?: SanityServiceCard[];

  // Example Projects (Research & Evaluation / Advisory)
  exampleProjectsHeading?: string;
  exampleProjects?: SanityServiceExampleProject[];
  exampleProjectsCtaText?: string;
  exampleProjectsCtaHref?: string;

  // Methodology
  methodologyHeading?: string;
  methodologyFields?: (SanityMethodologyField | string)[];

  // Course Development extras
  sectorsHeading?: string;
  sectors?: SanityServiceSector[];
  outcomesHeading?: string;
  outcomes?: string[];
  proofPointsHeading?: string;
  proofPoints?: SanityServiceProofPoint[];

  // Social Proof (Faculty)
  socialProofHeading?: string;
  socialProofPartners?: SanityServicePartner[];

  // Custom contact CTA heading
  contactHeading?: string;
}

export const SERVICE_PAGES_QUERY = `
  *[_type == "servicePage"] {
    serviceId, number, title, description, items, itemsHeading,
    approachNote, outcomeNote, differentiator, cta, dark,
    heroHeading, heroSubtext, heroCtaLabel, heroStats, heroFootnote,
    problemHeading, problemText, problemParagraphs,
    processHeading, processSteps,
    offeringsHeading, offerings,
    workshopsHeading, workshops,
    acceleratorHeading, acceleratorMeta, acceleratorParagraphs,
    serviceCardsHeading, serviceCards,
    exampleProjectsHeading, exampleProjects, exampleProjectsCtaText, exampleProjectsCtaHref,
    methodologyHeading, methodologyFields,
    sectorsHeading, sectors,
    outcomesHeading, outcomes,
    proofPointsHeading, proofPoints,
    socialProofHeading, socialProofPartners,
    contactHeading
  }
`;

export interface SanityPageCopy {
  pageKey: string;
  heading: string;
  intro?: string;
}

export const PAGE_COPY_QUERY = `
  *[_id == $id][0] { pageKey, heading, intro }
`;
