import type {FC} from 'react';
import {useContext} from 'react';
import {__RouterContext} from 'react-router';
import {Link} from 'react-router-dom';
import isAbsoluteUrl from '../../utils/isAbsoluteUrl';

const Hyperlink: FC<JSX.IntrinsicElements['a']> = ({
  href,
  children,
  className = 'text-links hover:underline',
  ...rest
}) => {
  const routerContext = Boolean(useContext(__RouterContext));

  if (href && isAbsoluteUrl(href)) {
    return (
      <a
        {...rest}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  if (href && routerContext) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
};

export default Hyperlink;
