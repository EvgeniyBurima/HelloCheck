import Label, { Color } from '../../../components/label';
import { capitalize } from '../../../helpers/string';

type Type = 'paid' | 'sent' | 'partial';

interface Props {
  type: Type,
  className?: string,
}

const getColor = (type: Type) => {
  let color;
  switch (type) {
    case 'paid':
      color = 'green';
      break;
    case 'sent':
      color = 'blue';
      break;
    case 'partial':
      color = 'yellow';
      break;
    default:
      color = 'gray';
      break;
  }
  return color as Color;
};

function StatusLabel({ type, className = '' }: Props) {
  return (
    <Label
      text={capitalize(type)}
      color={getColor(type)}
      className="className"
    />

  );
}

export default StatusLabel;
