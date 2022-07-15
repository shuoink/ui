import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import {forwardRef} from 'react';

const clsx = defaultImport(_clsx);

type Props = JSX.IntrinsicElements['input'] & {
  vertical?: boolean;
  inline?: boolean;
  valid?: boolean;
};

const Switch = forwardRef<HTMLInputElement, Props>(
  ({vertical, inline, valid, ...rest}, ref) => (
    <div
      className={clsx(
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
        role="switch"
        aria-checked={rest.checked}
        className={clsx(
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
            'bg-emerald-200 dark:bg-emerald-900 border-emerald-600 dark:border-emerald-600':
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
            'before:bg-emerald-600 dark:before:bg-emerald-600 before:border-emerald-200 dark:before:border-emerald-800':
              rest.checked && valid === true,
            'before:bg-red-600 dark:before:bg-red-600 before:border-red-200 dark:before:border-red-800':
              rest.checked && valid === false,
            'before:translate-x-4': rest.checked,
          },
        )}
        onChange={rest.readOnly ? e => e.preventDefault() : rest.onChange}
      />
    </div>
  ),
);

Switch.displayName = 'Switch';

export default Switch;
