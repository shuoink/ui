import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {RadioSelect as Component} from './RadioSelect';

const meta: Meta = {
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

export const RadioSelect: VFC = () => (
  <Component name="test">{options}</Component>
);

export const Validity: VFC = () => (
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
