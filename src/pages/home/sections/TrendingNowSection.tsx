import TrendingMovieCarousel from '@/components/features/movies/components/TrendingMovieCarousel';
import FadeOverlay from '@/components/common/FadeOverlay';
import {
  Carousel,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { useTrendingMovies } from '@/hooks/useMovies';
import TrendingNowSkeleton from './TrendingNowSkeleton';

const TrendingNowSection = () => {
  const { data, isLoading, error } = useTrendingMovies();
  if (isLoading) return <TrendingNowSkeleton />;
  if (error) return <p>{error.message}</p>;

  const movies = data?.results;
  if (!movies) return null;
  return (
    <section
      id='trending-now-home-page'
      className='relative py-5xl flex flex-col gap-3xl lg:gap-5xl'
    >
      <div className='px-xl lg:px-8xl xl:px-11xl'>
        <h2 className='font-bold text-display-xs lg:text-display-lg'>
          Trending Now
        </h2>
      </div>
      <div className='relative flex overflow-x-hidden px-xl lg:px-8xl xl:px-11xl'>
        <Carousel
          opts={{
            align: 'start',
          }}
          className='w-full relative'
        >
          <CarouselPrevious className='left-1 lg:-left-19.75 size-11 lg:size-14' />
          <CarouselNext className='right-1 lg:-right-19.75 size-11 lg:size-14' />
          <TrendingMovieCarousel movies={movies} />
        </Carousel>
        <FadeOverlay position='left' className='hidden lg:block lg:w-50' />
        <FadeOverlay position='right' className='hidden lg:block lg:w-50' />
      </div>
    </section>
  );
};

export default TrendingNowSection;
