import React from "react";

interface Props {
  name: string,
  right: React.ReactNode,
  className?: string,
}

function SectionHeader({ name, right, className = '' }:Props) {
  return <div className={`flex justify-between w-full px-2 ${className}`}>
    <div>
      <h2 className="text-3xl font-medium text-steel-800">{name}</h2>
    </div>
    <div>
      {right}
    </div>
  </div>;
}

export default SectionHeader;