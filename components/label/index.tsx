import React from 'react';
import { capitalize } from '../../helpers/string';

type Color = 'red' | 'yellow' | 'green' | 'blue' | 'gray';
type Size = 'small' | 'large';
type Shade = 'dark' | 'light';
type LabelColors = keyof typeof bgColors;

interface Props {
  text: string,
  color?: Color,
  size?: Size,
  disabled?: boolean,
  shade?: Shade,
}

const bgColors = {
  disabled: 'bg-steel-50 text-steel-300',

  grayLight: 'bg-steel-100 text-steel-500',
  grayDark: 'bg-steel-800 text-white',

  blueLight: 'bg-blue-100 text-blue-700',
  blueDark: 'bg-blue-500 text-white',

  greenLight: 'bg-green-100 text-green-700',
  greenDark: 'bg-green-500 text-white',

  yellowLight: 'bg-yellow-100 text-yellow-700',
  yellowDark: 'bg-yellow-500t text-white',

  redLight: 'bg-red-100 text-red-700',
  redDark: 'bg-red-500 text-white',
};

const getColor = (
  color: Color,
  disabled: boolean,
  shade: Shade,
): string => {
  if (disabled) return bgColors.disabled;
  return bgColors[`${color}${capitalize(shade)}` as LabelColors];
};

function Label({
  text,
  size = 'small',
  color = 'gray',
  disabled = false,
  shade = 'light',
}: Props) {
  return (
    <span className={`${getColor(color, disabled, shade)} ${size === 'small' ? 'h-4 text-xxs' : 'h-[21px] text-sm'} py-0.5 px-2  rounded`}>
      {text}
    </span>
  );
}

export default Label;
