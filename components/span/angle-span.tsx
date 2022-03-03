// @ts-ignore
import { UilAngleRight, UilAngleDown } from '@iconscout/react-unicons';
import { useState } from 'react';

interface Props {
  value: string,
  handleClick?: () => void,
}

const size = 16;

function AngleSpan({ value, handleClick }: Props) {
  const [expanded, setExpanded] = useState(false);

  const handle = () => {
    setExpanded(!expanded);
    if (handleClick) {
      handleClick();
    }
  };

  return (
    <span onClick={handle} className="flex items-center">
      <span className="mr-2">{value}</span>
      {expanded ? <UilAngleDown size={size} /> : <UilAngleRight size={size} />}
    </span>
  );
}

export default AngleSpan;
