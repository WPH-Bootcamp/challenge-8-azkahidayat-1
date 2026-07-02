import HomePage from '@/pages/home/HomePage';
import { Route, Routes } from 'react-router-dom';
import '@/styles/index.css';
import FavoritePage from '@/pages/FavoritePage';
import MovieDetailPage from '@/pages/movieDetail/MovieDetailPage';
import SearchPage from '@/pages/SearchPage';

function App() {
  // TODO: Setup routing dengan React Router
  // TODO: Implement layout structure
  // TODO: Add navigation between pages

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/detail' element={<MovieDetailPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/search' element={<SearchPage />} />
    </Routes>
  );
}

export default App;
