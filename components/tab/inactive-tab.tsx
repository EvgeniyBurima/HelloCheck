import React from 'react';

interface Props {
  name: string,
  className?: string,
}

function InactiveTab({ name, className }: Props) {
  return <span className={`pt-1 ${className || ''}`}>{ name }</span>;
}

export default InactiveTab;