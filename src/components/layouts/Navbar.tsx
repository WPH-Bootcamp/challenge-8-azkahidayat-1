import { useEffect, useState } from 'react';
import Logo from '../common/Logo';
import OffCanvasMenu from '../features/navigation/OffCanvasMenu';
import OffCanvasSearch from '../features/search/OffCanvasSearch';
import SearchBar from '../features/search/SearchBar';
import Container from './Container';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils/cn';

type NavBarProps = {
  className: string;
};

const Navbar = ({ className }: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isScrolled]);

  return (
    <nav
      className={cn(
        'fixed top-0 inset-x-0 w-full z-50',
        isScrolled ? 'backdrop-blur-2xl' : '',
        className
      )}
    >
      <Container className='flex justify-between items-center py-4.5 lg:py-5.5 max-w-360 m-auto'>
        <div className='flex items-center gap-8xl'>
          <Logo />
          <div className='hidden md:flex md:gap-6xl'>
            <NavLink
              to='/'
              className={({ isActive }: { isActive: boolean }) =>
                `text-md hover:underline ${isActive ? 'text-primary-300 font-bold' : 'text-neutral-25 font-regular'}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to='/favorite'
              className={({ isActive }: { isActive: boolean }) =>
                `text-md hover:underline ${isActive ? 'text-primary-300 font-bold' : 'text-neutral-25 font-regular'}`
              }
            >
              Favorite
            </NavLink>
          </div>
        </div>
        <div className='flex gap-3xl'>
          <OffCanvasSearch className='md:hidden' />
          <OffCanvasMenu className='md:hidden' />
          <SearchBar className='hidden md:block' />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
