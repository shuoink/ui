import type {FC} from 'react';
import ErrorAlertComponent from './ErrorAlert.js';

const meta = {
  title: 'Base/Feedback/ErrorAlert',
  component: ErrorAlertComponent,
};

const error = new Error('test');

export const Default: FC = () => <ErrorAlertComponent error={error} />;

export default meta;
