// @ts-ignore
import { UilLocationPoint } from '@iconscout/react-unicons';
import Td from '../../components/table/td';

interface Props {
  value: string,
  className?: string,
}

function ProperyTd({ value, className }: Props) {
  return (
    <Td className={className}>
      <div className="flex space-x-[10px]">
        <UilLocationPoint size="16" />
        <span>{ value }</span>
      </div>
    </Td>
  );
}

export default ProperyTd;
