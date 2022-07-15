import type {FC, ReactNode} from 'react';
import {useContext} from 'react';
import type {HeadingLevel} from '../../_internal/contexts/HeadingLevelContext.js';
import {HeadingLevelContext} from '../../_internal/contexts/HeadingLevelContext.js';

const IncrementHeadingLevel: FC<{
  level?: HeadingLevel;
  children: ReactNode;
}> = ({level: levelProperty, children}) => {
  const previousLevel = useContext(HeadingLevelContext) ?? 0;
  const nextLevel = (
    previousLevel < 6 ? previousLevel + 1 : previousLevel
  ) as HeadingLevel;
  const level = levelProperty ?? nextLevel;
  return (
    <HeadingLevelContext.Provider value={level}>
      {children}
    </HeadingLevelContext.Provider>
  );
};

export default IncrementHeadingLevel;
