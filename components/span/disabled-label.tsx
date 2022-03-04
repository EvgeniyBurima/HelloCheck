import DisabledLabel from '../label/disabled';

interface Props {
  spanText: string,
  labelText: string,
  className?: string,
  labelClassName?: string,
}

function DisabledLabelSpan({ spanText, labelText, className = '', labelClassName = '' }: Props) {
  return (
    <span className={className}>
      {spanText}
      <DisabledLabel text={labelText} className={`mt-5 ${labelClassName}`} />
    </span>
  );
}

export default DisabledLabelSpan;
