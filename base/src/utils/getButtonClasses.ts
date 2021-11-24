import classNames from 'classnames';
import type {DockConfig} from '../types';
import {getDockClasses} from './getDockClasses';

export const getButtonClasses = ({dock}: {dock?: DockConfig}): string =>
  classNames(
    'inline-flex items-center justify-center px-4 py-2 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-600 cursor-pointer',
    getDockClasses(dock),
  );
