import {forwardRef} from 'react';
import type {DockConfig} from '../../utils/dock';
import {getButtonClasses} from '../../utils/getButtonClasses';

export const ButtonLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements['a'] & {dock?: DockConfig}
>(({className, children, dock, ...rest}, ref) => (
  <a {...rest} ref={ref} className={getButtonClasses({dock})}>
    {children}
  </a>
));

ButtonLink.displayName = 'ButtonLink';
