import MainLayout from '@/components/layouts/MainLayout';
import HomeHeroSection from './sections/HomeHeroSection';
import NewReleaseSection from './sections/NewReleaseSection';
import TrendingNowSection from './sections/TrendingNowSection';

const HomePage = () => {
  return (
    <MainLayout>
      <div>
        <HomeHeroSection />
        <TrendingNowSection />
        <NewReleaseSection />
      </div>
    </MainLayout>
  );
};

export default HomePage;
