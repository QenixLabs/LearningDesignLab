export interface ProjectAction {
  label: string;
  href: string;
}

export interface Project {
  client: string;
  title: string;
  description: string;
  image?: string;
  imageAlt: string;
  actions?: ProjectAction[];
}

export interface CardSection {
  title: string;
  projects: Project[];
}

export const cardSections: CardSection[] = [
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
        client: 'Search for Common Ground',
        title: 'Digital Stewardship Courses',
        description:
          'We developed nine mobile-based micro-modules designed to empower leaders and administrators of online communities. These courses provide practical frameworks and tools to foster digital inclusion, build online collaborations, manage misinformation and hate speech, and cultivate safe, engaging online spaces.',
        image: '/images/projects/Search for Common Ground.png',
        imageAlt: 'Search for Common Ground project',
        actions: [
          { label: 'View Course', href: 'https://cnxus.org/digital-community-stewards-online-course/' },
          { label: 'Watch Video', href: 'https://www.youtube.com/watch?v=khGvtsxTVdU&t=1117s' },
        ],
      },
      {
        client: 'UNICEF India',
        title: 'Program Design For a School-Based Program on 21st Century Skills',
        description:
          'We created a competency framework and behavioral indicators aligned with national and global frameworks on 21st-century skills for children and youth. Development of a program and curriculum to build these competencies amongst middle school and senior secondary school students. Also created an assessment system and assessment tools to measure proficiency levels vis-à-vis each competency.',
        image: '/images/projects/Program Design For a School.jpg',
        imageAlt: 'UNICEF India 21st Century Skills program design',
      },
      {
        client: 'Patang India',
        title: 'Gender Champion Course',
        description:
          'We designed a highly interactive, seven-module online course to empower youth with a critical awareness of gender, identity, privilege, masculinity, and unpaid care work. Through engaging and reflective activities, we equipped learners to challenge stereotypes, advocate for equality, and build more inclusive communities.',
        image: '/images/projects/Patang India.jpg',
        imageAlt: 'Patang India project',
        actions: [
          { label: 'View Course', href: 'https://patang.graphy.com/' },
          { label: 'Watch Video', href: 'https://youtu.be/eRkFhV0jKgk?si=Ftr-9xIKl1FumNCy' },
        ],
      },
      {
        client: 'GIZ & Swayam',
        title: 'Digital Entrepreneurship & Data Analysis using Power BI',
        description:
          "We worked with GIZ to create application-focused online courses on AI and data science, tailored to upskill young people from social science backgrounds. Hosted on SWAYAM—India's largest government-led open-course platform—the program covers foundational concepts, real-world applications, and ethical considerations, equipping learners with future-ready skills to lead data-driven development and solutions.",
        image: '/images/projects/GIZ & Swayam.jpg',
        imageAlt: 'GIZ & Swayam project',
        actions: [{ label: 'View Course', href: '#' }],
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
        title:
          'Review of Online course on Cognitive, Academic, Social, & Emotional Development in ECCE (3-8 years)',
        description:
          'Conducted an external expert review of the online course on social-emotional learning for early childhood care and Education. Evaluated goal alignment, content structuring, assessment design, interactivity/engagement, language and overall effectiveness and gave recommendations to improve the course.',
        image: '/images/projects/UNESCO MGIEP.png',
        imageAlt: 'UNESCO MGIEP ECCE course review',
      },
      {
        client: 'Wingreens World',
        title: 'AI for Sales Enablement',
        description:
          'We designed a conversational, AI-powered chatbot to make organizational knowledge instantly accessible to teams across Wingreens. By providing step-by-step guidance and refresher content anytime, anywhere, we facilitated continuous learning, improved on-the-job performance, and significantly reduced training time for fast-paced, field-based roles.',
        image: '/images/projects/Wingreens World.png',
        imageAlt: 'Wingreens World project',
      },
    ],
  },
  {
    title: 'Workshops',
    projects: [
      {
        client: 'UNESCO MGIEP',
        title: 'Digital Teacher Online Course',
        description:
          'While at UNESCO MGIEP, Shraddha led the development of the Digital Teacher Online Course that has been implemented in more than nine countries, including India, Bangladesh, Bhutan, Sri Lanka, Nigeria, Maldives, Mexico, South Africa, and Jordan, reaching over 175,000 teachers in the first 3 years of its launch.',
        imageAlt: 'UNESCO MGIEP project',
        actions: [
          { label: 'View Course', href: 'https://mgiep.unesco.org/course-the-digital-educator' },
          { label: 'Read More', href: 'https://mgiep.unesco.org/course-the-digital-educator' },
          { label: 'Facilitator Toolkit', href: 'https://view.genially.com/60e9b7eb0ce4b10fb8bee09e/presentation-course-implementation-toolkit' },
        ],
      },
      {
        client: 'University of Stirling',
        title: 'AI for Teaching, Learning & Research',
        description:
          'Our two-day faculty training program combined the hands-on exploration of more than ten AI tools with critical discussions on ethical use. We drove measurable improvements: 88% of participants discovered new tools to enhance their teaching materials, and 35% gained confidence in using AI for research and student guidance.',
        image: '/images/projects/University of Stirling.jpg',
        imageAlt: 'University of Stirling workshop',
        actions: [{ label: 'Learn More', href: 'https://drive.google.com/file/d/1Sk81oRmbEV4iGesY0P13eXDs9Z1ogeFB/view?usp=drive_link' }],
      },
      {
        client: 'K R Mangalam University',
        title: 'Science of Learning',
        description:
          'A three-day Science of Learning workshop trained 150 faculty across three cohorts, combining insights from cognitive science and educational research. With a heavy application focus, the workshop helped faculty to apply the insights to redesign their slides, assessments, retrieval strategies, and lesson plans for better learning outcomes. Post workshop, 65% felt confident managing cognitive load (up from 24% pre-workshop), and 76% felt confident applying retrieval practice.',
        image: '/images/projects/K R Mangalam University.JPG',
        imageAlt: 'K R Mangalam University workshop',
      },
      {
        client: 'ITM Skill University',
        title: 'Universal Design for Learning',
        description:
          'The workshop explores how the UDL framework helps educators proactively identify and preempt diverse learner barriers, such as language, varying background knowledge, and attention spans. Rather than reacting to challenges mid-lesson, the workshop guides faculty to intentionally build flexibility and support directly into their materials, activities, and assessments across the three dimensions of learning: the why (motivation), what (comprehension), and how (expression).',
        image: '/images/projects/ITM Skills University.png',
        imageAlt: 'ITM Skill University UDL workshop',
        actions: [{ label: 'Watch Video', href: 'https://youtu.be/2D7OZqMqIOw?si=8Gb-Ctf2--2IBoxI' }],
      },
    ],
  },
  {
    title: 'Research, Evaluation, & Knowledge Products',
    projects: [
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
    ],
  },
];
