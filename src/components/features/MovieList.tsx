import { IMAGE_SIZES } from '@/lib/constants';
import MovieListCard from './MovieListCard';
import { getImageUrl } from '@/lib/utils';
import type { SearchMovieItem } from '@/types/movie';

type MovieListProps = {
  movies: SearchMovieItem[];
};

const MovieList = ({ movies }: MovieListProps) => {
  const size = IMAGE_SIZES.poster.medium;
  return (
    <div className='flex flex-col gap-4xl lg:gap-6xl min-h-152 divide-y'>
      {movies.map((movie) => {
        const posterPath = movie.poster_path;
        if (!posterPath) return null;
        const posterUrl = getImageUrl(posterPath, size);
        return (
          <MovieListCard key={movie.id} posterUrl={posterUrl} data={movie} />
        );
      })}
    </div>
  );
};

export default MovieList;
