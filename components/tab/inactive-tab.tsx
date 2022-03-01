import React from 'react';

interface Props {
  name: string,
  className?: string,
}

function InactiveTab({ name, className }: Props) {
  return <span className={className || ''}>{ name }</span>;
}

export default InactiveTab;