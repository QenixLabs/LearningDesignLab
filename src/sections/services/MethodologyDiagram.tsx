import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

gsap.registerPlugin(ScrollTrigger);

const fields = [
  { name: 'Cognitive Science', top: '5%', left: '20%' },
  { name: 'Instructional\nDesign', top: '5%', left: '50%', center: true },
  { name: 'Human-Centred\nDesign', top: '5%', left: '80%' },
  { name: 'Behavioural\nScience', top: '35%', left: '90%' },
  { name: 'AI & Learning', top: '65%', left: '80%' },
  { name: 'UX & UI', top: '85%', left: '50%', center: true },
  { name: 'Educational\nResearch', top: '65%', left: '20%' },
  { name: 'Performance\nSupport', top: '35%', left: '10%' },
  { name: 'EdTech & L&D', top: '50%', left: '5%' },
];

export default function MethodologyDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.center-core',
        { scale: 0.6, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      gsap.fromTo(
        '.field-node',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.07,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
          delay: 0.2,
        }
      );

      gsap.fromTo(
        '.connecting-line',
        { strokeDashoffset: 1 },
        {
          strokeDashoffset: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
          delay: 0.4,
        }
      );

      gsap.fromTo(
        '.signal-pulse',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
          delay: 1,
        }
      );
    }, diagramRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.04} />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.1)_0%,transparent_60%)]" />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-white text-center mb-20">
            We Borrow from Every Field That Studies Learning
          </h2>
        </ScrollReveal>

        {/* Desktop Diagram */}
        <div ref={diagramRef} className="hidden md:block relative h-[580px] max-w-[920px] mx-auto">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.08)_0%,transparent_55%)]" style={{ zIndex: 0 }} />

          {/* SVG lines and signals */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{ zIndex: 1 }}
          >
            <defs>
              <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="rgba(255,20,147,0.8)" />
              </filter>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255,20,147,0.6)" />
                <stop offset="100%" stopColor="rgba(255,20,147,0.1)" />
              </linearGradient>
            </defs>

            {fields.map((field, i) => {
              const fx = parseFloat(field.left);
              const fy = parseFloat(field.top);
              return (
                <path
                  key={`line-${i}`}
                  id={`line-${i}`}
                  d={`M 50 50 L ${fx} ${fy}`}
                  className="connecting-line"
                  pathLength="1"
                  stroke="url(#line-gradient)"
                  strokeWidth="0.35"
                  strokeLinecap="round"
                  strokeDasharray="1"
                  strokeDashoffset="1"
                  fill="none"
                  filter="url(#line-glow)"
                />
              );
            })}

            {fields.map((_field, i) => (
                <circle
                  key={`pulse-${i}`}
                  r="0.6"
                  fill="#ff69b4"
                  className="signal-pulse"
                  opacity="0"
                >
                  <animateMotion
                    dur={`${1.8 + (i % 3) * 0.4}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.15}s`}
                    calcMode="linear"
                    keyPoints="1;0"
                    keyTimes="0;1"
                  >
                    <mpath href={`#line-${i}`} />
                  </animateMotion>
                </circle>
              ))}
          </svg>

          {/* Rotating orbit rings */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full border border-dashed border-pink/20"
            style={{ zIndex: 2 }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] rounded-full border border-pink/10"
            style={{ zIndex: 2 }}
          />

          {/* Center Core */}
          <div
            className="center-core absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ zIndex: 3 }}
          >
            <div className="relative w-[168px] h-[168px] rounded-full border border-pink/30 bg-gradient-to-br from-pink/25 to-pink/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_80px_rgba(255,20,147,0.35)]">
              <div className="absolute inset-[-20px] rounded-full border border-pink/20 animate-ping opacity-25" />
              <div className="absolute inset-[-10px] rounded-full border border-pink/10" />
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,105,180,0.35),transparent_60%)]" />
              <span className="section-label text-white text-center text-[10px] leading-tight tracking-[0.14em] relative z-10">
                LEARNING<br />DESIGN
              </span>
            </div>
          </div>

          {/* Field Nodes */}
          {fields.map((field, i) => (
            <div
              key={i}
              className="field-node absolute group cursor-default"
              style={{
                top: field.top,
                left: field.left,
                transform: field.center ? 'translateX(-50%)' : 'translate(-50%, -50%)',
                zIndex: 4,
              }}
            >
              <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
                <span className="relative w-3 h-3 rounded-full bg-pink mb-2 shadow-[0_0_12px_rgba(255,20,147,0.8)] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,20,147,1)]">
                  <span className="absolute inset-0 rounded-full bg-pink animate-ping opacity-40" />
                </span>
                <span className="font-body text-xs text-white/90 whitespace-pre-line text-center leading-tight px-4 py-2 rounded-full border border-white/10 bg-white/[0.08] backdrop-blur-sm shadow-lg transition-colors duration-300 group-hover:text-pink group-hover:border-pink/40 group-hover:bg-pink/15 group-hover:shadow-[0_0_24px_rgba(255,20,147,0.25)]">
                  {field.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-md mx-auto">
          {fields.map((field, i) => (
            <div
              key={i}
              className={`text-center py-3 px-2 rounded-full border transition-colors duration-300 ${
                field.center
                  ? 'border-pink/40 bg-pink/15 text-pink shadow-[0_0_20px_rgba(255,20,147,0.2)]'
                  : 'border-white/10 bg-white/[0.05] text-white/80 hover:border-pink/40 hover:bg-pink/10 hover:text-pink'
              }`}
            >
              <span className="font-body text-xs whitespace-pre-line">
                {field.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
