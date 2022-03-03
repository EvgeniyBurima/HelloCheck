import React from 'react';

interface Props {
  children: React.ReactNode,
  direction?: 'row' | 'col',
  className?: string
}

function MainSection({ children, className = '', direction = 'col' }: Props) {
  return (
    <main className="row-auto border-t border-background flex flex-col justify-center items-center bg-white">
      <div className={`${className} ${direction === 'col' ? 'flex-col' : 'flex-row'} w-full h-full p-4 md:px-12 md:py-6 bg-white flex text-sm`}>
        {children}
      </div>
    </main>
  );
}

export default MainSection;
