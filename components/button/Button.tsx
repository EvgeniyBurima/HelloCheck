// @ts-ignore
import { UilPlus, UilAngleDown } from '@iconscout/react-unicons';

type ButtonColor = 'gradient' | 'blue' | 'white';
type IconType = 'chevron' | 'plus';

interface Props {
  text?: string,
  color?: ButtonColor,
  className?: string,
  icon?: IconType,
}

interface IGetColor {
  backGround: string,
  fontColor: string,
}

const getColor = (color: ButtonColor): IGetColor => {
  let backGround = 'bg-blue-500';
  let fontColor = 'text-white';
  if (color === 'gradient') {
    backGround = 'bg-gradient-default to-violet-500 from-blue-500';
  } else if (color === 'white') {
    backGround = 'bg-white';
    fontColor = 'text-steel-500';
  }
  return {
    backGround,
    fontColor,
  };
};

const getIcon = (iconName: IconType): JSX.Element | null => {
  let Icon;
  switch (iconName) {
    case 'chevron':
      Icon = UilAngleDown;
      break;
    case 'plus':
      Icon = UilPlus;
      break;
    default: Icon = UilAngleDown;
  }
  return <Icon size={16} />;
};

function Button({
  color = 'blue',
  text = '',
  className,
  icon,
}: Props): JSX.Element {
  const { backGround, fontColor } = getColor(color);
  const classNames = `capitalize rounded-lg px-3 py-1 shadow-button font-normal hover:shadow-button-hover ${backGround} ${fontColor} ${className}`;
  return (
    <button
      type="button"
      className={`${classNames} items-center text-center flex py-1 px-0 whitespace-nowrap`}
    >
      {
        icon
          ? <span className="w-[28px] flex justify-center">{getIcon(icon)}</span>
          : ''
      }
      <span className="pr-3">
        {text}
      </span>
    </button>
  );
}

export default Button;
