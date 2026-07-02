import Container from '@/components/layouts/Container';

type OverviewSectionProps = {
  overview: string;
};

const OverviewSection = ({ overview }: OverviewSectionProps) => {
  return (
    <section id='overview-detail-page'>
      <Container className='flex flex-col gap-md lg:gap-3xl'>
        <h2 className='font-bold text-xl lg:text-display-md'>Overview</h2>
        <p className='text-sm text-neutral-400 lg:text-md'>{overview}</p>
      </Container>
    </section>
  );
};

export default OverviewSection;
