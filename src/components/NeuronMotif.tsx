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

const IMAGE_SRC = '/designs/image18.png';

export default function NeuronMotif({
  variant,
  color,
  opacity = 0.03,
  size,
  fade = 'none',
  fadeStart = '0%',
  className,
}: NeuronMotifProps) {
  // variant + color no longer apply: raster image cannot be recolored.
  // size no longer applies: image covers the container instead of tiling.
  void variant;
  void color;
  void size;

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
        backgroundImage: `url("${IMAGE_SRC}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        ...maskStyle,
      }}
    />
  );
}
