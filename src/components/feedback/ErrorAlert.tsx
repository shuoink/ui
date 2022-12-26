import type {FC} from 'react';
import isError from '../../_internal/utils/isError.js';
import Alert from './Alert.js';

const ErrorAlert: FC<{error: unknown}> = ({error}) => (
  <Alert type="error">
    {process.env.NODE_ENV === 'development' ? (
      <pre>{isError(error) ? error.stack : String(error)}</pre>
    ) : (
      'An unexpected error has occurred! Please try again later.'
    )}
  </Alert>
);

export default ErrorAlert;
