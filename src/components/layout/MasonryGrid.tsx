import type {FC, ReactNode} from 'react';
import {Children} from 'react';

const MasonryGrid: FC<{children?: ReactNode}> = ({children}) => {
  const items = Children.toArray(children);
  const columns = 3; // TODO: detect this dynamically. also set the cols dynamically. use matchMedia?
  return (
    <div className="grid gap-2 isolate grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {new Array(columns).fill(0).map((_col, colIndex) => (
        // eslint-disable-next-line react/no-array-index-key -- index key is fine here
        <div key={colIndex} className="space-y-2">
          {items.filter((_item, itemIndex) => itemIndex % columns === colIndex)}
        </div>
      ))}
    </div>
  );
};

export default MasonryGrid;
