import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// TODO: Add utility functions for image URLs
// Hint: TMDB returns relative paths, you need to construct full image URLs
// Reference: https://developer.themoviedb.org/docs/image-basics

export function getImageUrl(path: string, size: string = 'original'): string {
  // TODO: Implement image URL construction
  // Use VITE_TMDB_IMAGE_BASE_URL from environment variables
  const baseUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;
  return `${baseUrl}/${size}/${path}`;
}

// TODO: Add more utility functions as needed
// Examples: formatDate, formatRuntime, etc.

export function getTrailerYoutubeUrl(key: string): string {
  const baseYoutubeUrl = import.meta.env.VITE_YOUTUBE_BASE_URL;
  return `${baseYoutubeUrl}${key}`;
}
