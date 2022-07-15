import type {FC} from 'react';
import {ErrorBoundary as Component} from './ErrorBoundary.js';

const meta = {
  title: 'Base/Utils/ErrorBoundary',
  component: Component,
};

const FailComponent: FC = () => {
  throw new Error('Expected Error!');
};

export const ErrorBoundary: FC = () => (
  <Component>
    <FailComponent />
  </Component>
);

export default meta;
