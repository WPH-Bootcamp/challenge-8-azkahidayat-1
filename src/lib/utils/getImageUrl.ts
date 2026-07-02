// TODO: Add utility functions for image URLs
// Hint: TMDB returns relative paths, you need to construct full image URLs
// Reference: https://developer.themoviedb.org/docs/image-basics

export function getImageUrl(path: string, size: string = 'original'): string {
  // TODO: Implement image URL construction
  // Use VITE_TMDB_IMAGE_BASE_URL from environment variables
  const baseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
  return `${baseUrl}/${size}/${path}`;
}
