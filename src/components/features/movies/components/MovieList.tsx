import { IMAGE_SIZES } from '@/lib/constants';
import MovieListCard from './MovieListCard';
import type { SearchMovieItem } from '@/types/movie';
import { getImageUrl } from '@/lib/utils/getImageUrl';

type MovieListProps = {
  movies: SearchMovieItem[];
  reverse?: boolean;
};

const MovieList = ({ movies, reverse = false }: MovieListProps) => {
  const size = IMAGE_SIZES.poster.medium;

  const displayMovie = reverse ? movies.toReversed() : movies;

  return (
    <div className='flex flex-col gap-4xl lg:gap-6xl min-h-152 divide-y'>
      {displayMovie.map((movie) => {
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
