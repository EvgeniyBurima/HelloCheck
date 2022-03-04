import React from 'react';
import Header from '../header';

interface Props {
  children: React.ReactNode,
}

function AdditionalHeader({ children }: Props) {
  return (
    <>
      <Header />
      <div className="md:pt-[9px] bg-white">
        {children}
      </div>
    </>
  );
}

export default AdditionalHeader;
