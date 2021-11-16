import type {ReactElement, ReactNode, VFC} from 'react';
import {cloneElement} from 'react';
import type {FieldMeta} from '../../types';
import {FieldFeedback} from '../form-feedback/FieldFeedback';
import {Label} from './Label';

type FieldGroupProps = {
  label: string;
  labelFor?: string;
  meta?: FieldMeta;
  children: ReactElement<{meta?: FieldMeta}>;
};

export const FieldGroup: VFC<FieldGroupProps> = ({
  children,
  meta,
  label,
  labelFor,
}) => {
  return (
    <div>
      <Label htmlFor={labelFor}>{label}</Label>
      {cloneElement(children, {
        meta: {...meta, dock: {bottom: meta?.valid === false}},
      })}
      <FieldFeedback
        {...meta}
        dock={{top: true}}
        displayName={meta?.displayName ?? label}
      />
    </div>
  );
};
