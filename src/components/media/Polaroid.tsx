import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {FC, ReactNode} from 'react';

const clsx = defaultImport(_clsx);

const Polaroid: FC<{children?: ReactNode}> = ({children}) => (
  <div
    className={clsx(
      'bg-white p-4 pb-16 transform -rotate-3 hover:rotate-0 hover:scale-105 shadow-lg duration-75 relative inline-block border-2 border-gray-300 rounded group',
    )}
  >
    <div className="sepia opacity-10 group-hover:sepia-0 group-hover:opacity-100 duration-[5s]">
      {children}
    </div>
  </div>
);

export default Polaroid;
