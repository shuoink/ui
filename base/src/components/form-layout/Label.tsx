import classNames from 'classnames';
import type {VFC} from 'react';

export const Label: VFC<
  JSX.IntrinsicElements['label'] & {
    display?: 'block' | 'inline';
  }
> = ({children, htmlFor, display, ...rest}) => {
  const className = classNames({
    'cursor-pointer': htmlFor,
    'block': display === 'block',
    'inline': display === 'inline',
  });
  if (!htmlFor && (!children || typeof children === 'string')) {
    return <span className={className}>{children}</span>;
  }
  return (
    <label {...rest} className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
