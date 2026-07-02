import { motion, stagger } from 'framer-motion';

const MotionTest = () => {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: stagger(0.5),
      },
    },
  };

  return (
    <motion.div
      variants={containerVariant}
      initial='hidden'
      animate='visible'
      className='flex'
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <motion.div variants={itemVariants} key={index}>
          {index + 1}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default MotionTest;
