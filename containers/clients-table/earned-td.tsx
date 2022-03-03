import Td from '../../components/table/td';
import Analysis from '../../components/svg-gradient/analysis';

interface Props{
  value: string,
  className?: string,
}

function EarnedTd({ value, className }: Props) {
  return (
    <Td className={className}>
      <div>
        <Analysis size="16" className="inline mr-2" />
        <span className="before:content-['$'] bg-clip-text text-transparent bg-gradient-default from-blue-500 to-violet-500 ">{value}</span>
      </div>
    </Td>
  );
}

export default EarnedTd;
