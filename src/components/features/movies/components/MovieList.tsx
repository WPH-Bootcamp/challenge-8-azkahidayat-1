import { IMAGE_SIZES } from '@/lib/constants';
import MovieListCard from './MovieListCard';
import type { SearchMovieItem } from '@/types/movie';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import { motion } from 'framer-motion';
import { staggerContainer } from '@/motions';

type MovieListProps = {
  movies: SearchMovieItem[];
  reverse?: boolean;
};

const MovieList = ({ movies, reverse = false }: MovieListProps) => {
  const size = IMAGE_SIZES.poster.medium;

  const displayMovie = reverse ? movies.toReversed() : movies;

  return (
    <motion.div
      className='flex flex-col gap-4xl lg:gap-6xl min-h-152 divide-y'
      variants={staggerContainer}
      initial='hidden'
      animate='visible'
    >
      {displayMovie.map((movie) => {
        const posterPath = movie.poster_path;
        if (!posterPath) return null;
        const posterUrl = getImageUrl(posterPath, size);
        return (
          <MovieListCard key={movie.id} posterUrl={posterUrl} data={movie} />
        );
      })}
    </motion.div>
  );
};

export default MovieList;
