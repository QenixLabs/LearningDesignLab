import { cn } from '@/lib/utils';

interface NeuronPatternProps {
  opacity?: number;
  size?: number;
  className?: string;
}

const IMAGE_SRC = '/designs/image18-transparent.png';

export default function NeuronPattern({
  opacity = 0.09,
  size = 260,
  className,
}: NeuronPatternProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none', className)}
      style={{
        opacity,
        backgroundImage: `url("${IMAGE_SRC}")`,
        backgroundSize: `${size}px auto`,
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
        backgroundAttachment: 'fixed',
      }}
    />
  );
}
