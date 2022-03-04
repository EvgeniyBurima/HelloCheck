// @ts-ignore
import { UilEstate } from '@iconscout/react-unicons';
import { ReactNode } from 'react';
import Td from './td';

interface Props {
  text: string | ReactNode,
  className?: string,
}

function PropertyTd({ text, className }: Props) {
  return (
    <Td className={className}>
      <UilEstate size={16} className="inline mr-2" />
      { text }
    </Td>
  );
}

export default PropertyTd;
