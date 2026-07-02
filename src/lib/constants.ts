// Constants untuk aplikasi

import type { TimeWindow } from '@/services/movieService';

// TODO: Define constants yang digunakan di seluruh aplikasi

export const IMAGE_SIZES = {
  poster: {
    small: 'w185',
    medium: 'w342',
    large: 'w500',
    original: 'original',
  },
  backdrop: {
    small: 'w300',
    medium: 'w780',
    large: 'w1280',
    original: 'original',
  },
  profile: {
    small: 'w45',
    medium: 'w185',
    large: 'h632',
    original: 'original',
  },
} as const;

// TODO: Add more constants as needed
// Examples: API endpoints, query keys, storage keys, etc.

export const STORAGE_KEYS = {
  favorites: 'movie-favorites',
  watchlist: 'movie-watchlist',
} as const;

export const QUERY_KEYS = {
  movies: {
    trending: (timeWindow: TimeWindow) => ['movies', 'trendingNow', timeWindow],
    popular: (page: number) => ['movies', 'popular', page] as const,
    nowPlaying: () => ['movies', 'now-playing'] as const,
    search: (query: string, page: number) =>
      ['movies', 'search', query, page] as const,
    details: (movieId: number) => ['movie', 'movieDetails', movieId] as const,
  },
} as const;
