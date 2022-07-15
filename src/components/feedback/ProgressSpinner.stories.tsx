import type {FC} from 'react';
import Component from './ProgressSpinner.js';

const meta = {
  title: 'Base/Feedback/Progress Spinner',
  component: Component,
};

export const ProgressSpinner: FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      <Component progress={0} />
      <Component progress={0.05} />
      <Component progress={0.1} />
      <Component progress={0.15} />
      <Component progress={0.2} />
      <Component progress={0.25} />
      <Component progress={0.3} />
      <Component progress={0.35} />
      <Component progress={0.4} />
      <Component progress={0.45} />
      <Component progress={0.5} />
      <Component progress={0.55} />
      <Component progress={0.6} />
      <Component progress={0.65} />
      <Component progress={0.7} />
      <Component progress={0.75} />
      <Component progress={0.8} />
      <Component progress={0.85} />
      <Component progress={0.9} />
      <Component progress={0.95} />
      <Component progress={1} />
    </div>
  );
};

export const Grow: FC = () => {
  return (
    <div className="flex w-1/2">
      <Component progress={0.85} grow />
    </div>
  );
};

export default meta;
