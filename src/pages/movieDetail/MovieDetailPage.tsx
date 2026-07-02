import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
import CastSection from './sections/CastSection';
import { useMovieFullDetails } from '@/hooks/useMovies';
import { useParams } from 'react-router-dom';
import { Toaster } from 'sonner';
import HeroSectionSkeleton from './sections/HeroSectionSkeleton';
import OverviewSectionSkeleton from './sections/OverviewSectionSkeleton';
import CastSectionSkeleton from './sections/CastSectionSkeleton';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useMovieFullDetails(Number(id));

  if (isLoading)
    return (
      <MainLayout>
        <main className='flex flex-col gap-3xl'>
          <HeroSectionSkeleton />
          <OverviewSectionSkeleton />
          <CastSectionSkeleton />
        </main>
      </MainLayout>
    );

  if (error) return <p>{error.message} Error</p>;
  if (!data) return <p>no video</p>;
  return (
    <MainLayout>
      <main className='flex flex-col gap-3xl'>
        <HeroSection data={data} />
        <OverviewSection overview={data?.detail.overview} />
        <CastSection cast={data.cast} />
      </main>
      <Toaster
        toastOptions={{
          classNames: {
            toast:
              '!bg-black/25 !backdrop-blur-2xl !border-0 !text-white !rounded-2xl ',
          },
        }}
        offset={{ top: '114px' }}
        mobileOffset={{ top: '80px' }}
      />
    </MainLayout>
  );
};

export default MovieDetailPage;
