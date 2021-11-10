import classnames from 'classnames';
import type {FieldMeta} from '../..';
import getDockClasses from './getDockClasses';
import getValidityClasses from './getValidityClasses';

// TODO: when checked, we need to add a circle to the radio button.

const getFieldClasses = ({
  touched = false,
  valid = null,
  dock = {},
  block = true,
  isRadio = false,
}: FieldMeta = {}): string =>
  classnames(
    {'inline-flex items-stretch': isRadio},
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
    },
    {
      'before:flex-grow before:w-6 before:h-6 before:rounded-full': isRadio,
      'checked:before:bg-current': isRadio,
    },
  );

export default getFieldClasses;
