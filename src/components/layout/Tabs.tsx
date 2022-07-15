import type {FC, ReactNode} from 'react';

const Tabs: FC<{children?: ReactNode}> = ({children}) => {
  return <div className="flex gap-2 w-full">{children}</div>;
};

export default Tabs;
