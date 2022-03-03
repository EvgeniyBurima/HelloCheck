import React from 'react';
import Gradient from './gradient';

interface Props {
  size: string,
  className?: string,
}

function Analysis({ size, className }: Props) {
  return (
    <Gradient size={size} className={className}>
      <path
        d="M21.71,7.29a1,1,0,0,0-1.42,0L14,13.59,9.71,9.29a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,11.41l4.29,4.3a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,7.29Z"
        fill="url('#gradient')"
      />
    </Gradient>
  );
}

export default Analysis;
