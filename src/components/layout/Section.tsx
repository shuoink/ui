import type {FC} from 'react';
import type {HeadingLevel} from '../../contexts/HeadingLevelContext';
import IncrementHeadingLevel from '../utils/IncrementHeadingLevel';

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
