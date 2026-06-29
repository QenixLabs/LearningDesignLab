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
      // Animate center circle
      gsap.fromTo(
        '.center-circle',
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
        }
      );

      // Animate nodes
      gsap.fromTo(
        '.field-node',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
          delay: 0.3,
        }
      );

      // Animate lines
      gsap.fromTo(
        '.connecting-line',
        { strokeDashoffset: 200 },
        {
          strokeDashoffset: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 80%',
            once: true,
          },
          delay: 0.5,
        }
      );
    }, diagramRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Neuron motif */}
      <NeuronMotif opacity={0.04} />

      {/* Soft radial glow behind the diagram */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.08)_0%,transparent_65%)]" />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-white text-center mb-20">
            We Borrow from Every Field That Studies Learning
          </h2>
        </ScrollReveal>

        {/* Desktop Diagram */}
        <div ref={diagramRef} className="hidden md:block relative h-[560px] max-w-[880px] mx-auto">
          {/* Radial backdrop */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.06)_0%,transparent_55%)]" style={{ zIndex: 0 }} />

          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            <defs>
              <filter id="line-glow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="0" stdDeviation="2" floodColor="rgba(255,20,147,0.6)" />
              </filter>
            </defs>
            {fields.map((field, i) => {
              const cx = 50;
              const cy = 50;
              const fx = parseFloat(field.left);
              const fy = parseFloat(field.top);
              return (
                <line
                  key={i}
                  className="connecting-line"
                  x1={`${cx}%`}
                  y1={`${cy}%`}
                  x2={`${fx}%`}
                  y2={`${fy}%`}
                  stroke="rgba(255,20,147,0.35)"
                  strokeWidth="1.5"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                  filter="url(#line-glow)"
                />
              );
            })}
          </svg>

          {/* Center Circle */}
          <div
            className="center-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160px] h-[160px] rounded-full border border-pink/30 bg-gradient-to-br from-pink/20 to-pink/5 backdrop-blur-sm flex items-center justify-center shadow-[0_0_60px_rgba(255,20,147,0.25)]"
            style={{ zIndex: 2 }}
          >
            <div className="absolute inset-[-16px] rounded-full border border-pink/20 animate-ping opacity-30" />
            <div className="absolute inset-[-8px] rounded-full border border-pink/10" />
            <span className="section-label text-pink text-center text-[10px] leading-tight tracking-[0.12em]">
              LEARNING<br />DESIGN
            </span>
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
                zIndex: 3,
              }}
            >
              <div className="flex flex-col items-center transition-transform duration-300 group-hover:scale-110">
                <span className="w-2 h-2 rounded-full bg-pink mb-2 ring-4 ring-pink/10 transition-all duration-300 group-hover:ring-pink/30" />
                <span className="font-body text-xs text-white/80 whitespace-pre-line text-center leading-tight px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.05] backdrop-blur-sm transition-colors duration-300 group-hover:text-pink group-hover:border-pink/30 group-hover:bg-pink/10">
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
                  ? 'border-pink/30 bg-pink/10 text-pink'
                  : 'border-white/10 bg-white/[0.05] text-white/80 hover:border-pink/30 hover:bg-pink/10 hover:text-pink'
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
