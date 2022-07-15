import type {CSSProperties} from 'react';
import type {BaseObject, EmptyObject, StyleProp} from './types.js';

export const getStyle = <DATA extends BaseObject = EmptyObject>(
  styleProp: StyleProp<DATA> | undefined,
  styleData: DATA,
  defaultStyles?: CSSProperties,
): CSSProperties | undefined => {
  if (styleProp == null) {
    return defaultStyles;
  }
  if (styleProp instanceof Function) {
    return styleProp({style: defaultStyles, ...styleData});
  }
  return styleProp;
};
