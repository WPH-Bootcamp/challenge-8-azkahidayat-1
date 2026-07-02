import MovieListCardSkeleton from '@/components/features/movies/components/MovieListCardSkeleton';
import Container from '@/components/layouts/Container';
import MainLayout from '@/components/layouts/MainLayout';

const SearchPageSkeleton = () => {
  return (
    <MainLayout position='sticky'>
      <section id='search-result-list'>
        <Container className='pt-3xl pb-19.25 lg:pt-7xl lg:pb-41.5'>
          <div className='flex flex-col gap-4xl lg:gap-6xl min-h-152 divide-y'>
            {Array.from({ length: 5 }).map((_, index) => (
              <MovieListCardSkeleton key={index} />
            ))}
          </div>
        </Container>
      </section>
    </MainLayout>
  );
};

export default SearchPageSkeleton;
