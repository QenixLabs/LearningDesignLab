import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

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
      {/* Pink neuron motif */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '220px 220px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="How We Work" light />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-white text-center mb-20">
            We Borrow from Every Field That Studies Learning
          </h2>
        </ScrollReveal>

        {/* Desktop Diagram */}
        <div ref={diagramRef} className="hidden md:block relative h-[500px] max-w-[800px] mx-auto">
          {/* SVG Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
            {fields.map((field, i) => {
              const cx = 50; // center %
              const cy = 50; // center %
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
                  stroke="rgba(255,20,147,0.2)"
                  strokeWidth="1"
                  strokeDasharray="200"
                  strokeDashoffset="200"
                />
              );
            })}
          </svg>

          {/* Center Circle */}
          <div
            className="center-circle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[140px] rounded-full border border-pink/25 bg-pink/5 flex items-center justify-center"
            style={{ zIndex: 2 }}
          >
            <span className="section-label text-pink text-center text-[10px] leading-tight">
              LEARNING<br />DESIGN
            </span>
          </div>

          {/* Field Nodes */}
          {fields.map((field, i) => (
            <div
              key={i}
              className="field-node absolute"
              style={{
                top: field.top,
                left: field.left,
                transform: field.center ? 'translateX(-50%)' : 'translate(-50%, -50%)',
                zIndex: 3,
              }}
            >
              <div className="flex flex-col items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-pink mb-2" />
                <span className="font-body text-xs text-white/80 whitespace-pre-line text-center leading-tight">
                  {field.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden grid grid-cols-3 gap-6 max-w-md mx-auto">
          {fields.map((field, i) => (
            <div
              key={i}
              className={`text-center py-3 ${
                field.center ? 'border border-pink/25 rounded-full bg-pink/5' : ''
              }`}
            >
              <span className="font-body text-sm text-white/80 whitespace-pre-line">
                {field.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
