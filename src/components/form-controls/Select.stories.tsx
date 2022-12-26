import type {FC} from 'react';
import SelectComponent, {
  SelectGroup as SelectGroupComponent,
} from './Select.js';

const meta = {
  title: 'Base/Forms/Controls/Select',
  component: SelectComponent,
};

const options = [
  <option key="default">{''}</option>,
  <option key="nihil">nihil</option>,
  <option key="culpa">culpa</option>,
  <option key="molestiae">molestiae</option>,
  <option key="provident">provident</option>,
  <option key="consequatur">consequatur</option>,
  <option key="eos">eos</option>,
];

export const Select: FC = () => (
  <SelectComponent value="value">{options}</SelectComponent>
);

export const SelectGroup: FC = () => (
  <SelectGroupComponent label="Label" value="value">
    {options}
  </SelectGroupComponent>
);

export const Validity: FC = () => (
  <div className="flex gap-2">
    <SelectComponent value="valid" meta={{touched: true}}>
      {options}
    </SelectComponent>
    <SelectComponent
      value="invalid"
      meta={{touched: true, errors: ['invalid']}}
    >
      {options}
    </SelectComponent>
  </div>
);

export const Docked: FC = () => (
  <div className="flex gap-2">
    <SelectComponent value="left" meta={{dock: {left: true}}}>
      {options}
    </SelectComponent>
    <SelectComponent value="right" meta={{dock: {right: true}}}>
      {options}
    </SelectComponent>
    <SelectComponent value="top" meta={{dock: {top: true}}}>
      {options}
    </SelectComponent>
    <SelectComponent value="bottom" meta={{dock: {bottom: true}}}>
      {options}
    </SelectComponent>

    <SelectComponent
      value="all"
      meta={{dock: {left: true, right: true, top: true, bottom: true}}}
    >
      {options}
    </SelectComponent>

    <SelectComponent
      value="left, preserveBorder"
      meta={{dock: {left: ['borderRadius']}}}
    >
      {options}
    </SelectComponent>
    <SelectComponent
      value="right, preserveBorder"
      meta={{dock: {right: ['borderRadius']}}}
    >
      {options}
    </SelectComponent>
    <SelectComponent
      value="top, preserveBorder"
      meta={{dock: {top: ['borderRadius']}}}
    >
      {options}
    </SelectComponent>
    <SelectComponent
      value="bottom, preserveBorder"
      meta={{dock: {bottom: ['borderRadius']}}}
    >
      {options}
    </SelectComponent>

    <SelectComponent
      value="all, preserveBorder"
      meta={{
        dock: {
          left: ['borderRadius'],
          right: ['borderRadius'],
          top: ['borderRadius'],
          bottom: ['borderRadius'],
        },
      }}
    >
      {options}
    </SelectComponent>
  </div>
);

export default meta;
