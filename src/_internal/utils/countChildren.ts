import type {ReactNode} from 'react';
import flattenChildren from './flattenChildren.js';

const countChildren = (children: ReactNode, strict = false): number =>
  flattenChildren(children, {strict}).length;

export default countChildren;
