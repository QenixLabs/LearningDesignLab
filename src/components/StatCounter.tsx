import CountUp from 'react-countup';
import ScrollReveal from './ScrollReveal';

interface StatCounterProps {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  light?: boolean;
}

export default function StatCounter({ value, suffix, prefix = '', label, light = true }: StatCounterProps) {
  return (
    <ScrollReveal className="flex flex-col items-center md:items-start">
      <CountUp
        start={0}
        end={value}
        duration={2}
        prefix={prefix}
        suffix={suffix}
        useEasing={true}
        enableScrollSpy
        scrollSpyDelay={100}
      >
        {({ countUpRef }) => (
          <span
            ref={countUpRef}
            className={`font-display text-3xl md:text-4xl lg:text-[2.5vw] leading-none tracking-[-0.01em] ${
              light ? 'text-white' : 'text-near-black'
            }`}
          />
        )}
      </CountUp>
      <span className={`section-label mt-3 text-center md:text-left ${light ? 'text-white/50' : 'text-black/45'}`}>
        {label}
      </span>
    </ScrollReveal>
  );
}
