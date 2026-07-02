import MovieDetailGrid from '@/components/features/movies/components/MovieDetailGrid';
import Container from '@/components/layouts/Container';
import FadeOverlay from '@/components/common/FadeOverlay';
import { statsConfig } from '@/data/MovieStats';
import { IMAGE_SIZES } from '@/lib/constants';
import { getFormattedDate } from '@/lib/utils/getFormattedDate';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import type { MovieFullDetails } from '@/types/movie';

type HeroSectionProps = {
  data: MovieFullDetails;
};

const HeroSection = ({ data }: HeroSectionProps) => {
  const backdropSize = IMAGE_SIZES.backdrop.medium;
  const posterSize = IMAGE_SIZES.poster.medium;
  const backdropPath = data.detail.backdrop_path;
  const posterPath = data.detail.poster_path;
  if (!backdropPath) return null;
  if (!posterPath) return null;
  const backdropImageUrl = getImageUrl(backdropPath, backdropSize);
  const posterImageUrl = getImageUrl(posterPath, posterSize);
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
      <div className='relative w-full h-98 lg:h-202.5 -z-1'>
        <img
          src={backdropImageUrl}
          alt={`${data.detail.title} image`}
          className='size-full object-cover object-center'
        />
        <FadeOverlay
          position='bottom'
          className='h-55.25 lg:h-auto lg:inset-y-0'
        />
      </div>
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
