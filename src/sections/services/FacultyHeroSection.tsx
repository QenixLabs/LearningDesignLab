import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import CountUp from 'react-countup';
import NeuronMotif from '../../components/NeuronMotif';

export default function FacultyHeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <section
      ref={heroRef}
      className="bg-black min-h-[70vh] flex flex-col justify-center relative overflow-hidden"
    >
      <NeuronMotif opacity={0.12} />

      <div className="page-margin max-content pt-32 pb-20 relative z-10">
        <div className="max-w-[75%] max-md:max-w-full">
          <h1 className="fe-hero-heading font-display text-[7vw] md:text-[5vw] leading-[1.05] tracking-[-0.02em] text-white mb-8">
            Faculty Enrichment That Changes How They Teach, Design, and Learn
          </h1>

          <p className="fe-hero-subtext font-body text-lg leading-relaxed text-white/80 max-w-[65ch] mb-10">
            We partner with universities and faculty development cells to design
            and deliver workshops that shift teaching practice. Grounded in the
            evidence and global best practices and built for immediate
            application.
          </p>
        </div>

        {/* Stats */}
        <div className="fe-hero-stats mt-20 bg-gradient-to-br from-white to-pink/10 border border-black/10 rounded-2xl max-w-5xl mx-auto overflow-hidden">
          <div className="grid grid-cols-2 divide-x divide-y divide-black/10">
            <div className="flex flex-col items-center text-center p-6 md:p-10">
              <CountUp
                start={0}
                end={97}
                duration={2}
                suffix="%"
                useEasing
                enableScrollSpy
                scrollSpyDelay={100}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="font-display text-3xl md:text-4xl lg:text-[2.5vw] leading-none tracking-[-0.01em] text-black"
                  />
                )}
              </CountUp>
              <span className="section-label mt-4 text-black/70 max-w-[28ch]">
                Educators confident they can actively reduce student forgetting
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-6 md:p-10">
              <CountUp
                start={0}
                end={4.4}
                decimals={1}
                duration={2}
                suffix=" / 5"
                useEasing
                enableScrollSpy
                scrollSpyDelay={100}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="font-display text-3xl md:text-4xl lg:text-[2.5vw] leading-none tracking-[-0.01em] text-black"
                  />
                )}
              </CountUp>
              <span className="section-label mt-4 text-black/70 max-w-[28ch]">
                Average rating on usefulness and engagement of workshop
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-6 md:p-10">
              <CountUp
                start={0}
                end={100}
                duration={2}
                suffix="%"
                useEasing
                enableScrollSpy
                scrollSpyDelay={100}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="font-display text-3xl md:text-4xl lg:text-[2.5vw] leading-none tracking-[-0.01em] text-black"
                  />
                )}
              </CountUp>
              <span className="section-label mt-4 text-black/70 max-w-[28ch]">
                Left believing AI can save them time and improve efficiency
              </span>
            </div>

            <div className="flex flex-col items-center text-center p-6 md:p-10">
              <CountUp
                start={0}
                end={44}
                duration={2}
                suffix="%"
                useEasing
                enableScrollSpy
                scrollSpyDelay={100}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="font-display text-3xl md:text-4xl lg:text-[2.5vw] leading-none tracking-[-0.01em] text-black"
                  />
                )}
              </CountUp>
              <span className="section-label mt-4 text-black/70 max-w-[28ch]">
                Jump in confidence to manage cognitive load while teaching
              </span>
            </div>
          </div>
        </div>

        <p className="mt-12 text-xs text-white/40">
          *Impact of our workshops based on pre- and post-surveys.
        </p>
      </div>
    </section>
  );
}
