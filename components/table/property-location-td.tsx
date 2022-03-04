// @ts-ignore
import { UilLocationPoint } from '@iconscout/react-unicons';
import Td from './td';

interface Props {
  text: string,
  className?: string,
}

function PropertyLocationTd({ text, className }: Props) {
  return (
    <Td className={className}>
      <div>
        <UilLocationPoint size="16" className="inline mr-2" />
        <span>{ text }</span>
      </div>
    </Td>
  );
}

export default PropertyLocationTd;
