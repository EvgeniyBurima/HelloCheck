import React from 'react';
import Header from '../header';

interface Props {
  children: React.ReactNode,
}

function AdditionalHeader({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default AdditionalHeader;
