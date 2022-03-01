// @ts-ignore
import { UilCalender } from '@iconscout/react-unicons';
import { formatTimeUnix } from '../../helpers/time';
import Td from '../../components/table/td';

interface Props {
  unixTime: string,
  className?: string,
}

function DateTd({ unixTime, className }: Props) {
  return (
    <Td className={className}>
      <UilCalender size={16} className="inline mr-2" />
      { formatTimeUnix(Number.parseInt(unixTime, 10)) }
    </Td>
  );
}

export default DateTd;
