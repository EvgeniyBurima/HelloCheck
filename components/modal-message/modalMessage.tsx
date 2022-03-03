import {
  UilCheck,
  UilExclamationOctagon,
  UilExclamationTriangle,
  UilExclamationCircle,
  UilShieldCheck,
// @ts-ignore
} from '@iconscout/react-unicons';
import tailwindConfig from '../../tailwind.config';

type Color = 'white' | 'steel' | 'blue' | 'green' | 'yellow' | 'red';
type Icon = 'exclaim-circle' | 'exclaim-triangle' | 'exclaim-octagon' | 'check' | 'bell' | 'shield';

interface IModalMessage {
  text: string,
  color: Color,
  icon: Icon | null,
  className?: string | null,
}

const { colors } = tailwindConfig.theme.extend;

const bgColors = {
  steel: 'bg-steel-50',
  blue: 'bg-blue-50',
  green: 'bg-green-50',
  yellow: 'bg-yellow-50',
  red: 'bg-red-50',
};

const getBgColorClass = (color: Color): string => (color === 'white' ? 'bg-white' : bgColors[color]);

const getIcon = (icon: Icon, color: Color): JSX.Element => {
  let Component;
  switch (icon) {
    case 'exclaim-circle': Component = UilExclamationCircle;
      break;
    case 'exclaim-triangle': Component = UilExclamationTriangle;
      break;
    case 'exclaim-octagon': Component = UilExclamationOctagon;
      break;
    case 'check': Component = UilCheck;
      break;
    case 'bell': Component = UilExclamationTriangle;
      break;
    case 'shield': Component = UilShieldCheck;
      break;
    default: Component = UilExclamationTriangle;
  }
  return (
    <div className="pr-2">
      <Component
        className="w-[15px] h-[15px]"
        color={color === 'white' ? 'white' : colors[color][500]}
      />
    </div>
  );
};

function ModalMessage({
  text,
  color = 'white',
  icon = null,
  className = '',
}: IModalMessage): JSX.Element {
  return (
    <div className={`rounded text-steel-500 flex px-4 py-2 ${getBgColorClass(color)} ${className || ''}`}>
      { icon && getIcon(icon, color) }
      <div className="text-modal">
        { text }
      </div>
    </div>
  );
}

export default ModalMessage;
