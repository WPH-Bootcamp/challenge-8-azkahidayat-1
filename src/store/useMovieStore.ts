import type { SearchMovieItem } from '@/types/movie';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
// import { Movie } from '@/types/movie';

// TODO: Define your store state interface
type MovieStore = {
  // TODO: Add state properties
  // Examples: favorites, watchlist, selectedMovie, etc.
  // TODO: Add action methods
  // Examples: addToFavorites, removeFromFavorites, etc.
  favorite: SearchMovieItem[];
  totalItems: number;
  addFavorite: (movie: SearchMovieItem) => void;
  removeFavorite: (movieId: number) => void;
};

// TODO: Create Zustand store
// Reference: https://zustand.docs.pmnd.rs/getting-started/introduction

// export const useMovieStore = create<MovieStore>((set) => ({
//   // TODO: Initialize state and implement actions
// }));

export const useMovieStore = create<MovieStore>()(
  persist(
    (set) => ({
      // TODO: Initialize state and implement actions
      favorite: [],
      totalItems: 0,
      addFavorite: (movie) =>
        set((state) => ({
          favorite: [...state.favorite, movie],
          totalItems: state.favorite.length + 1,
        })),

      removeFavorite: (movieId) =>
        set((state) => ({
          favorite: state.favorite.filter((m) => m.id !== movieId),
          totalItems: state.favorite.length - 1,
        })),
    }),
    { name: 'movie-favorite-storage' }
  )
);

// addFavorite: (movie) =>
//   set((state) => ({ favorite: [...state.favorite, movie] })),

// addFavorite: (movie) => {
//         const currentFavorite = get().favorite;
//         const updatedFavorite = [...currentFavorite, movie];
//         set({
//           favorite: updatedFavorite,
//           totalItems: updatedFavorite.length,
//         });
//       },
