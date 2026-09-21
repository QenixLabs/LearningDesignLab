export interface NutshellItem {
  label: string;
  value: string;
}

export interface CaseStudySection {
  heading?: string;
  level?: 2 | 3;
  paragraphs?: string[];
  callout?: {
    label?: string;
    text: string;
  };
  list?: string[];
  numberedList?: string[];
  gridItems?: {
    title: string;
    description: string;
  }[];
}

export interface CurriculumTheme {
  theme: string;
  courses: string[];
}

export interface CaseStudy {
  slug: string;
  client: string;
  title: string;
  subtitle: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  nutshell: NutshellItem[];
  intro?: string;
  challengeCallout?: string;
  sections: CaseStudySection[];
  curriculumStructure?: {
    title: string;
    description?: string;
    themes?: CurriculumTheme[];
    stages?: {
      stage: string;
      title: string;
      description: string;
    }[];
  };
  quote?: {
    text: string;
    attribution: string;
    role: string;
  };
  impactStats?: {
    label: string;
    value: string;
    subtext?: string;
  }[];
  lessonsLearned?: {
    number: number;
    text: string;
  }[];
  actions?: {
    label: string;
    href: string;
    variant?: 'primary' | 'secondary' | 'outline';
  }[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'ai-data-science-course',
    client: 'GIZ & Swayam',
    title: "Redesigning an AI & Data Science Course for India's Largest Digital Learning Platform",
    subtitle: "Two video-based courses for learners who'd never taken one like this before",
    category: 'Courses & Curricula',
    heroImage: '/images/projects/GIZ & Swayam.jpg',
    heroImageAlt: 'GIZ & Swayam AI and Data Science courses',
    nutshell: [
      {
        label: 'Client',
        value: "GIZ (German Society for International Cooperation), in partnership with IGNOU, which manages India's largest government-run open-course platform",
      },
      {
        label: 'Brief',
        value: 'Review and adaptation of two online courses on Gen AI Basics and Data Analysis Basics from text to video for young Indians from a social science background',
      },
      {
        label: 'Our Role',
        value: 'End-to-end instructional design — learner research, curriculum framework, learning sequence design, video scripting, and interactivity development',
      },
      {
        label: 'The Outcome',
        value: 'Online courses designed for building skills and optimized for attention, understanding, recall, and competency',
      },
    ],
    sections: [
      {
        level: 2,
        heading: 'We had to rebuild a course with a fresh goal, for a different platform & audience',
        paragraphs: [
          'GIZ had already created and hosted text-based modules on its own platform, Atingi. Bringing it to India, on SWAYAM and for a different audience, changed the brief on four fronts:',
        ],
        gridItems: [
          {
            title: 'Goal',
            description:
              'The goal was to enable learners to use AI and data skills in their lives and jobs, not just to gain foundational awareness of concepts. We needed to fundamentally reimagine the courses.',
          },
          {
            title: 'Format',
            description:
              'SWAYAM is essentially a video-based learning platform. We needed to transform text modules into engaging, pedagogical video experiences.',
          },
          {
            title: 'Audience',
            description:
              'Adapting AI and data science concepts specifically for Indian social science students by simplifying dense technical components and grounding theory in relatable Indian examples.',
          },
          {
            title: 'Learning Design',
            description:
              'Unlike theory-based courses, applied courses like these are ineffective without practice. We had to embed external tools on the platform to build active hands-on interactivity.',
          },
        ],
      },
      {
        level: 2,
        heading: 'We brought the team together on the purpose before starting to design the course',
        paragraphs: [
          'Most course redesigns start with an inventory: What material already exists? What are the modules, units, and topics to cover? Only after that does anyone try to make it engaging — usually by adding a video here, a quiz there.',
          'We asked: "What should learners be able to do after completing this course?" Then, we assessed the existing content through this lens. Every subsequent decision — what to keep, what to cut, what to add, what to practice, and how to sequence it — was tightly aligned with this goal.',
          'We facilitated this conversation with GIZ, the SMEs, and their team of trainers who had conducted workshops on these themes with similar learners. We understood from their first-hand experience what content learners find most helpful, what skills they most use, what kind of practice helps build those skills, what mistakes they make during application, and real-world use cases of AI and data science in their work.',
          "Besides this, we discussed learner platform behavior with the Indira Gandhi National Open University (IGNOU), SWAYAM's coordinating partner for this learner stream. We gained insights into learners' media habits, how long they typically stay engaged with a video, whether they join from phones or laptops, their educational qualifications, and locations.",
        ],
      },
      {
        level: 3,
        heading: 'The learning design process',
        paragraphs: [
          'Once we were aligned on the goal and had deep clarity on the learners, we audited GIZ’s existing materials against defined performance goals, trimming superfluous topics and filling skill gaps alongside GIZ’s subject matter experts.',
          'We framed our learning design principles on cognitive science and online learning research — even when they differed from typical courses on the platform. For instance, while the standard video length on SWAYAM is 30–50 minutes, we capped videos at <6 minutes and created multiple short, focused videos, drawing on attention research showing that learner engagement plummets sharply after 5–6 minutes.',
        ],
      },
      {
        level: 2,
        heading: 'Bringing the plan to life',
        paragraphs: [],
      },
      {
        level: 3,
        heading: 'From broad content to specific learning sequences',
        paragraphs: [
          'Once the curriculum framework was in place, we divided the content into modules and units, then created a dedicated learning sequence for each unit.',
          'A learning sequence consists of the material and practice that reliably produces learning. For this course, that typically comprised an opening question or real stake, a short video, an infographic for visual recap of the key idea, a scenario-based question to test understanding, an interactive for practice, and a suggested applied task.',
        ],
      },
      {
        level: 3,
        heading: 'Scripting each video for impact',
        paragraphs: [
          'For scripting the videos, we applied rules derived from evidence-based best practices:',
        ],
        list: [
          'We opened each video with a question, a fact, or a real stake — because the first five seconds decide whether a learner stays.',
          'We wrote the way a teacher explains something to a person, maintaining a simple, conversational tone.',
          'Every abstract idea was anchored to a relatable, real-world example.',
          'Visuals were conceptualized to actively aid understanding and schema formation.',
          'Screencast demonstrations showed experts using AI and data tools live, so learners could see how to use tools, not just read about them.',
          'Each demonstration was followed immediately by a practice task so learners applied what they just watched.',
        ],
      },
      {
        paragraphs: [
          'Scripts and sequences underwent a rigorous dual-review process: learning designers validated pedagogical effectiveness while SMEs ensured technical accuracy. To maintain quality as production expanded, we standardized content development across the team early on.',
          'Once scripts were finalized, they were filmed in the IGNOU Studio with instructor headshots and graphics, and edited by a video development agency while our team developed custom graphics, infographics, and interactives.',
        ],
      },
    ],
    quote: {
      text: "This is one of the most inspiring and memorable collaborations for me, and it's all because of everyone involved with so much commitment. Grateful for pushing the two microcredentials with full momentum and through many long weekends.",
      attribution: 'Preyansi',
      role: 'Education & Digitalisation Advisor, Digital Skills To Succeed in Asia, GIZ',
    },
    lessonsLearned: [
      {
        number: 1,
        text: 'Good learning design always begins with understanding the learners, their needs and preferences, and a clear goal that aligns with these relationships.',
      },
      {
        number: 2,
        text: 'Good design requires ongoing, iterative collaboration between subject matter experts and learning designers.',
      },
      {
        number: 3,
        text: 'Good design must be grounded in research and the science of learning instead of norms or tradition.',
      },
      {
        number: 4,
        text: 'Quality emerges when we go beyond our predefined roles and ask fundamental questions to guide the work.',
      },
    ],
    actions: [
      {
        label: 'Explore on SWAYAM',
        href: 'https://swayam.gov.in/',
        variant: 'outline',
      },
    ],
  },
  {
    slug: 'gender-awareness-activism-course',
    client: 'Patang India',
    title: 'Creating A Gender Course That Turns Youth Into Activists',
    subtitle:
      'Seven modules, real field stories, and a Bollywood love song — designed to turn awareness into action',
    category: 'Courses & Curricula',
    heroImage: '/images/projects/Patang India.jpg',
    heroImageAlt: 'Patang India Gender Champion Course',
    nutshell: [
      {
        label: 'Client',
        value: 'Patang India — a nonprofit with 20+ years of grassroots experience in gender equity work with youth',
      },
      {
        label: 'The Ask',
        value: 'A course that produces Gender Champions: youth who recognize gender discrimination and stereotypes and actively challenge them',
      },
      {
        label: 'Audience',
        value: 'Young people studying in tier-two Indian universities and colleges',
      },
      {
        label: 'Our Role',
        value: 'Content research, content sourcing from SMEs, platform selection, instructional design, course development, and handover training',
      },
      {
        label: 'The Result',
        value: 'A youth-friendly, highly engaging, mobile-based online course on gender centered on lived youth experiences and pop culture references',
      },
    ],
    intro:
      'People learn to follow gender norms long before anyone teaches them to question them. Left unchecked, these ideas shape how people treat each other and how they see violence, fairness, and identity.',
    challengeCallout:
      'How do we recreate the reflection, insight, and inspiration of an in-person gender workshop inside a self-paced digital course, and make it exciting enough that young people would choose to take it?',
    sections: [
      {
        level: 2,
        heading:
          'How to recreate reflection, realization, and inspiration of an in-person workshop in a digital learning journey?',
        paragraphs: [
          'Patang has spent over two decades working directly with young people to advance gender justice. Their in-person gender champion workshops shifted participant perspectives remarkably. The true power of these workshops was never just didactic content — it was the safe space that inspired reflection, critical analysis, personal realization, and group solidarity. A single participant’s story about breaking a stereotype at home could shift the mindset of the entire room.',
          'However, Patang could not scale this high-touch in-person model to reach the thousands of young people across tier-two Indian universities who needed it most. They partnered with us to design a mobile, self-paced course that universities could adopt as an accredited micro-credit course.',
          'We faced a dual challenge: recreating the emotional insight of live workshops within an asynchronous digital flow, while treating sensitive themes like consent and gender-based violence with empathy and accessibility. Furthermore, unlike a classroom workshop with a captive audience, an online course is optional. If the experience did not feel genuinely engaging in the first two minutes, students would simply close the app.',
        ],
      },
      {
        level: 2,
        heading: 'Grounded in real stories from the field, not hypothetical scenarios',
        paragraphs: [
          'Every module opens with a relatable narrative rather than abstract theory: a girl pressured to marry rather than pursue higher education, a young man overwhelmed by financial expectations, or a mother whose full day of domestic labor is dismissed. Learners arrive at theory naturally because they become curious about their own lived experiences.',
          'The course features real stories of ordinary youth who confronted and challenged gender norms. During pilot testing, learners singled out these narratives as "the most memorable part of the course." These accounts were drawn directly from field reports and workshops gathered by Patang’s staff over years of grassroots engagement.',
        ],
      },
      {
        level: 3,
        heading: 'Sourcing diverse qualitative field data',
        paragraphs: [
          'Content was curated from primary field data gathered by Patang’s social workers: real youth navigating domestic conflicts, questioning generational norms, and articulating the weight of societal expectations. Our instructional designers structured this qualitative material into a formal pedagogical journey, while Patang’s experts validated the authenticity of every scenario.',
          'The case studies incorporate both adverse dilemmas and positive transformations (such as family members embracing a young person’s stance), deliberately establishing agency as the guiding light through inequality.',
        ],
      },
      {
        level: 3,
        heading: 'Generative learning: letting learners arrive at understanding, not receive it',
        paragraphs: [
          'Rather than lecturing on definitions, the course invites learners to guess, react, reflect, categorize, and debate. Cognitive research shows active generative processing drives significantly deeper attitude and behavior change than passive reading.',
          'In the Power module, learners analyze everyday situations — a teacher grading a student, a local panchayat leader allocating funds — and identify who holds power before the platform explains structural authority.',
          'In the Gender module, learners drag daily household tasks into "Man", "Woman", or "Anyone" categories, directly confronting their internalized assumptions before gender socialization is formally introduced. This recreates the productive cognitive friction of a live workshop.',
          'To support blended offerings, the program also includes a comprehensive facilitator toolkit with session agendas, debriefing guides, and reflection prompts.',
        ],
      },
      {
        level: 3,
        heading: 'Nuanced messaging that challenges beliefs without judgement',
        paragraphs: [
          'The course consciously avoids rigid right/wrong grading on questions touching on deeply held personal convictions. Multiple-choice prompts often allow multiple viewpoints to hold truth, and automated feedback never shames a learner for an unexamined belief.',
          'Crucially, the Masculinity module does not open by condemning "toxic masculinity." Instead, it frames boys and men as equally constrained by rigid patriarchal expectations — pressured to suppress emotion, burdened with sole provider pressure, and penalized for vulnerability. By inviting boys into the conversation as partners affected by gender inequality rather than culprits, the course inspires young men to champion equity alongside their peers.',
        ],
      },
      {
        level: 3,
        heading: 'Teaching consent through Bollywood love songs',
        paragraphs: [
          'Rather than relying solely on legalistic definitions of consent, the course invites youth to critically dissect the lyrics and tropes of popular Bollywood songs. Learners spot the boundary between romantic pursuit and coercive control, then vote on a crowdsourced "consent-friendly playlist" highlighting healthy relationship dynamics.',
          'Interactive formats including crosswords, scenario simulations, and drag-and-drop exercises maintain engagement and spark personal introspection.',
        ],
      },
    ],
    curriculumStructure: {
      title: 'The Learning Arc: From Awareness to Behavior Change',
      description:
        'The course follows a deliberate 6-stage arc: Awareness → Reflection → Perspective-Taking → Critical Examination → Personal Commitment → Behavior Change. The 7 modules build progressively along this journey:',
      stages: [
        {
          stage: 'Module 1',
          title: 'Understanding Gender',
          description: 'Origins of gender norms, socialization, and distinguishing biological sex from social constructs.',
        },
        {
          stage: 'Module 2',
          title: 'Identity',
          description: 'Exploring how intersectionality, caste, class, and geography shape personal identity.',
        },
        {
          stage: 'Module 3',
          title: 'Privilege & Power',
          description: 'Analyzing power dynamics, invisible advantages, and societal structures of equity.',
        },
        {
          stage: 'Module 4',
          title: 'Masculinity',
          description: 'Deconstructing masculine norms and exploring healthy, expressive emotional expression.',
        },
        {
          stage: 'Module 5',
          title: 'Unpaid Care Work',
          description: 'Examining the economic and emotional burden of domestic labor and caregiving.',
        },
        {
          stage: 'Module 6',
          title: 'Allyship',
          description: 'Developing empathy, inclusive communication, and bystander intervention strategies.',
        },
        {
          stage: 'Module 7',
          title: 'Becoming a Gender Champion',
          description: 'Synthesizing insights into a concrete personal action plan for home, campus, and community.',
        },
      ],
    },
    quote: {
      text: 'The modules are highly engaging and deeply reflective. The use of popular culture along with a diverse range of methodologies stands out. It is evident how much hard work, thought, and passion have gone into this effort. Truly admirable work—this has the potential to be a real game changer.',
      attribution: 'Dr. Rita Mishra',
      role: 'Founder & CEO, Patang India',
    },
    actions: [
      {
        label: 'View Course Platform',
        href: 'https://patang.graphy.com/',
        variant: 'primary',
      },
      {
        label: 'Watch Course Trailer',
        href: 'https://youtu.be/eRkFhV0jKgk?si=Ftr-9xIKl1FumNCy',
        variant: 'outline',
      },
    ],
  },
  {
    slug: 'courses-for-community-teachers-in-myanmar',
    client: 'UNESCO Myanmar',
    title: "Training Myanmar's Community Teachers for Education in Crisis",
    subtitle: '12 courses, 4 themes, & learning designed for behavior change in emergency contexts',
    category: 'Courses & Curricula',
    heroImage: '/images/projects/UNESCO_Myanmar_collage.png',
    heroImageAlt: 'UNESCO Myanmar Community Teachers Training Courses',
    nutshell: [
      {
        label: 'Client',
        value: 'UNESCO Myanmar',
      },
      {
        label: 'Platform',
        value: 'Myanmar Teacher Platform (MTP)',
      },
      {
        label: 'Audience',
        value: 'Community and volunteer teachers working in displacement camps, conflict zones, and climate-affected regions across Myanmar',
      },
      {
        label: 'Format',
        value: '12 self-paced online courses structured across 4 thematic tracks',
      },
      {
        label: 'Our Role',
        value: 'Context research, behavioral goal-setting, consultative course structuring, pedagogical scripting, UX testing, and interactive content development',
      },
      {
        label: 'The Result',
        value: 'An evidence-based, interconnected 12-course curriculum optimized for high-stress, low-bandwidth crisis environments',
      },
    ],
    intro:
      "Since 2021, Myanmar's formal education system has been profoundly disrupted by civil conflict, natural disasters, and displacement. Community and volunteer teachers now form the primary educational backbone across affected regions, though most lack formal pedagogical training.",
    challengeCallout:
      'How could we equip community teachers with the knowledge, skills, motivation, and resilience needed to address interconnected crises across Disaster Risk Reduction, Safe Schools, Gender Transformative Education, and Climate Change?',
    sections: [
      {
        level: 2,
        heading: "Community teachers have become Myanmar's educational backbone, without the training to match it",
        paragraphs: [
          'In conflict zones and displacement camps across Myanmar, community educators serve not only as teachers, but as emotional anchors, protectors, and first responders. UNESCO established the Myanmar Teacher Platform (MTP) to deliver scalable digital professional development directly to difficult-to-reach areas.',
          'The objective was to create self-paced courses that enable volunteer teachers to play a supportive, multifunctional role: safeguarding student psychosocial wellbeing, anticipating climatic hazards, establishing safe classroom routines, and advocating for gender equity under disruption.',
        ],
      },
      {
        level: 2,
        heading: 'We designed for direct, immediate action in crisis contexts',
        paragraphs: [],
      },
      {
        level: 3,
        heading: 'Behavior-focused design to close the learning-transfer gap',
        paragraphs: [
          'Rather than drafting abstract theoretical objectives, each course was anchored to precise, observable classroom behaviors needed immediately on the ground — such as recognizing distress signs in children, replacing harmful disciplinary practices with positive reinforcement, and executing early warning emergency drills.',
          'In high-stress, resource-scarce contexts, teachers need explicit, actionable guidance on what to do differently rather than general conceptual frameworks. This design bridges the gap between knowing and doing.',
        ],
      },
      {
        level: 3,
        heading: 'Learning science principles for high impact and retention',
        paragraphs: [
          'Course architecture applied cognitive load theory and retrieval practice to prevent overload and maximize retention under stress. Each course is split into 3–5 digestible modules of bite-sized units.',
          'Every video is limited to a single key behavior, immediately followed by interactive practice and reflective scenario prompts. Module summaries reinforce core concepts, while explicit cross-references between the courses reinforce neural pathways, promoting automatic recall even during crisis events.',
        ],
      },
      {
        level: 3,
        heading: 'Consultative design grounded in lived realities and evidence',
        paragraphs: [
          'Content development was grounded in a rigorous review of 40+ policy documents, field reports, and curricula, combined with two iterative rounds of consultation with UNESCO specialists and grassroots educators in Myanmar.',
          'The first consultation surfaced teachers’ lived challenges, low-bandwidth constraints, and immediate priorities before writing began. The second round pilot-tested draft content, incorporating authentic anecdotes and language nuances directly into the modules.',
        ],
      },
      {
        level: 3,
        heading: 'Data-based selection of interactive formats',
        paragraphs: [
          'Our UX team tested platform interactivity across low-cost mobile handsets and low-bandwidth connections, analyzing MTP user telemetry to determine which interaction types succeeded most consistently. Based on real learner data, we selected four streamlined interactive formats rather than complex widgets that risk technical failure in the field.',
        ],
      },
    ],
    curriculumStructure: {
      title: 'Curriculum Framework: 4 Thematic Tracks & 12 Courses',
      description:
        'All 12 courses are live on UNESCO’s Myanmar Teacher Platform, accessible to teachers directly on mobile and leveraged in cascaded in-person workshops:',
      themes: [
        {
          theme: 'Disaster Risk Reduction (DRR)',
          courses: [
            '1. Understanding Disasters & Building Community Resilience',
            '2. Community Preparedness & School-Based Emergency Response',
            '3. Safe Environment & Risk Reduction in Daily Life',
          ],
        },
        {
          theme: 'Safe Schools',
          courses: [
            '1. Safe Classroom Routines & Positive Discipline',
            '2. Psychosocial Safety & Trauma-Informed Support',
            '3. Maintaining Continuity of Learning Under Disruption',
          ],
        },
        {
          theme: 'Climate Change Education',
          courses: [
            '1. Understanding Climate Change & Local Impacts',
            '2. Teaching for Climate Resilience in Schools & Communities',
            '3. Leading Climate Action & Youth-Led Solutions',
          ],
        },
        {
          theme: 'Gender-Transformative Education',
          courses: [
            '1. Gender Awareness, Bias & Teacher Self-Reflection',
            '2. Gender-Transformative Pedagogy & Classroom Practices',
            '3. Gender Transformation in the School & Broader Community',
          ],
        },
      ],
    },
    quote: {
      text: 'The courses are highly comprehensive and well-suited for e-learning, offering practical insights with a strong balance of personalization and scaffolded key concepts.',
      attribution: 'Myat Thiri',
      role: 'Project Coordinator, UNESCO Myanmar',
    },
    impactStats: [
      {
        value: '4.4 / 5',
        label: 'Average Pilot Rating',
        subtext: 'Evaluated by 36 volunteer community teachers across diverse states in Myanmar',
      },
      {
        value: '12',
        label: 'Published Courses',
        subtext: 'Fully deployed on Myanmar Teacher Platform (MTP)',
      },
      {
        value: '4',
        label: 'Thematic Tracks',
        subtext: 'Covering DRR, Safe Schools, Climate Change, & Gender Transformation',
      },
    ],
  },
  {
    slug: 'multiformat-courses-for-moderators',
    client: 'Search for Common Ground',
    title: 'Upskilling Moderators of Online Communities',
    subtitle:
      'Nine gamified, mobile-first courses developed using games, comics, and interactive simulations',
    category: 'Courses & Curricula',
    heroImage: '/images/projects/Search for Common Ground.png',
    heroImageAlt: 'Search for Common Ground Digital Stewardship Courses',
    nutshell: [
      {
        label: 'Client',
        value: 'Search for Common Ground (in collaboration with Meta)',
      },
      {
        label: 'Platform',
        value: 'EdApp / SC Training (mobile-first micro-learning)',
      },
      {
        label: 'Audience',
        value: 'Administrators and moderators of digital communities and discussion groups worldwide',
      },
      {
        label: 'Format',
        value: 'Nine self-paced, mobile microlearning courses (60–90 minutes each, broken into 10-minute units)',
      },
      {
        label: 'The Ask',
        value: 'Adapt a 3-day in-person workshop curriculum into a gamified, asynchronous mobile learning experience',
      },
      {
        label: 'Our Role',
        value: 'Platform identification, learning design architecture, course outlines, interactive game development, visual storytelling, and assessment design',
      },
    ],
    intro:
      'Online communities can be powerful catalysts for collective action and mutual support, but they are equally vulnerable to toxicity, hate speech, and misinformation. Most moderators are volunteer community members balancing moderation with full-time jobs, with virtually no formal training in digital conflict resolution.',
    challengeCallout:
      'How can an intensive 3-day training curriculum be transformed into a playful, mobile-first learning journey that fits into 10-minute daily micro-sessions while building real de-escalation and moderation competence?',
    sections: [
      {
        level: 2,
        heading:
          'How do you upskill volunteers managing digital communities outside their full-time roles?',
        paragraphs: [
          'Online group leaders perform demanding, often unrewarded labor to keep digital environments civil and safe. Few avenues exist for these leaders to learn the skills necessary to de-escalate hostility, protect marginalized participants, foster mutual trust, and combat synthetic or viral falsehoods.',
          'Search for Common Ground, an international peacebuilding organization, partnered with Meta to develop a premier digital stewardship training program. While their initial in-person workshops were impactful, they were resource-intensive and impossible to scale globally to the millions of volunteer community managers needing them.',
          'Our mission was to reimagine this comprehensive peacebuilding curriculum for the smartphone screen: engaging, interactive, non-academic, and bite-sized.',
        ],
      },
      {
        level: 2,
        heading: 'We created 9 gamified micro-learning courses',
        paragraphs: [
          'The resulting suite directly addresses the reality of volunteer moderators: severe time constraints, high emotional friction, and diverse language backgrounds.',
        ],
      },
      {
        level: 3,
        heading: 'Targeted micro-learning in 10-minute units',
        paragraphs: [
          'We structured nine distinct micro-courses on EdApp (now SC Training). Each 60–90 minute course is broken down into modular 10-minute learning units targeting a single concept or operational micro-skill.',
          'Every segment starts with an intriguing hook establishing direct relevance, followed by gradual information revelation, concrete social media examples, quick comprehension checks, and practical application tasks.',
        ],
      },
      {
        level: 3,
        heading: 'Active learning through simulations and games',
        paragraphs: [
          'Rather than lecturing on digital safety standards, the courses immerse learners in live decision-making. Practice occurs through games, simulations, and dilemma scenarios.',
          'For instance, the fact-checking course integrates "Bad News" (a simulation game developed with Cambridge University), while leadership modules present ambiguous moderation dilemmas where learners must evaluate which community guidelines a post breaches.',
        ],
      },
      {
        level: 3,
        heading: 'Visual-first design: comics, infographics, and real artifacts',
        paragraphs: [
          'Complex cognitive dynamics like confirmation bias and implicit bias are communicated through serialized comic illustrations rather than academic definitions.',
          'A "flourishing garden" clickable visual metaphor breaks down a steward’s responsibilities into digestible components. Real cartoons, actual social media screenshots, and downloadable infographic toolkits give learners authentic materials to dissect and share with their moderating teams.',
        ],
      },
      {
        level: 3,
        heading: 'Design that respects cultural diversity & multipartiality',
        paragraphs: [
          'Rather than prescribing rigid Western-centric rules, the course models multipartiality — acknowledging diverse perspectives while firmly countering harm. The hate-speech module breaks down real global case studies to help moderators identify cultural nuance, dog-whistles, and systemic bigotry without imposing blunt censorship.',
          'Visual assets depict diverse ethnicities, backgrounds, and community types so moderators worldwide see their communities reflected.',
        ],
      },
      {
        level: 3,
        heading: 'Peer-to-peer connection & global stewardship',
        paragraphs: [
          'To overcome the isolation of self-paced digital learning, the curriculum integrates interactive polls, live Mentimeter word clouds, discussion boards, and video interviews with veteran community stewards.',
          'Upon completing certification, learners are welcomed into New Public, an international network of digital community stewards fostering sustained peer exchange.',
        ],
      },
    ],
    quote: {
      text: 'The course content was very helpful, there was no superfluous information. The graphics and interactive activities were soothing to the eye, informative, and fun. My favorite part was challenging myself to identify misinformation and analyze real posts.',
      attribution: 'Community Moderator Participant',
      role: 'Digital Stewardship Certification Program',
    },
    impactStats: [
      {
        value: '9',
        label: 'Micro-Courses Built',
        subtext: 'Modular, gamified, self-paced certification',
      },
      {
        value: '100+',
        label: 'Languages Supported',
        subtext: 'Global reach with mobile offline access on EdApp',
      },
      {
        value: '10 min',
        label: 'Daily Micro-Sessions',
        subtext: 'Designed specifically for busy volunteer administrators',
      },
    ],
    actions: [
      {
        label: 'Explore Course on SC Training',
        href: 'https://cnxus.org/digital-community-stewards-online-course/',
        variant: 'primary',
      },
      {
        label: 'Watch Program Overview',
        href: 'https://www.youtube.com/watch?v=khGvtsxTVdU&t=1117s',
        variant: 'outline',
      },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getAdjacentCaseStudies(currentSlug: string): {
  prev?: CaseStudy;
  next?: CaseStudy;
} {
  const index = caseStudies.findIndex((c) => c.slug === currentSlug);
  if (index === -1) return {};
  const prev = index > 0 ? caseStudies[index - 1] : caseStudies[caseStudies.length - 1];
  const next = index < caseStudies.length - 1 ? caseStudies[index + 1] : caseStudies[0];
  return { prev, next };
}
