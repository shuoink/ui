import classnames from 'classnames';
import type {FieldMeta} from '../types';
import {getDockClasses} from './dock';
import {getValidityClasses} from './getValidityClasses';

export const getFieldClasses = ({
  touched = false,
  valid = null,
  dock = {},
  block = true,
  isRadio = false,
  isCheckbox = false,
}: FieldMeta = {}): string =>
  classnames(
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
