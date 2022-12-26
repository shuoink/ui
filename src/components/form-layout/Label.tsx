import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {FC} from 'react';

const clsx = defaultImport(_clsx);

const Label: FC<
  JSX.IntrinsicElements['label'] & {
    display?: 'block' | 'flex' | 'inline';
  }
> = ({children, htmlFor, display, ...rest}) => {
  const className = clsx({
    'cursor-pointer': htmlFor,
    'block': display === 'block',
    'inline': display === 'inline',
    'flex gap-2 items-center': display === 'flex',
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

export default Label;
