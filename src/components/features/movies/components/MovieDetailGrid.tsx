import type { MovieFullDetails } from '@/types/movie';
import { Calendar1Icon, ImageOffIcon, type LucideIcon } from 'lucide-react';
import FavoriteButton from '../ui/FavoriteButton';
import StatCard from '@/components/common/StatCard';
import WatchTrailerButton from '../ui/WatchTrailerButton';
import { motion } from 'framer-motion';
import { fadeInFromTop, staggerContainer } from '@/motions';

type MovieDetailGridProps = {
  data: MovieFullDetails;
  posterImageUrl: string | null;
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
    <motion.div variants={staggerContainer} initial='hidden' animate='visible'>
      <div className='grid grid-cols-[auto_1fr] gap-x-xl gap-y-3xl -mt-30.75 lg:-mt-99.5'>
        <motion.div
          className='max-w-29 rounded-xl overflow-hidden lg:max-w-65 lg:row-span-3'
          variants={fadeInFromTop}
        >
          {posterImageUrl ? (
            <img src={posterImageUrl} alt={`${data.detail.title} poster`} />
          ) : (
            <div className='flex flex-col gap-4 justify-center items-center min-w-29 lg:min-w-65 border h-full min-h-42.75 rounded-xl'>
              <ImageOffIcon />
              No Image
            </div>
          )}
        </motion.div>

        <motion.div
          className='flex flex-col gap-xs lg:gap-4xl'
          variants={fadeInFromTop}
        >
          <p className='font-bold text-xl lg:text-display-xl'>
            {data.detail.title}
          </p>
          <p className='flex text-sm gap-xs items-center lg:text-md'>
            <Calendar1Icon />
            {formattedDate}
          </p>
        </motion.div>

        <motion.div
          className='flex gap-xl col-span-2 items-center lg:col-span-1 lg:max-w-[288px]'
          variants={fadeInFromTop}
        >
          {data.videoKey && <WatchTrailerButton movieId={data.detail.id} />}
          <FavoriteButton data={data.detail} />
        </motion.div>

        <motion.div
          className='col-span-2 flex gap-lg lg:gap-2xl lg:col-span-1'
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.title}
              className='w-full'
              variants={fadeInFromTop}
            >
              <StatCard stat={stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default MovieDetailGrid;
