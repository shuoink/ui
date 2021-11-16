import type {FC} from 'react';
import {useRef, useLayoutEffect} from 'react';

export const Collapsible: FC<{isOpen?: boolean}> = ({children, isOpen}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const div = ref.current;
    if (!div) {
      return;
    }
    const height = div.scrollHeight;
    div.animate(
      [{height: div.clientHeight}, {height: isOpen ? `${height}px` : 0}],
      {iterations: 1, duration: 100, fill: 'forwards'},
    );
  }, [isOpen]);

  return (
    <div ref={ref} className="overflow-hidden h-0">
      {children}
    </div>
  );
};
