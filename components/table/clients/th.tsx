import React from 'react';
import UpDownArrows from '../../up-down-arrows';

interface Props{
  text: string,
  arrows?: boolean,
  className?: string,
}

function Th({ text, arrows, className }: Props) {
  return (
    <th className={`p-2 text-left ${className || ''}`}>
      { text }
      { arrows && <UpDownArrows />}
    </th>
  );
}

export default Th;
