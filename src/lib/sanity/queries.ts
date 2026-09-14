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
}

export const PROJECTS_QUERY = `
  *[_type == "project"] | order(orderRank asc) {
    section, client, title, description, image, imageAlt, actions
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
}

export const HOME_PAGE_QUERY = `
  *[_id == "homePage"][0] {
    heroTitle, heroSubtext, primaryCtaLabel, secondaryCtaLabel,
    stats, selectedWorkProjects, selectedWorkScholarships, selectedWorkBlogs,
    presentations
  }
`;

export interface SanityServiceItem {
  title?: string;
  description?: string;
  text?: string;
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
}

export const SERVICE_PAGES_QUERY = `
  *[_type == "servicePage"] {
    serviceId, number, title, description, items, itemsHeading,
    approachNote, outcomeNote, differentiator, cta, dark
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
