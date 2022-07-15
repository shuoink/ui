import {GlobalProvider} from '@ladle/react';
import React from 'react';
import '../src/index.css';

export const Provider: GlobalProvider = ({children}) => (
  <div className="h-full bg-gray-100 overflow-auto shadow-xl">{children}</div>
);
