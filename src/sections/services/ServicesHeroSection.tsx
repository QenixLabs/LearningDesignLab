import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import SectionLabel from '../../components/SectionLabel';
import Button from '../../components/Button';

export default function ServicesHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.sv-hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
        .fromTo('.sv-hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.sv-hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.sv-hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="bg-black min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
      {/* Pink neuron motif overlay */}
      <div 
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Cpath d='M5 80 Q25 60 45 80 T85 80'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='30' r='1.5' fill='%23C71585'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="page-margin max-content pt-32 pb-24 relative z-10">
        <div className="max-w-[60%] max-md:max-w-full">
          <div className="sv-hero-label">
            <SectionLabel text="Our Services" light />
          </div>

          <h1 className="sv-hero-heading font-display uppercase text-[8vw] md:text-[6.5vw] leading-[0.95] tracking-[-0.02em] text-white mb-8">
            Research Rigor. Implementer's Realism.
          </h1>

          <p className="sv-hero-subtext font-body text-lg leading-relaxed text-white/80 max-w-[50ch] mb-10">
            We work at the intersection of the Science of Learning, Instructional Design, and AI. Every
            solution we design is evidence-informed, contextually grounded, and built for measurable impact.
          </p>

          <div className="sv-hero-cta">
            <Button text="Start a Conversation" variant="primary" onClick={handleScrollToContact} />
          </div>
        </div>
      </div>
    </section>
  );
}
