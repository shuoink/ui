import type {ReactElement, FC} from 'react';
import {cloneElement} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import {FieldFeedback} from '../form-feedback/FieldFeedback.js';
import {Label} from './Label.js';

type FieldGroupProps = {
  label: string;
  labelFor?: string;
  meta?: FieldMeta;
  children: ReactElement<{meta?: FieldMeta}>;
};

export const FieldGroup: FC<FieldGroupProps> = ({
  children,
  meta,
  label,
  labelFor,
}) => {
  return (
    <div>
      <Label htmlFor={labelFor}>{label}</Label>
      {cloneElement(children, {
        meta: {
          ...meta,
          dock: {bottom: meta?.valid === false ? true : undefined},
        },
      })}
      <FieldFeedback
        {...meta}
        dock={{top: ['borderRadius']}}
        displayName={meta?.displayName ?? label}
      />
    </div>
  );
};
