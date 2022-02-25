import React from 'react';
import Check from '../svg-gradient/check';

interface BenefitItemProps {
  header: string,
  description: string,
}

function BenefitItem({ header, description }: BenefitItemProps): JSX.Element {
  return (
    <li className="flex">
      <div className="mr-3">
        <Check />
      </div>
      <div>
        <h4 className="font-medium text-2xl">{header || ''}</h4>
        <p className="text-sm">{description || ''}</p>
      </div>
    </li>
  );
}

export default BenefitItem;
