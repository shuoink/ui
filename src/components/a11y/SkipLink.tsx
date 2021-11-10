import type {FC} from 'react';

export const SkipLink: FC<{href: string}> = ({
  href,
  children = 'Skip to Content',
}) => (
  <a
    href={href}
    className="absolute rounded-md -left-full focus:text-white focus:w-48 focus:p-1 focus:m-1 focus:text-center focus:z-50 focus:left-0 focus:h-auto focus:bg-primary-600 top-auto w-px h-px overflow-hidden z-[-999]"
  >
    {children}
  </a>
);
