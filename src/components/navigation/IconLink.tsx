import {forwardRef} from 'react';

export const IconLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements['a'] & {href: string; title: string}
>(({children, ...rest}, ref) => (
  <a
    {...rest}
    aria-label={rest.title}
    ref={ref}
    className="flex justify-center items-center transform hover:scale-125 duration-75 min-w-[48px] min-h-[48px]"
  >
    {children}
  </a>
));

IconLink.displayName = 'IconLink';
