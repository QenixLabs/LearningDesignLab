import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: number;
  triggerStart?: string;
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  y = 30,
  duration = 0.6,
  triggerStart = 'top 85%',
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.set(el, { opacity: 0, y });

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: triggerStart,
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'expo.out',
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [delay, y, duration, triggerStart]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
