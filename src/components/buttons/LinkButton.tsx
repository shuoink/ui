import type {FC} from 'react';
import type {Unstyled} from '../../types';
import {getHyperlinkClasses} from '../../utils/getHyperlinkClasses';

export const LinkButton: FC<Unstyled<'button'>> = ({children, ...rest}) => (
  <button {...rest} type="button" className={getHyperlinkClasses()}>
    {children}
  </button>
);
