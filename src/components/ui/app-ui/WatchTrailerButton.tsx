import { PlayIcon } from 'lucide-react';
import { Button } from '../button';
import { getTrailerYoutubeUrl } from '@/lib/utils';
import { useQueryClient } from '@tanstack/react-query';
import { QUERY_KEYS } from '@/lib/constants';
import { movieService } from '@/services/movieService';
import { useState } from 'react';

type WatchTrailerProps = {
  movieId: number;
};

const WatchTrailerButton = ({ movieId }: WatchTrailerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const QueryClient = useQueryClient();

  async function handleClick() {
    try {
      setIsLoading(true);
      const movie = await QueryClient.fetchQuery({
        queryKey: QUERY_KEYS.movies.details(movieId),
        queryFn: () => movieService.getMovieFullDetails(movieId),
      });
      if (!movie.videoKey) return;

      window.open(getTrailerYoutubeUrl(movie.videoKey), '_blank');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Button onClick={handleClick}>
      {isLoading ? 'Loading...' : 'Watch Trailer'}
      <PlayIcon />
    </Button>
  );
};

export default WatchTrailerButton;
