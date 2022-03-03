import Label, { Color } from '../../../components/label';
import { capitalize } from '../../../helpers/string';

type Type = 'paid' | 'sent' | 'partial';

interface Props {
  type: Type,
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

function StatusLabel({ type }: Props) {
  return (
    <Label
      text={capitalize(type)}
      color={getColor(type)}
    />

  );
}

export default StatusLabel;
