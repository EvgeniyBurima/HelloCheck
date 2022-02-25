import { ReactNode } from 'react';
import TwoRow from './index';

interface ThreeRowProps {
  children: ReactNode;
}

function ThreeRow({ children }: ThreeRowProps) {
  return (
    <>
      <TwoRow>
        {children}
      </TwoRow>
      <footer className="row-auto col-span-12 bg-gray-300">
        Footer...
      </footer>
    </>

  );
}

export default ThreeRow;
