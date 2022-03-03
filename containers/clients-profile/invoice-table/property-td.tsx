// @ts-ignore
import { UilEstate } from '@iconscout/react-unicons';
import Td from '../../../components/table/td';

interface Props {
  text: string,
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
