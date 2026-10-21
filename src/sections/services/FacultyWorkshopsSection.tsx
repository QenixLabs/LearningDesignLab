import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import type { SanityServiceWorkshop } from '@/lib/sanity/queries';
import { cn } from '@/lib/utils';

const defaultWorkshops: SanityServiceWorkshop[] = [
  {
    title: 'Science of Learning for Evidence-Based Teaching',
    meta: 'In-Person · 3 Days',
    description:
      'For teachers and universities that want to improve the effectiveness of teaching practice by aligning it with the human cognitive architecture and in line with how memory, attention, and transfer really work.',
  },
  {
    title: 'AI for Teaching, & Learning & Research',
    meta: 'In-Person · 2 Days',
    description:
      'For faculty that want to expand the regular use of ChatGPT and accelerate the creation of slides, graphics, videos, and custom GPTs using curated AI tools. Also learn critical use of AI research tools for academic research and publishing.',
  },
  {
    title: 'Designing AI-Aligned Assessments for the GenAI Era',
    meta: 'Virtual · 3 Hours',
    description:
      'For universities that want to realign their assessments for the AI era and towards global best practices. The workshop exposes participants to the changes in assessment practices globally and enables them to redesign assessments that remain valid, ethical, and academically rigorous.',
  },
  {
    title: 'Universal Design for Learning',
    meta: 'In-Person · 2 Days',
    description:
      'For schools and universities that want to equip their teachers with strategies to cater to a wide variety of students. UDL can enable educators to anticipate and address learning barriers and design flexible methods and support for more effective instruction.',
  },
  {
    title: 'Science of Learning for Evidence-Based Teaching Practices',
    meta: 'Online Course · Coming Soon',
    description:
      'For educators and institutions seeking to ground their teaching in cognitive science and evidence-based practices through a flexible, self-paced online format.',
  },
];

interface FacultyWorkshopsSectionProps {
  heading?: string;
  workshops?: SanityServiceWorkshop[];
}

export default function FacultyWorkshopsSection({
  heading = 'Workshops',
  workshops,
}: FacultyWorkshopsSectionProps) {
  const workshopItems = workshops && workshops.length > 0 ? workshops : defaultWorkshops;

  return (
    <section className="bg-warm-grey pt-12 pb-6 md:pt-16 relative overflow-hidden">
      <NeuronMotif color="#000000" opacity={0.04} size={220} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-10 md:mb-16 text-center">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshopItems.map((workshop, i) => {
            const isFullWidth = i === workshopItems.length - 1 && workshopItems.length % 2 === 1;
            const isComingSoon = workshop.meta?.toLowerCase().includes('coming soon');

            return (
              <ScrollReveal
                key={workshop.title}
                delay={0.1 * i}
                className={isFullWidth ? 'md:col-span-2' : undefined}
              >
                <div
                  className={cn(
                    'group h-full bg-gradient-to-br from-white to-pink/10 border border-black/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink hover:shadow-pink/10',
                    isFullWidth && 'border-pink/30 bg-gradient-to-br from-white via-pink/[0.04] to-pink/10 shadow-sm'
                  )}
                >
                  <div className={cn(isFullWidth && 'md:flex md:items-start md:justify-between md:gap-8')}>
                    <div className={cn(isFullWidth ? 'md:max-w-[48%]' : '')}>
                      {workshop.meta && (
                        <span
                          className={cn(
                            'font-display text-sm font-medium mb-3 inline-flex items-center gap-2',
                            isComingSoon
                              ? 'px-3 py-1 rounded-full text-xs font-semibold bg-pink/10 text-pink border border-pink/30'
                              : 'text-pink block'
                          )}
                        >
                          {isComingSoon && <span className="w-1.5 h-1.5 rounded-full bg-pink animate-pulse" />}
                          {workshop.meta}
                        </span>
                      )}
                      <h3 className="font-display text-lg md:text-xl font-semibold text-black leading-snug mb-2 group-hover:text-pink transition-colors">
                        {workshop.title}
                      </h3>
                    </div>
                    <div className={cn(isFullWidth ? 'md:max-w-[50%] md:pt-1' : '')}>
                      <p className="font-body text-sm leading-relaxed text-black/60">
                        {workshop.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.3}>
          <p className="mt-8 text-center text-sm text-black/60 italic">
            * The duration of the workshops can be customised. Modules of these workshops are also offered through online sessions.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
