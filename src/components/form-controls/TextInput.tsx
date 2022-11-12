import {FC, forwardRef} from 'react';
import type {FieldMeta, Unstyled} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';

const TextInput = forwardRef<
  HTMLInputElement,
  Unstyled<'input'> & {meta?: FieldMeta}
>(({meta, ...rest}, ref) => (
  <input {...rest} ref={ref} className={getFieldClasses(meta)} />
));

export default TextInput;
