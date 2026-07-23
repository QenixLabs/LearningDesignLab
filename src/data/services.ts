export interface ServiceItem {
  title?: string;
  description?: string;
  text?: string;
}

export interface ServiceData {
  id: string;
  number: string;
  title: string;
  description: string;
  items: ServiceItem[];
  itemsHeading: string;
  approachNote?: string;
  outcomeNote?: string;
  differentiator?: string;
  cta: string;
  dark?: boolean;
}



const courseDevelopmentItems: ServiceItem[] = [
  { text: 'Online courses and learning sprints' },
  { text: 'Mobile-based microlearning' },
  { text: 'Educational games and gamified experiences' },
  { text: 'Instructional manuals and learner workbooks' },
  { text: 'Communities of practice' },
  { text: 'Assessment frameworks and tools' },
  { text: 'Behavioural nudges and recall strategies' },
  { text: 'AI tools for practice, feedback and performance support' },
];

const facultyEnrichmentItems: ServiceItem[] = [
  { title: 'Science of Learning (SoL)', description: 'Ground your teaching in science-backed strategies for maximising attention, retention, learning transfer and motivation.' },
  { title: 'AI for Teaching & Learning', description: 'Discover innovative ways to use AI for lesson planning, feedback, assignments, learner support, and content creation through hands-on activities.' },
  { title: 'Universal Design for Learning (UDL)', description: 'Design learning experiences that work for every learner. Learn how to apply UDL principles to create flexible, inclusive teaching.' },
  { title: 'AI for Research', description: 'Accelerate your research process with AI tools for literature review, citation, data analysis, and academic writing.' },
  { title: 'Game-Based Learning & Gamification', description: 'Apply principles from cognitive science and multimedia theory to design games and gamification that drive lasting learning gains.' },
  { title: 'Instructional Design for Course Creators', description: 'Training faculty and learning designers to develop good online courses through practical templates and workflows.' },
];

const researchEvaluationItems: ServiceItem[] = [
  { text: 'Process and outcome evaluation of skilling interventions' },
  { text: 'Capacity building programme assessment' },
  { text: 'Digital learning product effectiveness' },
  { text: 'Gamification and game-based learning impact' },
  { text: 'Competency development research' },
  { text: 'Learning experience design analysis' },
];

const advisoryItems: ServiceItem[] = [
  { text: 'Programme conceptualisation and design' },
  { text: 'Competency gap analysis and goal-setting' },
  { text: 'Behavioural strategy development' },
  { text: 'Barrier diagnosis and systems mapping' },
  { text: 'Policy and implementation guidance' },
  { text: 'Platform selection and digital learning strategy' },
];

export const services: Record<string, ServiceData> = {
  'course-development': {
    id: 'course-development',
    number: '01',
    title: 'Frameworks, Courses & Curriculums',
    description: 'We design in-person and online courses, learning journeys, microlearning modules, and assessment frameworks. We design goal-aligned and barrier-informed learning products and behavioral nudges based in the Science of Learning (SoL).',
    items: courseDevelopmentItems,
    itemsHeading: 'What we create',
    approachNote: 'Approach: Evidence-based design using principles from the Science of Learning',
    outcomeNote: 'Outcomes: Higher engagement, better retention, measurable behaviour change',
    cta: 'Discuss your course needs',
    dark: true,
  },
  'faculty-enrichment': {
    id: 'faculty-enrichment',
    number: '02',
    title: 'Faculty & Teacher Enrichment',
    description: 'We facilitate hands-on workshops on the Science of Learning, Universal Design for Learning (UDL), assessment design for the AI Era, AI applications for teaching and research. We equip faculty in schools and universities with evidence-based strategies to make their teaching practice more effective and boost student outcomes.',
    items: facultyEnrichmentItems,
    itemsHeading: 'Our workshops',
    differentiator: 'Most faculty development programmes are delivered by pure researchers with no practical teaching experience, or practitioners disconnected from the latest evidence. We bridge research and practice.',
    cta: 'Enquire about faculty workshops',
    dark: true,
  },
  'research-evaluation': {
    id: 'research-evaluation',
    number: '03',
    title: 'Research & Evaluation of Skilling Programs',
    description: 'We conduct rigorous process and impact evaluations of in-person and digital skilling programs. We help educational institutions, edtech companies, and nonprofits measure the results of their interventions and synthesize findings into actionable frameworks, toolkits and knowledge products.',
    items: researchEvaluationItems,
    itemsHeading: 'What we evaluate',
    approachNote: 'We use validated frameworks including Kirkpatrick, LTEM, and custom rubrics tailored to your context.',
    outcomeNote: 'We synthesise findings into actionable frameworks, toolkits, and knowledge products that advance the field.',
    cta: 'Talk to us about evaluation',
    dark: false,
  },
  'advisory': {
    id: 'advisory',
    number: '04',
    title: 'Advisory for Large-Scale Skilling Programs',
    description: 'We diagnose barriers and conceptualise systems and solutions that address them using behavioral science and user-centred design. We define program structures, competency gaps and goals, develop and road-test strategies, advise policy makers, large-scale implementers, and investors on designing systems that support sustained learning at scale.',
    items: advisoryItems,
    itemsHeading: 'Where we advise',
    differentiator: 'We bring together insights from behavioural science, implementation science, and human-centered design to create strategies that work in complex, real-world contexts.',
    cta: 'Discuss your programme',
    dark: false,
  },
};
