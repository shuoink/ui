import type {FC} from 'react';
import type {HeadingLevel} from '../../_internal/contexts/HeadingLevelContext.js';
import IncrementHeadingLevel from '../utils/IncrementHeadingLevel.js';

const Section: FC<
  JSX.IntrinsicElements['section'] & {
    level?: HeadingLevel;
  }
> = ({level, children, ...rest}) => {
  return (
    <IncrementHeadingLevel level={level}>
      <section {...rest}>{children}</section>
    </IncrementHeadingLevel>
  );
};

export default Section;
