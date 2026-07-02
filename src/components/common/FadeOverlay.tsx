import { cn } from '@/lib/utils/cn';

type FadeOverlayProps = {
  position: 'top' | 'bottom' | 'right' | 'left';
  className?: string;
};

const FadeOverlay = ({ position, className }: FadeOverlayProps) => {
  const positionClasses = {
    top: 'inset-x-0 top-0 bg-linear-to-b',
    bottom: 'inset-x-0 bottom-0 bg-linear-to-t',
    right: 'inset-y-0 right-0 bg-linear-to-l',
    left: 'inset-y-0 left-0 bg-linear-to-r',
  } as const;

  return (
    <div
      className={cn(
        'absolute from-black to-transparent pointer-events-none',
        positionClasses[position],
        className
      )}
    />
  );
};

export default FadeOverlay;
