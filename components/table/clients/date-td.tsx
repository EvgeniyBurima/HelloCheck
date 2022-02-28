// @ts-ignore
import { UilCalender } from '@iconscout/react-unicons';
import { formatTimeUnix } from '../../../helpers/time';
import Td from './td';

interface Props {
  unixTime: string,
}

function DateTd({ unixTime }: Props) {
  return (
    <Td>
      <UilCalender size={16} className="inline mr-2" />
      { formatTimeUnix(Number.parseInt(unixTime, 10)) }
    </Td>
  );
}

export default DateTd;
