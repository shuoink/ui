import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {TextArea as Component} from './TextArea';

const meta: Meta = {
  title: 'Forms/Controls/TextArea',
  component: Component,
};

export const TextArea: VFC = () => <Component value="value" />;

export const Validity: VFC = () => (
  <div className="flex gap-2">
    <Component value="valid" meta={{touched: true, valid: true}} />
    <Component value="invalid" meta={{touched: true, valid: false}} />
  </div>
);

export const Docked: VFC = () => (
  <div className="flex gap-2">
    <Component value="left" meta={{dock: {left: true}}} />
    <Component value="right" meta={{dock: {right: true}}} />
    <Component value="top" meta={{dock: {top: true}}} />
    <Component value="bottom" meta={{dock: {bottom: true}}} />

    <Component
      value="all"
      meta={{dock: {left: true, right: true, top: true, bottom: true}}}
    />

    <Component
      value="left, preserveBorder"
      meta={{dock: {left: true, preserveBorder: true}}}
    />
    <Component
      value="right, preserveBorder"
      meta={{dock: {right: true, preserveBorder: true}}}
    />
    <Component
      value="top, preserveBorder"
      meta={{dock: {top: true, preserveBorder: true}}}
    />
    <Component
      value="bottom, preserveBorder"
      meta={{dock: {bottom: true, preserveBorder: true}}}
    />

    <Component
      value="all, preserveBorder"
      meta={{
        dock: {
          left: true,
          right: true,
          top: true,
          bottom: true,
          preserveBorder: true,
        },
      }}
    />
  </div>
);

export default meta;