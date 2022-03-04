import React from 'react';

interface Props {
  name: string,
  className?: string,
  onClick?: () => void,
}

function InactiveTab({ name, className, onClick }: Props) {
  return <span onClick={onClick} className={`select-none cursor-pointer pt-1 ${className || ''}`}>{ name }</span>;
}

export default InactiveTab;
