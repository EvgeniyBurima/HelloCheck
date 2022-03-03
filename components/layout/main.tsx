import { ReactNode } from 'react';
import Footer from '../footer';

interface Props {
  children: ReactNode,
  className?: string
}

function MainLayout({ children, className = '' }: Props) {
  return (
    <>
      <div className={`${className} w-full h-full px-4 md:px-12 py-6 md:py-6 bg-white flex flex-col items-center text-sm md:mt-[1px]`}>
        {children}
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;
