import type {FC} from 'react';
import {getHyperlinkClasses} from '../../_internal/utils/getHyperlinkClasses.js';
import {isAbsoluteUrl} from '../../_internal/utils/isAbsoluteUrl.js';

const Hyperlink: FC<
  JSX.IntrinsicElements['a'] & {
    gray?: boolean;
    render?: FC<JSX.IntrinsicElements['a']> | 'a';
  }
> = ({gray, href, children, render: Anchor = 'a', ...rest}) => {
  const className = getHyperlinkClasses({gray});
  if (href && isAbsoluteUrl(href)) {
    return (
      <Anchor
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </Anchor>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Hyperlink;
