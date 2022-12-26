import {FC, forwardRef} from 'react';
import type {FieldMeta, Unstyled} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';
import withFieldGroup from '../../_internal/decorators/withFieldGroup.js';

type Props = Unstyled<'input'> & {meta?: FieldMeta};

const TextInput = forwardRef<HTMLInputElement, Props>(
  ({meta, ...rest}, ref) => (
    <input {...rest} ref={ref} className={getFieldClasses(meta)} />
  ),
);

export const TextInputGroup = withFieldGroup(TextInput);

export default TextInput;
