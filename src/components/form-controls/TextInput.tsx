import type {FC} from 'react';
import type {FieldMeta, Unstyled} from '../../types';
import {getFieldClasses} from '../../utils/getFieldClasses';

export const TextInput: FC<Unstyled<'input'> & {meta?: FieldMeta}> = ({
  meta,
  ...rest
}) => <input {...rest} className={getFieldClasses(meta)} />;