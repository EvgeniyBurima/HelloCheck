import React, { useState } from 'react';
// @ts-ignore
import { UilAngleDown, UilAngleRight } from '@iconscout/react-unicons';
import AngleDown from '../svg-gradient/angle-down';
import AngleRight from '../svg-gradient/angle-right';

interface Props{
  header: string,
  children: React.ReactNode,
  gradient?: boolean,
  className?: string,
}

const iconSize = 16;

const getIcon = (gradient: boolean, expanded: boolean) => {
  if (gradient) {
    if (expanded) return <AngleDown size={iconSize} />;
    return <AngleRight size={iconSize} />;
  }
  if (expanded) return <UilAngleDown size={iconSize} />;
  return <UilAngleRight size={iconSize} />;
};

function Details({
  header,
  children,
  gradient = false,
  className = '',
}: Props) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={`text-meta mt-6 ${className}`}>
      <div
        className={`flex items-center ${gradient ? 'bg-clip-text text-transparent bg-gradient-default from-blue-500 to-violet-500' : ''} mb-2`}
        onClick={() => setExpanded(!expanded)}
        aria-expanded="false"
        role="button"
        tabIndex={0}
      >
        {getIcon(gradient, expanded)}
        <span className="ml-2 text-meta font-medium">{header}</span>
      </div>

      <div className={expanded ? 'block' : 'hidden'}>
        {children}
      </div>
    </div>
  );
}

export default Details;
