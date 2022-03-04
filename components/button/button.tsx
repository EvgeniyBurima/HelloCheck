import {
  UilPlus,
  UilAngleDown,
  UilArchive,
  UilTrashAlt,
  UilCornerUpLeftAlt,
  UilArrowLeft,
  UilArrowDown,
  UilPauseCircle,
  UilPlayCircle ,
  // @ts-ignore
} from '@iconscout/react-unicons';

type ButtonColor = 'gradient' | 'blue' | 'white';
type IconType = 'chevron' | 'plus' | 'archive' | 'delete' | 'back' | 'back-alt' | 'down' | 'pause' | 'play';
export type IconColor = keyof typeof iconColors;

interface Props {
  text?: string,
  color?: ButtonColor,
  className?: string,
  icon?: IconType,
  iconColor?: IconColor,
}

interface IGetColor {
  backGround: string,
  fontColor: string,
}

const iconColors = {
  red: 'text-red-500',
  green: 'text-green-500',
};

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

const getIcon = (iconName: IconType, iconColor: IconColor | undefined): JSX.Element | null => {
  let Icon;
  switch (iconName) {
    case 'chevron':
      Icon = UilAngleDown;
      break;
    case 'plus':
      Icon = UilPlus;
      break;
    case 'archive':
      Icon = UilArchive;
      break;
    case 'delete':
      Icon = UilTrashAlt;
      break;
    case 'back':
      Icon = UilArrowLeft;
      break;
    case 'back-alt':
      Icon = UilCornerUpLeftAlt;
      break;
    case 'down':
      Icon = UilArrowDown;
      break;
    case 'pause':
      Icon = UilPauseCircle;
      break;
    case 'play':
      Icon = UilPlayCircle;
      break;
    default: Icon = UilAngleDown;
  }
  return <Icon size={16} className={iconColor ? iconColors[iconColor] : ''} />;
};

function Button({
  color = 'blue',
  text = '',
  className,
  icon,
  iconColor,
}: Props): JSX.Element {
  const { backGround, fontColor } = getColor(color);
  const classNames = `capitalize rounded-lg shadow-button font-normal hover:shadow-button-hover ${backGround} ${fontColor} ${className || ''}`;
  return (
    <button
      type="button"
      className={`items-center text-center flex py-1 px-0 whitespace-nowrap ${classNames}`}
    >
      {
        icon
          ? <span className="w-[28px] flex justify-center">{getIcon(icon, iconColor)}</span>
          : ''
      }
      {
        text
        && (
          <span className="pr-3">
            {text}
          </span>
        )
      }
    </button>
  );
}

export default Button;
