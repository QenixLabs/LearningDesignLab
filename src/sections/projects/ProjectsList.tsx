import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import { cn } from '@/lib/utils';

// ---------- Table data ----------

interface TableRow {
  type: 'section' | 'project';
  number?: number;
  title: string;
  notes?: React.ReactNode;
}

const projectRows: TableRow[] = [
  {
    type: 'project',
    number: 1,
    title: 'UNESCO MYANMAR',
    notes: (
      <ProjectImage
        src="/images/projects/Shraddha online.png"
        alt="UNESCO Myanmar table reference"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 2,
    title: 'Search for Common Ground',
    notes: (
      <ProjectImage
        src="/images/projects/Search for Common Ground.png"
        alt="Search for Common Ground"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 3,
    title:
      'Program Design for a school-based intervention on Social-Emotional-Culture Skills - UNICEF India',
    notes: (
      <ProjectImage
        src="/images/projects/UNICEF India.png"
        alt="UNICEF India SEL program design"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 4,
    title: 'Patang India - done',
    notes: (
      <ProjectImage
        src="/images/projects/Patang India.jpg"
        alt="Patang India"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 5,
    title:
      'Online courses on Digital Skills, Life Skills, & Data Analysis using Power BI for Swayam/GIZ - done',
    notes: (
      <ProjectImage
        src="/images/projects/GIZ & Swayam.jpg"
        alt="GIZ and Swayam"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 6,
    title: 'Quest Alliance - done',
    notes: (
      <ProjectImage
        src="/images/projects/QUEST Alliance.png"
        alt="Quest Alliance"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 7,
    title: 'UNESCO MGIEP - Course review for ECCE - done',
    notes: (
      <ProjectImage
        src="/images/projects/UNESCO MGIEP.png"
        alt="UNESCO MGIEP"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 8,
    title: 'Wingreen - done',
    notes: (
      <ProjectImage
        src="/images/projects/Wingreens World.png"
        alt="Wingreens World"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
];

const workshopRows: TableRow[] = [
  { type: 'section', title: 'Workshops' },
  {
    type: 'project',
    number: 1,
    title: 'Stirling - done',
    notes: (
      <ProjectImage
        src="/images/projects/University of Stirling.jpg"
        alt="University of Stirling"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 2,
    title: 'KR Mangalam - done',
    notes: (
      <ProjectImage
        src="/images/projects/K R Mangalam University.JPG"
        alt="K R Mangalam University"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  { type: 'project', number: 3, title: 'Ashoka' },
  {
    type: 'project',
    number: 4,
    title: 'ITM Skill University - UDL Workshop',
    notes: (
      <ProjectImage
        src="/images/projects/ITM Skills University.png"
        alt="ITM Skill University UDL workshop"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
];

const researchRows: TableRow[] = [
  { type: 'section', title: 'Research' },
  {
    type: 'project',
    number: 1,
    title: 'Unicef P2E Study - done',
    notes: (
      <ProjectImage
        src="/images/projects/UNICEF India.webp"
        alt="UNICEF P2E study"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 2,
    title: 'UNICEF DGH Study - done',
    notes: (
      <ProjectImage
        src="/images/projects/UNICEF India.png"
        alt="UNICEF DGH study"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
  {
    type: 'project',
    number: 3,
    title: 'UNICEF India - Technical guidelines - done',
    notes: (
      <ProjectImage
        src="/images/projects/UNICEF India Technical.png"
        alt="UNICEF India technical guidelines"
        className="max-w-xs aspect-video"
        fit="contain"
      />
    ),
  },
];

const allRows: TableRow[] = [...projectRows, ...workshopRows, ...researchRows];

// ---------- Card data ----------

interface ProjectAction {
  label: string;
  href: string;
}

interface Project {
  client: string;
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
  actions?: ProjectAction[];
}

interface CardSection {
  title: string;
  projects: Project[];
}

const cardSections: CardSection[] = [
  {
    title: 'Courses & Curricula',
    projects: [
      {
        client: 'UNESCO Myanmar',
        title: 'Online Courses for Myanmar Community Teachers',
        description:
          'We developed 12 online courses for community teachers focusing on disaster risk reduction, safe schools, climate change, and gender-transformative education. To support educators navigating emergency contexts, we applied behaviour-focused learning design and learning science principles to manage cognitive load, maximize retention, and drive real-world impact.',
        image: '/images/projects/UNESCO_Myanmar_collage.png',
        imageAlt: 'UNESCO Myanmar project',
      },
      {
        client: 'Patang India',
        title: 'Gender Champion Course',
        description:
          'We designed a highly interactive, seven-module course to empower youth with a critical awareness of gender, identity, privilege, masculinity, and unpaid care work. Through engaging and reflective activities, we equipped learners to challenge stereotypes, advocate for equality, and build more inclusive communities.',
        image: '/images/projects/Patang India.jpg',
        imageAlt: 'Patang India project',
        actions: [
          { label: 'View Course', href: '#' },
          { label: 'Watch Video', href: '#' },
        ],
      },
      {
        client: 'UNESCO MGIEP',
        title:
          'Review of Online course on Cognitive, Academic, Social, & Emotional Development in ECCE (3-8 years)',
        description:
          'Conducted an external expert review of the online course on social-emotional learning for early childhood care and Education. Evaluated goal alignment, content structuring, assessment design, interactivity/engagement, language and overall effectiveness and gave recommendations to improve the course.',
        image: '/images/projects/UNESCO MGIEP.png',
        imageAlt: 'UNESCO MGIEP ECCE course review',
      },
      {
        client: 'Search for Common Ground',
        title: 'Digital Stewardship Courses',
        description:
          'We developed nine mobile-based micro-modules designed to empower leaders and administrators of online communities. These courses provide practical frameworks and tools to foster digital inclusion, build online collaborations, manage misinformation and hate speech, and cultivate safe, engaging online spaces.',
        image: '/images/projects/Search for Common Ground.png',
        imageAlt: 'Search for Common Ground project',
        actions: [
          { label: 'View Course', href: '#' },
          { label: 'Watch Video', href: '#' },
        ],
      },
      {
        client: 'GIZ & Swayam',
        title: 'Digital Entrepreneurship & Data Analysis using Power BI',
        description:
          "We worked with GIZ to create application-focused online courses on AI and data science, tailored to upskill young people from social science backgrounds. Hosted on SWAYAM—India's largest government-led open-course platform—the program covers foundational concepts, real-world applications, and ethical considerations, equipping learners with future-ready skills to lead data-driven development and solutions.",
        image: '/images/projects/GIZ & Swayam.jpg',
        imageAlt: 'GIZ & Swayam project',
      },
      {
        client: 'QUEST Alliance',
        title: 'Drafting employability curriculum for ITI',
        description:
          'We designed instructional manuals and student workbooks for the employability curriculum for youth (aged 16-20) in ITIs. The program builds career self-awareness alongside practical communication and workplace-readiness skills, equipping learners to make informed career choices and confidently navigate the transition into the world of work.',
        image: '/images/projects/QUEST Alliance.png',
        imageAlt: 'QUEST Alliance project',
      },
      {
        client: 'UNESCO MGIEP',
        title: 'Digital Teacher Online Course',
        description:
          'While at UNESCO MGIEP, Shraddha led the development of the Digital Teacher Online Course that has been implemented in more than nine countries, including India, Bangladesh, Bhutan, Sri Lanka, Nigeria, Maldives, Mexico, South Africa, and Jordan, reaching over 175,000 teachers in the first 3 years of its launch.',
        imageAlt: 'UNESCO MGIEP project',
        actions: [
          { label: 'View Course', href: '#' },
          { label: 'Facilitator Toolkit', href: '#' },
        ],
      },
    ],
  },
  {
    title: 'Workshops',
    projects: [
      {
        client: 'University of Stirling',
        title: 'AI for Teaching, Learning & Research',
        description:
          'Our two-day faculty training program combined the hands-on exploration of more than ten AI tools with critical discussions on ethical use. We drove measurable improvements: 88% of participants discovered new tools to enhance their teaching materials, and 35% gained confidence in using AI for research and student guidance.',
        image: '/images/projects/University of Stirling.jpg',
        imageAlt: 'University of Stirling workshop',
        actions: [{ label: 'Learn More', href: '#' }],
      },
      {
        client: 'ITM Skill University',
        title: 'Universal Design for Learning',
        description:
          'The workshop explores how the UDL framework helps educators proactively identify and preempt diverse learner barriers, such as language, varying background knowledge, and attention spans. Rather than reacting to challenges mid-lesson, the workshop guides faculty to intentionally build flexibility and support directly into their materials, activities, and assessments across the three dimensions of learning: the why (motivation), what (comprehension), and how (expression).',
        image: '/images/projects/ITM Skills University.png',
        imageAlt: 'ITM Skill University UDL workshop',
        actions: [
          {
            label: 'Learn More',
            href: 'https://drive.google.com/file/d/1AdeOuv0k7TURic-C4F-2fBgoJ3oSkW3/view?usp=drive_link',
          },
        ],
      },
      {
        client: 'K R Mangalam University',
        title: 'Science of Learning',
        description:
          'A three-day Science of Learning workshop trained 150 faculty across three cohorts, combining insights from cognitive science and educational research. With a heavy application focus, the workshop helped faculty to apply the insights to redesign their slides, assessments, retrieval strategies, and lesson plans for better learning outcomes. Post workshop, 65% felt confident managing cognitive load (up from 24% pre-workshop), and 76% felt confident applying retrieval practice.',
        image: '/images/projects/K R Mangalam University.JPG',
        imageAlt: 'K R Mangalam University workshop',
        actions: [{ label: 'Learn More', href: '#' }],
      },
    ],
  },
  {
    title: 'Research, Evaluation, & Knowledge Products',
    projects: [
      {
        client: 'UNICEF India',
        title: 'Technical Guidelines on Engaging the Most Marginalised Youth',
        description:
          "We led the development of technical guidelines for a joint initiative by UNICEF, UNHCR, and UNFPA. These guidelines offer practical strategies to help practitioners design inclusive educational and skilling programs that address systemic barriers. We also developed the 'RAISE-TM Assessment tool' to help teams evaluate their programs' inclusivity.",
        image: '/images/projects/UNICEF India Technical.png',
        imageAlt: 'UNICEF India technical guidelines',
        actions: [
          {
            label: 'Learn More',
            href: 'https://theprint.in/india/un-guidelines-to-help-marginalised-indian-youths-transition-from-learning-to-earning-soon/2346575/',
          },
        ],
      },
      {
        client: 'Wingreens World',
        title: 'AI for Sales Enablement',
        description:
          'We designed a conversational, AI-powered chatbot to make organizational knowledge instantly accessible to teams across Wingreens. By providing step-by-step guidance and refresher content anytime, anywhere, we facilitated continuous learning, improved on-the-job performance, and significantly reduced training time for fast-paced, field-based roles.',
        image: '/images/projects/Wingreens World.png',
        imageAlt: 'Wingreens World project',
      },
      {
        client: 'UNICEF India',
        title: 'Passport to Earning (P2E): A Blueprint for Scaling Digital Skilling',
        description:
          "A study of UNICEF YuWaah's Passport to Earning program, a large-scale digital skilling initiative that achieved 5.7 million course completions across 700+ districts in India. The study captured the program's design and achievements and distilled its model into replicable strategies that can be applied by government ministries and skilling institutes for large-scale skilling with high completion rate. We'll update the link to the report after the launch.",
        image: '/images/projects/UNICEF India.webp',
        imageAlt: 'UNICEF P2E study',
      },
      {
        client: 'UNICEF India',
        title:
          'Digital Girls Hub (DGH): Evidence for Local, Women-Led Digital Skilling Infrastructure',
        description:
          "Mixed-methods study of UNICEF YuWaah's Digital Girls Hub pilot across Rajasthan, Odisha, and Jharkhand, combining three cross-sectional survey datasets with stakeholder interviews to test the case for local, women-run computer centres and short, placement-linked skilling.",
        image: '/images/projects/UNICEF India.png',
        imageAlt: 'UNICEF DGH study',
      },
    ],
  },
];

function ProjectImage({
  src,
  alt,
  className,
  fit = 'cover',
}: {
  src?: string;
  alt: string;
  className?: string;
  fit?: 'cover' | 'contain';
}) {
  if (!src) {
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

  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        'w-full bg-black/[0.04] rounded-lg border border-black/10',
        fit === 'contain' ? 'object-contain' : 'object-cover',
        className
      )}
    />
  );
}

export default function ProjectsList() {
  return (
    <section className="bg-white py-20 md:py-32">
      <div className="page-margin max-content">
        {/* Table */}
        <ScrollReveal>
          <div className="max-w-[75ch] mx-auto text-center mb-12 md:mb-16">
            <h1 className="heading-xl text-black mb-6">Our Projects</h1>
            <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
              Different sectors, different audiences, different formats. But our
              focus remains the same: learning designed to produce real change,
              not just completion.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-black/10">
              <thead>
                <tr className="bg-black text-white">
                  <th className="w-16 p-4 text-left font-body text-sm font-medium border-r border-white/20">
                    #
                  </th>
                  <th className="w-1/3 p-4 text-left font-body text-sm font-medium border-r border-white/20">
                    Project
                  </th>
                  <th className="p-4 text-left font-body text-sm font-medium">
                    Images
                  </th>
                </tr>
              </thead>
              <tbody>
                {allRows.map((row) =>
                  row.type === 'section' ? (
                    <tr key={`section-${row.title}`} className="bg-black text-white">
                      <td
                        colSpan={3}
                        className="p-4 font-display text-lg font-semibold"
                      >
                        {row.title}
                      </td>
                    </tr>
                  ) : (
                    <tr
                      key={`project-${row.title}`}
                      className="border-t border-black/10"
                    >
                      <td className="p-4 align-top font-body text-sm text-black/60 border-r border-black/10 text-center">
                        {row.number}
                      </td>
                      <td className="p-4 align-top font-body text-sm font-medium text-black border-r border-black/10">
                        {row.title}
                      </td>
                      <td className="p-4 align-top font-body text-sm text-black/70 leading-relaxed">
                        {row.notes || '—'}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-16 md:gap-24 mt-24 md:mt-32">
          {cardSections.map((section) => (
            <div key={section.title}>
              <ScrollReveal>
                <h2 className="display-md text-black mb-10 md:mb-16">
                  {section.title}
                </h2>
              </ScrollReveal>

              <div className="flex flex-col">
                {section.projects.map((project, index) => {
                  const isReversed = index % 2 === 1;
                  return (
                    <ScrollReveal key={project.title}>
                      <article
                        className={cn(
                          'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-20 border-t border-black/10',
                          index === section.projects.length - 1 &&
                            'border-b border-black/10'
                        )}
                      >
                        <div
                          className={cn(
                            'flex flex-col justify-center',
                            isReversed && 'md:order-2'
                          )}
                        >
                          <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2">
                            {project.client}
                          </h3>
                          <h4 className="font-display text-sm md:text-base text-pink mb-6">
                            {project.title}
                          </h4>
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
                                  className="rounded-full"
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
                          <ProjectImage
                            src={project.image}
                            alt={project.imageAlt}
                            className={
                              project.client === 'UNESCO Myanmar'
                                ? 'aspect-[16/9]'
                                : 'aspect-[4/3]'
                            }
                            fit="contain"
                          />
                        </div>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
