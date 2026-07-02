import { Skeleton } from '@/components/ui/skeleton';

const MovieCardSkeleton = () => {
  return (
    <div className='flex w-full flex-col gap-lg'>
      <Skeleton className='h-66.5 lg:h-80.25 rounded-xl' />

      <div className='flex flex-col gap-1'>
        <Skeleton className='h-5 w-full rounded-full' />
        <Skeleton className='h-5 w-20 rounded-full' />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
