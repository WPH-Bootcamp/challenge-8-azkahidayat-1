import MovieList from '@/components/features/MovieList';
import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';
import { useMovieStore } from '@/store/useMovieStore';
import EmptyDataPage from '@/components/common/EmptyData';

const FavoritePage = () => {
  const favorite = useMovieStore((state) => state.favorite);

  return (
    <MainLayout position='sticky'>
      <section id='favorite-list'>
        <Container className='pt-3xl pb-19.25 lg:pt-7xl lg:pb-41.5'>
          <h1 className='font-bold text-display-xs lg:text-display-lg mb-4xl lg:mb-6xl'>
            Favorite
          </h1>
          {favorite.length === 0 ? (
            <EmptyDataPage variant='favorite' />
          ) : (
            <MovieList movies={favorite} />
          )}
        </Container>
      </section>
    </MainLayout>
  );
};

export default FavoritePage;
