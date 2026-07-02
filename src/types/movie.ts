// TODO: Define TypeScript interfaces for Movie data
// Hint: Check TMDB API documentation for the movie object structure
// https://developer.themoviedb.org/reference/movie-details

/* =====
   MOVIE
   ===== */
export type SearchMovieItem = {
  // TODO: Add movie properties based on TMDB API response
  // Examples: id, title, overview, poster_path, etc.
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string | null;
  backdrop_path: string | null;
};

export type MoviePaginationResponse = {
  // TODO: Add pagination properties
  // Examples: page, results, total_pages, total_results
  page: number;
  results: SearchMovieItem[];
  total_pages: number;
  total_results: number;
};

// TODO: Add more types as needed (Genre, Video, etc.)

/* =========
   AGE LIMIT
   ========= */

export type ReleaseDateResponse = {
  id: number;
  results: {
    iso_3166_1: string; // pick "US"
    release_dates: {
      certification: string; // age limit here
      type: number;
    }[];
  }[];
};

/* ====
   CAST
   ==== */

export type CreditsResponse = {
  id: number;
  cast: {
    name: string;
    character: string;
    profile_path: string;
  }[];
};

/* ===========
   MOVIE VIDEO
   =========== */
export type VideoResponse = {
  id: number;
  results: {
    site: string;
    key: string;
    type: string;
    official: boolean;
  }[];
};

/* ============
   MOVIE DETAIL
   ============ */
export type MovieDetailResponse = SearchMovieItem & {
  genres: { id: number; name: string }[];
};

export type MovieFullDetails = {
  detail: MovieDetailResponse;
  genre: string | 'Unknown';
  ageLimit: string | 'N/A';
  cast: CreditsResponse['cast'];
  videoKey: string | undefined;
};
