import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement[],
}

function ButtonGroup({ children }: Props) {
  const lastEl = React.Children.count(children) - 1;

  return (
    <div className="inline-flex" role="group">
      {React.Children.map(children, (child: ReactElement, index) => {
        if (index === 0) {
          return React.cloneElement(child, { ...child.props, className: 'rounded-r-none' });
        }
        if (index === lastEl) {
          return React.cloneElement(child, { ...child.props, className: 'rounded-l-none' });
        }
        return React.cloneElement(child, { ...child.props, className: 'rounded-none' });
      })}
    </div>
  );
}

export default ButtonGroup;
