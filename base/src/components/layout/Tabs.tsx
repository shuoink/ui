import type {FC} from 'react';

export const Tabs: FC = ({children}) => {
  return <div className="flex gap-2 w-full">{children}</div>;
};
