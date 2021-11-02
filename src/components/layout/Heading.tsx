import classNames from 'classnames';
import type {FC} from 'react';
import {useContext} from 'react';
import type {HeadingLevel} from '../../contexts/HeadingLevelContext';
import {HeadingLevelContext} from '../../contexts/HeadingLevelContext';

export const Heading: FC<
  JSX.IntrinsicElements['h1'] & {
    level?: HeadingLevel;
  }
> = ({level: levelProp, children, ...rest}) => {
  const levelContext = useContext(HeadingLevelContext) ?? 1;
  const level = levelProp ?? levelContext;
  const Tag: `h${HeadingLevel}` = `h${level}`;

  const className =
    rest.className ??
    classNames('text-headings dark:text-headings-dark', {
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
