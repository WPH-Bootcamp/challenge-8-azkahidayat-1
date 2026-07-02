import type { SearchMovieItem } from '@/types/movie';
import { StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type MovieCardProps = {
  movie: SearchMovieItem;
  imageUrl: string;
  index?: number;
};

const MovieCard = ({ movie, imageUrl, index }: MovieCardProps) => {
  const navigate = useNavigate();

  function handleDetailClick(movieId: number) {
    navigate(`/movieDetail/${movieId}`);
  }
  return (
    <div
      className='py-1.5 cursor-pointer transition-transform duration-300 hover:scale-102'
      onClick={() => handleDetailClick(movie.id)}
    >
      <div className='relative rounded-md overflow-hidden'>
        <img src={imageUrl} alt={`${movie.title} image`} />
        {index && (
          <span className='absolute top-md left-md size-4xl lg:size-6xl lg:left-lg lg:top-lg rounded-full bg-neutral-950/60 border flex justify-center items-center font-semibold text-sm lg:text-lg'>
            {index + 1}
          </span>
        )}
      </div>
      <p className='font-semibold text-md lg:tex-lg'>{movie.title}</p>
      <div className='flex gap-xs items-center'>
        <StarIcon fill='#E4A802' stroke='#E4A802' className='size-4' />
        <p className='text-neutral-400 text-sm lg:text-md'>
          {movie.vote_average.toFixed(1)}/10
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
