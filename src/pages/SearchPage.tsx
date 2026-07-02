import MovieList from '@/components/features/MovieList';
import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';
import { useSearchMovie } from '@/hooks/useMovies';
import { useSearchParams } from 'react-router-dom';

const SearchPage = () => {
  const [searchQuery] = useSearchParams();

  const query = searchQuery.get('query') ?? '';
  const { data, isLoading, error } = useSearchMovie(query, 1);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const movies = data?.results;
  if (!movies) return null;

  return (
    <MainLayout position='sticky'>
      <section id='search-result-list'>
        <Container className='pt-3xl pb-19.25 lg:pt-7xl lg:pb-41.5'>
          <MovieList movies={movies} />
        </Container>
      </section>
    </MainLayout>
  );
};

export default SearchPage;
