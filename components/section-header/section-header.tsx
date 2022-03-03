import React from 'react';

interface Props {
  name: string,
  right: React.ReactNode,
  className?: string,
}

function SectionHeader({ name, right, className = '' }:Props) {
  return (
    <div className={`px-2 flex justify-between items-center w-full ${className}`}>
      <div>
        <h2 className="text-3xl font-medium text-steel-800">{name}</h2>
      </div>
      <div>
        {right}
      </div>
    </div>
  );
}

export default SectionHeader;