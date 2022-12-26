import type {ReactElement, FC} from 'react';
import {cloneElement} from 'react';
import {clsx} from 'clsx';
import type {FieldMeta} from '../../_internal/utils/types.js';
import FieldFeedback from '../form-feedback/FieldFeedback.js';
import isEmptyOrNil from '../../_internal/utils/isEmptyOrNil.js';
import Label from './Label.js';

type FieldGroupProps = {
  label: string;
  labelFor?: string;
  meta?: FieldMeta;
  children: ReactElement<{meta?: FieldMeta}>;
  row?: boolean | 'reverse';
};

const FieldGroup: FC<FieldGroupProps> = ({
  children,
  meta,
  label,
  labelFor,
  row,
}) => {
  const isValid = isEmptyOrNil(meta?.errors);
  return (
    <div>
      <div
        className={clsx('flex gap-2', {
          'items-center': row,
          'flex-col': !row,
          'justify-between': row,
          'md:justify-start': row && row !== 'reverse',
          'flex-row-reverse md:justify-end': row === 'reverse',
        })}
      >
        <Label htmlFor={labelFor}>{label}</Label>
        {cloneElement(children, {
          meta: {
            ...meta,
            dock: {bottom: !isValid ? true : undefined},
          },
        })}
      </div>
      <FieldFeedback
        {...meta}
        dock={{top: ['borderRadius']}}
        displayName={meta?.displayName ?? label}
      />
    </div>
  );
};

export default FieldGroup;
