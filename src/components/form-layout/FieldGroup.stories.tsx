import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {TextInput} from '../form-controls/TextInput';
import {FieldGroup as Component} from './FieldGroup';

const meta: Meta = {
  title: 'Forms/Layout/Field Group',
  component: Component,
};

export const FieldGroup: VFC = () => (
  <Component label="Label">
    <TextInput />
  </Component>
);

export const Validity: VFC = () => (
  <div className="flex gap-2">
    <Component label="Valid" meta={{touched: true, valid: true}}>
      <TextInput />
    </Component>
    <Component
      label="Invalid"
      meta={{touched: true, valid: false, errors: ['Field is invalid!']}}
    >
      <TextInput />
    </Component>
  </div>
);

export default meta;
