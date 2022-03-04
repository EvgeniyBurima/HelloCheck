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
    <span className={`flex ${position === 'left' ? 'justify-start' : 'justify-end pr-2'} ${className}`}>{currencyFormatter(value)}</span>
  );
}

export default MoneySpan;
