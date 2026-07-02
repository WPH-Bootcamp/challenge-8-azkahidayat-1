import Logo from '../common/Logo';
import Container from './Container';

const Footer = () => {
  return (
    <footer>
      <Container className='flex gap-md flex-col lg:flex-row lg:justify-between lg:items-center border-t py-3xl px-xl lg:py-5xl'>
        <Logo />
        <p className='text-sm text-neutral-600 lg:text-md'>
          Copyright ©2025 Movie Explorer
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
