import React from 'react';
import UpDownArrows from '../up-down-arrows';

interface Props{
  text: string,
  arrows?: boolean,
  className?: string,
}

function Th({ text, arrows, className }: Props) {
  return (
    <th className={`py-1 px-2 text-left ${className || ''} whitespace-nowrap font-normal`}>
      <span className={`${arrows ? 'mr-2' : ''} leading-[11.72px] tracking-[0.1em]`}>{ text }</span>
      { arrows && <UpDownArrows />}
    </th>
  );
}

export default Th;
