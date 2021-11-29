import type {ElementOfType} from '../types';
import {jsxTextContent} from './jsxTextContent';

export const getOptionLabel = (option: ElementOfType<'option'>): string =>
  jsxTextContent(option.props.children);
