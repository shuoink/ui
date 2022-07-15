import type {FC} from 'react';
import {RadioSelect as Component} from './RadioSelect.js';

const meta = {
  title: 'Base/Forms/Controls/RadioSelect',
  component: Component,
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
  <Component name="test">{options}</Component>
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <Component name="test" meta={{touched: true, valid: true}}>
      {options}
    </Component>
    <Component name="test2" meta={{touched: true, valid: false}}>
      {options}
    </Component>
  </div>
);

export default meta;
