import classNames from 'classnames';
import type {DockConfig} from './dock';
import {getDockClasses} from './dock';

export const getButtonClasses = ({dock}: {dock?: DockConfig}): string =>
  classNames(
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
