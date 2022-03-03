// @ts-ignore
import { UilCreateDashboard } from '@iconscout/react-unicons';
import Td from '../../../components/table/td';

interface Props {
  text: string,
  className?: string,
}

function ServiceTd({ text, className }: Props) {
  return (
    <Td className={className}>
      <UilCreateDashboard size={16} className="inline mr-2" />
      { text }
    </Td>
  );
}

export default ServiceTd;
