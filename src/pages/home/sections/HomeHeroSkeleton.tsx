import FadeOverlay from '@/components/common/FadeOverlay';
import { Skeleton } from '@/components/ui/skeleton';

const HomeHeroSkeleton = () => {
  return (
    <section id='hero-home-page-skeleton' className='relative'>
      <div className='relative h-98 lg:h-202.5 -z-1'>
        <Skeleton className='size-full bg-zinc-900 rounded-none' />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>
      <div className='flex flex-col gap-3xl lg:gap-6xl px-4 lg:p-0 -mt-42.25 lg:mt-0 lg:absolute lg:top-74.5 lg:left-8xl xl:left-11xl max-w-170 mx-auto'>
        <div className='flex flex-col gap-3xl lg:min-w-158.75'>
          <Skeleton className='h-7 w-70 lg:h-15 rounded-full' />
          <div className='flex flex-col gap-lg'>
            <Skeleton className='h-4 w-full lg:h-5 rounded-full' />
            <Skeleton className='h-4 w-full lg:h-5 rounded-full' />
            <Skeleton className='h-4 w-full lg:h-5 rounded-full' />
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-xl w-full lg:max-w-119 '>
          <Skeleton className='h-9 w-full lg:h-11 rounded-full' />
          <Skeleton className='h-9 w-full lg:h-11 rounded-full' />
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSkeleton;
