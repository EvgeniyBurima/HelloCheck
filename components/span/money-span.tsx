import React from 'react';

interface Props {
  value: number,
  className?: string
}

function MoneySpan({ value = 300, className = '' }: Props) {
  return (
    <span className={`before:content-['$'] ${className}`}>{value.toFixed(2)}</span>
  );
}

export default MoneySpan;
