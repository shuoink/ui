import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {ErrorBoundary as Component} from './ErrorBoundary';

const meta: Meta = {
  title: 'Base/Utils/ErrorBoundary',
  component: Component,
};

const FailComponent: VFC = () => {
  throw new Error('Expected Error!');
};

export const ErrorBoundary: VFC = () => (
  <Component>
    <FailComponent />
  </Component>
);

export default meta;
