import type {FC} from 'react';
import type {FieldMeta, Unstyled} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

export const TextArea: FC<Unstyled<'textarea'> & {meta?: FieldMeta}> = ({
  meta,
  ...rest
}) => <textarea {...rest} className={getFieldClasses(meta)} />;
