import { ReactNode } from 'react';

interface Props{
  children: ReactNode,
  className?: string,
}

function Td({ children, className }: Props) {
  return (
    <td className={`text-meta leading-[29px] py-2 px-2 ${className || ''}`}>
      { children }
    </td>
  );
}

export default Td;
