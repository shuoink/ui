import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {DockConfig} from './dock.js';
import {getDockClasses} from './dock.js';
import {getValidityClasses} from './getValidityClasses.js';

const clsx = defaultImport(_clsx);

export const getTextBoxClasses = ({
  dock,
  valid,
}: {
  dock?: DockConfig;
  valid?: boolean | null;
}): string =>
  clsx(
    'block appearance-none w-full  border   px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:ring',
    getValidityClasses(valid, 'bg-white border-gray-500 text-gray-900'),
    getDockClasses(dock),
  );
