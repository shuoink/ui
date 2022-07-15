import type {ElementOfType} from './types.js';
import {jsxTextContent} from './jsxTextContent.js';

export const getOptionLabel = (option: ElementOfType<'option'>): string =>
  jsxTextContent(option.props.children);
