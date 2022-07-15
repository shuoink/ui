import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {DockConfig} from './dock.js';
import {getDockClasses} from './dock.js';

const clsx = defaultImport(_clsx);

export const getButtonClasses = ({dock}: {dock?: DockConfig}): string =>
  clsx(
    'inline-flex items-center justify-center gap-2',
    'px-4 py-2',
    'rounded',
    'text-lg font-medium',
    'text-white hover:text-white',
    'bg-primary-600 hover:bg-primary-700',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600',
    'cursor-pointer',
    getDockClasses(dock),
  );
