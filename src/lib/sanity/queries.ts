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
