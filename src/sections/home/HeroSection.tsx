import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionLabel from '../../components/SectionLabel';
import Button from '../../components/Button';
import StatCounter from '../../components/StatCounter';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo('.hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
        .fromTo('.hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.hero-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, ease: 'expo.out' }, '-=0.3')
        .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4');

      // Scroll fade effect
      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '30% top',
          scrub: true,
        },
        opacity: 0,
        y: -40,
        ease: 'none',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Pink neuron motif overlay */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Cpath d='M5 80 Q25 60 45 80 T85 80'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='30' r='1.5' fill='%23C71585'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div ref={contentRef} className="page-margin max-content w-full pt-32 pb-16 relative z-10">
        <div className="flex gap-8 max-md:flex-col">
          <div className="w-[55%] max-md:w-full">
            <div className="hero-label">
              <SectionLabel text="LEARNING DESIGN LABS" light />
            </div>

            <h1 className="hero-heading font-display uppercase text-[10vw] md:text-[8vw] lg:text-[6.5vw] leading-[0.95] tracking-[-0.02em] text-white mb-8">
              Designing Learning That Works
            </h1>

            <p className="hero-subtext font-body text-lg leading-relaxed text-white/80 max-w-[55ch] mb-12">
              We are an impact-driven, international learning design firm dedicated to enhancing the
              effectiveness of skilling, competency development and educational interventions. We partner
              with organizations and educational institutions to build evidence-informed, contextually
              grounded designs that translate learning into real-world outcomes.
            </p>

            <div className="hero-buttons flex flex-wrap gap-4">
              <Button
                text="Work With Us"
                variant="primary"
                onClick={() => handleScrollTo('contact')}
              />
              <Button
                text="Explore Services"
                variant="secondary"
                dark
                onClick={() => handleScrollTo('services')}
              />
            </div>
          </div>

          {/* Right side visual */}
          <div className="w-[45%] max-md:hidden flex items-start justify-end">
            <img
              src="/designs/image18.png"
              alt=""
              className="max-h-[60vh] w-auto object-contain opacity-80"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="hero-divider mt-16 mb-12 h-px bg-pink/30 origin-left" />

        {/* Stats */}
        <div className="hero-stats grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4">
          <StatCounter value={10} suffix="M+" label="Learners Impacted" />
          <StatCounter value={200} suffix="+" label="Trainings Delivered" />
          <StatCounter value={65} suffix="+" label="Digital Courses Built" />
          <StatCounter value={20} suffix="+" label="Countries Reached" />
          <StatCounter value={25} suffix="+" label="Organisations Partnered" />
        </div>
      </div>
    </section>
  );
}
