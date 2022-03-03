import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode,
  className?: string;
  footerSize?: 'big' | 'small';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Header(props: any): JSX.Element | null {
  return null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Body(props: any): JSX.Element | null {
  return null;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Footer(props: any): JSX.Element | null {
  return null;
}

function Card({ children, className, footerSize }: Props): JSX.Element {
  const checkType = (cardPart: 'Header' | 'Body' | 'Footer') => (child: ReactNode) => {
    if (!child) return false;
    if (typeof child === 'object' && 'type' in child) {
      if (typeof child.type === 'function' && 'name' in child.type) {
        return (child.type as { name: string }).name === cardPart;
      }
    }
    return false;
  };

  const getChildren = (node: ReactNode) => {
    if (typeof node === 'object' && 'props' in node!) {
      return node.props.children;
    }
    return '';
  };

  const headerChecker = checkType('Header');
  const bodyChecker = checkType('Body');
  const footerChecker = checkType('Footer');

  const childrenArray = React.Children.toArray(children);
  const head = childrenArray.find(headerChecker);
  const body = childrenArray.find(bodyChecker);
  const footer = childrenArray.find(footerChecker);

  return (
    <div className={`bg-steel-50 shadow-button rounded-lg max-w-[480px] ${className}`}>
      { head ? getChildren(head) : '' }
      { body ? getChildren(body) : ''}
      { footer
        ? <div className={`px-6 md:px-8 ${footerSize === 'big' ? 'py-8' : 'py-4'} bg-white border-background border-t`}>{getChildren(footer)}</div>
        : '' }
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
