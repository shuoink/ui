import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Checkbox as Component} from './Checkbox';

const meta: Meta = {
  title: 'Forms/Controls/Checkbox',
  component: Component,
};

export const Checkbox: VFC = () => (
  <div className="flex gap-2">
    <Component value="value" />
    <Component value="value" checked />
  </div>
);

export const Validity: VFC = () => (
  <>
    <div className="inline-grid grid-cols-2 gap-2">
      <Component value="valid" meta={{touched: true, valid: true}} />
      <Component value="valid" checked meta={{touched: true, valid: true}} />

      <Component value="valid" meta={{touched: true, valid: false}} />
      <Component value="valid" checked meta={{touched: true, valid: false}} />
    </div>
  </>
);

export default meta;
