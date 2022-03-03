import React from 'react';
import { formatTimeUnix } from '../../helpers/time';

interface Props {
  value: number,
  dayOfWeek?: boolean
  className?: string
}

function DateSpan({ value = 1646205160, className = '', dayOfWeek = true }: Props) {
  return (
    <span className={`${className}`}>{formatTimeUnix(value, dayOfWeek)}</span>
  );
}

export default DateSpan;
