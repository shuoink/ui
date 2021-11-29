import {isValidElement} from 'react';
import type {ReactNode} from 'react';
import type {ElementOfType} from '../types';

export const isOptionElement = (el: ReactNode): el is ElementOfType<'option'> =>
  isValidElement(el) && el.type === 'option';
