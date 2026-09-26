export interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description?: string;
  imagePosition?: string;
  socials?: SocialLinks;
}

export const founder: TeamMember = {
  name: 'Sharaddha Rawat',
  role: 'Founder & Executive Chair',
  image: '/images/team/Shraddha_Rawat-removebg-preview.png',
  description:
    "Sharaddha is a learning design and strategy specialist with 17 years of experience in designing and delivering high-impact, award-winning learning programs. She has designed and delivered 200+ learning programs, reaching millions of learners globally. Her work has impacted more than 10 million learners across 100+ countries. As Learning Design Lab, she leads a team of learning experience designers, researchers, and strategists who partner with organizations to create transformative learning experiences — from course curricula and micro-credentials to AI-powered learning platforms and cohort-based programs. Her expertise spans K-12, higher education, corporate learning, and social impact. Sharaddha is also the Founder of the Learning Designers Community (LDC) — a global network of 2,500+ learning designers, educators, and technologists. She is an invited speaker at events such as TEDx, UNESCO, and Digital Learning. Advisor to ed-tech, social impact, and future skills organizations.",
  socials: {
    linkedin: 'https://www.linkedin.com/in/shraddharawat11/',
  },
};

export const team: TeamMember[] = [
  {
    name: 'Divya Menon',
    role: 'Senior Learning Design Specialist',
    image: '/images/team/Divya Menon.png',
    description:
      "Divya Menon is an L&D leader with a master's in EdTech and 20+ years driving large-scale capacity-building and digital transformation for global organizations like the WHO, UNESCO, and UNITAR. She specialises in competency-based education, curriculum design, and programme management. Divya blends advanced EdTech with behavioural science and guides cross-functional teams to design, scale, and measure impactful learning solutions. She also holds certifications in Kirkpatrick Evaluation.",
  },
  {
    name: 'Robin Sharma',
    role: 'Learning Researcher, Scientist & Game-Based Learning Expert',
    image: '/images/team/Robin Sharma.png',
    description:
      "Robin is an expert in game-based learning, mathematics education, and educational research. He brings in several years of international EdTech experience from a range of settings, including UNESCO, academia, and the industry. Robin holds a master's in mathematics education, and a Ph.D. in learning science from McGill University, Canada.",
  },
  {
    name: 'Anamika Gupta',
    role: 'Monitoring Learning Evaluation Expert',
    image: '/images/team/Anamika Gupta.png',
    description:
      "Anamika works at the intersection of education research, policy, and programme strategy. With 15+ years of experience across Asia and Africa, she designs programs for schools, NGOs, and government institutions. She evaluates impact, and translates research and practice into policies. Her expertise spans mixed-methods research, monitoring, evaluation, and learning (MEL) in EdTech, girls' education, gender equity, violence prevention (VAWG), and education in conflict-affected settings.",
  },
  {
    name: 'Dr Ranit Chatterjee',
    role: 'Disaster Education Expert',
    image: '/images/team/Ranit_Chatterjee-removebg-preview.png',
    description:
      'Dr. Ranit is a disaster education expert and co-founder of RIKA Institute and DTECH, a startup utilising AI and quantum computing for climate resilience. With 15+ years across UN agencies, NGOs, and academia, he serves in advisory roles for the UNDRR and the IUCN. An acclaimed academic with innovative global teaching experience, Ranit specialises in translating complex research into actionable learning. He has designed effective disaster management and climate change courses for organizations like UNESCO.',
  },
  {
    name: 'Shweta Bahri',
    role: 'Climate Education Expert',
    image: '/images/team/Shweta_Bahri-removebg-preview.png',
    description:
      'Shweta is the founder of Earth Warriors Global, a recognised UNESCO Green Citizen enterprise that delivers solutions-focused climate curricula to over 100,000 students worldwide. Building on a decade of experience as an education policy specialist across South Asia and Africa, she designs context-driven teacher training programs that build pedagogical confidence without inducing climate anxiety. Backed by degrees from LSE and Cambridge, Shweta scales age-appropriate, empowering climate education globally, from government schools to high-resource institutions.',
  },
  {
    name: 'Praveen Kumar Naidu',
    role: 'Learning Experience Designer & Facilitator',
    image: '/images/team/Praveen Kumar Naidu.png',
    description:
      'Praveen is a Learning Experience Designer with 20+ years dedicated to making learning effective. Blending cognitive science, adult learning principles, and evidence-based instructional design, he has crafted and facilitated immersive learning experiences for 25,000+ professionals across the corporate, government, and social sectors. Praveen specialises in curriculum design, capability building, and transformation that drive behavioural change.',
  },
  {
    name: 'Parisha Jain',
    role: 'Senior Instructional Designer & Visual Designer',
    image: '/images/team/Parisha_Jain-removebg-preview.png',
    description:
      'Parisha is the co-founder of Learning Designers Community (LDC). She has a foundation in interdisciplinary and systems thinking and its application to learning technology and visual design. She has designed evidence-based, context-aware learning solutions across corporate, education, and development sectors. She is also committed to sustainable development, youth capacity building, and social impact.',
  },
  {
    name: 'Vibha Iyer',
    role: 'Senior Learning Designer',
    image: '/images/team/Vibha_Iyer_s_-removebg-preview.png',
    description:
      "Vibha is an education strategist, researcher, and learning designer with over 12 years of experience building, evaluating, and improving learning systems across government, nonprofit, and EdTech sectors. Her work has impacted millions of learners, educators, and caregivers. With an M.Des. in Education, Vibha applies systems thinking, user research, learning experience design, digital pedagogy, and iterative product improvement to instructional design and curriculum development. She has led digital learning innovation at Rocket Learning and co-developed India's National Curriculum for Early Childhood Education. Her expertise strengthens learner engagement, pedagogical coherence, accessibility, and learning outcomes.",
  },
  {
    name: 'Preeti Panda',
    role: 'Instructional Designer & Pedagogy Expert',
    image: '/images/team/Preeti Panda.png',
    description:
      'With a background in engineering and over a decade of experience in education and learning design, Preeti brings together technology, pedagogy, and storytelling to create meaningful learning experiences. She enjoys breaking down complex ideas into engaging, interactive formats that make learning intuitive, practical, and memorable.',
  },
  {
    name: 'Tarun Aggarwal',
    role: 'Learning Analytics & Digital Learning Designer',
    image: '/images/team/Tarun Aggarwal .png',
    description:
      'Tarun is a results-driven product and curriculum design leader with 10+ years of experience managing digital learning products. He excels at using AI, user research, and data analytics to build impactful learning solutions. Tarun seamlessly bridges the gap between agile product management, market strategy, and effective learning design.',
  },
  {
    name: 'Miriam Elnaggar',
    role: 'Learning Designer & Educator',
    image: '/images/team/Miriam_Elnaggar-removebg-preview.png',
    description:
      "Miriam is a Cairo-based learning designer with a decade of international classroom experience crafting engaging, learner-centred digital environments. Holding a Master's in Education, she turns traditional curricula into interactive experiences ranging from corporate onboarding programs to courses using Learning Management Systems (LMS). Miriam believes in exploration and play, and designs hands-on professional and student workshops that integrate creative techniques like game design.",
  },
  {
    name: 'Kritika Mattoo',
    role: 'Curriculum & Assessment Expert',
    image: '/images/team/Kritika Mattoo.png',
    description:
      'Kritika is a psychologist and learning designer with 15+ years of experience building inclusive, gender-responsive curricula and training programs for schools, NGOs, and government institutions. With a decade of grounding in Waldorf education and experience as an education reforms consultant to the Deputy CM of Delhi, she designs experiential learning programs for students, teachers, and parents, and delivers wellbeing and capacity-building training for corporates and youth-focused organizations.',
  },
  {
    name: 'Ayomide Ajani',
    role: 'Visual Designer & Course Developer',
    image: '/images/team/Ayomide_Ajani-removebg-preview.png',
    description:
      "Ayomide creates accessible and inclusive digital environments that leverage storytelling and digital media to drive social change. Holding a Master's in E-Learning Design and Development and an award-winning track record, she focuses on eliminating learning barriers to ensure education is available to everyone, regardless of ability or background. Ayomide combines universal design principles with strategic course development to create highly effective learning journeys.",
  },
  {
    name: 'Rabia Malik',
    role: 'Digital Learning Developer & Graphic Designer',
    image: '/images/team/Rabia Malik.png',
    description:
      "Rabia specialises in turning complex, technical concepts into highly interactive and visually compelling learning experiences across both corporate and EdTech environments, including BYJU'S and LIDO. Blending instructional design with a sharp eye for aesthetic detail to build appealing learning that maximises retention.",
  },
  {
    name: 'Aditi Ankush',
    role: 'Visual & Experience Designer',
    image: '/images/team/Aditi_Ankush-removebg-preview.png',
    description:
      'Aditi makes complex ideas enjoyable and participatory. She excels at data visualisation, product design, game design, and animation. An alumnus of the National Institute of Design (NID), she received a Ford Foundation grant for her award-winning project, Khilkhil Labs, which created social-emotional learning toolkits for low-resource educational spaces. Aditi currently serves as a Lead Experience Designer at WongDoody.',
  },
  {
    name: 'Samuel Naidu',
    role: 'Video Editor',
    image: '/images/team/Samuel Naidu.png',
    imagePosition: 'object-center',
    description:
      "Samuel is a video editor and visual storyteller who creates films and digital content that communicate ideas with clarity and impact. With a Bachelor's degree in Mass Media and Communication in Advertising, he works across editing, cinematography and motion design to bring meaningful stories to life.",
  },
  {
    name: 'Ishwar Kukreja',
    role: 'Marketing Consultant',
    image: '/images/team/Ishwar Kukreja.png',
    description:
      'With a background in psychology, neuroscience, and marketing, Ishwar strikes the right balance between understanding the technicality of our work and marketing it. He handles our branding, content, graphics, and project management.',
  },
  {
    name: 'Aditi Johari',
    role: 'Instructional Designer & Developer',
    image: '/images/team/Aditi Johari.png',
    description:
      "Aditi has over 18 years of experience in learning, performance, and capability building across organizations like Tata Digital, Reliance, and Accenture. She works at the intersection of learning science, applied AI, and the business’ context. Aditi specializes in simplifying complex workflows and creating effective AI-enabled learning solutions aligned with business goals.",
  }
];
