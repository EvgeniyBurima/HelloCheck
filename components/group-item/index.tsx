import React from 'react';

interface Props {
  children: React.ReactNode,
  className?: string,
  ghost?: boolean,
  shadow?: boolean,
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Left(props: any): JSX.Element | null {
  return null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Right(props: any): JSX.Element | null {
  return null;
}

function GroupItem({
  children,
  className,
  ghost = false,
  shadow = true,
}: Props) {
  const checkType = (cardPart: 'Left' | 'Right') => (child: React.ReactNode) => {
    if (!child) return false;
    if (typeof child === 'object' && 'type' in child) {
      if (typeof child.type === 'function' && 'name' in child.type) {
        return (child.type as { name: string }).name === cardPart;
      }
    }
    return false;
  };

  const getChildren = (node: React.ReactNode) => {
    if (typeof node === 'object' && 'props' in node!) {
      return node.props.children;
    }
    return '';
  };

  const leftChecker = checkType('Left');
  const rightChecker = checkType('Right');

  const childrenArray = React.Children.toArray(children);
  const left = childrenArray.find(leftChecker);
  const right = childrenArray.find(rightChecker);

  return (
    <div className={`p-2 flex justify-between items-center ${shadow ? 'shadow-button' : ''} ${className || ''} ${ghost ? 'bg-transparent' : 'bg-white hover:bg-steel-50' }`}>
      { left ? getChildren(left) : '' }
      { right ? getChildren(right) : ''}
    </div>
  );
}

GroupItem.Left = Left;
GroupItem.Right = Right;

export default GroupItem;
