import classNames from 'classnames';
import {forwardRef} from 'react';
import {useId} from '@reach/auto-id';

type Properties = JSX.IntrinsicElements['input'];

// TODO:
// state: indeterminate
// orientation: vertical
// readonly
// -webkit-tap-highlight-color: transparent;
// thin (skinny track)
// valid/invalid states
// any special treatment needed for LTR languages?
// test with screen reader
// prefers-reduced-motion
// draggable
//   touch-action: pan-y

export const Switch = forwardRef<HTMLInputElement, Properties>((props, ref) => {
  const autoId = useId();
  const id = props.id ?? autoId;
  return (
    <label
      className={classNames(
        'inline-block',
        'relative isolate',
        'cursor-pointer',
        'rounded-full',
        'focus:outline-none focus:ring',
        'select-none',
        'border',
        'w-8 h-4',
        'p-[1px]',
        'box-content',
        {
          'cursor-pointer': !props.disabled,
          'cursor-not-allowed': props.disabled,
          'bg-gray-100 dark:bg-gray-900 border-gray-400 dark:border-gray-600':
            !props.checked,
          'bg-primary-500 dark:bg-primary-900 border-primary-400 dark:border-primary-700':
            props.checked,
          'opacity-50': props.disabled,
        },
        'duration-75',
        'shadow',
      )}
      htmlFor={id}
      tabIndex={props.disabled ? undefined : 0}
    >
      <input {...props} id={id} ref={ref} type="checkbox" className="hidden" />

      <div
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
      />
    </label>
  );
});

Switch.displayName = 'Switch';
