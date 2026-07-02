import Container from '@/components/layouts/Container';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils';

type CastProps = {
  cast: {
    name: string;
    character: string;
    profile_path: string;
  }[];
};

const CastSection = ({ cast }: CastProps) => {
  return (
    <section id='cast-detail-page' className='mb-5xl lg:mb-37.25'>
      <Container className='flex flex-col gap-md lg:gap-3xl'>
        <h2 className='font-bold text-xl lg:text-display-md'>Cast & Crew</h2>
        <div className='grid grid-cols-1 gap-xl lg:grid-cols-3 lg:gap-5xl'>
          {cast.slice(0, 5).map((item) => {
            const size = IMAGE_SIZES.profile.medium;
            const path = item.profile_path;
            const imageUrl = getImageUrl(path, size);
            return (
              <div key={item.name} className='flex gap-lg items-center'>
                <div className='max-w-13.75 lg:max-w-17.25 rounded-md lg:rounded-lg overflow-hidden'>
                  <img src={imageUrl} alt={`${item.name} image`} />
                </div>
                <div>
                  <p className='font-semibold text-sm lg:text-md'>
                    {item.name}
                  </p>
                  <p className='text-neutral-400 text-sm lg:text-md'>
                    {item.character}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CastSection;
