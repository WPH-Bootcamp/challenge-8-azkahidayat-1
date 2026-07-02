import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import emptyClapperBoard from '@/assets/clapper-board-data-empty-image.svg';
import notFoundClapperBoard from '@/assets/clapper-board-not-found-image.svg';

type EmptyDataProps = {
  variant: 'favorite' | 'search';
};

const EmptyDataPage = ({ variant }: EmptyDataProps) => {
  const navigate = useNavigate();
  function handleExploreMovieClick() {
    navigate('/');
  }

  const variantType = {
    favorite: {
      image: emptyClapperBoard,
      title: 'Data Empty',
      description: "You don't have a favorite movie yet",
    },
    search: {
      image: notFoundClapperBoard,
      title: 'Data Not Found',
      description: 'Try other keywords',
    },
  };

  const variantData = variantType[variant];
  return (
    <div className='flex items-center justify-center h-152'>
      <div className='w-full flex flex-col items-center'>
        <div className='flex mb-lg'>
          <img
            src={variantData.image}
            alt='clapperboard image'
            className={`${variantData.title} image`}
          />
        </div>
        <div className='flex flex-col gap-md mb-3xl'>
          <p className='font-semibold text-md text-center'>
            {variantData.title}
          </p>
          <p className='text-sm text-neutral-400'>{variantData.description}</p>
        </div>
        <div className='w-full max-w-50 lg:max-w-75'>
          {variant === 'favorite' && (
            <Button onClick={handleExploreMovieClick}>Explore Movie</Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyDataPage;
