import type { MovieFullDetails } from '@/types/movie';
import { Calendar1Icon, type LucideIcon } from 'lucide-react';
import FavoriteButton from '../ui/FavoriteButton';
import StatCard from '@/components/common/StatCard';
import WatchTrailerButton from '../ui/WatchTrailerButton';

type MovieDetailGridProps = {
  data: MovieFullDetails;
  posterImageUrl: string;
  formattedDate: string;
  stats: {
    value: string | number;
    key: 'rating' | 'genre' | 'ageLimit';
    title: string;
    icon: LucideIcon;
    iconClassName?: string;
  }[];
};

const MovieDetailGrid = ({
  data,
  posterImageUrl,
  formattedDate,
  stats,
}: MovieDetailGridProps) => {
  return (
    <div className='grid grid-cols-[auto_1fr] gap-x-xl gap-y-3xl -mt-30.75 lg:-mt-99.5'>
      <div className='max-w-29 rounded-xl overflow-hidden lg:max-w-65 lg:row-span-3'>
        <img src={posterImageUrl} alt={`${data.detail.title} poster`} />
      </div>

      <div className='flex flex-col gap-xs lg:gap-4xl'>
        <p className='font-bold text-xl lg:text-display-xl'>
          {data.detail.title}
        </p>
        <p className='flex text-sm gap-xs items-center lg:text-md'>
          <Calendar1Icon />
          {formattedDate}
        </p>
      </div>

      <div className='flex gap-xl col-span-2 items-center lg:col-span-1 lg:max-w-[288px]'>
        {data.videoKey && <WatchTrailerButton movieId={data.detail.id} />}
        <FavoriteButton data={data.detail} />
      </div>

      <div className='col-span-2 flex gap-lg lg:gap-2xl lg:col-span-1'>
        {stats.map((stat) => (
          <StatCard key={stat.title} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default MovieDetailGrid;
