import type {FC} from 'react';
import AlertComponent from './Alert.js';

const meta = {
  title: 'Base/Feedback/Alert',
  component: AlertComponent,
};

export const Default: FC = () => (
  <>
    <AlertComponent>Default</AlertComponent>
  </>
);

export const Success: FC = () => (
  <>
    <AlertComponent type="success">Alert Text</AlertComponent>
  </>
);

export const Danger: FC = () => (
  <>
    <AlertComponent type="danger">Alert Text</AlertComponent>
  </>
);

export const Error: FC = () => (
  <>
    <AlertComponent type="error">Alert Text</AlertComponent>
  </>
);

export const Info: FC = () => (
  <>
    <AlertComponent type="info">Alert Text</AlertComponent>
  </>
);

export const Warning: FC = () => (
  <>
    <AlertComponent type="warning">Alert Text</AlertComponent>
  </>
);

export default meta;
