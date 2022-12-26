import type {FC} from 'react';
import CheckboxComponent, {
  CheckboxGroup as CheckboxGroupComponent,
} from './Checkbox.js';

const meta = {
  title: 'Base/Forms/Controls/Checkbox',
  component: CheckboxComponent,
};

export const Checkbox: FC = () => (
  <div className="flex gap-2">
    <CheckboxComponent value="value" />
    <CheckboxComponent value="value" checked />
  </div>
);

export const CheckboxGroup: FC = () => (
  <div className="flex flex-col gap-2">
    <CheckboxGroupComponent label="Label" value="value" />
    <CheckboxGroupComponent label="Label" value="value" checked />
  </div>
);

export const Validity: FC = () => (
  <>
    <div className="inline-grid grid-cols-2 gap-2">
      <CheckboxComponent value="valid" meta={{touched: true}} />
      <CheckboxComponent value="valid" checked meta={{touched: true}} />

      <CheckboxComponent
        value="valid"
        meta={{touched: true, errors: ['invalid']}}
      />
      <CheckboxComponent
        value="valid"
        checked
        meta={{touched: true, errors: ['invalid']}}
      />
    </div>
  </>
);

export default meta;
