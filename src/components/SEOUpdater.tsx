import { useEffect } from 'react';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SITE_SETTINGS_QUERY, type SanitySiteSettings } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';

function setMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

export default function SEOUpdater() {
  const { data: settings } = useSanityQuery<SanitySiteSettings | null>(
    SITE_SETTINGS_QUERY,
    {},
    null
  );

  useEffect(() => {
    if (!settings) return;

    // 1. Page Title
    if (settings.siteTitle) {
      document.title = settings.siteTitle;
      setMetaTag('property', 'og:title', settings.siteTitle);
      setMetaTag('name', 'twitter:title', settings.siteTitle);
    }

    // 2. Meta Description
    if (settings.metaDescription) {
      setMetaTag('name', 'description', settings.metaDescription);
      setMetaTag('property', 'og:description', settings.metaDescription);
      setMetaTag('name', 'twitter:description', settings.metaDescription);
    }

    // 3. Meta Keywords
    if (settings.metaKeywords) {
      setMetaTag('name', 'keywords', settings.metaKeywords);
    }

    // 4. Social Sharing Banner (OG Image)
    const shareImage = imgUrl(settings.ogImage);
    if (shareImage) {
      setMetaTag('property', 'og:image', shareImage);
      setMetaTag('name', 'twitter:image', shareImage);
      setMetaTag('name', 'twitter:card', 'summary_large_image');
    }

    // 5. Custom Meta Tags / Verification Tags (e.g. google-site-verification)
    // Clean up previously injected custom tags to avoid duplicates on re-render
    document.querySelectorAll('meta[data-sanity-custom="true"]').forEach((el) => el.remove());

    if (settings.customMetaTags) {
      const raw = settings.customMetaTags;
      const metaTagRegex = /<meta\s+([^>]+)\/?>/gi;
      let match: RegExpExecArray | null;
      let foundAny = false;

      while ((match = metaTagRegex.exec(raw)) !== null) {
        foundAny = true;
        const attrsString = match[1];
        const newMeta = document.createElement('meta');
        newMeta.setAttribute('data-sanity-custom', 'true');

        const attrRegex = /([a-zA-Z0-9_-]+)=["']([^"']*)["']/g;
        let attrMatch: RegExpExecArray | null;
        while ((attrMatch = attrRegex.exec(attrsString)) !== null) {
          newMeta.setAttribute(attrMatch[1], attrMatch[2]);
        }
        document.head.appendChild(newMeta);
      }

      // If user typed name="something" content="value" without the wrapping <meta ...> tag
      if (!foundAny && raw.trim()) {
        const lines = raw.split('\n').map((l) => l.trim()).filter(Boolean);
        for (const line of lines) {
          const attrRegex = /([a-zA-Z0-9_-]+)=["']([^"']*)["']/g;
          const newMeta = document.createElement('meta');
          newMeta.setAttribute('data-sanity-custom', 'true');
          let m: RegExpExecArray | null;
          let count = 0;
          while ((m = attrRegex.exec(line)) !== null) {
            newMeta.setAttribute(m[1], m[2]);
            count++;
          }
          if (count > 0) {
            document.head.appendChild(newMeta);
          }
        }
      }
    }
  }, [settings]);

  return null;
}
