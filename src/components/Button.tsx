import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'solid' | 'outline';
  dark?: boolean;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export default function Button({
  text,
  variant = 'primary',
  dark = true,
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseClasses = 'inline-block px-8 py-3.5 font-body text-sm font-medium transition-all duration-250 ease-out cursor-pointer';

  // Pink brand CTA (kept for pages that still want the accent)
  const primaryClasses = 'bg-pink text-white border border-pink hover:bg-pink-dark hover:border-pink-dark';

  // Pink outlined
  const secondaryClasses = dark
    ? 'bg-transparent text-pink border border-pink hover:bg-pink hover:text-white'
    : 'bg-transparent text-pink border border-pink hover:bg-pink hover:text-white';

  // Neutral solid: authoritative, high-contrast
  const solidClasses = dark
    ? 'bg-white text-near-black border border-white hover:bg-white/90'
    : 'bg-near-black text-white border border-near-black hover:bg-black';

  // Neutral outline
  const outlineClasses = dark
    ? 'bg-transparent text-white border border-white hover:bg-white hover:text-near-black'
    : 'bg-transparent text-near-black border border-near-black hover:bg-near-black hover:text-white';

  const variantClasses =
    variant === 'primary'
      ? primaryClasses
      : variant === 'secondary'
        ? secondaryClasses
        : variant === 'solid'
          ? solidClasses
          : outlineClasses;

  if (href) {
    if (href.startsWith('/')) {
      return (
        <Link to={href} className={`${baseClasses} ${variantClasses} ${className}`}>
          {text}
        </Link>
      );
    }
    return (
      <a href={href} className={`${baseClasses} ${variantClasses} ${className}`}>
        {text}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {text}
    </button>
  );
}
