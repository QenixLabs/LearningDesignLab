import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../../components/Button';
import StatCounter from '../../components/StatCounter';
import NeuronMotif from '../../components/NeuronMotif';

export default function ServicesHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.sv-hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
        .fromTo('.sv-hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.sv-hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.sv-hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.sv-hero-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, ease: 'expo.out' }, '-=0.3')
        .fromTo('.sv-hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="bg-black min-h-[70vh] flex flex-col justify-center relative overflow-hidden">
      {/* Neuron motif */}
      <NeuronMotif opacity={0.12} />

      <div className="page-margin max-content pt-32 pb-24 relative z-10">
        <div className="max-w-[70%] max-md:max-w-full">
          <h1 className="sv-hero-heading font-display text-[5vw] md:text-[3.5vw] leading-[1.05] tracking-[-0.02em] text-white mb-8">
            Curricula & courses to change outcomes, not just build knowledge
          </h1>

          <p className="sv-hero-subtext font-body text-sm leading-relaxed text-white/80 max-w-[60ch] mb-10">
            We partner with universities, nonprofits, and organizations to design courses, training programs, and full curricula that build real competence. Grounded in research and Science of Learning.
          </p>

          <div className="sv-hero-cta">
            <Button text="Contact Us" variant="primary" onClick={handleScrollToContact} />
          </div>
        </div>

        {/* Divider */}
        <div className="sv-hero-divider mt-16 mb-12 h-px bg-white/20 origin-left" />

        {/* Stats */}
        <div className="sv-hero-stats grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          <StatCounter value={10} suffix="M+" label="Learners impacted" />
          <StatCounter value={200} suffix="+" label="Trainings delivered" />
          <StatCounter value={70} suffix="+" label="Digital courses built" />
          <StatCounter value={20} suffix="+" label="Countries reached" />
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <StatCounter value={25} suffix="+" label="Organizations partnered" />
          </div>
        </div>
      </div>
    </section>
  );
}
