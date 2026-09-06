import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import { sanityClient } from './client';

const builder = imageUrlBuilder(sanityClient);

/**
 * Accepts a Sanity image object (from GROQ) or a local string path (fallback).
 * Returns a CDN URL with hotspot/crop applied, or the string unchanged.
 */
export function imgUrl(source: SanityImageSource | string | undefined, width = 800): string | undefined {
  if (!source) return undefined;
  if (typeof source === 'string') return source;
  return builder.image(source).width(width).auto('format').url();
}
