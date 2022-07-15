import type {FC, ReactNode} from 'react';

const Corset: FC<{children?: ReactNode}> = ({children}) => (
  <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8">
    {children}
  </div>
);

export default Corset;
