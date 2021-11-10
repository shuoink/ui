import type {FC} from 'react';
import React, {Children} from 'react';

export const Masonry: FC = ({children}) => {
  const tiles = Children.toArray(children);
  const columns = 5;
  return (
    <div className="grid gap-4 isolate grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {/* eslint-disable-next-line unicorn/no-new-array -- this is a stupid rule. we should disable it */}
      {new Array(columns).fill(0).map((_col, colIndex) => (
        // eslint-disable-next-line react/no-array-index-key -- index key is fine here
        <div key={colIndex} className="space-y-4">
          {tiles.filter((_tile, tileIndex) => tileIndex % columns === colIndex)}
        </div>
      ))}
    </div>
  );
};
