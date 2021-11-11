import type {FC} from 'react';
import {useEffect, useRef, Children} from 'react';

export const InfiniteCarousel: FC = ({children}) => {
  const moverRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mover = moverRef.current;
    if (!mover) {
      return;
    }
    mover.animate(
      [{transform: 'translateX(0)'}, {transform: 'translateX(-50%)'}],
      {iterations: Number.POSITIVE_INFINITY, duration: 60_000},
    );
  }, []);

  return (
    <div className="bg-gray-200 py-16 overflow-hidden">
      <div className="relative h-48">
        <div
          className="absolute top-0 left-0 whitespace-nowrap space-x-16 h-48 flex gap-2 items-center"
          ref={moverRef}
        >
          {[0, 1].flatMap(() =>
            Children.map(children, child => (
              <div className="grayscale hover:grayscale-0 hover:scale-110 duration-75">
                {child}
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};
