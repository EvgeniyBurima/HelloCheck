// @ts-ignore
import { UilPauseCircle } from '@iconscout/react-unicons';
import { ReactNode } from 'react';
import Repeat from '../svg/repeat';
import Td from './td';

interface Props {
  text: string | ReactNode,
  className?: string,
  icon: 'repeat' | 'pause',
}

function ServiceTd({ text, className, icon }: Props) {
  return (
    <Td className={className}>
      {
        icon === 'repeat' && <Repeat size={16} className="inline mr-2" />
      }
      {
        icon === 'pause' && <UilPauseCircle size={16} className="inline mr-2" />
      }
      { text }
    </Td>
  );
}

export default ServiceTd;
