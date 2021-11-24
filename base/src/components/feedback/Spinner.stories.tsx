import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Spinner as Component} from './Spinner';

const meta: Meta = {
  title: 'Base/Feedback/Spinner',
  component: Component,
};

export const Spinner: VFC = () => <Component delay={0} />;

export const Grow: VFC = () => (
  <div className="w-1/2 flex border border-black">
    <Component delay={0} grow />
  </div>
);

export const Delayed: VFC = () => (
  <div className="w-1/2 flex border border-black">
    <Component delay={5000} />
  </div>
);

export default meta;
