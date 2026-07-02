import type { SearchMovieItem } from '@/types/movie';
import { CarouselContent, CarouselItem } from '../../../ui/carousel';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils/cn';
import MovieCard from './MovieCard';

type TrendingMovieCarouselProps = {
  movies: SearchMovieItem[];
};

const TrendingMovieCarousel = ({ movies }: TrendingMovieCarouselProps) => {
  return (
    <CarouselContent className='px-4 lg:px-0 '>
      {movies.map((movie, index) => {
        const size = IMAGE_SIZES.poster.medium;
        const path = movie.poster_path;
        if (!path) return null;
        const imageUrl = getImageUrl(path, size);
        return (
          <CarouselItem
            key={movie.id}
            className='basis-1/2 lg:basis-auto max-w-54'
          >
            <MovieCard movie={movie} imageUrl={imageUrl} index={index} />
          </CarouselItem>
        );
      })}
    </CarouselContent>
  );
};

export default TrendingMovieCarousel;
