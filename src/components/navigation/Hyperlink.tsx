import type {FC} from 'react';
import {getHyperlinkClasses} from '../../utils/getHyperlinkClasses';
import {isAbsoluteUrl} from '../../utils/isAbsoluteUrl';

export const Hyperlink: FC<JSX.IntrinsicElements['a']> = ({
  href,
  children,
  ...rest
}) => {
  const className = getHyperlinkClasses();
  if (href && isAbsoluteUrl(href)) {
    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};
