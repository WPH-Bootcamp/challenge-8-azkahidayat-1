import MovieCardSkeleton from '@/components/features/MovieCardSkeleton';
import Container from '@/components/layouts/Container';
import FadeOverlay from '@/components/ui/app-ui/FadeOverlay';
import { Skeleton } from '@/components/ui/skeleton';

const NewReleaseSkeleton = () => {
  return (
    <section id='new-release-home-page-skeleton'>
      <Container className='relative py-5xl flex flex-col gap-3xl lg:gap-5xl'>
        <Skeleton className='h-7 w-45 lg:h-12 lg:w-65 rounded-full' />
        <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-x-xl gap-y-4xl lg:gap-x-2xl lg:gap-y-5xl'>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index}>
              <MovieCardSkeleton />
            </div>
          ))}
          <FadeOverlay position='bottom' className='h-100' />
        </div>
      </Container>
    </section>
  );
};

export default NewReleaseSkeleton;
