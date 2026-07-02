import Container from '@/components/layouts/Container';
import { Skeleton } from '@/components/ui/skeleton';

const OverviewSectionSkeleton = () => {
  return (
    <section id='overview-detail-page-skeleton'>
      <Container className='flex flex-col gap-md lg:gap-3xl'>
        <Skeleton className='h-7 w-48 lg:h-12 lg:w-64' />
        <Skeleton className='h-4 w-full lg:h-5' />
        <Skeleton className='h-4 w-5/6 lg:h-5' />
      </Container>
    </section>
  );
};

export default OverviewSectionSkeleton;
