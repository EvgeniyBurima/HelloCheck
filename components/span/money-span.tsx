import React from 'react';
import { currencyFormatter } from '../../helpers/string';

interface Props {
  value: number,
  className?: string,
  position?: 'left' | 'right',
}

function MoneySpan({
  value = 300,
  className = '',
  position = 'left',
}: Props) {
  return (
    <div className={`${position === 'left' ? '' : 'text-right pr-2'} ${className}`}>{currencyFormatter(value)}</div>
  );
}

export default MoneySpan;
