import type { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type MainLayoutProps = {
  position?: 'fixed' | 'sticky';
  children: ReactNode;
};

const MainLayout = ({ position = 'fixed', children }: MainLayoutProps) => {
  return (
    <div className='max-w-360 m-auto'>
      <Navbar className={position} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
