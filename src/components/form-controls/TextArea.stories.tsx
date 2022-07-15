import type {FC} from 'react';
import Component from './TextArea.js';

const meta = {
  title: 'Base/Forms/Controls/TextArea',
  component: Component,
};

export const TextArea: FC = () => <Component value="value" />;

export const Validity: FC = () => (
  <div className="flex gap-2">
    <Component value="valid" meta={{touched: true, valid: true}} />
    <Component value="invalid" meta={{touched: true, valid: false}} />
  </div>
);

export const Docked: FC = () => (
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
      meta={{dock: {left: ['borderRadius']}}}
    />
    <Component
      value="right, preserveBorder"
      meta={{dock: {right: ['borderRadius']}}}
    />
    <Component
      value="top, preserveBorder"
      meta={{dock: {top: ['borderRadius']}}}
    />
    <Component
      value="bottom, preserveBorder"
      meta={{dock: {bottom: ['borderRadius']}}}
    />

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
    />
  </div>
);

export default meta;
