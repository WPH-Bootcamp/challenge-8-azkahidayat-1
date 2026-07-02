import FadeOverlay from '@/components/common/FadeOverlay';
import WatchTrailerButton from '@/components/features/movies/ui/WatchTrailerButton';
import { Button } from '@/components/ui/button';
import { useTrendingMovies } from '@/hooks/useMovies';
import { IMAGE_SIZES } from '@/lib/constants';
import { useNavigate } from 'react-router-dom';
import HomeHeroSkeleton from './HomeHeroSkeleton';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInOut, fadeInOutFromBottom } from '@/motions';
import { Skeleton } from '@/components/ui/skeleton';

const HomeHeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const {
    data: trendingData,
    isLoading: isLoadingTrending,
    error: errorTrending,
  } = useTrendingMovies('week');

  const movies = trendingData?.results || [];
  const featuredMovie = movies?.[currentIndex];

  useEffect(() => {
    if (movies.length === 0) return;
    const interval = setInterval(
      () => setCurrentIndex(Math.floor(Math.random() * movies.length)),
      10000
    );
    return () => clearInterval(interval);
  }, [movies.length]);

  if (isLoadingTrending) return <HomeHeroSkeleton />;
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
      <AnimatePresence mode='wait'>
        <motion.div
          className='relative h-98 md:h-202.5 -z-1'
          key={`bg-${featuredMovie.id}`}
          variants={fadeInOut}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          {!imageLoaded && (
            <Skeleton className='size-full bg-zinc-900 rounded-none' />
          )}
          <img
            src={backdropImage}
            alt={`${featuredMovie.title} image`}
            onLoad={() => setImageLoaded(true)}
            className={`size-full object-center object-cover ${imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          />
          <FadeOverlay
            position='bottom'
            className='h-55.25 lg:h-auto lg:inset-y-0'
          />
        </motion.div>
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        <motion.div
          className='flex flex-col gap-3xl lg:gap-6xl px-4 lg:p-0 -mt-42.25 lg:mt-0 lg:absolute lg:top-74.5 lg:left-8xl xl:left-11xl max-w-170 mx-auto'
          key={`content-${featuredMovie.id}`}
          variants={fadeInOutFromBottom}
          initial='hidden'
          animate='visible'
          exit='exit'
        >
          <div className='flex flex-col gap-sm h-32 lg:h-40'>
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
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HomeHeroSection;
