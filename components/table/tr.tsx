import { ReactNode } from 'react';

interface Props{
  children: ReactNode,
}

function Tr({ children }: Props) {
  return (
    <tr className="border-background border-y-[1px]">
      { children }
    </tr>
  );
}

export default Tr;
