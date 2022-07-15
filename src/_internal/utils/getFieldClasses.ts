import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {FieldMeta} from './types.js';
import {getDockClasses} from './dock.js';
import {getValidityClasses} from './getValidityClasses.js';

const clsx = defaultImport(_clsx);

export const getFieldClasses = ({
  touched = false,
  valid = null,
  dock = {},
  block = true,
  isRadio = false,
  isCheckbox = false,
}: FieldMeta = {}): string =>
  clsx(
    {'inline-flex items-stretch': isRadio || isCheckbox},
    'bg-white border',
    'focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-transparent focus:ring-complementary-300',
    'shadow appearance-none',
    'p-2',
    getDockClasses(dock),
    getValidityClasses(
      touched ? valid : null,
      'bg-white border-gray-500 text-gray-900',
    ),
    {
      'block w-full': block,
      'rounded-full': isRadio,
      'rounded': !isRadio,
      'cursor-pointer': isRadio || isCheckbox,
    },
    {
      'before:flex-grow before:w-6 before:h-6': isRadio || isCheckbox,
      'before:rounded-full': isRadio,
      'before:checked:bg-current': isRadio || isCheckbox,
    },
  );
