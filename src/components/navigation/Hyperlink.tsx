import type {FC} from 'react';
import {forwardRef} from 'react';
import {getHyperlinkClasses} from '../../_internal/utils/getHyperlinkClasses.js';
import {isAbsoluteUrl} from '../../_internal/utils/isAbsoluteUrl.js';

type Props = JSX.IntrinsicElements['a'] & {
  gray?: boolean;
  render?: FC<JSX.IntrinsicElements['a']> | 'a';
};

const Hyperlink = forwardRef<HTMLAnchorElement, Props>(
  ({gray, href, children, render: Anchor = 'a', ...rest}, ref) => {
    const className = getHyperlinkClasses({gray});
    const attrs: JSX.IntrinsicElements['a'] = {};

    if (href && isAbsoluteUrl(href)) {
      attrs.target = '_blank';
      attrs.rel = 'noopener noreferrer';
    }

    return (
      <Anchor {...attrs} ref={ref} href={href} className={className}>
        {children}
      </Anchor>
    );
  },
);

export const Foo = (
  <Hyperlink
    ref={() => {
      // do stuff
    }}
  />
);

export default Hyperlink;
