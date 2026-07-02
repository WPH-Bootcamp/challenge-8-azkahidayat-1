import EmptyDataPage from '@/components/common/EmptyData';
import MovieList from '@/components/features/MovieList';
import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';
import { useSearchMovie } from '@/hooks/useMovies';
import { useSearchParams } from 'react-router-dom';
import { Toaster } from 'sonner';
import SearchPageSkeleton from './SearchPageSkeleton';

const SearchPage = () => {
  const [searchQuery] = useSearchParams();

  const query = searchQuery.get('query') ?? '';
  const { data, isLoading, error } = useSearchMovie(query, 1);

  if (isLoading) return <SearchPageSkeleton />;
  if (error) return <p>{error.message}</p>;

  const movies = data?.results;
  if (!movies) return null;

  return (
    <MainLayout position='sticky'>
      <section id='search-result-list'>
        <Container className='pt-3xl pb-19.25 lg:pt-7xl lg:pb-41.5'>
          {movies.length === 0 ? (
            <EmptyDataPage variant='search' />
          ) : (
            <MovieList movies={movies} />
          )}
        </Container>
        <Toaster
          toastOptions={{
            classNames: {
              toast:
                '!bg-black/25 !backdrop-blur-2xl !border-0 !text-white !rounded-2xl ',
            },
          }}
          offset={{ top: '114px' }}
          mobileOffset={{ top: '80px' }}
        />
      </section>
    </MainLayout>
  );
};

export default SearchPage;
