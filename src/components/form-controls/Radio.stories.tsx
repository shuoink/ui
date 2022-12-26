import type {FC} from 'react';
import RadioComponent, {RadioGroup as RadioGroupComponent} from './Radio.js';

const meta = {
  title: 'Base/Forms/Controls/Radio',
  component: RadioComponent,
};

export const Radio: FC = () => (
  <div className="flex gap-2">
    <RadioComponent name="test" value="value" />
    <RadioComponent name="test" value="value" checked />
  </div>
);

export const RadioGroup: FC = () => (
  <div className="flex flex-col gap-2">
    <RadioGroupComponent label="Label" name="test" value="value" />
    <RadioGroupComponent label="Label" name="test" value="value" checked />
  </div>
);

export const Validity: FC = () => (
  <>
    <div className="inline-grid grid-cols-2 gap-2">
      <RadioComponent name="test" value="valid" meta={{touched: true}} />
      <RadioComponent
        name="test"
        value="valid2"
        checked
        meta={{touched: true}}
      />

      <RadioComponent
        name="test2"
        value="invalid"
        meta={{touched: true, errors: ['invalid']}}
      />
      <RadioComponent
        name="test2"
        value="invalid2"
        checked
        meta={{touched: true, errors: ['invalid']}}
      />
    </div>
  </>
);

export default meta;
