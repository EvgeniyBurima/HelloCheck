import React from 'react';

interface Props{
  children: React.ReactNode,
  top?: boolean,
  xpadding?: boolean,
  className?: string,
}

function TabContainer({
  children,
  top = true,
  xpadding = true,
  className = '',
}: Props) {
  return (
    <div className={`text-steel-300 space-x-4 self-start ${xpadding ? 'px-4 md:px-12' : ''} pb-1 bg-white border-b w-full ${top ? 'mt-5' : ''} ${className} text-meta tracking-[0.08px]`}>
      {children}
    </div>
  );
}

export default TabContainer;
