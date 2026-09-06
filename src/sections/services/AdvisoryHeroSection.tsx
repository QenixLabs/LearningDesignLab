import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../../components/Button';
import StatCounter from '../../components/StatCounter';
import NeuronMotif from '../../components/NeuronMotif';

export default function AdvisoryHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.ad-hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
        .fromTo('.ad-hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.ad-hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.ad-hero-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, ease: 'expo.out' }, '-=0.3')
        .fromTo('.ad-hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4');
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
          <h1 className="ad-hero-heading font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-white mb-8">
            Strategic Advisory for Large-Scale Skilling Programs
          </h1>

          <p className="ad-hero-subtext font-body text-sm leading-relaxed text-white/80 max-w-[60ch] mb-10">
            We partner with development organisations, training institutes, and governments tackling learning and skilling challenges at scale – we compare models, synthesise research findings, and design programs grounded in what has worked; we design the program structure, systems, processes, and roles for skilling to yield high returns.
          </p>

          <div className="ad-hero-cta">
            <Button text="Contact Us" variant="primary" onClick={handleScrollToContact} />
          </div>
        </div>

        {/* Divider */}
        <div className="ad-hero-divider mt-16 mb-12 h-px bg-white/20 origin-left" />

        {/* Stats */}
        <div className="ad-hero-stats grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          <StatCounter value={10} suffix="M+" label="Learners impacted" />
          <StatCounter value={200} suffix="+" label="Trainings delivered" />
          <StatCounter value={80} suffix="+" label="Digital courses built" />
          <StatCounter value={25} suffix="+" label="Countries reached" />
          <div className="col-span-2 md:col-span-1 flex justify-center">
            <StatCounter value={20} suffix="+" label="Organisations partnered" />
          </div>
        </div>
      </div>
    </section>
  );
}
