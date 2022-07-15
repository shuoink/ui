import type {FC, ReactNode} from 'react';
import {Children} from 'react';

export const IconLinks: FC<{children?: ReactNode}> = ({children}) => (
  <ul className="flex justify-center gap-2 p-2">
    {Children.map(children, child => (
      <li>{child}</li>
    ))}
  </ul>
);
