import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
import CastSection from './sections/CastSection';
import { useMovieFullDetails } from '@/hooks/useMovies';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useMovieFullDetails(Number(id));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message} Error</p>;
  if (!data) return <p>no video</p>;
  return (
    <MainLayout>
      <main className='flex flex-col gap-3xl'>
        <HeroSection data={data} />
        <OverviewSection overview={data?.detail.overview} />
        <CastSection cast={data.cast} />
      </main>
    </MainLayout>
  );
};

export default MovieDetailPage;
