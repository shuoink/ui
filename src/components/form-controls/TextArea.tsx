import {forwardRef} from 'react';
import type {FieldMeta, Unstyled} from '../../_internal/utils/types.js';
import {getFieldClasses} from '../../_internal/utils/getFieldClasses.js';
import withFieldGroup from '../../_internal/decorators/withFieldGroup.js';

const TextArea = forwardRef<
  HTMLTextAreaElement,
  Unstyled<'textarea'> & {meta?: FieldMeta}
>(({meta, ...rest}, ref) => (
  <textarea {...rest} ref={ref} className={getFieldClasses(meta)} />
));

export const TextAreaGroup = withFieldGroup(TextArea);

export default TextArea;
