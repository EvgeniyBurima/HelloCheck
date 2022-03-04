import React from 'react';
import Header from '../header';

interface Props {
  children: React.ReactNode,
  className?: string,
}

function AdditionalHeader({ children, className = '' }: Props) {
  return (
    <div className={className}>
      <Header />
      <div className="md:pt-[9px] bg-white">
        {children}
      </div>
    </div>
  );
}

export default AdditionalHeader;
