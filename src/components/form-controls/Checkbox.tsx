import {forwardRef} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';
import withFieldGroup from '../../_internal/decorators/withFieldGroup.js';

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
    className={getFieldClasses({block: false, isCheckbox: true, ...meta})}
  />
));

export const CheckboxGroup = withFieldGroup(Checkbox, {
  row: 'reverse',
});

export default Checkbox;
