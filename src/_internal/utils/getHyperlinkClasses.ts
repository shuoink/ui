import _clsx from 'clsx';
import {defaultImport} from 'default-import';

const clsx = defaultImport(_clsx);

export const getHyperlinkClasses = ({gray}: {gray?: boolean} = {}): string =>
  clsx('inline text-links dark:text-links-dark hover:underline', {
    'text-gray-500 hover:text-primary-500': gray,
    'text-primary-500': !gray,
  });
