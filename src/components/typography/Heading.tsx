import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {FC} from 'react';
import {useContext} from 'react';
import type {HeadingLevel} from '../../_internal/contexts/HeadingLevelContext.js';
import {HeadingLevelContext} from '../../_internal/contexts/HeadingLevelContext.js';

const clsx = defaultImport(_clsx);

const Heading: FC<
  JSX.IntrinsicElements['h1'] & {
    level?: HeadingLevel;
  }
> = ({level: levelProp, children, ...rest}) => {
  const levelContext = useContext(HeadingLevelContext) ?? 1;
  const level = levelProp ?? levelContext;
  const Tag: `h${HeadingLevel}` = `h${level}`;

  const className =
    rest.className ??
    clsx('text-gray-900 dark:text-gray-100', {
      'text-6xl': level === 1,
      'text-5xl': level === 2,
      'text-4xl': level === 3,
      'text-3xl': level === 4,
      'text-2xl': level === 5,
      'text-xl': level === 6,
    });

  return (
    <Tag {...rest} className={className}>
      {children}
    </Tag>
  );
};

export default Heading;
