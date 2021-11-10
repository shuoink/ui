import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Alert as AlertComponent} from './Alert';

const meta: Meta = {
  title: 'Components/Feedback/Alert',
  component: AlertComponent,
};

export const Default: VFC = () => (
  <>
    <AlertComponent>Default</AlertComponent>
  </>
);

export const Success: VFC = () => (
  <>
    <AlertComponent type="success">Alert Text</AlertComponent>
  </>
);

export const Danger: VFC = () => (
  <>
    <AlertComponent type="danger">Alert Text</AlertComponent>
  </>
);

export const Error: VFC = () => (
  <>
    <AlertComponent type="error">Alert Text</AlertComponent>
  </>
);

export const Info: VFC = () => (
  <>
    <AlertComponent type="info">Alert Text</AlertComponent>
  </>
);

export const Warning: VFC = () => (
  <>
    <AlertComponent type="warning">Alert Text</AlertComponent>
  </>
);

export default meta;
