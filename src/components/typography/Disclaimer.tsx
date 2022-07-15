import type {FC, ReactNode} from 'react';

export const Disclaimer: FC<{children: ReactNode}> = ({children}) => (
  <div className="text-xs text-gray-600 dark:text-gray-400">{children}</div>
);
