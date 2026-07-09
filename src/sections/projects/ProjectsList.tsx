import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import { cn } from '@/lib/utils';

interface ProjectAction {
  label: string;
  href: string;
}

interface Project {
  client: string;
  title: string;
  description: string;
  imageAlt: string;
  actions?: ProjectAction[];
}

const projects: Project[] = [
  {
    client: 'UNESCO Myanmar',
    title: 'Online Courses for Myanmar Community Teachers',
    description:
      'We developed 12 online courses for community teachers focusing on disaster risk reduction, safe schools, climate change, and gender-transformative education. To support educators navigating emergency contexts, we applied behaviour-focused learning design and learning science principles to manage cognitive load, maximize retention, and drive real-world impact.',
    imageAlt: 'UNESCO Myanmar project',
  },
  {
    client: 'Patang India',
    title: 'Gender Champion Course',
    description:
      'We designed a highly interactive, seven-module course to empower youth with a critical awareness of gender, identity, privilege, masculinity, and unpaid care work. Through engaging and reflective activities, we equipped learners to challenge stereotypes, advocate for equality, and build more inclusive communities.',
    imageAlt: 'Patang India project',
    actions: [{ label: 'Preview Course', href: '#' }],
  },
  {
    client: 'UNESCO MGIEP',
    title: 'Digital Teacher Online Course',
    description:
      'We led the development of the Digital Teacher Online Course that has been implemented in more than nine countries, including India, Bangladesh, Bhutan, Sri Lanka, Nigeria, Maldives, Mexico, South Africa, and Jordan, reaching over 175,000 teachers globally.',
    imageAlt: 'UNESCO MGIEP project',
    actions: [
      { label: 'View Course', href: '#' },
      { label: 'Facilitator Toolkit', href: '#' },
    ],
  },
  {
    client: 'Search for Common Ground',
    title: 'Digital Stewardship Courses',
    description:
      'We developed nine mobile-based micro-modules designed to empower leaders and administrators of online communities. These courses provide practical frameworks and tools to foster digital inclusion, build online collaboration, manage misinformation and hate speech, and cultivate safe, engaging online spaces.',
    imageAlt: 'Search for Common Ground project',
    actions: [
      { label: 'View Course', href: '#' },
      { label: 'Watch Video', href: '#' },
    ],
  },
  {
    client: 'GIZ & Swayam',
    title: 'AI & Data Science Courses',
    description:
      "We collaborated with GIZ to create application-focused online courses on AI and data science, tailored to upskill young people from social science backgrounds. Hosted on SWAYAM—India's largest government-led open-course platform—the program covers foundational concepts, real-world applications, and ethical considerations, equipping learners with future-ready skills to lead data-driven development and solutions.",
    imageAlt: 'GIZ & Swayam project',
  },
  {
    client: 'UNESCO India',
    title: 'Technical Guidelines on Engaging the Most Marginalised Youth',
    description:
      "We led the development of technical guidelines for a joint initiative by UNICEF, UNESCO, and UNFPA. These guidelines offer practical strategies to help practitioners design inclusive educational and skilling programs that address systemic barriers. We also developed the 'RAISE-IM Assessment tool' to help teams evaluate their programs' inclusivity.",
    imageAlt: 'UNESCO India project',
    actions: [{ label: 'Learn More', href: '#' }],
  },
  {
    client: 'University of Stirling',
    title: 'Faculty Development Program: AI for Teaching, Learning & Research',
    description:
      'Our two-day faculty training program combined hands-on exploration of more than ten AI tools with critical discussions on ethical use. We drove measurable improvements: 88% of participants discovered new tools to enhance their teaching materials, and 35% gained confidence in using AI for research and student guidance.',
    imageAlt: 'University of Stirling project',
    actions: [{ label: 'Learn More', href: '#' }],
  },
  {
    client: 'Wingreens World',
    title: 'AI for Sales Enablement',
    description:
      'We designed a conversational, AI-powered chatbot to make organizational knowledge instantly accessible to teams across Wingreens. By providing step-by-step guidance and situation-specific content, anytime, anywhere, we facilitated continuous learning, improved on-the-job performance, and significantly reduced training time for fast-paced, field-based roles.',
    imageAlt: 'Wingreens World project',
  },
];

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-black/[0.04] border border-black/10 rounded-lg flex items-center justify-center',
        className
      )}
    >
      <span className="text-black/20 text-[10px] font-body uppercase tracking-wider">
        Image
      </span>
    </div>
  );
}

export default function ProjectsList() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="page-margin max-content">
        <ScrollReveal>
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="heading-xl text-black mb-6">Our Projects</h1>
            <p className="font-body text-base md:text-lg text-black/70 leading-relaxed">
              Different sectors, different audiences, different formats. But our
              focus remains the same: learning designed to produce real change,
              not just completion.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            return (
              <ScrollReveal key={project.title}>
                <article
                  className={cn(
                    'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-20 border-t border-black/10',
                    index === projects.length - 1 && 'border-b border-black/10'
                  )}
                >
                  <div
                    className={cn(
                      'flex flex-col justify-center',
                      isReversed && 'md:order-2'
                    )}
                  >
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-3">
                      {project.client}
                    </h2>
                    <h3 className="font-body text-lg md:text-xl text-black/60 mb-6">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-black/70 leading-relaxed mb-8">
                      {project.description}
                    </p>
                    {project.actions && project.actions.length > 0 && (
                      <div className="flex flex-wrap gap-4">
                        {project.actions.map((action) => (
                          <Button
                            key={action.label}
                            text={action.label}
                            href={action.href}
                            variant="primary"
                            dark={false}
                          />
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className={cn(
                      'flex items-center',
                      isReversed && 'md:order-1'
                    )}
                  >
                    <PlaceholderImage className="w-full aspect-[4/3]" />
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
