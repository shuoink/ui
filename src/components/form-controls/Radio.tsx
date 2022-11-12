import {FC, forwardRef} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

const Radio = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & {meta?: Omit<FieldMeta, 'dock' | 'isRadio'>}
>(({meta, ...rest}, ref) => (
  <input
    {...rest}
    ref={ref}
    type="radio"
    className={getFieldClasses({...meta, block: false, isRadio: true})}
  />
));

export default Radio;
