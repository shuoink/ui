import type {FC} from 'react';
import Component from './Radio.js';

const meta = {
  title: 'Base/Forms/Controls/Radio',
  component: Component,
};

export const Radio: FC = () => (
  <div className="flex gap-2">
    <Component name="test" value="value" />
    <Component name="test" value="value" checked />
  </div>
);

export const Validity: FC = () => (
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
