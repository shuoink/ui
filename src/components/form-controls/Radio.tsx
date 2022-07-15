import type {FC} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

const Radio: FC<
  JSX.IntrinsicElements['input'] & {meta?: Omit<FieldMeta, 'dock' | 'isRadio'>}
> = ({meta, ...rest}) => (
  <input
    {...rest}
    type="radio"
    className={getFieldClasses({...meta, block: false, isRadio: true})}
  />
);

export default Radio;
