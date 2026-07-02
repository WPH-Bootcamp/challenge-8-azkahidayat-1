import HomePage from '@/pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import '@/styles/index.css';
import FavoritePage from '@/pages/FavoritePage';
import MovieDetailPage from '@/pages/movieDetail/MovieDetailPage';
import SearchPage from '@/pages/SearchPage';
import MotionTest from '@/test/MotionTest';
import NotFoundPage from '@/pages/NotFoundPage';
import ScrollToTop from '@/components/common/ScrollToTop';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/movieDetail/:id' element={<MovieDetailPage />} />
        <Route path='/favorite' element={<FavoritePage />} />
        <Route path='/searchMovie' element={<SearchPage />} />
        <Route path='/motionTest' element={<MotionTest />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
