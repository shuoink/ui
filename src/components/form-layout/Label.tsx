import classNames from 'classnames';
import type {VFC} from 'react';

export const Label: VFC<JSX.IntrinsicElements['label']> = ({
  children,
  htmlFor,
  ...rest
}) => {
  const className = classNames({'cursor-pointer': htmlFor});
  if (!htmlFor && (!children || typeof children === 'string')) {
    return <div className={className}>{children}</div>;
  }
  return (
    <label {...rest} className={className} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
