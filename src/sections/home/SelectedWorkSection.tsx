import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const projects = [
  {
    client: 'GIZ & SWAYAM',
    title: 'Applied Online Courses on AI and Data Science',
    summary: 'Designed and developed story-based online courses on AI and Data Science for national skilling platforms, reaching learners across India.',
    fullWidth: true,
  },
  {
    client: 'UNICEF INDIA',
    title: 'Digital Girl Hub Impact Research',
    summary: 'Research to study the impact of a large-scale skilling and employment program for adolescent girls across multiple Indian states.',
    fullWidth: false,
  },
  {
    client: 'UNIVERSITY OF STIRLING, UAE',
    title: 'AI for Teaching, Learning & Research',
    summary: 'Faculty workshop on integrating AI tools into teaching practice, assessment design, and academic research workflows.',
    fullWidth: false,
  },
  {
    client: 'QUEST ALLIANCE',
    title: 'ITI Employability Curriculum',
    summary: 'Complete employability curriculum including trainer manual and learner workbook for Industrial Training Institutes across India.',
    fullWidth: true,
  },
  {
    client: 'SEARCH FOR COMMON GROUND',
    title: 'Digital Stewardship Microlearning',
    summary: 'Mobile-based microlearning courses on digital citizenship and responsible technology use for conflict-affected communities.',
    fullWidth: false,
  },
  {
    client: 'UNESCO MGIEP',
    title: 'Technical Guidelines for Engaging the Most Marginalised',
    summary: 'Developed comprehensive guidelines and the RAISE-TM assessment framework for practitioners working with marginalised youth.',
    fullWidth: false,
  },
];

export default function SelectedWorkSection() {
  return (
    <section id="projects" className="bg-black py-32 relative overflow-hidden">
      {/* Pink neuron motif overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Cpath d='M5 80 Q25 60 45 80 T85 80'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='30' r='1.5' fill='%23C71585'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="Our Work (So Far)" light />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-white mb-16">Selected Projects</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal
              key={project.title}
              delay={0.1 * (i % 2)}
              className={`border border-pink/15 p-8 group hover:bg-pink/5 transition-colors duration-300 cursor-pointer ${
                project.fullWidth ? 'md:col-span-2' : ''
              }`}
            >
              <span className="section-label text-pink block mb-3">{project.client}</span>
              <h3 className="heading-md text-white mb-3 max-w-[40ch]">{project.title}</h3>
              <p className="font-body text-sm leading-relaxed text-white/50 max-w-[50ch]">
                {project.summary}
              </p>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2} className="mt-8 text-right">
          <span className="font-body text-sm font-medium uppercase text-pink inline-flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
            View All Projects <span>&rarr;</span>
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
