import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url';
import { sanityClient } from './client';

const builder = sanityClient ? createImageUrlBuilder(sanityClient) : null;

/**
 * Accepts a Sanity image object (from GROQ) or a local string path (fallback).
 * Returns a CDN URL with hotspot/crop applied, or the string unchanged.
 */
export function imgUrl(source: SanityImageSource | string | undefined, width = 800): string | undefined {
  if (!source) return undefined;
  if (typeof source === 'string') return source;
  if (!builder) return undefined;
  try {
    // If source is an object without an asset or ref, return undefined safely
    if (typeof source === 'object') {
      const srcObj = source as any;
      if (!srcObj.asset && !srcObj._ref) {
        return undefined;
      }
    }
    return builder.image(source).width(width).auto('format').url();
  } catch {
    return undefined;
  }
}
