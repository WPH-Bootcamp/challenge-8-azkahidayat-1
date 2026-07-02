import Container from '@/components/layouts/Container';
import FadeOverlay from '@/components/common/FadeOverlay';
import { Skeleton } from '@/components/ui/skeleton';

const HeroSectionSkeleton = () => {
  return (
    <section id='hero-detail-page'>
      <div className='relative h-98 lg:h-202.5 -z-1'>
        <Skeleton className='size-full bg-zinc-900 rounded-none' />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>

      <Container>
        <div className='grid grid-cols-[auto_1fr] gap-x-xl gap-y-3xl -mt-30.75 lg:-mt-99.5'>
          <div className='max-w-29 rounded-xl overflow-hidden lg:max-w-65 lg:row-span-3'>
            <Skeleton className='w-29 h-42.75 lg:w-65 lg:h-96 rounded-none' />
          </div>

          <div className='flex flex-col gap-xs lg:gap-4xl'>
            <Skeleton className='h-6 w-full lg:h-16' />
            <Skeleton className='block h-6 w-full lg:hidden' />
            <Skeleton className='h-4 w-1/2 lg:h-8' />
          </div>

          <div className='flex gap-xl col-span-2 items-center lg:col-span-1 lg:max-w-[288px]'>
            <Skeleton className='h-9 w-full lg:h-13 rounded-full' />
            <Skeleton className='size-11 lg:size-13 aspect-square rounded-full' />
          </div>

          <div className='col-span-2 flex gap-lg lg:gap-2xl lg:col-span-1'>
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className='w-full h-30 rounded-2xl' />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSectionSkeleton;
