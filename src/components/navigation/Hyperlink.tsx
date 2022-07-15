import type {FC} from 'react';
import {getHyperlinkClasses} from '../../_internal/utils/getHyperlinkClasses.js';
import {isAbsoluteUrl} from '../../_internal/utils/isAbsoluteUrl.js';

const Hyperlink: FC<JSX.IntrinsicElements['a'] & {gray?: boolean}> = ({
  gray,
  href,
  children,
  ...rest
}) => {
  const className = getHyperlinkClasses({gray});
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

export default Hyperlink;
