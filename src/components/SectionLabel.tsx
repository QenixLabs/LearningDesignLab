interface SectionLabelProps {
  text: string;
  light?: boolean;
  className?: string;
}

export default function SectionLabel({ text, light = true, className = '' }: SectionLabelProps) {
  return (
    <span className={`section-label mb-6 block ${light ? 'text-pink' : 'text-pink'} ${className}`}>
      {text}
    </span>
  );
}
