import { ReactNode } from 'react';

interface Props{
  children: ReactNode,
  className?: string,
}

function Td({ children, className }: Props) {
  return (
    <td className={`p-2 ${className || ''}`}>
      { children }
    </td>
  );
}

export default Td;
