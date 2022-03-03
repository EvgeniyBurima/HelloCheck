import { ReactNode } from 'react';

interface Props{
  children: ReactNode,
  className?: string,
}

function Tr({ children, className }: Props) {
  return (
    <tr className={`border-background border-y-[1px] ${className || ''}`}>
      { children }
    </tr>
  );
}

export default Tr;
