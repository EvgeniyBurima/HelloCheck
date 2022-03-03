import React from 'react';
import InactiveTab from './inactive-tab';

interface Props {
  name: string,
}

function ActiveTab({ name }: Props) {
  return (
    <InactiveTab
      name={name}
      className="text-steel-800 border-b-[1px] border-steel-800 pb-1 md:pb-1.5"
    />
  );
}

export default ActiveTab;
