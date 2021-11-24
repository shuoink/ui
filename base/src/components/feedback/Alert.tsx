import classNames from 'classnames';
import type {FC} from 'react';

export const Alert: FC<{
  type?: 'danger' | 'error' | 'info' | 'success' | 'warning';
}> = ({type = 'info', children}) => (
  <div
    className={classNames('p-4 text-lg border-2', {
      'text-good-500': type === 'success',
      'border-good-500': type === 'success',
      'bg-good-100': type === 'success',

      'text-bad-500': type === 'error' || type === 'danger',
      'border-bad-500': type === 'error' || type === 'danger',
      'bg-bad-100': type === 'error' || type === 'danger',

      'text-neutral-500': type === 'info',
      'border-neutral-500': type === 'info',
      'bg-neutral-100': type === 'info',

      'text-caution-500': type === 'warning',
      'border-caution-500': type === 'warning',
      'bg-caution-100': type === 'warning',
    })}
  >
    {children}
  </div>
);
