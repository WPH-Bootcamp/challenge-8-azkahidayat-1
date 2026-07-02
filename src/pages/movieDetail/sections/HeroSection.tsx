import MovieDetailGrid from '@/components/features/movies/components/MovieDetailGrid';
import Container from '@/components/layouts/Container';
import FadeOverlay from '@/components/common/FadeOverlay';
import { statsConfig } from '@/data/MovieStats';
import { IMAGE_SIZES } from '@/lib/constants';
import { getFormattedDate } from '@/lib/utils/getFormattedDate';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import type { MovieFullDetails } from '@/types/movie';
import { motion } from 'framer-motion';
import { fadeIn } from '@/motions';
import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { ImageOffIcon } from 'lucide-react';

type HeroSectionProps = {
  data: MovieFullDetails;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const backdropSize = IMAGE_SIZES.backdrop.medium;
  const posterSize = IMAGE_SIZES.poster.medium;
  const backdropPath = data.detail.backdrop_path;
  const posterPath = data.detail.poster_path;

  const backdropImageUrl =
    backdropPath && getImageUrl(backdropPath, backdropSize);
  const posterImageUrl = posterPath && getImageUrl(posterPath, posterSize);
  const formattedDate = getFormattedDate(data.detail.release_date);

  const statsValue = {
    rating: data.detail.vote_average,
    genre: data.genre,
    ageLimit: data.ageLimit,
  };

  const stats = statsConfig.map((item) => ({
    ...item,
    value: statsValue[item.key],
  }));

  return (
    <section id='hero-detail-page'>
      <motion.div
        className='relative w-full h-98 md:h-202.5 -z-1'
        variants={fadeIn}
        initial='hidden'
        animate='visible'
      >
        {backdropImageUrl && !imageLoaded && (
          <Skeleton className='size-full bg-zinc-900 rounded-none' />
        )}
        {backdropImageUrl ? (
          <img
            src={backdropImageUrl}
            alt={`${data.detail.title} image`}
            onLoad={() => setImageLoaded(true)}
            className={`size-full object-cover object-center ${imageLoaded ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          />
        ) : (
          <div className='flex flex-col gap-4 items-center pt-30 md:pt-100 lg:pt-50'>
            <ImageOffIcon />
            No Image
          </div>
        )}
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </motion.div>
      <Container>
        <MovieDetailGrid
          data={data}
          posterImageUrl={posterImageUrl}
          formattedDate={formattedDate}
          stats={stats}
        />
      </Container>
    </section>
  );
};

export default HeroSection;
