import type {FC} from 'react';
import {Spinner as Component} from './Spinner.js';

const meta = {
  title: 'Base/Feedback/Spinner',
  component: Component,
};

export const Spinner: FC = () => <Component delay={0} />;

export const Grow: FC = () => (
  <div className="w-1/2 flex border border-black">
    <Component delay={0} grow />
  </div>
);

export const Delayed: FC = () => (
  <div className="w-1/2 flex border border-black">
    <Component delay={5000} />
  </div>
);

export default meta;
