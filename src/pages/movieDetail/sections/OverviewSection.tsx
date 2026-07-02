import Container from '@/components/layouts/Container';
import { fadeInFromTop } from '@/motions';
import { motion } from 'framer-motion';

type OverviewSectionProps = {
  overview: string;
};

const OverviewSection = ({ overview }: OverviewSectionProps) => {
  return (
    <motion.section
      id='overview-detail-page'
      variants={fadeInFromTop}
      initial='hidden'
      animate='visible'
    >
      <Container className='flex flex-col gap-md lg:gap-3xl'>
        <h2 className='font-bold text-xl lg:text-display-md'>Overview</h2>
        <p className='text-sm text-neutral-400 lg:text-md'>{overview}</p>
      </Container>
    </motion.section>
  );
};

export default OverviewSection;
