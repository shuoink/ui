import type {FC, ReactNode} from 'react';
import {isValidHashHref} from '../../_internal/utils/isValidHashHref.js';

type Props = {
  /** Link URL. Must be a hash link (i.e. #my-id). */
  href: string;
  children?: ReactNode;
};

export const SkipLink: FC<Props> = ({href, children = 'Skip to Content'}) => {
  if (!isValidHashHref(href)) {
    throw new Error('Hash link href is invalid!');
  }
  return (
    <a
      href={href}
      className="absolute rounded-md -left-full focus:text-white focus:w-48 focus:p-1 focus:m-1 focus:text-center focus:z-50 focus:left-0 focus:h-auto focus:bg-primary-600 top-auto w-px h-px overflow-hidden z-[-999]"
    >
      {children}
    </a>
  );
};
