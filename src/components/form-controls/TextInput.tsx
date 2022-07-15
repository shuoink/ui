import type {FC} from 'react';
import type {FieldMeta, Unstyled} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

const TextInput: FC<Unstyled<'input'> & {meta?: FieldMeta}> = ({
  meta,
  ...rest
}) => <input {...rest} className={getFieldClasses(meta)} />;

export default TextInput;
