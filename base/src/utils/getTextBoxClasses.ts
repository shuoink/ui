import classNames from 'classnames';
import type {DockConfig} from './dock';
import {getDockClasses} from './dock';
import {getValidityClasses} from './getValidityClasses';

export const getTextBoxClasses = ({
  dock,
  valid,
}: {
  dock?: DockConfig;
  valid?: boolean | null;
}): string =>
  classNames(
    'block appearance-none w-full  border   px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring',
    getValidityClasses(valid, 'bg-white border-gray-500 text-gray-900'),
    getDockClasses(dock),
  );
