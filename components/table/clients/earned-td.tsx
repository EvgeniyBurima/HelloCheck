// @ts-ignore
import { UilAnalysis } from '@iconscout/react-unicons';
import Td from './td';

interface Props{
  value: string,
}

function EarnedTd({ value }: Props) {
  return (
    <Td>
      <div className="flex space-x-[9px]">
        <UilAnalysis size="16" />
        <span>{value}</span>
      </div>
    </Td>
  );
}

export default EarnedTd;
