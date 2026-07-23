import Layout from '../components/Layout';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinks {
  facebook?: string;
  twitter?: string;
  linkedin?: string;
}

interface TeamMember {
  name: string;
  role: string;
  image?: string;
  description?: string;
  imagePosition?: string;
  socials?: SocialLinks;
}

const founder: TeamMember = {
  name: 'Shraddha Rawat',
  role: 'Founder & Executive Director',
  image: '/images/team/Shraddha_Rawat-removebg-preview.png',
  description:
    "Shraddha is a learning design and strategy specialist who, in 2011, founded the Learning Designers Community (LDC), a global network of over 7,000 professionals across 36 countries. Now, at Learning Design Lab, she partners with global organisations and educational institutions to build evidence-informed, contextually grounded learning solutions that translate into real-world outcomes. Through this, Shraddha achieves her vision to make high-quality learning accessible to all, and indeed, to anyone. Her educational experiences have reached 5.5 million people worldwide. As an active researcher and strategic consultant for organisations like UNICEF, she bridges learning science research and practical application.",
  socials: {
    facebook: 'https://www.facebook.com/wix',
    twitter: 'https://www.twitter.com/wix',
  },
};

const team: TeamMember[] = [
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
      'Dr. Ranit is a disaster education expert and co-founder of RIKA Institute and DTECH, a startup utilising AI and quantum computing for climate resilience. With 15+ years across UN agencies, NGOs, and academia, he serves in advisory roles for the UNDRR and the IUCN. An acclaimed academic with innovative global teaching experience, Ranit specialises in translating complex research into actionable learning. He has designed effective disaster management and climate change courses for organisations like UNESCO.',
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
      'Kritika is a psychologist and learning designer with 15+ years of experience building inclusive, gender-responsive curricula and training programs for schools, NGOs, and government institutions. With a decade of grounding in Waldorf education and experience as an education reforms consultant to the Deputy CM of Delhi, she designs experiential learning programs for students, teachers, and parents, and delivers wellbeing and capacity-building training for corporates and youth-focused organisations.',
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
];

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-black/[0.04] border border-black/10 flex items-center justify-center',
        className
      )}
    >
      <span className="text-black/20 text-[10px] font-body uppercase tracking-wider">
        IMG
      </span>
    </div>
  );
}

function SocialIcons({ socials }: { socials: SocialLinks }) {
  return (
    <div className="flex items-center justify-center gap-4 mt-5">
      {socials.facebook && (
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/60 hover:text-pink transition-colors"
          aria-label={`${socials.facebook} Facebook`}
        >
          <Facebook className="w-5 h-5" />
        </a>
      )}
      {socials.twitter && (
        <a
          href={socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/60 hover:text-pink transition-colors"
          aria-label={`${socials.twitter} Twitter`}
        >
          <Twitter className="w-5 h-5" />
        </a>
      )}
      {socials.linkedin && (
        <a
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/60 hover:text-pink transition-colors"
          aria-label={`${socials.linkedin} LinkedIn`}
        >
          <Linkedin className="w-5 h-5" />
        </a>
      )}
    </div>
  );
}

function SquareImage({ src, alt, position = 'object-top' }: { src?: string; alt: string; position?: string }) {
  return (
    <div className="w-full aspect-square bg-gray-100 overflow-hidden mb-4">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={cn('w-full h-full object-cover', position)}
        />
      ) : (
        <PlaceholderImage className="w-full h-full" />
      )}
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col bg-white border border-black/10 p-4">
      <SquareImage src={member.image} alt={member.name} position={member.imagePosition} />
      <h3 className="font-display text-lg md:text-xl font-semibold text-black leading-tight mb-1">
        {member.name}
      </h3>
      <p className="font-body text-sm font-medium text-black/80 mb-3">
        {member.role}
      </p>
      {member.description && (
        <p className="font-body text-sm text-black/70 leading-relaxed">
          {member.description}
        </p>
      )}
      {member.socials && <SocialIcons socials={member.socials} />}
    </div>
  );
}

function FeaturedCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col items-center text-center bg-white border border-black/10 p-6 mb-16 md:mb-24">
      <div className="w-full max-w-sm aspect-square bg-gray-100 overflow-hidden mb-8">
        {member.image ? (
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <PlaceholderImage className="w-full h-full" />
        )}
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-black leading-tight mb-2">
        {member.name}
      </h2>
      <p className="font-body text-base md:text-lg text-black/70 mb-6">
        {member.role}
      </p>
      {member.description && (
        <p className="font-body text-[16px] leading-[23px] text-black/70 max-w-3xl">
          {member.description}
        </p>
      )}
      {member.socials && <SocialIcons socials={member.socials} />}
    </div>
  );
}

export default function Team() {
  return (
    <Layout>
      <section className="bg-[#F3F4F6] py-20 md:py-32 min-h-[80vh]">
        <div className="page-margin max-content">
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="page-heading text-black mb-6">
              Meet Our Transdisciplinary Team
            </h1>
          </div>

          <FeaturedCard member={founder} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
