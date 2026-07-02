import { Star } from 'lucide-react';
import WatchTrailerButton from '../ui/WatchTrailerButton';
import FavoriteButton from '../ui/FavoriteButton';
import type { SearchMovieItem } from '@/types/movie';
import { useNavigate } from 'react-router-dom';

type MovieListCardProps = {
  posterUrl: string;
  data: SearchMovieItem;
};

const MovieListCard = ({ posterUrl, data }: MovieListCardProps) => {
  const navigate = useNavigate();
  function handleClick(movieId: number) {
    navigate(`/movieDetail/${movieId}`);
  }
  return (
    <div className='grid grid-cols-[auto_1fr_auto] gap-x-xl gap-y-3xl lg:gap-x-3xl pb-4xl lg:pb-6xl hover:scale-102 transition-transform duration-300 '>
      {/* grid 1 */}
      <div
        className='max-w-26 rounded-md lg:max-w-45.5 lg:rounded-xl overflow-hidden lg:row-span-2 lg:order-1 cursor-pointer'
        onClick={() => handleClick(data.id)}
      >
        <img src={posterUrl} alt={`${data.title} image`} />
      </div>

      {/* grid 2 */}
      <div className='col-span-2 flex flex-col gap-xs lg:gap-lg lg:col-span-1 lg:max-w-193 lg:order-2'>
        <p
          className='font-bold text-md lg:text-display-xl hover:underline cursor-pointer'
          onClick={() => handleClick(data.id)}
        >
          {data.title}
        </p>
        <div className='flex gap-xs items-center'>
          <Star className='fill-[#E4A802] text-[#E4A802]' />
          <p>{data.vote_average.toFixed(1)}/10</p>
        </div>
        <p className='text-sm text-neutral-400 lg:text-md line-clamp-2'>
          {data.overview}
        </p>
      </div>

      {/* grid 3 */}
      <div className='col-span-2 lg:col-span-1 lg:max-w-50 lg:order-4'>
        <WatchTrailerButton movieId={data.id} />
      </div>

      {/* grid 4 */}
      <div className='col-span-1 lg:order-3'>
        <FavoriteButton data={data} />
      </div>
    </div>
  );
};

export default MovieListCard;
