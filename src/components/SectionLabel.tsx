interface SectionLabelProps {
  text: string;
  light?: boolean;
  accent?: boolean;
  className?: string;
}

export default function SectionLabel({ text, light = true, accent = false, className = '' }: SectionLabelProps) {
  const colorClasses = accent
    ? 'text-pink'
    : light
      ? 'text-white/50'
      : 'text-black/45';

  return (
    <span className={`section-label mb-6 block ${colorClasses} ${className}`}>
      {text}
    </span>
  );
}
