import MovieGrid from '@/components/features/movies/components/MovieGrid';
import Container from '@/components/layouts/Container';
import FadeOverlay from '@/components/common/FadeOverlay';
import { Button } from '@/components/ui/button';
import { useNowPlayingMovies } from '@/hooks/useMovies';
import NewReleaseSkeleton from './NewReleaseSkeleton';

const NewReleaseSection = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useNowPlayingMovies();
  if (isLoading) return <NewReleaseSkeleton />;
  if (error) return <p>{error.message}</p>;

  const movies = data?.pages.flatMap((page) => page.results) ?? [];
  if (!movies) return null;
  return (
    <section id='new-release-home-page'>
      <Container className='relative py-5xl flex flex-col gap-3xl lg:gap-5xl'>
        <h2 className='font-bold text-display-xs lg:text-display-lg'>
          New Release
        </h2>
        <MovieGrid movies={movies} />
        <FadeOverlay position='bottom' className='h-100' />
        <div className='absolute bottom-33.25 left-1/2 -translate-x-1/2 w-full max-w-50 lg:max-w-57.5'>
          <Button
            variant={'outline'}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default NewReleaseSection;
