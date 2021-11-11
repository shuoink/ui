import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Input} from '../form-controls/Input';
import {FieldGroup as Component} from './FieldGroup';

const meta: Meta = {
  title: 'Components/Form Layout/Field Group',
  component: Component,
};

export const FieldGroup: VFC = () => (
  <Component label="Label">
    <Input />
  </Component>
);

export const Validity: VFC = () => (
  <div className="flex gap-2">
    <Component label="Valid" meta={{touched: true, valid: true}}>
      <Input />
    </Component>
    <Component
      label="Invalid"
      meta={{touched: true, valid: false, errors: ['Field is invalid!']}}
    >
      <Input />
    </Component>
  </div>
);

export default meta;
