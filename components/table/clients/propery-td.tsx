// @ts-ignore
import { UilLocationPoint } from '@iconscout/react-unicons';
import Td from './td';

interface Props {
  value: string
}

function ProperyTd({ value }: Props) {
  return (
    <Td>
      <div className="flex space-x-[10px]">
        <UilLocationPoint size="16" />
        <span>{ value }</span>
      </div>
    </Td>
  );
}

export default ProperyTd;
