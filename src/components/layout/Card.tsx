import type {FC} from 'react';
import classNames from 'classnames';
import {IncrementHeadingLevel} from '../utils/IncrementHeadingLevel';

export const Card: FC<{
  grow?: boolean;
}> = ({grow, children}) => {
  return (
    <IncrementHeadingLevel>
      <div
        className={classNames(
          'flex flex-col bg-white rounded-lg transform hover:-translate-y-2 hover:scale-105 shadow-lg duration-75 w-full p-2',
          {'flex-grow': grow},
        )}
      >
        {children}
      </div>
    </IncrementHeadingLevel>
  );
};
