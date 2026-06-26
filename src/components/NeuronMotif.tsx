import { cn } from '@/lib/utils';

interface NeuronMotifProps {
  variant?: 'simple' | 'rich';
  color?: string;
  opacity?: number;
  size?: number;
  fade?: 'left' | 'right' | 'none';
  fadeStart?: string;
  className?: string;
}

const SIMPLE_SVG = `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><g fill='none' stroke='{color}' stroke-width='0.6'><path d='M10 50 Q30 20 50 50 T90 50'/><path d='M0 30 Q20 5 40 30 T80 30'/><path d='M20 70 Q40 45 60 70 T100 70'/><circle cx='10' cy='50' r='2' fill='{color}'/><circle cx='50' cy='50' r='2.5' fill='{color}'/><circle cx='90' cy='50' r='2' fill='{color}'/></g></svg>`;

const RICH_SVG = `<svg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'><g fill='none' stroke='{color}' stroke-width='0.6'><path d='M10 50 Q30 20 50 50 T90 50'/><path d='M0 30 Q20 5 40 30 T80 30'/><path d='M20 70 Q40 45 60 70 T100 70'/><path d='M5 80 Q25 60 45 80 T85 80'/><circle cx='10' cy='50' r='2' fill='{color}'/><circle cx='50' cy='50' r='2.5' fill='{color}'/><circle cx='90' cy='50' r='2' fill='{color}'/><circle cx='40' cy='30' r='1.5' fill='{color}'/><circle cx='60' cy='70' r='1.5' fill='{color}'/></g></svg>`;

export default function NeuronMotif({
  variant = 'simple',
  color = '#FF1493',
  opacity = 0.03,
  size = 250,
  fade = 'none',
  fadeStart = '0%',
  className,
}: NeuronMotifProps) {
  const svg = variant === 'rich' ? RICH_SVG : SIMPLE_SVG;
  const coloredSvg = svg.replaceAll('{color}', color);
  const encodedSvg = encodeURIComponent(coloredSvg);

  const maskStyle =
    fade !== 'none'
      ? {
          WebkitMaskImage: `linear-gradient(to ${fade}, black ${fadeStart}, transparent 100%)`,
          maskImage: `linear-gradient(to ${fade}, black ${fadeStart}, transparent 100%)`,
        }
      : undefined;

  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
        backgroundSize: `${size}px ${size}px`,
        ...maskStyle,
      }}
    />
  );
}
