import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import brokenClapperboard from '@/assets/broken-clapperboard.png';

const NotFoundPage = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen px-xl lg:px-8xl xl:px-11xl gap-8'>
      <img
        src={brokenClapperboard}
        alt='broken'
        className='brightness-70 w-95'
      />
      <h1 className='font-bold text-2xl'>404 - Page Not Found</h1>
      <p className='text-center'>
        Sorry, the page you're looking for doesn't exist, may have been moved,
        or the URL might be incorrect.
      </p>
      <Link to='/' className='w-full max-w-70'>
        <Button>Back to home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
