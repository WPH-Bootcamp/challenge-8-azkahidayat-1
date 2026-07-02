import Container from '@/components/layouts/Container';
import { IMAGE_SIZES } from '@/lib/constants';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import { fadeInFromTop, staggerContainer } from '@/motions';
import { motion } from 'framer-motion';
import { ImageOffIcon } from 'lucide-react';

type CastProps = {
  cast: {
    name: string;
    character: string;
    profile_path: string | null;
  }[];
};

const CastSection = ({ cast }: CastProps) => {
  return (
    <section id='cast-detail-page' className='mb-5xl lg:mb-37.25'>
      <Container className='flex flex-col gap-md lg:gap-3xl'>
        <motion.h2
          className='font-bold text-xl lg:text-display-md'
          variants={fadeInFromTop}
          initial='hidden'
          animate='visible'
        >
          Cast & Crew
        </motion.h2>
        <motion.div
          className='grid grid-cols-1 gap-xl lg:grid-cols-3 lg:gap-5xl'
          variants={staggerContainer}
          initial='hidden'
          animate='visible'
        >
          {cast.slice(0, 5).map((item) => {
            const size = IMAGE_SIZES.profile.medium;
            const path = item.profile_path;
            const imageUrl = path && getImageUrl(path, size);
            return (
              <motion.div
                key={item.name}
                className='flex gap-lg items-center'
                variants={fadeInFromTop}
              >
                <div className='max-w-13.75 lg:max-w-17.25 rounded-md lg:rounded-lg overflow-hidden'>
                  {imageUrl ? (
                    <img src={imageUrl} alt={`${item.name} image`} />
                  ) : (
                    <div className='flex flex-col gap-4 justify-center items-center min-w-13.75 lg:min-w-17.25 border min-h-21 lg:min-h-26 rounded-xl text-center'>
                      <ImageOffIcon className='size-5' />
                    </div>
                  )}
                </div>
                <div>
                  <p className='font-semibold text-sm lg:text-md'>
                    {item.name}
                  </p>
                  <p className='text-neutral-400 text-sm lg:text-md'>
                    {item.character}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

export default CastSection;
