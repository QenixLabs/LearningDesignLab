import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Button from '../../components/Button';
import StatCounter from '../../components/StatCounter';
import NeuronMotif from '../../components/NeuronMotif';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo('.hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
        .fromTo('.hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.hero-buttons', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.hero-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, ease: 'expo.out' }, '-=0.3')
        .fromTo('.hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="bg-black min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Neuron motif — full fold, strongest on right, fading left */}
      <NeuronMotif
        variant="rich"
        color="#FF1493"
        opacity={0.12}
        size={220}
      />

      <div ref={contentRef} className="page-margin max-content w-full pt-32 pb-16 relative z-10">
        <div className="w-full max-w-[70%] max-md:max-w-full">
          <h1 className="hero-heading font-display uppercase text-[7vw] md:text-[5vw] lg:text-[3.5vw] leading-[1.05] tracking-[-0.02em] text-white mb-8">
            Designing Learning That Works
          </h1>

          <p className="hero-subtext font-body text-sm leading-relaxed text-white/80 max-w-[60ch] mb-12">
            We are an impact-driven, international learning design firm dedicated to enhancing the
            effectiveness of skilling, competency development, and educational interventions. We partner
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

        {/* Divider */}
        <div className="hero-divider mt-16 mb-12 h-px bg-white/20 origin-left" />

        {/* Stats */}
        <div className="hero-stats grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-4">
          <StatCounter value={10} suffix="M+" label="Learners Impacted" />
          <StatCounter value={200} suffix="+" label="Trainings Delivered" />
          <StatCounter value={65} suffix="+" label="Digital Courses Built" />
          <StatCounter value={20} suffix="+" label="Countries Reached" />
          <StatCounter value={25} suffix="+" label="Organizations Partnered" />
        </div>
      </div>
    </section>
  );
}
