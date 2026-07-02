import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { movieService, type TimeWindow } from '@/services/movieService';
import { QUERY_KEYS } from '@/lib/constants';

// TODO: Create custom hooks using React Query
// Reference: https://tanstack.com/query/latest/docs/framework/react/overview

/** ====
 * 1
 =======*/
export const useTrendingMovies = (timeWindow: TimeWindow = 'week') => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.trending(timeWindow),
    queryFn: () => {
      return movieService.getTrendingMovies(timeWindow);
    },
  });
};

/** ====
 * 2
 =======*/
// Example: Hook to fetch popular movies
export const usePopularMovies = (page: number = 1) => {
  // TODO: Implement useQuery hook
  // Hint: Use movieService.getPopularMovies as queryFn
  return useQuery({
    queryKey: QUERY_KEYS.movies.popular(page),
    queryFn: () => {
      // TODO: Call your movie service function
      return movieService.getPopularMovies(page);
    },
  });
};

/** ====
 * 3
 =======*/
export const useNowPlayingMovies = () => {
  return useInfiniteQuery({
    queryKey: QUERY_KEYS.movies.nowPlaying(),
    queryFn: ({ pageParam }) => {
      return movieService.getNowPlayingMovies(pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page >= lastPage.total_pages) return undefined;

      return lastPage.page + 1;
    },
  });
};

/** ====
 * 4
 =======*/
export const useSearchMovie = (keyword: string, page: number) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.search(keyword, page),
    queryFn: () => {
      return movieService.searchMovies(keyword, page);
    },
    enabled: keyword.trim().length > 0,
  });
};

/** ====
 * 5
 =======*/
export const useMovieFullDetails = (
  movieId?: number,
  options?: { enabled?: boolean }
) => {
  return useQuery({
    queryKey: QUERY_KEYS.movies.details(movieId!),
    queryFn: () => {
      return movieService.getMovieFullDetails(movieId!);
    },
    enabled: !!movieId && (options?.enabled ?? true),
  });
};

// TODO: Add more hooks for different endpoints
// Examples: useMovieDetails, useSearchMovies, useNowPlayingMovies
