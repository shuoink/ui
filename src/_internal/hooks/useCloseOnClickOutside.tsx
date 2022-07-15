import {useEffect} from 'react';
import type {MutableRefObject} from 'react';

export const useCloseOnClickOutside = (
  isOpen: boolean,
  close: () => void,
  containerRef: MutableRefObject<HTMLElement | null>,
): void => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }
    const handleClick = (e: MouseEvent) => {
      if (!container.contains(e.target as Node)) {
        close();
      }
    };
    const options = {capture: true};
    if (isOpen) {
      document.addEventListener('click', handleClick, options);
      return () => {
        document.removeEventListener('click', handleClick, options);
      };
    }
  }, [isOpen, close, containerRef]);
};
