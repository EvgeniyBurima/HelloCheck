import React from 'react';

interface Props{
  children: React.ReactNode,
}

function TabContainer({ children }: Props) {
  return (
    <div className="text-steel-300 space-x-4 self-start pt-4 px-2 pb-1">
      {children}
    </div>
  );
}

export default TabContainer;
