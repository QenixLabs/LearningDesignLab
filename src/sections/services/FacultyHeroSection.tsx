import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import CountUp from 'react-countup';
import Button from '../../components/Button';
import NeuronMotif from '../../components/NeuronMotif';

export interface FacultyHeroStat {
  value: number;
  suffix?: string;
  label: string;
  decimals?: number;
}

export interface FacultyHeroSectionProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  stats?: FacultyHeroStat[];
  footnote?: string;
}

const defaultStats: FacultyHeroStat[] = [
  { value: 44, suffix: '%', label: "Jump in educators' confidence to use retrieval practice to reduce forgetting after 18 hrs of training" },
  { value: 58, suffix: '%', label: "Educators felt confident applying Mayer's Multimedia Principles to design more effective slides" },
  { value: 33, suffix: '%', label: 'Jump in teachers who believe that they can reduce student forgetting through evidence-based strategies' },
  { value: 44, suffix: '%', label: 'Jump in confidence to manage cognitive load while teaching' },
];

export default function FacultyHeroSection({
  heading = 'Educator Enrichment That Changes How They Design and Teach',
  subtext = 'We bridge the gap between cognitive science and educational research and teaching and learning practice by working with teachers in schools and universities to build their capacities and establishing systems grounded in evidence-based teaching that drives better learning outcomes.',
  ctaLabel = 'Contact Us',
  stats,
  footnote = '*Impact of our workshops based on pre- and post-surveys.',
}: FacultyHeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroStats = stats && stats.length > 0 ? stats : defaultStats;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo(
        '.fe-hero-heading',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }
      )
        .fromTo(
          '.fe-hero-subtext',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
          '-=0.5'
        )
        .fromTo(
          '.fe-hero-stats',
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="bg-black min-h-[70vh] flex flex-col justify-center relative overflow-hidden"
    >
      <NeuronMotif opacity={0.12} />

      <div className="page-margin max-content pt-32 pb-20 relative z-10">
        <div className="max-w-[75%] max-md:max-w-full">
          <h1 className="fe-hero-heading font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-white mb-8">
            {heading}
          </h1>

          <p className="fe-hero-subtext font-body text-sm leading-relaxed text-white/80 max-w-[65ch] mb-10">
            {subtext}
          </p>

          <Button text={ctaLabel} variant="primary" onClick={handleScrollToContact} />
        </div>

        {/* Stats */}
        <div className="fe-hero-stats mt-20 max-w-5xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
            Impact of our workshops
          </h2>
          <div className="bg-black border border-white/10 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-2 divide-x divide-y divide-white/10">
            {heroStats.map((stat, i) => {
              const decimals = stat.decimals !== undefined ? stat.decimals : stat.value % 1 !== 0 ? 1 : 0;
              return (
                <div key={i} className="flex flex-col items-center text-center p-8 md:p-12">
                  <CountUp
                    start={0}
                    end={stat.value}
                    decimals={decimals}
                    duration={2}
                    suffix={stat.suffix ?? ''}
                    useEasing
                    enableScrollSpy
                    scrollSpyDelay={100}
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="font-display text-3xl md:text-4xl lg:text-[2.5vw] leading-none tracking-[-0.01em] text-pink"
                      />
                    )}
                  </CountUp>
                  <span className="section-label mt-4 text-white max-w-[28ch]">
                    {stat.label}
                  </span>
                </div>
              );
            })}
            </div>
          </div>
        </div>

        {footnote && (
          <p className="mt-12 text-xs text-white/40">
            {footnote}
          </p>
        )}
      </div>
    </section>
  );
}
