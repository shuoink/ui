import type {ChangeEvent, FC} from 'react';
import {Children} from 'react';
import type {FieldMeta} from '../../types';
import {Label} from '../form-layout/Label';
import {getOptionLabel} from '../../utils/getOptionLabel';
import {getOptionValue} from '../../utils/getOptionValue';
import {isOptionElement} from '../../utils/isOptionElement';
import {Radio} from './Radio';

export const RadioSelect: FC<{
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  meta?: FieldMeta;
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
