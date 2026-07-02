import FadeOverlay from '@/components/ui/app-ui/FadeOverlay';
import WatchTrailerButton from '@/components/ui/app-ui/WatchTrailerButton';
import { Button } from '@/components/ui/button';
import { useTrendingMovies } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
const randomIndex = Math.floor(Math.random() * 20);

const HomeHeroSection = () => {
  const navigate = useNavigate();
  const {
    data: trendingData,
    isLoading: isLoadingTrending,
    error: errorTrending,
  } = useTrendingMovies('week');

  const movies = trendingData?.results;
  const featuredMovie = movies?.[randomIndex];

  if (isLoadingTrending) return <p>Loading...</p>;
  if (errorTrending) return <p>{errorTrending.message}</p>;

  const path = featuredMovie?.backdrop_path;
  if (!path) return null;

  const size = IMAGE_SIZES.backdrop.medium;
  const backdropImage = getImageUrl(path, size);

  function handleDetailClick(movieId: number) {
    navigate(`/movieDetail/${movieId}`);
  }

  return (
    <section id='hero-home-page' className='relative'>
      <div className='relative h-98 lg:h-auto -z-1'>
        <img
          src={backdropImage}
          alt={`${featuredMovie.title} image`}
          className='size-full object-center object-cover'
        />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>
      <div className='flex flex-col gap-3xl lg:gap-6xl px-4 lg:p-0 -mt-42.25 lg:mt-0 lg:absolute lg:top-74.5 lg:left-8xl xl:left-11xl max-w-170 mx-auto'>
        <div className='flex flex-col gap-sm'>
          <h1 className='font-bold text-display-xs lg:text-display-2xl'>
            {featuredMovie.title}
          </h1>
          <p className='text-sm text-neutral-400 lg:text-md line-clamp-3'>
            {featuredMovie.overview}
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-xl lg:max-w-119 '>
          <WatchTrailerButton movieId={featuredMovie.id} />

          <Button
            variant={'outline'}
            onClick={() => handleDetailClick(featuredMovie.id)}
          >
            See Detail
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
