import type {VFC} from 'react';
import type {FieldMeta} from '../../types';
import getFieldClasses from '../utils/getFieldClasses';

export const TextField: VFC<
  JSX.IntrinsicElements['input'] & {meta: FieldMeta}
> = ({meta, ...rest}) => <input {...rest} className={getFieldClasses(meta)} />;
