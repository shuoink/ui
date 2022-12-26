import type {
  ComponentProps,
  ElementType,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from 'react';
import {useId, forwardRef} from 'react';
import FieldGroup from '../../components/form-layout/FieldGroup.js';
import type {FieldMeta} from '../utils/types.js';

const withFieldGroup = <REF_TYPE, PROPS extends {id?: string}>(
  Control:
    | ElementType<PropsWithoutRef<PROPS> & RefAttributes<REF_TYPE>>
    | ForwardRefExoticComponent<
        PropsWithoutRef<PROPS> & RefAttributes<REF_TYPE>
      >,
  groupProps: Partial<ComponentProps<typeof FieldGroup>> = {},
): ForwardRefExoticComponent<
  PropsWithoutRef<
    PROPS & {
      meta?: FieldMeta;
      label: string;
    }
  > &
    RefAttributes<REF_TYPE>
> => {
  const ControlGroup = forwardRef<
    REF_TYPE,
    PROPS & {
      meta?: FieldMeta;
      label: string;
    }
  >(({meta, label, ...controlProps}, ref) => {
    const id = useId();
    return (
      <FieldGroup
        {...groupProps}
        meta={{...groupProps.meta, ...meta}}
        label={label}
        labelFor={id}
      >
        {
          // @ts-expect-error: ¯\_(ツ)_/¯
          <Control {...controlProps} ref={ref} id={id} />
        }
      </FieldGroup>
    );
  });

  ControlGroup.displayName = `ControlGroup(${
    typeof Control === 'string' ? Control : Control.displayName ?? Control.name
  })`;

  return ControlGroup;
};

export default withFieldGroup;
