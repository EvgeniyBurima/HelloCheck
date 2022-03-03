import React from 'react';

interface Props{
  children: React.ReactNode,
  top?: boolean,
  xpadding?: boolean,
}

function TabContainer({ children, top = true, xpadding = true }: Props) {
  return (
    <div className={`text-steel-300 space-x-4 self-start ${xpadding ? 'px-4 md:px-12' : ''} py-2 pb-1 bg-white border-b w-full ${top ? 'mt-4' : ''}`}>
      {children}
    </div>
  );
}

export default TabContainer;
