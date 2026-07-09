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
  socials?: SocialLinks;
}

const leadership: TeamMember[] = [
  {
    name: 'Shraddha Rawat',
    role: 'Founder',
    image: '/images/team/Shraddha Rawat.jpg',
    socials: {
      facebook: 'https://www.facebook.com/wix',
      twitter: 'https://www.twitter.com/wix',
    },
  },
  {
    name: 'Parisha Jain',
    role: 'Co-Founder',
    image: '/images/team/Parisha Jain.jpg',
    socials: {
      facebook: 'https://www.facebook.com/wix',
      twitter: 'https://www.twitter.com/wix',
    },
  },
];

const team: TeamMember[] = [
  {
    name: 'Surabhi Nath',
    role: 'Senior Learning Designer & Delivery Lead',
    image: '/images/team/Surabhi Nath.jpg',
  },
  {
    name: 'Praveen Kumar Naidu',
    role: 'Learning Designer & Project Lead',
    image: '/images/team/Praveen Kumar Naidu.jpg',
  },
  {
    name: 'Anurati Srivastava',
    role: 'Product and Learning Design Specialist',
    image: '/images/team/Anurati Srivastava.jpg',
  },
  {
    name: 'Miriam Elhaggar',
    role: 'Facilitator and Learning Designer',
    image: '/images/team/Miriam Elnaggar.jpg',
  },
  {
    name: 'Shweta Bahri',
    role: 'Climate & Sustainability Education Expert',
    image: '/images/team/Shweta Bahri.jpg',
  },
  {
    name: 'Ranit Chatterjee',
    role: 'Disaster & Safety Education Specialist',
    image: '/images/team/Ranit Chatterjee.jpg',
  },
  {
    name: 'Tarun Aggarwal',
    role: 'Instructional Designer & Course Developer',
    image: '/images/team/Tarun Aggarwal .jpg',
  },
  {
    name: 'Manya Jaisinghani',
    role: 'Instructional Designer & Course Developer',
    image: '/images/team/Manya Jaisinghani.jpg',
  },
  {
    name: 'Aditi Ankush',
    role: 'Visual & Experience Designer',
    image: '/images/team/Aditi Ankush.jpg',
  },
  {
    name: 'Vidit Jain',
    role: 'Visual Designer & Researcher',
    image: '/images/team/Vidit Jain.jpg',
  },
  {
    name: 'Ayomide Ajani',
    role: 'Visual Designer & Course Developer',
    image: '/images/team/Ayomide Ajani.jpg',
  },
  {
    name: 'Rabia Malik',
    role: 'Visual Designer & Course Developer',
    image: '/images/team/Rabia Malik.jpg',
  },
  {
    name: 'Ishwar Kukreja',
    role: 'Marketing Consultant',
    image: '/images/team/Ishwar Kukreja.jpg',
    description:
      'With a background in psychology, cognitive science, and marketing, Ishwar strikes the right balance between understanding the technicality of our work and marketing it. He handles our branding, content, graphics, and project management.',
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
    <div className="flex items-center gap-3 mt-3">
      {socials.facebook && (
        <a
          href={socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-black/60 hover:text-pink transition-colors"
          aria-label={`${socials.facebook} Facebook`}
        >
          <Facebook className="w-4 h-4" />
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
          <Twitter className="w-4 h-4" />
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
          <Linkedin className="w-4 h-4" />
        </a>
      )}
    </div>
  );
}

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="flex flex-col">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[4/5] object-cover mb-4"
        />
      ) : (
        <PlaceholderImage className="w-full aspect-[4/5] mb-4" />
      )}
      <h3 className="font-display text-lg md:text-xl font-semibold text-black leading-tight mb-1">
        {member.name}
      </h3>
      <p className="font-body text-sm text-black/70 mb-2">{member.role}</p>
      {member.description ? (
        <p className="font-body text-sm text-black/60 leading-relaxed">
          {member.description}
        </p>
      ) : (
        <p className="font-body text-sm text-black/40">&lt;Description&gt;</p>
      )}
      {member.socials && <SocialIcons socials={member.socials} />}
    </div>
  );
}

export default function Team() {
  return (
    <Layout>
      <div className="pt-20" />
      <section className="bg-white py-20 md:py-32 min-h-[80vh]">
        <div className="page-margin max-content">
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="heading-xl text-black mb-6">
              Meet Our Transdisciplinary Team
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16 max-w-4xl mx-auto">
            {leadership.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
