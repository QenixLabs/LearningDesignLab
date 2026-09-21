import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import Button from '../../components/Button';
import StatCounter from '../../components/StatCounter';
import NeuronMotif from '../../components/NeuronMotif';

interface ResearchHeroStat {
  value: number;
  suffix?: string;
  label: string;
}

interface ResearchHeroSectionProps {
  heading?: string;
  subtext?: string;
  ctaLabel?: string;
  stats?: ResearchHeroStat[];
}

const defaultStats: ResearchHeroStat[] = [
  { value: 10, suffix: 'M+', label: 'Learners impacted' },
  { value: 200, suffix: '+', label: 'Trainings delivered' },
  { value: 70, suffix: '+', label: 'Digital courses built' },
  { value: 20, suffix: '+', label: 'Countries reached' },
  { value: 25, suffix: '+', label: 'Organizations partnered' },
];

export default function ResearchHeroSection({
  heading = 'Research & Evaluation That Measures & Enhances Impact',
  subtext = 'We provide monitoring, evaluation, and learning (MEL) services to non-profits, social impact funders, and educational institutions looking to improve their skilling or capacity-building initiatives. We work with funders, large nonprofits, edtech companies, and universities to evaluate learning and skilling programs, and to turn rigorous qualitative and quantitative research into knowledge products that advance the field and its impact.',
  ctaLabel = 'Contact Us',
  stats,
}: ResearchHeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroStats = stats && stats.length > 0 ? stats : defaultStats;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.fromTo('.re-hero-heading', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' })
        .fromTo('.re-hero-subtext', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.re-hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.5')
        .fromTo('.re-hero-divider', { opacity: 0, scaleX: 0 }, { opacity: 1, scaleX: 1, duration: 0.8, ease: 'expo.out' }, '-=0.3')
        .fromTo('.re-hero-stats', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' }, '-=0.4');
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
          <h1 className="re-hero-heading font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-white mb-8">
            {heading}
          </h1>

          <p className="re-hero-subtext font-body text-sm leading-relaxed text-white/80 max-w-[60ch] mb-10">
            {subtext}
          </p>

          <div className="re-hero-cta">
            <Button text={ctaLabel} variant="primary" onClick={handleScrollToContact} />
          </div>
        </div>

        {/* Divider */}
        <div className="re-hero-divider mt-16 mb-12 h-px bg-white/20 origin-left" />

        {/* Stats */}
        <div className="re-hero-stats grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4">
          {heroStats.map((stat, i) => (
            <div
              key={i}
              className={i === heroStats.length - 1 && heroStats.length % 2 !== 0 ? 'col-span-2 md:col-span-1 flex justify-center' : ''}
            >
              <StatCounter value={stat.value} suffix={stat.suffix ?? '+'} label={stat.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
