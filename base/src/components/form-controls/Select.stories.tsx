import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Select as Component} from './Select';

const meta: Meta = {
  title: 'Base/Forms/Controls/Select',
  component: Component,
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

export const Select: VFC = () => <Component value="value" />;

export const Validity: VFC = () => (
  <div className="flex gap-2">
    <Component value="valid" meta={{touched: true, valid: true}}>
      {options}
    </Component>
    <Component value="invalid" meta={{touched: true, valid: false}}>
      {options}
    </Component>
  </div>
);

export const Docked: VFC = () => (
  <div className="flex gap-2">
    <Component value="left" meta={{dock: {left: true}}}>
      {options}
    </Component>
    <Component value="right" meta={{dock: {right: true}}}>
      {options}
    </Component>
    <Component value="top" meta={{dock: {top: true}}}>
      {options}
    </Component>
    <Component value="bottom" meta={{dock: {bottom: true}}}>
      {options}
    </Component>

    <Component
      value="all"
      meta={{dock: {left: true, right: true, top: true, bottom: true}}}
    >
      {options}
    </Component>

    <Component
      value="left, preserveBorder"
      meta={{dock: {left: ['borderRadius']}}}
    >
      {options}
    </Component>
    <Component
      value="right, preserveBorder"
      meta={{dock: {right: ['borderRadius']}}}
    >
      {options}
    </Component>
    <Component
      value="top, preserveBorder"
      meta={{dock: {top: ['borderRadius']}}}
    >
      {options}
    </Component>
    <Component
      value="bottom, preserveBorder"
      meta={{dock: {bottom: ['borderRadius']}}}
    >
      {options}
    </Component>

    <Component
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
    </Component>
  </div>
);

export default meta;
