import Container from '@/components/layouts/Container';
import { Skeleton } from '@/components/ui/skeleton';

const CastSectionSkeleton = () => {
  return (
    <section id='cast-detail-page' className='mb-5xl lg:mb-37.25'>
      <Container className='flex flex-col gap-md lg:gap-3xl'>
        <Skeleton className='h-7 w-48 lg:h-12 lg:w-64' />
        <div className='grid grid-cols-1 gap-xl lg:grid-cols-3 lg:gap-5xl'>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <div key={index} className='flex gap-lg items-center'>
                <div className='w-13.75 lg:w-17.25 rounded-md lg:rounded-lg overflow-hidden'>
                  <Skeleton className='h-21 lg:h-26 rounded-md lg:rounded-xl' />
                </div>

                <div className='w-full max-w-45 flex flex-col gap-3'>
                  <Skeleton className='h-4 lg:h-5 w-full' />
                  <Skeleton className='h-4 lg:h-5 w-1/2' />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CastSectionSkeleton;
