import type {ReactNode} from 'react';
import {Component} from 'react';
import {Alert} from '../feedback/Alert';

type Props = {
  children: ReactNode;
};

type State = {
  error: Error | null;
};

export class ErrorBoundary extends Component<Props, State> {
  state: State = {error: null};

  static getDerivedStateFromError(error: Error): Partial<State> {
    return {error};
  }

  render(): ReactNode {
    const {
      props: {children},
      state: {error},
    } = this;

    return error ? (
      <Alert type="error">
        Uhoh! Something went wrong!
        {process.env.NODE_ENV === 'development' && <pre>{error.stack}</pre>}
      </Alert>
    ) : (
      children
    );
  }
}
