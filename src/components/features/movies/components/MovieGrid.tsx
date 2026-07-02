import MovieCard from './MovieCard';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import type { SearchMovieItem } from '@/types/movie';

type MovieGridProps = {
  movies: SearchMovieItem[];
};

const MovieGrid = ({ movies }: MovieGridProps) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-xl gap-y-4xl lg:gap-x-2xl lg:gap-y-5xl'>
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
    </div>
  );
};

export default MovieGrid;
