import Link from 'next/link';
import { UrlObject } from 'url';

type ButtonColor = 'gradient' | 'blue' | 'white';
interface IProps {
  text: string,
  color: ButtonColor,
  className?: string,
  href: string | UrlObject,
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

function LinkButton({
  color = 'blue',
  text = '',
  className,
  href,
}: IProps): JSX.Element {
  const { backGround, fontColor } = getColor(color);
  const classNames = `capitalize rounded-lg px-3 py-1 shadow-button font-normal hover:shadow-button-hover ${backGround} ${fontColor} ${className || ''}`;
  return (
    <Link href={href} passHref>
      <a
        type="button"
        className={`${classNames} text-center`}
      >
        {text}
      </a>
    </Link>
  );
}

export default LinkButton;
