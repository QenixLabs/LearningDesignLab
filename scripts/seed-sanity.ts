import { createClient } from '@sanity/client';
import { createReadStream, existsSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';

// ESM-safe __dirname (Node 20.11+)
const scriptDir = import.meta.dirname;

// Load .env or .env.local manually (no dotenv dependency)
for (const fname of ['.env', '.env.local']) {
  const envPath = join(scriptDir, '..', fname);
  if (existsSync(envPath)) {
    const envFile = readFileSync(envPath, 'utf-8');
    for (const rawLine of envFile.split('\n')) {
      const line = rawLine.trim();
      const m = line.match(/^([A-Za-z0-9_]+)=(.*)$/);
      if (m && !process.env[m[1]]) {
        process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
      }
    }
  }
}

import { services } from '../src/data/services';
import { founder, team } from '../src/data/team';
import { publications } from '../src/data/publications';
import { conferences } from '../src/data/conferences';
import { cardSections } from '../src/data/projects';
import { defaultTestimonials } from '../src/data/testimonials';

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID!,
  dataset: process.env.VITE_SANITY_DATASET ?? 'production',
  apiVersion: '2026-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

const assetCache = new Map<string, string>();

/** Upload a local /images/... path to Sanity assets, return asset _id. */
async function uploadImage(localPath: string): Promise<string | undefined> {
  const rel = localPath.replace(/^\//, ''); // '/images/team/x.png' -> 'images/team/x.png'
  const abs = join(scriptDir, '..', 'public', rel);
  if (!existsSync(abs)) {
    console.warn(`  ⚠ missing file: ${rel}`);
    return undefined;
  }
  if (assetCache.has(rel)) return assetCache.get(rel);
  const asset = await client.assets.upload('image', createReadStream(abs), {
    filename: basename(abs),
  });
  assetCache.set(rel, asset._id);
  console.log(`  ↑ uploaded ${rel}`);
  return asset._id;
}

async function imageField(localPath?: string) {
  if (!localPath) return undefined;
  const ref = await uploadImage(localPath);
  return ref ? { _type: 'image', asset: { _type: 'reference', _ref: ref } } : undefined;
}

async function run() {
  const force = process.argv.includes('--force');
  const existingCount = await client.fetch<number>('count(*[_type == "teamMember"])');

  if (existingCount > 0 && force) {
    console.log('Clearing existing collection documents (--force)...');
    await client.delete({
      query: '*[_type in ["teamMember", "project", "publication", "conference", "testimonial"]]',
    });
    console.log('✓ Collections cleared');
  }

  // --- Singletons ---
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    contactEmail: 'shraddha@learningdesignlab.co',
    linkedinUrl: 'https://linkedin.com',
    footerTagline:
      "Researcher's rigour and implementer's realism for organizations that want learning that actually works.",
  });
  console.log('✓ siteSettings');

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',
    heroTitle: 'Designing Learning That Works',
    heroSubtext:
      'We are an impact-driven, international learning design firm dedicated to enhancing the effectiveness of skilling, competency development, and educational interventions. We partner with organizations and educational institutions to build evidence-informed, contextually grounded designs that translate learning into real-world outcomes.',
    primaryCtaLabel: 'Work With Us',
    secondaryCtaLabel: 'Explore Services',
    stats: [
      { _key: 's1', value: 10, suffix: 'M+', label: 'Learners Impacted' },
      { _key: 's2', value: 200, suffix: '+', label: 'Trainings Delivered' },
      { _key: 's3', value: 65, suffix: '+', label: 'Digital Courses Built' },
      { _key: 's4', value: 20, suffix: '+', label: 'Countries Reached' },
      { _key: 's5', value: 25, suffix: '+', label: 'Organizations Partnered' },
    ],
    selectedWorkProjects: [
      'Applied online courses on AI and a story-based course on Data Science for GIZ & SWAYAM',
      'Research to study the impact of Digital Girl Hub Program (a large-scale skilling and employment program for girls): UNICEF India',
      'Workshops on AI for Teaching, Learning and Research for faculty members of Stirling University, UAE',
      'Employability curriculum (student trainer manual and trainer workbook) for ITIs in India with Quest Alliance',
    ],
    selectedWorkScholarships: [
      'Navigating Structural, Epistemic, and Human Dimensions in Education',
      'Reimagining Learning with AI: Towards a Learning Society',
      'Development and Validation of a Brief Digital Pedagogy Competency Scale (SPANCER)',
    ],
    selectedWorkBlogs: [
      "Why Facts Don't Change Minds: Designing Learning That Transcends Behavior",
      'Learning How to Learn: Introducing the Science of Learning to Undergraduate Students',
      'Beyond the Hype: What AI Actually Means for the Next Billion Learners',
    ],
    presentations: await Promise.all(
      [
        { name: 'Indian Institute of Technology, Delhi', path: '/images/logos/iit delhi.jpg' },
        { name: 'University of Northern Colorado', path: '/images/logos/northern colorado.jpg' },
        { name: 'Masinde Muliro University of Science & Technology, Kenya', path: '/images/logos/masinde muliro.png' },
      ].map(async (p, i) => ({
        _key: `p${i}`,
        name: p.name,
        image: await imageField(p.path),
      }))
    ),
    verticalsHeading: 'Who We Work With',
    verticals: await Promise.all(
      [
        { label: 'Schools & Universities', path: '/images/verticals/Schools & Universities.png' },
        { label: 'Social Impact Organizations', path: '/images/verticals/non-profit.png' },
        { label: 'Corporates', path: '/images/verticals/Corporatesnew.jpg' },
        { label: 'EdTech Companies', path: '/images/verticals/edtech.jpg' },
      ].map(async (v, i) => ({
        _key: `v${i}`,
        label: v.label,
        image: await imageField(v.path),
      }))
    ),
    differentiatorsHeading: 'What Defines Our Solutions',
    differentiators: [
      {
        _key: 'd1',
        title: 'Evidence-informed',
        description:
          'Rather than tradition or trends, our designs are rooted in the Science of Learning, translational research from cognitive science, and educational research.',
      },
      {
        _key: 'd2',
        title: 'Impact-First & Application-Focused',
        description:
          "We work for impact and prioritize transfer of learning to the real world. We build skills, not just content; we drive measurable improvements in people's performance.",
      },
      {
        _key: 'd3',
        title: 'Inclusive & Contextually Grounded',
        description:
          'We ground our work in a deep understanding of context, barriers, and needs. We co-design with the users and create solutions that are relevant to specific gaps and goals. Inclusion, accessibility, and equity are embedded in our design process from the beginning.',
      },
      {
        _key: 'd4',
        title: 'Cross-Sectoral & Multidisciplinary',
        description:
          'We combine good practices from diverse sectors like instructional design, cognition, learning science, human-centred design, and learning technologies. At our core, we use research and analytics to build the right strategies and solutions.',
      },
      {
        _key: 'd5',
        title: 'AI Native Thinking',
        description:
          'Our work uses AI capabilities to deliver the most value even in novel contexts. Along with workshops and learning products, we offer AI-based tools, resources, and prompts that make decision-making, learning, research, and assessments deeper and more engaging.',
      },
    ],
    selectedWorkHeading: 'Our Work (So Far)',
    contactHeading: "Let's build learning that drives impact",
    contactSubtext: "Submit your contact details. We'll get back to you within 7 working days.",
  });
  console.log('✓ homePage');

  const defaultMethodologyFields = [
    { _key: 'm1', name: 'Cognitive Science', highlight: true },
    { _key: 'm2', name: 'Instructional Design', highlight: false },
    { _key: 'm3', name: 'Human-Centred Design', highlight: false },
    { _key: 'm4', name: 'Behavioral Science', highlight: true },
    { _key: 'm5', name: 'AI & Learning', highlight: true },
    { _key: 'm6', name: 'UX & UI', highlight: false },
    { _key: 'm7', name: 'Education Technology', highlight: false },
    { _key: 'm8', name: 'Performance Support', highlight: true },
    { _key: 'm9', name: 'EdTech & L&D', highlight: false },
  ];

  // --- Service pages ---
  const serviceDetails: Record<string, Record<string, any>> = {
    'course-development': {
      heroHeading: 'Curricula & courses to change outcomes, not just build knowledge',
      heroSubtext: 'We partner with universities, nonprofits, and organizations to design courses, training programs, and full curricula that build real competence. Grounded in research and Science of Learning.',
      heroCtaLabel: 'Contact Us',
      heroStats: [
        { _key: 's1', value: 10, suffix: 'M+', label: 'Learners impacted' },
        { _key: 's2', value: 200, suffix: '+', label: 'Trainings delivered' },
        { _key: 's3', value: 70, suffix: '+', label: 'Digital courses built' },
        { _key: 's4', value: 20, suffix: '+', label: 'Countries reached' },
        { _key: 's5', value: 25, suffix: '+', label: 'Organizations partnered' },
      ],
      problemHeading: "Content Alone Doesn't Build Capability",
      problemText: "Organizations often invest heavily in courses and training that learners complete, but forget. Traditional curriculum design prioritises covering information rather than engineering the conditions for retention, application, and mastery.\n\nWe design learning experiences that bridge the gap between knowing and doing — whether that's an asynchronous online course, a blended training journey, or an institutional curriculum.",
      processHeading: 'We Start with the Change You Need to See, Then Work Backwards',
      processSteps: [
        'We define what people need to do differently, and study the context, enablers, and barriers to achieving that',
        'We conduct rigorous research to understand what has worked and identify evidence-based strategies and pedagogy to drive impact.',
        'We design learning activities and strategies backwards from the goal in collaboration with in context and domain experts.',
        'We apply instructional design and user-center design to create engaging and effective courses and curriculums.',
        'We prototype our solutions, test with real learners, then refine before scaling.',
        'We create tools and conduct trainings to enable facilitators for quality implementation.',
      ],
      offeringsHeading: 'What We Offer',
      offerings: [
        { _key: 'o1', label: 'Courses & Curricula Designed for Real Outcomes' },
        { _key: 'o2', label: 'Evidence-Based Pedagogical Design' },
        { _key: 'o3', label: 'Formative & Summative Assessments' },
        { _key: 'o4', label: 'Trainer & Facilitator Enablement' },
        { _key: 'o5', label: 'Digital, Blended, & Offline Delivery Models' },
        { _key: 'o6', label: 'Localization & Contextual Grounding' },
      ],
      methodologyHeading: 'We Borrow from Diverse Fields That Facilitate Learning',
      methodologyFields: defaultMethodologyFields,
      sectorsHeading: 'We Work Across Sectors',
      sectors: await Promise.all(
        [
          {
            title: 'Educational Institutes',
            description: 'Schools, universities and online learning departments of universities',
            path: '/images/verticals/education.jpg',
          },
          {
            title: 'Social Impact Organizations',
            description: 'United Nations, large non-profits, donor agencies and foundations',
            path: '/images/verticals/non-profit.png',
          },
          {
            title: 'Corporates & Enterprises',
            description: 'That need to upskill their employees and training of L&D divisions',
            path: '/images/verticals/corporatjob.jpeg',
          },
        ].map(async (s, i) => ({
          _key: `sec${i}`,
          title: s.title,
          description: s.description,
          image: await imageField(s.path),
        }))
      ),
      outcomesHeading: 'Key Outcomes',
      outcomes: [
        'Higher Completion & Engagement',
        'Measurable Competency Gains',
        'Long-Term Retention & Transfer',
        'Scalable, Replicable Frameworks',
      ],
      proofPointsHeading: "We've Already Made This Happen … Several Times Over",
      proofPoints: await Promise.all(
        [
          {
            title: 'A story-based course on data analytics for Swayam Platform, GIZ',
            path: '/images/verticals/A story-based.jpg',
          },
          {
            title: 'Behavioral design of trainings that enable teachers to practice desired behaviors for UNESCO Myanmar',
            path: '/images/projects/UNESCO_Myanmar_collage.png',
          },
          {
            title: 'A scenario based gamified course on gender for youth in colombia',
            path: '/images/verticals/A scenerio based .jpg',
          },
          {
            title: 'Targeted design and assessment of projects to build 12 competencies & digital badges for UNICEF India',
            path: '/images/verticals/Targeted design .jpg',
          },
        ].map(async (pp, i) => ({
          _key: `pp${i}`,
          title: pp.title,
          image: await imageField(pp.path),
        }))
      ),
      contactHeading: "Let's build learning that drives impact",
    },
    'faculty-enrichment': {
      heroHeading: 'Faculty Enrichment That Changes How They Teach, Design, & Learn',
      heroSubtext: 'We partner with universities and faculty development cells to design and deliver workshops that shift teaching practice. Grounded in evidence and global best practices. Built for immediate application.',
      heroCtaLabel: 'Contact Us',
      heroStats: [
        { _key: 's1', value: 97, suffix: '%', label: 'Educators confident they can actively reduce student forgetting' },
        { _key: 's2', value: 4.4, suffix: ' / 5', label: 'Average rating on usefulness and engagement of workshop', decimals: 1 },
        { _key: 's3', value: 100, suffix: '%', label: 'Left believing AI can save them time and improve efficiency' },
        { _key: 's4', value: 44, suffix: '%', label: 'Jump in confidence to manage cognitive load while teaching' },
      ],
      heroFootnote: '*Impact of our workshops based on pre- and post-surveys.',
      problemHeading: "Most Faculty Development Doesn't Change How Faculty Teach",
      problemParagraphs: [
        'The standard faculty development program runs like this: a trainer presents slides, faculty take notes, everyone leaves with good intentions and a PDF. Six weeks later, nothing in the classroom has changed.',
        "That's a design problem. When workshops are 90% information and 10% practice – delivered without clear behavioral goals, content-mapping, application, or follow-through – they only produce awareness, not behavior change.",
      ],
      workshopsHeading: 'Our Workshops',
      workshops: [
        {
          _key: 'w1',
          title: 'Science of Learning for Evidence-Based Teaching',
          meta: 'In-Person · 3 Days',
          description:
            'For teachers and universities that want to improve the effectiveness of teaching practice by aligning it with the human cognitive architecture and in line with how memory, attention, and transfer really work.',
        },
        {
          _key: 'w2',
          title: 'AI for Teaching, & Learning & Research',
          meta: 'In-Person · 2 Days',
          description:
            'For faculty that want to expand the regular use of ChatGPT and accelerate the creation of slides, graphics, videos, and custom GPTs using curated AI tools. Also learn critical use of AI research tools for academic research and publishing.',
        },
        {
          _key: 'w3',
          title: 'Designing AI-Aligned Assessments for the GenAI Era',
          meta: 'Virtual · 3 Hours',
          description:
            'For universities that want to realign their assessments for the AI era and towards global best practices. The workshop exposes participants to the changes in assessment practices globally and enables them to redesign assessments that remain valid, ethical, and academically rigorous.',
        },
        {
          _key: 'w4',
          title: 'Universal Design for Learning',
          meta: 'In-Person · 1 Day',
          description:
            'For schools and universities that want to equip their teachers with strategies to cater to a wide variety of students. UDL can enable educators to anticipate and address learning barriers and design flexible methods and support for more effective instruction.',
        },
      ],
      acceleratorHeading: 'Institutional Integration & Behavior Change Accelerator',
      acceleratorMeta: '4-6 Months',
      acceleratorParagraphs: [
        'This program targets the integration of the new practices into the university and sustained behavioral shift amongst faculty. While good training builds skills and confidence, it doesn\'t guarantee a shift in practice. People default to old habits without new processes, nudges, peer learning, and structured opportunities to practice new behaviors at work. This post-workshop accelerator program is based on the COM-B model from behavioral science and research on training transfer.',
        'After workshops, we offer a 6-month behavior change accelerator. This includes working with you to set up systems, internal champions, feedback loops, strengthening internal processes, refresher and peer-learning sessions, community moderation and weekly micro-content.',
      ],
      processHeading: 'We Build Training Backwards from the Practice We Want to See',
      processSteps: [
        'We conduct pre-workshop surveys, consult institutional leadership and stakeholders, and review existing courses.',
        "Through that, we map the institutional context, the faculty's current practice, the specific behaviors we want to alter, and the barriers and enablers to that change.",
        'We ground every workshop in current evidence from Science of Learning (SOL) and select only strategies with a real evidence base.',
        'We design every session as 70% practice and 30% information, so faculty apply, create, and redesign during the workshop itself and gain the skill and confidence to continue later.',
        'We follow every workshop with resources for continued application including AI tools, templates, handouts, curated reading and invitation to join a community for learning designers.',
        'Where deeper change is needed, we offer optional structured transfer support: review and refresher sessions, expert feedback, and community learning.',
      ],
      methodologyHeading: 'We Borrow from Diverse Fields That Facilitate Learning',
      methodologyFields: defaultMethodologyFields,
      socialProofHeading: "We've Already Made This Happen At ...",
      socialProofPartners: await Promise.all(
        [
          { name: 'K.R. Mangalam University', path: '/images/logos/kr-mangalam.webp' },
          { name: 'ITM Skills University', path: '/images/logos/itm-skills-removebg-preview.png' },
          { name: 'University of Stirling', path: '/images/logos/stirling.svg' },
          { name: 'Ashoka University', path: '/images/logos/ashoka.png' },
        ].map(async (p, i) => ({
          _key: `sp${i}`,
          name: p.name,
          logo: await imageField(p.path),
        }))
      ),
      contactHeading: "Your Educators Are Working Hard. Let's Ensure Their Efforts Pay Off.",
    },
    'research-evaluation': {
      heroHeading: 'Research & Evaluation That Measures & Enhances Impact',
      heroSubtext: 'We provide monitoring, evaluation, and learning (MEL) services to non-profits, social impact funders, and educational institutions looking to improve their skilling or capacity-building initiatives. We work with funders, large nonprofits, edtech companies, and universities to evaluate learning and skilling programs, and to turn rigorous qualitative and quantitative research into knowledge products that advance the field and its impact.',
      heroCtaLabel: 'Contact Us',
      heroStats: [
        { _key: 's1', value: 10, suffix: 'M+', label: 'Learners impacted' },
        { _key: 's2', value: 200, suffix: '+', label: 'Trainings delivered' },
        { _key: 's3', value: 70, suffix: '+', label: 'Digital courses built' },
        { _key: 's4', value: 20, suffix: '+', label: 'Countries reached' },
        { _key: 's5', value: 25, suffix: '+', label: 'Organizations partnered' },
      ],
      problemHeading: 'Most Evaluations Measure Satisfaction. We Measure Whether Learning Worked.',
      problemParagraphs: [
        'Most program evaluations are limited to whether participants liked the training. The following recommendations are generic and rarely change what any specific programme does next.',
        'We ask the most consequential question: did this intervention produce the change it was designed to produce, and why or why not? We use established frameworks — Kirkpatrick, LTEM — combined with rigorous mixed-methods research, to conduct evaluations that examine both process and impact. And because our team designs and implements learning programs as much as we evaluate them, our findings are synthesised into tools, frameworks, and guides built for immediate use.',
      ],
      serviceCardsHeading: 'Research, Evaluation, & Knowledge Products Built for Application',
      serviceCards: [
        {
          _key: 'sc1',
          title: 'Learning Program Evaluation',
          paragraphs: [
            "We evaluate the process and impact of skilling and capacity-building programmes using the Kirkpatrick and LTEM frameworks — covering both formative evaluation (to improve a program while it's running) and summative evaluation (to assess what it achieved). Our findings are synthesised into easily applicable frameworks and tools. As designers and implementers of learning programs, we understand the nuances that shape outcomes — which means our reports read less like academic documents and more like tools that can be picked up and used.",
          ],
        },
        {
          _key: 'sc2',
          title: 'Knowledge Products & Publications',
          paragraphs: [
            "Beyond specific programmes, we translate broader research and consultations on learning and capacity-building into custom toolkits, frameworks, and guidelines that practitioners can use. We also contribute to the field with thought leadership publications. Our knowledge products are simple to understand and built for application, regardless of the target audience's technical background. Where a knowledge product is relevant to our network, we also support dissemination through our newsletter and community forum.",
          ],
        },
        {
          _key: 'sc3',
          title: 'AI-Powered Learning Enablement',
          paragraphs: [
            'We train learning designers to enhance their design process with AI tools, improving output quality while reducing production time. We also build AI-powered chatbots for employee performance support, evaluate and select AI-enabled platforms for organisational learning, and help institutions enable students to use AI tools more effectively as part of their learning process.',
          ],
        },
        {
          _key: 'sc4',
          title: 'UX Research on Digital Learning Products',
          paragraphs: [
            'We conduct user experience research and provide structured feedback on digital learning products — assessing usability, accessibility, and learner experience. We also organize small-group conversations with learning professionals and educators to gather qualified feedback on products in development or already in use.',
          ],
        },
        {
          _key: 'sc5',
          title: 'Digital Learning Platform Selection',
          paragraphs: [
            'We evaluate Learning Management Systems (LMS), authoring tools, and AI-based learning platforms across defined indicators — accessibility, UX, feature comparison, mobile interface, development capability, learner data handling, and offline access for low-bandwidth contexts. The result is a platform recommendation matched to your operational context.',
          ],
        },
      ],
      methodologyHeading: 'We Borrow from Diverse Fields That Facilitate Learning',
      methodologyFields: defaultMethodologyFields,
      exampleProjectsHeading: "We've Already Done This … Several Times Over",
      exampleProjects: await Promise.all(
        [
          {
            title: "Distilling UNICEF YuWaah's 5.7-million-learner initiative into a replicable blueprint for large-scale digital skilling.",
            path: '/images/research-services-page/image-3.jpg',
          },
          {
            title: "Evaluating UNICEF YuWaah's pilot program to validate the impact of localized, women-led digital skilling infrastructure.",
            path: '/images/research-services-page/image-4.png',
          },
          {
            title: 'Developing actionable strategies and the RAISE-TM assessment tool to help UN agencies design inclusive programs for marginalized youth.',
            path: '/images/research-services-page/image-2.png',
          },
          {
            title: 'Conducting an expert review of a social-emotional learning course by UNICEF MGIEP for early childhood educators, with recommendations to strengthen its design and effectiveness.',
            path: '/images/research-services-page/image-5.png',
          },
        ].map(async (p, i) => ({
          _key: `ep${i}`,
          title: p.title,
          image: await imageField(p.path),
        }))
      ),
      exampleProjectsCtaText: 'See All Our Projects',
      exampleProjectsCtaHref: '/projects',
      contactHeading: "Let's Move From Assumptions to Evidence",
    },
    'advisory': {
      heroHeading: 'Strategic Advisory for Large-Scale Skilling Programs',
      heroSubtext: 'We partner with development organizations, training institutes, and governments tackling learning and skilling challenges at scale – we compare models, synthesise research findings, and design programs grounded in what has worked; we design the program structure, systems, processes, and roles for skilling to yield high returns.',
      heroCtaLabel: 'Contact Us',
      heroStats: [
        { _key: 's1', value: 10, suffix: 'M+', label: 'Learners impacted' },
        { _key: 's2', value: 200, suffix: '+', label: 'Trainings delivered' },
        { _key: 's3', value: 80, suffix: '+', label: 'Digital courses built' },
        { _key: 's4', value: 25, suffix: '+', label: 'Countries reached' },
        { _key: 's5', value: 20, suffix: '+', label: 'Organizations partnered' },
      ],
      problemHeading: 'Most Skilling Programs Are Not Designed Around the People They Serve',
      problemParagraphs: [
        "Many skilling programs across sectors either struggle to motivate people to learn or fail to build the competencies that drive change. This happens because programs are often not designed with learner personas in mind; there is a lack of specificity regarding performance goals and misalignment among the program modality, learner needs, technology, and the people who enable the program. We conduct systems analysis for existing programs and conceptualize new programs that align systems, processes, teams, and learning experience with learners' realities, organizational needs, and expected results. We use approaches like Human-Centred Design (HCD), Theory of Change (ToC), behavior design, and instructional systems design for program and system design and improvement.",
      ],
      serviceCardsHeading: 'We Provide Science-Backed, Diagnosis-First Advisory',
      serviceCards: [
        {
          _key: 'sc1',
          title: 'Evidence-Based Program Design',
          paragraphs: [
            'We start with diagnosing the barriers to learning, adoption, and performance in the current system, using behavioral science and user-centered research at cognitive, motivational, and structural levels.',
            'We also research effective strategies, models, and insights on learners, while consulting stakeholders to align on goals.',
            'From there, we design the system, process, team structure, roles, and learning journey, and train the teams who will implement it, so people actually adopt and sustain the change.',
            'When a program underperforms, we improve it by clarifying success metrics and aligning it with learning design, internal processes, team capabilities, and evaluation systems.',
          ],
        },
        {
          _key: 'sc2',
          title: 'Ecosystem Design & Digital Learning Strategy',
          paragraphs: [
            'Most organizations just build a learning product – an online course or a platform; very few think about their digital learning strategy. Building competency requires more than access to content. We build learning communities, peer learning systems, mentoring processes, job aids, and AI-based performance support tools, micro-behavioral nudges, and learning refreshers to work on skills, motivation, and systems simultaneously.',
            'Where training currently happens in person, we also help organizations adapt it for digital delivery, converting existing programs into online courses, learning apps, and digital learning journeys.',
          ],
        },
        {
          _key: 'sc3',
          title: 'Platform Evaluation & Evaluation',
          paragraphs: [
            'Platform choice is a vital lever in a systems-level engagement. We evaluate LMS, authoring tools, and AI-enabled platforms against your specific context – accessibility, UX, data, offline access – as part of the implementation plan. We then make evidence-backed recommendations.',
            'Over the years, we have created digital learning across 10+ platforms and enabled organizations to select the right platform for their audience. When possible, we also facilitate partnerships between organizations and platform companies.',
          ],
        },
        {
          _key: 'sc4',
          title: 'Quality Assurance & Capacity Building for Learning Design',
          paragraphs: [
            'We create quality processes, frameworks, templates, and standards for learning design specific to your context, so the quality of your learning material is consistent.',
            'We train learning designers, educators, curriculum creators, and ed-tech developers directly – fostering internal capability rather than dependence on external support.',
            'This work matters to us beyond any single client relationship. We\'re invested in advancing the field of learning design itself, so that every learner – not just those in flagship programs – gets access to well-designed learning.',
          ],
        },
      ],
      methodologyHeading: 'We Borrow from Diverse Fields That Facilitate Learning',
      methodologyFields: defaultMethodologyFields,
      exampleProjectsHeading: "We've Already Done This … Several Times Over",
      exampleProjects: await Promise.all(
        [
          {
            title: 'Building a competency framework, curriculum, and assessment system for UNICEF India to develop 21st-century skills in middle and senior secondary school students',
            path: '/images/research-services-page/image-1.png',
          },
          {
            title: 'Developing actionable strategies and the RAISE-TM assessment tool to help UN agencies design inclusive programs for marginalized youth.',
            path: '/images/research-services-page/image-2.png',
          },
          {
            title: "Distilling UNICEF YuWaah's 5.7-million-learner initiative into a replicable blueprint for large-scale digital skilling.",
            path: '/images/research-services-page/image-3.jpg',
          },
          {
            title: "Evaluating UNICEF YuWaah's pilot program to validate the impact of localized, women-led digital skilling infrastructure.",
            path: '/images/research-services-page/image-4.png',
          },
          {
            title: 'Conducting an expert review of a social-emotional learning course by UNICEF MGIEP for early childhood educators, with recommendations to strengthen its design and effectiveness.',
            path: '/images/research-services-page/image-5.png',
          },
        ].map(async (p, i) => ({
          _key: `ep${i}`,
          title: p.title,
          image: await imageField(p.path),
        }))
      ),
      exampleProjectsCtaText: 'See All Our Projects',
      exampleProjectsCtaHref: '/projects',
      contactHeading: "Let's build learning that drives impact",
    },
  };

  for (const svc of Object.values(services)) {
    const extra = serviceDetails[svc.id] ?? {};
    await client.createOrReplace({
      _id: `servicePage-${svc.id}`,
      _type: 'servicePage',
      serviceId: svc.id,
      number: svc.number,
      title: svc.title,
      description: svc.description,
      itemsHeading: svc.itemsHeading,
      items: svc.items.map((it, i) => ({ _key: `i${i}`, ...it })),
      approachNote: svc.approachNote,
      outcomeNote: svc.outcomeNote,
      differentiator: svc.differentiator,
      cta: svc.cta,
      dark: svc.dark ?? false,
      ...extra,
    });
    console.log(`✓ servicePage-${svc.id}`);
  }

  // --- Page copy ---
  const pageCopy = [
    {
      id: 'pageCopy-team',
      pageKey: 'team',
      heading: 'Meet Our Transdisciplinary Team',
      intro:
        'A multidisciplinary collective of learning designers, cognitive scientists, researchers, and technologists dedicated to building evidence-informed learning.',
    },
    {
      id: 'pageCopy-projects',
      pageKey: 'projects',
      heading: 'Our Projects',
      intro:
        'Different sectors, different audiences, different formats. But our focus remains the same: learning designed to produce real change, not just completion.',
    },
    {
      id: 'pageCopy-publications',
      pageKey: 'publications',
      heading: 'Our Publications',
      intro:
        'Our publications translate research into practice across digital pedagogy, AI in learning, instructional design, and education for social impact.',
    },
    {
      id: 'pageCopy-conferences',
      pageKey: 'conferences',
      heading: 'Our Work at Conferences',
      intro:
        "We've delivered talks and presentations on a diverse range of topics, including AI in education, Universal Design for Learning (UDL), youth empowerment, and the intersection of cognitive science and learning design.",
    },
  ];
  for (const p of pageCopy) {
    const { id, ...doc } = p;
    await client.createOrReplace({ _id: id, _type: 'pageCopy', ...doc });
    console.log(`✓ ${p.id}`);
  }

  // --- Collections (Team, Projects, Publications, Conferences, Testimonials) ---
  if (existingCount === 0 || force) {
    // --- Team members (founder first, orderRank via zero-padded index) ---
    const allMembers = [{ ...founder, isFounder: true }, ...team.map((m) => ({ ...m, isFounder: false }))];
    for (let i = 0; i < allMembers.length; i++) {
      const m = allMembers[i];
      await client.create({
        _type: 'teamMember',
        name: m.name,
        role: m.role,
        bio: m.description,
        image: await imageField(m.image),
        imagePosition: m.imagePosition,
        linkedin: m.socials?.linkedin,
        isFounder: m.isFounder,
        orderRank: `a${String(i).padStart(4, '0')}`,
      });
      console.log(`✓ teamMember ${m.name}`);
    }

    // --- Projects ---
    let pi = 0;
    for (const section of cardSections) {
      for (const p of section.projects) {
        await client.create({
          _type: 'project',
          section: section.title,
          client: p.client,
          title: p.title,
          description: p.description,
          image: await imageField(p.image),
          imageAlt: p.imageAlt,
          actions: p.actions?.map((a, i) => ({ _key: `a${i}`, ...a })),
          orderRank: `a${String(pi++).padStart(4, '0')}`,
        });
        console.log(`✓ project ${p.title}`);
      }
    }

    // --- Publications ---
    for (let i = 0; i < publications.length; i++) {
      const p = publications[i];
      await client.create({
        _type: 'publication',
        citation: p.citation,
        title: p.title,
        venue: p.venue,
        type: p.type,
        href: p.href,
        orderRank: `a${String(i).padStart(4, '0')}`,
      });
      console.log(`✓ publication ${p.title.slice(0, 50)}`);
    }

    // --- Conferences ---
    for (let i = 0; i < conferences.length; i++) {
      const c = conferences[i];
      const extraImages = c.images
        ? await Promise.all(c.images.map((img) => imageField(img)))
        : undefined;
      await client.create({
        _type: 'conference',
        title: c.title,
        year: c.year,
        location: c.location,
        description: c.description,
        image: await imageField(c.image),
        images: extraImages?.filter(Boolean).map((img, j) => ({ _key: `img${j}`, ...img })),
        imageAlt: c.imageAlt,
        imagePosition: c.imagePosition,
        actions: c.actions?.map((a, j) => ({ _key: `a${j}`, ...a })),
        tags: c.tags,
        orderRank: `a${String(i).padStart(4, '0')}`,
      });
      console.log(`✓ conference ${c.title.slice(0, 50)}`);
    }

    // --- Testimonials ---
    for (let i = 0; i < defaultTestimonials.length; i++) {
      const t = defaultTestimonials[i];
      await client.create({ _type: 'testimonial', ...t, orderRank: `a${String(i).padStart(4, '0')}` });
      console.log(`✓ testimonial ${t.attribution.slice(0, 40)}`);
    }
  } else {
    console.log(`\nℹ Skipped collection items (Team, Projects, etc.) as ${existingCount} docs already exist.`);
    console.log(`  All singletons & service page fields were successfully updated!`);
    console.log(`  To re-create collections from scratch, run: npm run seed:sanity -- --force`);
  }

  console.log('\nSeed complete.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
