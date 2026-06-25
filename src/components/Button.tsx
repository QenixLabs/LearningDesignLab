import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
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

  // Primary: bright pink CTA (always pink regardless of dark/light)
  const primaryClasses = 'bg-pink text-white border border-pink hover:bg-pink-dark hover:border-pink-dark';

  // Secondary: outlined pink
  const secondaryClasses = dark
    ? 'bg-transparent text-pink border border-pink hover:bg-pink hover:text-white'
    : 'bg-transparent text-pink border border-pink hover:bg-pink hover:text-white';

  const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

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
