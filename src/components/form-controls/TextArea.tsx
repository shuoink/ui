import type {FC} from 'react';
import type {FieldMeta, Unstyled} from '../../types';
import {getFieldClasses} from '../../utils/getFieldClasses';

export const TextArea: FC<Unstyled<'textarea'> & {meta?: FieldMeta}> = ({
  meta,
  ...rest
}) => <textarea {...rest} className={getFieldClasses(meta)} />;