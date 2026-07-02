import { Skeleton } from '@/components/ui/skeleton';
import MovieCardSkeleton from '@/components/features/movies/components/MovieCardSkeleton';
import FadeOverlay from '@/components/common/FadeOverlay';

const TrendingNowSkeleton = () => {
  return (
    <section
      id='trending-now-home-page-skeleton'
      className='py-5xl flex flex-col gap-3xl lg:gap-5xl'
    >
      <div className='px-xl lg:px-8xl xl:px-11xl'>
        <Skeleton className='h-7 w-45 lg:h-12 lg:w-65 rounded-full' />
      </div>
      <div className='relative flex overflow-x-hidden gap-xl lg:gap-2xl px-xl lg:px-0'>
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className='min-w-43.25 lg:min-w-54'>
            <MovieCardSkeleton />
          </div>
        ))}
        <FadeOverlay position='left' className='hidden lg:block lg:w-50' />
        <FadeOverlay position='right' className='hidden lg:block lg:w-50' />
      </div>
    </section>
  );
};

export default TrendingNowSkeleton;
