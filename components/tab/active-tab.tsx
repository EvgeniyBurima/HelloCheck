import React from 'react';
import InactiveTab from './inactive-tab';

interface Props {
  name: string,
  className?: string,
}

function ActiveTab({ name, className = '' }: Props) {
  return (
    <InactiveTab
      name={name}
      className={`text-steel-800 border-b-[1px] border-steel-800 pb-1 md:pb-1.5 tracking-[0] ${className}`}
    />
  );
}

export default ActiveTab;
