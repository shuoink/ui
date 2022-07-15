import {forwardRef} from 'react';
import type {DockConfig} from '../../_internal/utils/dock.js';
import {getButtonClasses} from '../../_internal/utils/getButtonClasses.js';

const ButtonLink = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements['a'] & {dock?: DockConfig}
>(({className, children, dock, ...rest}, ref) => (
  <a {...rest} ref={ref} className={getButtonClasses({dock})}>
    {children}
  </a>
));

ButtonLink.displayName = 'ButtonLink';

export default ButtonLink;
