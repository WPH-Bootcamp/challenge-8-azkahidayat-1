import type { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`px-xl lg:px-8xl xl:px-11xl ${className}`}>{children}</div>
  );
};

export default Container;
