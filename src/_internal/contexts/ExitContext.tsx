import {createContext} from 'react';

const noop = () => {
  // nothing
};

const ExitContext = createContext(noop);

export default ExitContext;
