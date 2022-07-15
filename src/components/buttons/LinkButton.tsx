import type {FC} from 'react';
import type {Unstyled} from '../../_internal/utils/types.js';
import {getHyperlinkClasses} from '../../_internal/utils/getHyperlinkClasses.js';

const LinkButton: FC<Unstyled<'button'>> = ({children, ...rest}) => (
  <button {...rest} type="button" className={getHyperlinkClasses()}>
    {children}
  </button>
);

export default LinkButton;
