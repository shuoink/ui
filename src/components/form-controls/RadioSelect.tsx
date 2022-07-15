import type {ChangeEvent, FC, ReactNode} from 'react';
import {Children} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';
import Label from '../form-layout/Label.js';
import {getOptionLabel} from '../../_internal/utils/getOptionLabel.js';
import {getOptionValue} from '../../_internal/utils/getOptionValue.js';
import {isOptionElement} from '../../_internal/utils/isOptionElement.js';
import Radio from './Radio.js';

const RadioSelect: FC<{
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  meta?: FieldMeta;
  children?: ReactNode;
}> = ({name, value, defaultValue, onChange, meta, children}) => {
  return (
    <div>
      {Children.map(children, child => {
        if (isOptionElement(child)) {
          const optionValue = getOptionValue(child);
          return (
            <Label display="block">
              <Radio
                name={name}
                value={optionValue}
                checked={
                  value === undefined ? undefined : optionValue === value
                }
                defaultChecked={optionValue === defaultValue}
                onChange={onChange}
                meta={meta}
              />{' '}
              {getOptionLabel(child)}
            </Label>
          );
        }
        return null;
      })}
    </div>
  );
};

export default RadioSelect;
