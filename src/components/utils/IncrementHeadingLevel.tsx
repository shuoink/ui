import type {FC} from 'react';
import {useContext} from 'react';
import type {HeadingLevel} from '../../contexts/HeadingLevelContext';
import HeadingLevelContext from '../../contexts/HeadingLevelContext';

const IncrementHeadingLevel: FC<{level?: HeadingLevel}> = ({
  level: levelProperty,
  children,
}) => {
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
