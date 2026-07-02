import api from '@/lib/axios';
import type {
  CreditsResponse,
  MovieDetailResponse,
  MovieFullDetails,
  MoviePaginationResponse,
  ReleaseDateResponse,
  VideoResponse,
} from '@/types/movie';

// TODO: Create service functions to fetch data from TMDB API
// Reference: https://developer.themoviedb.org/reference/intro/getting-started

export type TimeWindow = 'day' | 'week';

export const movieService = {
  // TODO: Implement getPopularMovies function
  // Endpoint: GET /movie/popular

  // TODO: Implement getNowPlayingMovies function
  // Endpoint: GET /movie/now_playing

  // TODO: Implement getMovieDetails function
  // Endpoint: GET /movie/{movie_id}

  // TODO: Implement searchMovies function
  // Endpoint: GET /search/movie

  // TODO: Add more endpoints as needed

  getTrendingMovies: async (
    timeWindow: TimeWindow
  ): Promise<MoviePaginationResponse> => {
    const { data } = await api.get<MoviePaginationResponse>(
      `/trending/movie/${timeWindow}`
    );
    return data;
  },

  getPopularMovies: async (
    page: number = 1
  ): Promise<MoviePaginationResponse> => {
    const { data } = await api.get<MoviePaginationResponse>(
      `/movie/popular?page=${page}`
    );
    return data;
  },

  getNowPlayingMovies: async (
    page: number = 1
  ): Promise<MoviePaginationResponse> => {
    const { data } = await api.get<MoviePaginationResponse>(
      `/movie/now_playing?page=${page}`
    );
    return data;
  },

  searchMovies: async (
    query: string,
    page: number = 1
  ): Promise<MoviePaginationResponse> => {
    const { data } = await api.get<MoviePaginationResponse>(
      `/search/movie?query=${query}&page=${page}`
    );
    return data;
  },

  getMovieFullDetails: async (movieId: number): Promise<MovieFullDetails> => {
    const [
      detailResponse,
      releaseDatesResponse,
      creditsResponse,
      videoResponse,
    ] = await Promise.all([
      api.get<MovieDetailResponse>(`/movie/${movieId}`),
      api.get<ReleaseDateResponse>(`/movie/${movieId}/release_dates`),
      api.get<CreditsResponse>(`/movie/${movieId}/credits`),
      api.get<VideoResponse>(`/movie/${movieId}/videos`),
    ]);

    // return detail, genre, ageLimit, cast, videoKey
    // 1. detail
    const movieDetailData = detailResponse.data;

    // 2. genre
    const firstGenreName = movieDetailData.genres[0].name || 'Unknown';

    // 3. ageLimit
    const releaseDateData = releaseDatesResponse.data;
    const usData = releaseDateData.results.find(
      (country) => country.iso_3166_1 === 'US'
    );
    const releaseWithCert = usData?.release_dates.find(
      (release) => release.certification !== ''
    );

    const ageLimit = releaseWithCert?.certification || 'N/A';

    // 4. cast
    const castData = creditsResponse.data;
    const cast = castData['cast'];

    // 5. videoKey
    const videoData = videoResponse.data;
    const trailerVideoData =
      videoData.results.filter(
        (v) =>
          v.official === true && v.site === 'YouTube' && v.type === 'Trailer'
      ) || [];

    const latestTrailerKey = trailerVideoData.at(-1)?.key || undefined;

    return {
      detail: movieDetailData,
      genre: firstGenreName,
      ageLimit: ageLimit,
      cast: cast,
      videoKey: latestTrailerKey,
    };
  },

  // getMovieDetails: async (movieId: string): Promise<MovieDetails> => {
  //   const { data } = await api.get<MovieDetails>(`/movie/${movieId}`);
  //   return data;
  // },

  // getAgeLimit: async (movieId: string): Promise<string | undefined> => {
  //   const { data } = await api.get<ReleaseDateResponse>(
  //     `/movie/${movieId}/release_dates`
  //   );

  //   const usData = data.results.find((country) => country.iso_3166_1 === 'US');
  //   const releaseWithCert = usData?.release_dates.find(
  //     (release) => release.certification !== ''
  //   );

  //   const ageLimit = releaseWithCert?.certification;
  //   return ageLimit || undefined;
  // },

  // getCasts: async (movieId: string): Promise<CreditsResponse['cast']> => {
  //   const { data } = await api.get<CreditsResponse>(
  //     `/movie/${movieId}/credits`
  //   );
  //   return data.cast;
  // },
};
