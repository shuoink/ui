import type {ElementOfType} from './types.js';
import {jsxTextContent} from './jsxTextContent.js';

export const getOptionValue = (option: ElementOfType<'option'>): string =>
  String(option.props.value ?? jsxTextContent(option.props.children));
