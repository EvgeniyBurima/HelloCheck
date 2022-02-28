import { useState } from 'react';
// @ts-ignore
import { UilArrow, UilAngleUp, UilAngleDown } from '@iconscout/react-unicons'

function UpDownArrows() {
  const [state, setState] = useState(null);
  let Icon;
  if (state === null) {
    Icon = UilArrow;
  } else if (state) {
    Icon = UilAngleUp;
  } else {
    Icon = UilAngleDown;
  }

  return (
    <Icon size={12} className={`inline ${state === null ? 'rotate-90' : ''}`} onClick={() => setState(!state)} />
  );
}

export default UpDownArrows;
