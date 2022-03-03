import { ReactNode } from 'react';

interface CentredLayoutProps {
  children: ReactNode,
  // eslint-disable-next-line react/require-default-props
  className?: string
}

function CentredLayout({ children, className = '' }: CentredLayoutProps) {
  return (
    <div className={`${className || ''} p-4 md:p-0 bg-white flex flex-col justify-center items-center`}>
      {children}
    </div>
  );
}

export default CentredLayout;
