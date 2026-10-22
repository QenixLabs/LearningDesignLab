import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { scrollToTop } from '../lib/utils';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  useLayoutEffect(() => {
    if (location.hash) {
      const rawId = location.hash.replace('#', '');
      let id = rawId;
      try {
        id = decodeURIComponent(rawId);
      } catch {
        // ignore
      }

      const findAndScroll = () => {
        const el =
          document.getElementById(id) ||
          document.getElementById(rawId) ||
          (id.toLowerCase().includes('blog') || id.toLowerCase().includes('newsletter')
            ? document.getElementById('blog-newsletter') || document.getElementById('newsletter')
            : null);

        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      if (!findAndScroll()) {
        const t1 = setTimeout(findAndScroll, 100);
        const t2 = setTimeout(findAndScroll, 300);
        const t3 = setTimeout(findAndScroll, 600);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
      return;
    }

    scrollToTop();
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      if (!location.hash) {
        scrollToTop();
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-0">{children}</main>
      <Footer />
    </div>
  );
}
