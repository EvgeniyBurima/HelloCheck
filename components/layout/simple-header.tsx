import React from 'react';
import Header from '../header';

interface Props {
  children: React.ReactNode,
}

function SimpleHeader({ children }: Props) {
  return (
    <>
      <Header />

      <main className="row-auto border-t border-background flex flex-col justify-center items-center md:mt-[1px]">
        { children }
      </main>
    </>
  );
}

export default SimpleHeader;