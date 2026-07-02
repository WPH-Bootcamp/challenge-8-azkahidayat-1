import { Skeleton } from '@/components/ui/skeleton';

const MovieListCardSkeleton = () => {
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-x-xl gap-y-3xl lg:gap-x-3xl pb-4xl lg:pb-6xl'>
      {/* grid 1 */}
      <div className='max-w-26 rounded-md lg:max-w-45.5 lg:rounded-xl overflow-hidden lg:row-span-2 lg:order-1'>
        <Skeleton className='w-26 h-39 rounded-none lg:w-45.5 lg:h-67.5' />
      </div>

      {/* grid 2 */}
      <div className='col-span-2 flex flex-col gap-xs lg:gap-lg lg:col-span-1 lg:max-w-193 lg:order-2'>
        <Skeleton className='w-3/4 h-5 lg:h-16' />
        <Skeleton className='h-4 w-1/2 lg:h-8' />
        <Skeleton className='h-4 w-full lg:h-8' />
        <Skeleton className='h-4 w-full lg:h-8' />
      </div>

      {/* grid 3 */}
      <div className='col-span-2 lg:col-span-1 lg:max-w-50 lg:order-4'>
        <Skeleton className='h-9 w-full lg:h-13 rounded-full' />
      </div>

      {/* grid 4 */}
      <div className='col-span-1 lg:order-3'>
        <Skeleton className='size-11 lg:size-13 aspect-square rounded-full' />
      </div>
    </div>
  );
};

export default MovieListCardSkeleton;
