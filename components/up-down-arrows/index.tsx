import { useState } from 'react';
// @ts-ignore
import { UilArrow, UilAngleUp, UilAngleDown } from '@iconscout/react-unicons';

interface Props {
  className?: string;
}

function UpDownArrows({ className = '' }: Props) {
  const [state, setState] = useState<boolean | null>(null);
  let Icon;
  if (state === null) {
    Icon = UilArrow;
  } else if (state) {
    Icon = UilAngleUp;
  } else {
    Icon = UilAngleDown;
  }

  return (
    <Icon
      size={12}
      className={`inline ${state === null ? 'rotate-90' : ''} ${className}`}
      onClick={() => setState(!state)}
    />
  );
}

export default UpDownArrows;
