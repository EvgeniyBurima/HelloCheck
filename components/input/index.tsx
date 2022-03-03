import {
  UilPhone,
  UilMinus,
  UilCheck,
// @ts-ignore
} from '@iconscout/react-unicons';

type InputType = 'tel' | 'text';
type Icon = 'minus' | 'phone' | 'check';

interface Props {
  inputType: InputType,
  icon?: Icon,
  placeholderText?: string,
  name?: string,
  className?: string,
}

const getIcon = (icon: Icon): JSX.Element | string => {
  let Component;
  switch (icon) {
    case 'minus': Component = UilMinus;
      break;
    case 'phone': Component = UilPhone;
      break;
    case 'check': Component = UilCheck;
      break;
    default: Component = null;
  }
  if (Component) {
    return (
      <span className="absolute left-0 top-0 items-center px-[9px] py-3">
        <Component size="18" />
      </span>
    );
  }
  return '';
};

function Input({
  inputType,
  name = '',
  placeholderText = '',
  icon,
  className,
}: Props): JSX.Element {
  return (
    <label className={`relative w-full ${className || ''}`} htmlFor={name}>
      { icon && getIcon(icon)}
      <input
        className="placeholder:text-meta placeholder:text-steel-200 block bg-white w-full border border-slate-300 rounded-md py-2 pl-8 pr-3"
        placeholder={placeholderText}
        type={inputType}
        name={name}
      />
    </label>
  );
}

export default Input;
