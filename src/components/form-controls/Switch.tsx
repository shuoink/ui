import classNames from 'classnames';
import {forwardRef} from 'react';

type Props = JSX.IntrinsicElements['input'] & {
  vertical?: boolean;
  inline?: boolean;
  valid?: boolean;
};

export const Switch = forwardRef<HTMLInputElement, Props>(
  ({vertical, inline, valid, ...rest}, ref) => (
    <div
      className={classNames(
        {
          'flex': !inline,
          'inline-flex': inline,
          'min-h-9': vertical,
          'align-text-bottom': vertical,
        },
        'flex justify-between items-center gap-2',
        'select-none',
      )}
    >
      <input
        {...rest}
        ref={ref}
        type="checkbox"
        className={classNames(
          'appearance-none p-px grid items-center grid-cols-2 focus:outline-none focus:ring box-content rounded-full w-8 h-4 border-2',
          {
            '-rotate-90': vertical,
            'cursor-pointer': !rest.disabled && !rest.readOnly,
            'cursor-not-allowed':
              Boolean(rest.disabled) || Boolean(rest.readOnly),
            'bg-gray-200 dark:bg-gray-900 border-gray-400 dark:border-gray-600':
              !rest.checked,
            'bg-primary-200 dark:bg-primary-900 border-primary-400 dark:border-primary-600':
              rest.checked && valid == null,
            'bg-green-200 dark:bg-green-900 border-green-600 dark:border-green-600':
              rest.checked && valid === true,
            'bg-red-200 dark:bg-red-900 border-red-600 dark:border-red-600':
              rest.checked && valid === false,
            'opacity-50': rest.disabled,
          },
          'before:w-4 before:h-4 before:rounded-full motion-safe:before:duration-200',
          {
            'before:bg-gray-400 dark:before:bg-gray-600 before:border-gray-200 dark:before:border-gray-800':
              !rest.checked,
            'before:bg-primary-400 dark:before:bg-primary-600 before:border-primary-200 dark:before:border-primary-800':
              rest.checked,
            'before:bg-green-600 dark:before:bg-green-600 before:border-green-200 dark:before:border-green-800':
              rest.checked && valid === true,
            'before:bg-red-600 dark:before:bg-red-600 before:border-red-200 dark:before:border-red-800':
              rest.checked && valid === false,
            'before:translate-x-4': rest.checked,
            'before:translate-x-2': rest.checked == null,
          },
        )}
        onChange={rest.readOnly ? e => e.preventDefault() : rest.onChange}
      />
    </div>
  ),
);
/* <div
  className={classNames(
    'h-4 w-4',
    'border rounded-full',
    'duration-200 ease-in-out',
    'transform',
    {
      'bg-gray-400 dark:bg-gray-600 border-gray-200 dark:border-gray-800':
        !props.checked,
      'bg-primary-200 dark:bg-primary-700 border-primary-300 dark:border-primary-800':
        props.checked,
      'translate-x-4': props.checked,
    },
    'shadow',
  )}
/> */

Switch.displayName = 'Switch';
