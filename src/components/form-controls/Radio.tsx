import type {VFC} from 'react';
import type {FieldMeta} from '../../types';
import {getFieldClasses} from '../../utils/getFieldClasses';

export const Radio: VFC<
  JSX.IntrinsicElements['input'] & {meta?: Omit<FieldMeta, 'dock' | 'isRadio'>}
> = ({meta, ...rest}) => (
  <input
    {...rest}
    type="radio"
    className={getFieldClasses({...meta, block: false, isRadio: true})}
  />
);
