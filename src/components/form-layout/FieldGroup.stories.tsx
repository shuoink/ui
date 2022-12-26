import type {FC} from 'react';
import TextInput from '../form-controls/TextInput.js';
import Component from './FieldGroup.js';

const meta = {
  title: 'Base/Forms/Layout/Field Group',
  component: Component,
};

export const FieldGroup: FC = () => (
  <Component label="Label">
    <TextInput />
  </Component>
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <Component label="Valid" meta={{touched: true}}>
      <TextInput />
    </Component>
    <Component
      label="Invalid"
      meta={{touched: true, errors: ['Field is invalid!']}}
    >
      <TextInput />
    </Component>
  </div>
);

export default meta;
