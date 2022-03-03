import React from 'react';
import Check from '../svg-gradient/check';

interface BenefitItemProps {
  header: string,
  description: string,
}

function BenefitItem({ header, description }: BenefitItemProps): JSX.Element {
  return (
    <li className="flex h-[75px]">
      <div className="mr-2">
        <Check size="32" />
      </div>
      <div>
        <h4 className="font-medium text-h4 mb-1.5">{header || ''}</h4>
        <p className="text-sm">{description || ''}</p>
      </div>
    </li>
  );
}

export default BenefitItem;
