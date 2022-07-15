import type {FC, ReactNode} from 'react';
import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import {IncrementHeadingLevel} from '../utils/IncrementHeadingLevel.js';

const clsx = defaultImport(_clsx);

export const Card: FC<{
  grow?: boolean;
  children?: ReactNode;
}> = ({grow, children}) => {
  return (
    <IncrementHeadingLevel>
      <div
        className={clsx(
          'flex flex-col bg-white border border-black rounded-lg shadow-lg duration-75 w-full p-2',
          {'flex-grow': grow},
        )}
      >
        {children}
      </div>
    </IncrementHeadingLevel>
  );
};
