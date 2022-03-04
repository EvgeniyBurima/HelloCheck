import React from 'react';
import Label from './index';

interface Props {
  text: string,
  className?: string,
}

function DisabledLabel({ text, className = ''}: Props) {
  return (<Label text={text} disabled className={`ml-2 ${className}`} />);
}

export default DisabledLabel;
