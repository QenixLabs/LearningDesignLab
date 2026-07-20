import Layout from '../components/Layout';
import Button from '../components/Button';
import { cn } from '@/lib/utils';

interface ConferenceAction {
  label: string;
  href: string;
}

interface Conference {
  title: string;
  year: string;
  location: string;
  description: string;
  imageAlt: string;
  image?: string;
  images?: string[];
  imagePosition?: string;
  actions?: ConferenceAction[];
  tags?: string[];
}

const conferences: Conference[] = [
  {
    title: 'Learning Planet Festival (LDC Collaboration)',
    year: '2026',
    location: 'Virtual',
    description:
      'Shraddha hosted a chat with Dr. Carl Hendrick, co-author of Instructional Illusions, for educators and L&D professionals. The discussion explored why effective learning design is often counterintuitive. Together, they unpacked common "illusions" about discovery, expertise, engagement, and learner-centred design, that appear attractive but lack evidence. They also offered practical guidance designing for genuine cognitive engagement and durable learning.',
    imageAlt: 'Learning Planet Festival 2026',
    image: '/images/conferences/Learning Planet Festival (LDC Collaboration), 2026.png',
    actions: [{ label: 'Watch the Video', href: 'https://www.learning-planet.org/event/science-of-learning-essentials-discover-popular-instructional-illusions-with-carl-hendrick/' }],
  },
  {
    title: 'Redefining Education Conference',
    year: '2026',
    location: "SVKM's Mithibai College of Arts, India",
    description:
      "LDC collaborators Deepthy (Professor, ITM University) and Nivid (Professor, IIT Gwalior) delivered an oral presentation on 'Truth-Centric Education Through Indian Knowledge Systems'. Their paper explored the potential of Indian Knowledge Systems (IKS) as a pedagogical foundation in contemporary higher education. They positioned truth-centric learning not merely as a moral ideal, but as an active, educative process of refining perception, attention, and awareness.",
    imageAlt: 'Redefining Education Conference 2026',
    image: '/images/conferences/Redefining Education Conference.png',
  },
  {
    title: '12th Annual Conference of Cognitive Science (ACCS-12)',
    year: '2025',
    location: 'Centre for Behavioural & Cognitive Sciences (CBCS), India',
    description:
      'Shraddha spoke on a "Games and Cognition" panel, discussing the cognitive and affective mechanisms underpinning engagement, and game-based learning. Drawing on our projects with youth and adults, she shared practical insights on applying cognitive science to enhance the educational effectiveness of games and gamification.',
    imageAlt: 'ACCS-12 2025',
    image: '/images/conferences/12th Annual Conference of Cognitive Science.jpg',
    tags: ['Panel Discussion', 'Gaming and Cognition'],
  },
  {
    title: 'India Higher Education Research Conference',
    year: '2025',
    location: 'IIT Delhi, India',
    description:
      "Shraddha and collaborators Nivid and Deepthy presented a co-authored paper on 'world higher education beyond transformation as performance' toward 'knowledge as transformation'. It highlighted how skill-building and AI must be paired with ethical grounding and contemplative ways of knowing to foster genuine discernment and sincere action in learners.",
    imageAlt: 'India Higher Education Research Conference 2025',
    image: '/images/conferences/India Higher Education Research Conference.jpg',
    imagePosition: 'object-[center_20%]',
  },
  {
    title: 'Let the Games Begin: The Future of Education',
    year: '2025',
    location: 'Learning Planet Festival and Catalyst Now',
    description:
      'Shraddha joined a panel of experts to unpack the nuances of using games and gamification for learning. She shared guiding principles for designing cultural sensitivity in narratives and translating learnings to diverse audiences; insights on scaling game-based learning for large and diverse audiences.',
    imageAlt: 'Let the Games Begin 2025',
    images: [
      '/images/conferences/The Future of Education2.jpg',
    ],
    actions: [{ label: 'Watch the Video', href: 'https://youtu.be/i-g9ngG4_0A?si=c6QBRQSMsSnXAKEr' }],
  },
  {
    title: '18th International Multidisciplinary Conference (MMUAST)',
    year: '2024',
    location: 'Masinde Muliro University of Science and Technology (MMUST), Kenya',
    description:
      "Shraddha delivered a talk on how interdisciplinary approaches can reshape learning in educational institutions and workplaces. The session explored the cognitive science of memory and retention, the role of emotions and motivation in learning, and strategies from social science and marketing—such as 'stored value' and 'social proof'—to reduce learner friction and resistance. She discussed how learning professionals can leverage AI to enhance true effectiveness, not just efficiency.",
    imageAlt: 'MMUAST 2024',
    image: '/images/conferences/18th International.jpg',
    actions: [{ label: 'Learn More', href: 'https://cnxus.org/digital-community-stewards-online-course/' }],
  },
  {
    title: 'International Conference on Technology for Education (T4E)',
    year: '2022',
    location: 'Mumbai, India',
    description:
      'Shraddha presented a co-authored paper with Parisha Jain demonstrating how Universal Design for Learning (UDL) can be practically implemented in online courses, from low- to premium digital tools. Through examples from our 3M\'s Digital Teacher course as a case study, the session modelled accessible design (interactive slides, polls, multimedia) to key UDL checkpoints, illustrating how to boost learner engagement and comprehension in low-cost, scalable contexts.',
    imageAlt: 'T4E 2022',
    image: '/images/conferences/International Conference on Technology .jpg',
  },
  {
    title: '11th World Congress on Adolescent Health (IAAH)',
    year: '2022',
    location: 'Delhi, India',
    description:
      'Shraddha spoke on a panel about applying the Human-Centered Design (HCD) approach to practical programming. She shared perspectives and practical experience with design research and prototyping to create more effective, youth-centered health and education initiatives.',
    imageAlt: 'IAAH 2022',
    image: '/images/conferences/11th World Congress on Adolescent.jpg',
  },
  {
    title: 'Skill Aid Empower India Foundation Event',
    year: '',
    location: 'YMCA, New Delhi, India',
    description:
      "Shraddha was invited as a guest speaker to share her journey of founding the Learning Design Collaborative, speaking alongside fellow psychologists and educators on 'Breaking Women's Day', she discussed the challenges and triumphs of making a societal impact as a social entrepreneur.",
    imageAlt: 'Skill Aid Empower India Foundation Event',
    image: '/images/conferences/Skill Aid Empower.jpg',
  },
  {
    title: 'Games and Cognition Course',
    year: '',
    location: 'Ashoka University, India',
    description:
      'Shraddha delivered a guest lecture for the Games and Cognition course, exploring the fundamentals of games for learning. She explained why merely making a game "engaging" is insufficient for educational outcomes and broke down the principles of effective game-based learning and gamification.',
    imageAlt: 'Games and Cognition Course',
    image: '/images/conferences/Games & Cognition Session.JPG',
  },
  {
    title: 'Podcast Appearance: Parisha and Shraddha, 2025',
    year: '2025',
    location: 'Virtual',
    description:
      'Shraddha and Parisha explained how they turned a grassroots idea into a thriving global community of learning designers, the importance of cross-sector collaboration to unlocking meaningful innovation in learning, what it takes to nurture a member-led community, and their vision for the future – regional chapters, sustainable operations, and a stronger Global South voice in L&D.',
    imageAlt: 'Podcast Appearance',
    image: '/images/conferences/Podcast Appearance: Parisha and .jpg',
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

export default function Conferences() {
  return (
    <Layout>
      <div className="pt-20" />
      <section className="bg-white py-20 md:py-32">
        <div className="page-margin max-content">
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="heading-xl text-black mb-6">Our Work at Conferences</h1>
            <p className="font-body text-xs md:text-base text-black/70 leading-relaxed">
              We've delivered talks and presentations on a diverse range of
              topics, including AI in education, Universal Design for Learning
              (UDL), youth empowerment, and the intersection of cognitive science
              and learning design.
            </p>
          </div>

          <div className="flex flex-col">
            {conferences.map((conf, index) => {
              const isReversed = index % 2 === 1;
              const showContent = conf.description || (conf.actions && conf.actions.length > 0) || (conf.tags && conf.tags.length > 0);
              return (
                <article
                  key={`${conf.title}-${index}`}
                  className={cn(
                    'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-20 border-t border-black/10',
                    index === conferences.length - 1 && 'border-b border-black/10'
                  )}
                >
                  <div
                    className={cn(
                      'flex flex-col justify-center',
                      isReversed && 'md:order-2'
                    )}
                  >
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2">
                      {conf.title}
                    </h2>
                    <p className="font-body text-sm text-black/50 mb-1">
                      {conf.year && `${conf.year} · `}
                      {conf.location}
                    </p>
                    {showContent && (
                      <>
                        <p className="font-body text-sm md:text-base text-black/70 leading-relaxed mt-4 mb-6">
                          {conf.description}
                        </p>
                        {conf.tags && conf.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {conf.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-xs font-body rounded-sm"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        {conf.actions && conf.actions.length > 0 && (
                          <div className="flex flex-wrap gap-4">
                            {conf.actions.map((action) => (
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
                      </>
                    )}
                  </div>

                  <div
                    className={cn(
                      'flex items-center',
                      isReversed && 'md:order-1'
                    )}
                  >
                    {conf.images ? (
                      <div className="flex flex-col gap-4">
                        {conf.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${conf.imageAlt} ${i + 1}`}
                            className={cn(
                              'w-full aspect-[4/3] object-cover rounded-lg border border-black/10',
                              conf.imagePosition
                            )}
                          />
                        ))}
                      </div>
                    ) : conf.image ? (
                      <img
                        src={conf.image}
                        alt={conf.imageAlt}
                        className={cn(
                          'w-full aspect-[4/3] object-cover rounded-lg border border-black/10',
                          conf.imagePosition
                        )}
                      />
                    ) : (
                      <PlaceholderImage className="w-full aspect-[4/3]" />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
