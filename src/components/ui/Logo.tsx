import movieLogo from '@/assets/movie-logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <div className='flex gap-xs'>
        <div className='size-7 md:size-10 flex items-center'>
          <img src={movieLogo} alt='Movie Logo' className='w-full' />
        </div>
        <span className='font-semibold text-[19.91px] md:text-[28.44px]'>
          Movie
        </span>
      </div>
    </Link>
  );
};

export default Logo;
