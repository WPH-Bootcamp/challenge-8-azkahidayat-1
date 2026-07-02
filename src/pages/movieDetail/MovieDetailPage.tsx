import MainLayout from '@/components/layouts/MainLayout';
import HeroSection from './sections/HeroSection';
import OverviewSection from './sections/OverviewSection';
import CastSection from './sections/CastSection';

const MovieDetailPage = () => {
  return (
    <MainLayout>
      <main>
        <HeroSection />
        <OverviewSection />
        <CastSection />
      </main>
    </MainLayout>
  );
};

export default MovieDetailPage;
