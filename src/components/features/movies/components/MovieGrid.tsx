import MovieCard from './MovieCard';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import { staggerContainer } from '@/motions';
import type { SearchMovieItem } from '@/types/movie';
import { motion } from 'framer-motion';

type MovieGridProps = {
  movies: SearchMovieItem[];
};

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <motion.div
      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-xl gap-y-4xl lg:gap-x-2xl lg:gap-y-5xl'
      variants={staggerContainer}
      initial='hidden'
      animate='visible'
    >
      {movies.map((movie, index) => {
        const size = IMAGE_SIZES.poster.medium;
        const path = movie.poster_path;
        if (!path) return null;
        const imageUrl = getImageUrl(path, size);
        return (
          <MovieCard
            key={`${movie.id}-${index}`}
            movie={movie}
            imageUrl={imageUrl}
          />
        );
      })}
    </motion.div>
  );
};

export default MovieGrid;
