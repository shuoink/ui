import {forwardRef} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

const Checkbox = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & {
    meta?: Omit<FieldMeta, 'dock' | 'isCheckbox' | 'isRadio'>;
  }
>(({meta, ...rest}, ref) => (
  <input
    {...rest}
    ref={ref}
    type="checkbox"
    checked={rest.checked ?? false}
    className={getFieldClasses({...meta, block: false, isCheckbox: true})}
  />
));

export default Checkbox;
