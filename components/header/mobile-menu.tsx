import React from 'react';

interface MobileMenuProps {
  show: boolean,
  children: React.ReactNode,
  className: string,
}

function MobileMenu({ children, show, className }: MobileMenuProps): JSX.Element {
  return (
    <div className={`${show ? '' : 'hidden'} ${className || ''} relative p-6 bg-white transition-transform`}>
      {children}
    </div>
  );
}

export default MobileMenu;
