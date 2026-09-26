import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

gsap.registerPlugin(ScrollTrigger);

interface FieldDefinition {
  name: string;
  dotX: number;
  dotY: number;
  labelPos: 'top' | 'bottom' | 'left' | 'right';
  highlight?: boolean;
}

const defaultFields: FieldDefinition[] = [
  { name: 'Cognitive\nScience', dotX: 22, dotY: 14, labelPos: 'top', highlight: true },
  { name: 'Instructional\nDesign', dotX: 50, dotY: 13, labelPos: 'top' },
  { name: 'Human-Centred\nDesign', dotX: 78, dotY: 14, labelPos: 'top' },
  { name: 'Behavioral\nScience', dotX: 74, dotY: 34, labelPos: 'right', highlight: true },
  { name: 'AI & Learning', dotX: 74, dotY: 68, labelPos: 'bottom', highlight: true },
  { name: 'UI & UX', dotX: 50, dotY: 82, labelPos: 'bottom' },
  { name: 'Education\nTechnology', dotX: 26, dotY: 68, labelPos: 'bottom' },
  { name: 'Performance\nSupport', dotX: 26, dotY: 34, labelPos: 'left', highlight: true },
  { name: 'EdTech & L&D', dotX: 20, dotY: 50, labelPos: 'left' },
];

function getFieldDisplay(field: FieldDefinition): { displayName: string; isMultiLine: boolean } {
  let name = field.name.trim();
  if (name === 'UX & UI') name = 'UI & UX';

  // UI & UX must ALWAYS stay on one single line
  if (name === 'UI & UX') {
    return { displayName: 'UI & UX', isMultiLine: false };
  }

  // If already explicitly formatted with \n, preserve it
  if (name.includes('\n')) {
    return { displayName: name, isMultiLine: true };
  }

  // Format known 2-word labels with a newline so diagram pills remain compact and don't overflow on smaller screens
  const splitMap: Record<string, string> = {
    'Cognitive Science': 'Cognitive\nScience',
    'Instructional Design': 'Instructional\nDesign',
    'Human-Centred Design': 'Human-Centred\nDesign',
    'Human-Centered Design': 'Human-Centered\nDesign',
    'Behavioral Science': 'Behavioral\nScience',
    'Education Technology': 'Education\nTechnology',
    'Performance Support': 'Performance\nSupport',
    'AI & Learning': 'AI &\nLearning',
  };

  if (splitMap[name]) {
    return { displayName: splitMap[name], isMultiLine: true };
  }

  return { displayName: name, isMultiLine: false };
}

interface MethodologyFieldProp {
  name: string;
  highlight?: boolean;
}

interface MethodologyDiagramProps {
  heading?: string;
  fields?: (MethodologyFieldProp | string)[];
}

export default function MethodologyDiagram({
  heading = 'We Borrow from Diverse Fields That Facilitate Learning',
  fields: fieldsProp,
}: MethodologyDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  const fields = defaultFields.map((defaultField, idx) => {
    const custom = fieldsProp?.[idx];
    if (!custom) return defaultField;
    const rawName = typeof custom === 'string' ? custom : custom.name || defaultField.name;
    const name = rawName === 'UX & UI' ? 'UI & UX' : rawName;
    return {
      ...defaultField,
      name,
      highlight: typeof custom !== 'string' && custom.highlight !== undefined ? custom.highlight : defaultField.highlight,
    };
  });

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
    <section className="bg-black py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.04} />

      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,20,147,0.1)_0%,transparent_60%)]" />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-white text-center mb-20">
            {heading}
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
              <filter id="line-glow" x="0" y="0" width="100" height="100" filterUnits="userSpaceOnUse">
                <feDropShadow dx="0" dy="0" stdDeviation="1.5" floodColor="rgba(255,20,147,0.8)" />
              </filter>
            </defs>

            {fields.map((field, i) => (
              <path
                key={`line-${i}`}
                id={`line-${i}`}
                d={`M 50 50 L ${field.dotX} ${field.dotY}`}
                className="connecting-line"
                pathLength="1"
                stroke="rgba(255,20,147,0.55)"
                strokeWidth="0.45"
                strokeLinecap="round"
                strokeDasharray="1"
                strokeDashoffset="1"
                fill="none"
                filter="url(#line-glow)"
              />
            ))}

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

          {/* Field Nodes (Dots + Labels) */}
          {fields.map((field, i) => {
            const { displayName, isMultiLine } = getFieldDisplay(field);
            const labelPositionClass = (() => {
              switch (field.labelPos) {
                case 'top':
                  return 'bottom-3.5 left-1/2 -translate-x-1/2';
                case 'bottom':
                  return 'top-3.5 left-1/2 -translate-x-1/2';
                case 'left':
                  return 'right-3.5 top-1/2 -translate-y-1/2';
                case 'right':
                  return 'left-3.5 top-1/2 -translate-y-1/2';
              }
            })();

            return (
              <div
                key={i}
                className="field-node absolute group cursor-default"
                style={{
                  top: `${field.dotY}%`,
                  left: `${field.dotX}%`,
                  zIndex: 4,
                }}
              >
                {/* The Dot: line connects directly to this center (0, 0) */}
                <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
                  <span className="relative w-3.5 h-3.5 rounded-full bg-pink shadow-[0_0_12px_rgba(255,20,147,0.85)] transition-all duration-300 group-hover:scale-125 group-hover:shadow-[0_0_20px_rgba(255,20,147,1)]">
                    <span className="absolute inset-0 rounded-full bg-pink animate-ping opacity-40" />
                  </span>
                </div>

                {/* The Label: positioned cleanly outside the dot */}
                <div
                  className={`absolute ${labelPositionClass} min-w-max transition-transform duration-300 group-hover:scale-105 pointer-events-auto`}
                >
                  <span className={`font-body text-xs text-white/90 ${isMultiLine ? 'whitespace-pre' : 'whitespace-nowrap'} text-center leading-tight px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.08] backdrop-blur-sm shadow-lg block transition-colors duration-300 group-hover:text-pink group-hover:border-pink/40 group-hover:bg-pink/15 group-hover:shadow-[0_0_24px_rgba(255,20,147,0.25)]`}>
                    {displayName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile / Small Screen Grid */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto px-2">
          {fields.map((field, i) => {
            const { displayName } = getFieldDisplay(field);
            return (
              <div
                key={i}
                className={`text-center py-2.5 px-3 sm:px-4 rounded-2xl border transition-colors duration-300 flex items-center justify-center min-h-[52px] ${
                  field.highlight
                    ? 'border-pink/40 bg-pink/15 text-pink shadow-[0_0_20px_rgba(255,20,147,0.2)]'
                    : 'border-white/10 bg-white/[0.05] text-white/80 hover:border-pink/40 hover:bg-pink/10 hover:text-pink'
                }`}
              >
                <span className="font-body text-xs sm:text-sm text-center leading-snug whitespace-pre-line">
                  {displayName}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
