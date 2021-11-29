import type {ElementOfType} from '../types';
import {jsxTextContent} from './jsxTextContent';

export const getOptionValue = (option: ElementOfType<'option'>): string =>
  String(option.props.value ?? jsxTextContent(option.props.children));
