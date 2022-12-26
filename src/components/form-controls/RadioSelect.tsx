import type {ChangeEvent, ReactNode} from 'react';
import {forwardRef, useImperativeHandle, useRef, Children} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import Label from '../form-layout/Label.js';
import {getOptionLabel} from '../../_internal/utils/getOptionLabel.js';
import {getOptionValue} from '../../_internal/utils/getOptionValue.js';
import {isOptionElement} from '../../_internal/utils/isOptionElement.js';
import withFieldGroup from '../../_internal/decorators/withFieldGroup.js';
import Radio from './Radio.js';

type Props = {
  id?: string;
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  meta?: FieldMeta;
  children?: ReactNode;
};

type Api = {
  readonly value: string;
};

const RadioSelect = forwardRef<Api, Props>(
  ({id, name, value, defaultValue, onChange, meta, children}, ref) => {
    const fieldsetRef = useRef<HTMLFieldSetElement | null>(null);

    useImperativeHandle(
      ref,
      (): Api => ({
        get value() {
          const checkedEl = fieldsetRef.current?.querySelector(
            ':checked',
          ) as HTMLInputElement | null;
          return checkedEl ? checkedEl.value : '';
        },
      }),
      [],
    );

    return (
      <fieldset id={id} ref={fieldsetRef}>
        {Children.map(children, child => {
          if (isOptionElement(child)) {
            const optionValue = getOptionValue(child);
            return (
              <Label display="flex">
                <Radio
                  name={name}
                  value={optionValue}
                  checked={
                    value === undefined ? undefined : optionValue === value
                  }
                  defaultChecked={optionValue === defaultValue}
                  onChange={onChange}
                  meta={meta}
                />
                {getOptionLabel(child)}
              </Label>
            );
          }
          return null;
        })}
      </fieldset>
    );
  },
);

export const RadioSelectGroup = withFieldGroup<Api, Props>(RadioSelect);

export default RadioSelect;
