import Layout from '../components/Layout';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { cn } from '@/lib/utils';
import NeuronMotif from '../components/NeuronMotif';
import { founder, team } from '../data/team';
import type { SocialLinks, TeamMember } from '../data/team';

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
    <div className="flex flex-col bg-white/80 border border-black/10 p-4">
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
    <div className="flex flex-col items-center text-center bg-white/80 border border-black/10 p-6 mb-16 md:mb-24">
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
      <section className="bg-[#F3F4F6] py-20 md:py-32 min-h-[80vh] relative overflow-hidden">
        <NeuronMotif color="#000000" opacity={0.06} size={220} />

        <div className="page-margin max-content relative z-10">
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
