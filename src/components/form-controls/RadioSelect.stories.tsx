import type {FC} from 'react';
import RadioSelectComponent, {
  RadioSelectGroup as RadioSelectGroupComponent,
} from './RadioSelect.js';

const meta = {
  title: 'Base/Forms/Controls/RadioSelect',
  component: RadioSelectComponent,
};

const options = [
  <option key="nihil">nihil</option>,
  <option key="culpa">culpa</option>,
  <option key="molestiae">molestiae</option>,
  <option key="provident">provident</option>,
  <option key="consequatur">consequatur</option>,
  <option key="eos">eos</option>,
];

export const RadioSelect: FC = () => (
  <RadioSelectComponent name="test">{options}</RadioSelectComponent>
);

export const RadioSelectGroup: FC = () => (
  <RadioSelectGroupComponent label="Label" name="test">
    {options}
  </RadioSelectGroupComponent>
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <RadioSelectComponent name="test" meta={{touched: true}}>
      {options}
    </RadioSelectComponent>
    <RadioSelectComponent
      name="test2"
      meta={{touched: true, errors: ['invalid']}}
    >
      {options}
    </RadioSelectComponent>
  </div>
);

export default meta;
