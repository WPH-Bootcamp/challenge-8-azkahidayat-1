import { HeartIcon, Trash2 } from 'lucide-react';
import { Button } from '../button';
import type { ComponentProps } from 'react';
import { cn } from '@/lib/utils';
import { useMovieStore } from '@/store/useMovieStore';
import type { SearchMovieItem } from '@/types/movie';
import { toast } from 'sonner';

type FavoriteButtonProps = ComponentProps<typeof Button> & {
  data: SearchMovieItem;
  className?: string;
};

const FavoriteButton = ({ data, className, ...props }: FavoriteButtonProps) => {
  const favorite = useMovieStore((state) => state.favorite);
  const addFavorite = useMovieStore((state) => state.addFavorite);
  const removeFavorite = useMovieStore((state) => state.removeFavorite);

  const isFavorite = favorite.some((movie) => movie.id === data.id);

  function handleClick(data: SearchMovieItem) {
    if (isFavorite) {
      removeFavorite(data.id);
      toast.success(`${data.title} Deleted from Favorites`, {
        position: 'top-center',
        icon: <Trash2 className='size-5' />,
        duration: 2000,
        className: '!w-auto !flex !justify-center !items-center',
      });
    } else {
      addFavorite(data);
      toast.success(`${data.title} Added to Favorites`, {
        position: 'top-center',
        duration: 2000,
        className: '!w-auto !flex !justify-center !items-center',
      });
    }
  }

  return (
    <>
      <Button
        onClick={() => handleClick(data)}
        className={cn(
          'size-11 lg:size-13 rounded-full border bg-neutral-950/60 flex justify-center items-center shrink-0 cursor-pointer ',
          className
        )}
        {...props}
      >
        <HeartIcon
          className={`size-6 text-neutral-400 ${isFavorite ? 'text-primary-300 fill-primary-300' : ''}`}
        />
      </Button>
    </>
  );
};

export default FavoriteButton;
