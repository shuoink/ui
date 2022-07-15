import type {FC} from 'react';
import Component from './Checkbox.js';

const meta = {
  title: 'Base/Forms/Controls/Checkbox',
  component: Component,
};

export const Checkbox: FC = () => (
  <div className="flex gap-2">
    <Component value="value" />
    <Component value="value" checked />
  </div>
);

export const Validity: FC = () => (
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
