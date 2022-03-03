import React, { ReactElement } from 'react';

interface Props {
  gradient?: boolean,
  children: ReactElement[],
  className?: string,
}

function DetailGroup({ children, gradient = false, className = '' }: Props) {
  const lastEl = React.Children.count(children) - 1;

  return (
    <div className={`shadow-button ${gradient ? 'bg-gradient-default from-blue-500 to-violet-500 rounded-lg' : ''} ${className}`} role="group">
      {React.Children.map(children, (child: ReactElement, index) => {
        if (index === 0) {
          return React.cloneElement(child, { ...child.props, className: `rounded-t-lg border border-t-0 border-r-0 border-l-0 ${gradient ? 'border-subtitle-white-10' : 'border-0'}` });
        }
        if (index === lastEl) {
          return React.cloneElement(child, { ...child.props, className: `rounded-b-lg border border-b-0 border border-r-0 border-l-0 ${gradient ? 'border-subtitle-white-10' : ''}` });
        }
        return React.cloneElement(child, { ...child.props, className: `rounded-none border border-b-0 border border-r-0 border-l-0 ${gradient ? 'border-subtitle-white-10' : ''}` });
      })}
    </div>
  );
}

export default DetailGroup;
