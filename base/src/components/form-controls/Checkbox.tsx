import type {VFC} from 'react';
import type {FieldMeta} from '../../types';
import {getFieldClasses} from '../../utils/getFieldClasses';

export const Checkbox: VFC<
  JSX.IntrinsicElements['input'] & {
    meta?: Omit<FieldMeta, 'dock' | 'isCheckbox' | 'isRadio'>;
  }
> = ({meta, ...rest}) => (
  <input
    {...rest}
    type="checkbox"
    checked={rest.checked ?? false}
    className={getFieldClasses({...meta, block: false, isCheckbox: true})}
  />
);
