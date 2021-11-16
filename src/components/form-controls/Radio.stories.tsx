import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Radio as Component} from './Radio';

const meta: Meta = {
  title: 'Forms/Controls/Radio',
  component: Component,
};

export const Radio: VFC = () => (
  <div className="flex gap-2">
    <Component name="test" value="value" />
    <Component name="test" value="value" checked />
  </div>
);

export const Validity: VFC = () => (
  <>
    <div className="inline-grid grid-cols-2 gap-2">
      <Component
        name="test"
        value="valid"
        meta={{touched: true, valid: true}}
      />
      <Component
        name="test"
        value="valid2"
        checked
        meta={{touched: true, valid: true}}
      />

      <Component
        name="test2"
        value="invalid"
        meta={{touched: true, valid: false}}
      />
      <Component
        name="test2"
        value="invalid2"
        checked
        meta={{touched: true, valid: false}}
      />
    </div>
  </>
);

export default meta;
