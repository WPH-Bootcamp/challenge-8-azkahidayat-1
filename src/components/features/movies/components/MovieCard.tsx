import type { SearchMovieItem } from '@/types/movie';
import { StarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';

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

  const fadeInFromTop: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      className='py-1.5 cursor-pointer'
      onClick={() => handleDetailClick(movie.id)}
      variants={fadeInFromTop}
      whileHover={{ scale: 1.02 }}
    >
      <div className='relative rounded-md overflow-hidden'>
        <img src={imageUrl} alt={`${movie.title} image`} />
        {index !== undefined && (
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
    </motion.div>
  );
};

export default MovieCard;
