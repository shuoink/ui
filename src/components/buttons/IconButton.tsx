import type {FC} from 'react';
import type {Unstyled} from '../../_internal/utils/types.js';

export const IconButton: FC<Unstyled<'button'> & {title: string}> = props => (
  <button
    {...props}
    type="button"
    className="transform p-1 duration-75 hover:scale-150"
  />
);
