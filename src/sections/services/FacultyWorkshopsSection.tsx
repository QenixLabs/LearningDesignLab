import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const workshops = [
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
    meta: 'In-Person · 1 Day',
    description:
      'For schools and universities that want to equip their teachers with strategies to cater to a wide variety of students. UDL can enable educators to anticipate and address learning barriers and design flexible methods and support for more effective instruction.',
  },
];

export default function FacultyWorkshopsSection() {
  return (
    <section className="bg-warm-grey py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif color="#000000" opacity={0.04} size={220} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-10 md:mb-16">
            Our Workshops
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workshops.map((workshop, i) => (
            <ScrollReveal key={workshop.title} delay={0.1 * i}>
              <div className="group h-full bg-gradient-to-br from-white to-pink/10 border border-black/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink hover:shadow-pink/10">
                <h3 className="font-display text-lg font-semibold text-black leading-snug mb-2 group-hover:text-pink transition-colors">
                  {workshop.title}
                </h3>
                <span className="font-display text-sm font-medium text-pink mb-4 block">{workshop.meta}</span>
                <p className="font-body text-sm leading-relaxed text-black/60">
                  {workshop.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
