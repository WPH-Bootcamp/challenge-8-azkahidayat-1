export function getTrailerYoutubeUrl(videoKey: string): string {
  const baseYoutubeUrl = import.meta.env.VITE_YOUTUBE_BASE_URL;
  return `${baseYoutubeUrl}${videoKey}`;
}
