import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import {
  BookOpen,
  Smartphone,
  Gamepad2,
  Bell,
  Users,
  FileText,
  Bot,
  Wrench,
  ClipboardCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const offerings: { label: string; Icon: LucideIcon; highlight?: string }[] = [
  { label: 'Online courses & sprints', Icon: BookOpen },
  { label: 'Mobile-based microlearning', Icon: Smartphone },
  { label: 'Educational games', Icon: Gamepad2 },
  { label: 'Behavioral nudges', Icon: Bell },
  { label: 'Communities of practice', Icon: Users },
  { label: 'Instructional manuals & workbooks', Icon: FileText },
  { label: 'AI tools for practice, feedback and performance support', Icon: Bot },
  { label: 'Job-aids and performance support tools', Icon: Wrench, highlight: 'Job-aids' },
  { label: 'Assessment tools and systems', Icon: ClipboardCheck },
];

export default function WhatWeOfferSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-16 max-w-4xl">
            Then We Create Everything a Learner Needs
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="border border-pink/30 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {Array.from({ length: 10 }).map((_, i) => {
                const item = offerings[i];
                return (
                  <div
                    key={i}
                    className={`flex items-center gap-5 p-6 transition-colors hover:bg-pink/[0.02] ${
                      i < 8 ? 'border-b border-pink/20' : ''
                    } ${i % 2 === 0 ? 'md:border-r border-pink/20' : ''} ${
                      !item ? 'hidden md:block' : ''
                    }`}
                  >
                    {item && (
                      <>
                        <div className="w-12 h-12 rounded-full bg-pink/10 flex items-center justify-center shrink-0">
                          <item.Icon className="w-6 h-6 text-pink" strokeWidth={1.5} />
                        </div>
                        <p className="font-body text-lg md:text-xl text-black/90 leading-snug">
                          {item.highlight ? (
                            <>
                              <span className="underline decoration-pink decoration-2 underline-offset-4">
                                {item.highlight}
                              </span>
                              {item.label.slice(item.highlight.length)}
                            </>
                          ) : (
                            item.label
                          )}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
