import type {FC} from 'react';
import {useRef, useLayoutEffect} from 'react';
import {gsap} from 'gsap';

const Collapsible: FC<{isOpen?: boolean}> = ({children, isOpen}) => {
  const reference = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const element = reference.current;
    if (!element) {
      return;
    }
    gsap.to(element, {
      height: isOpen ? element.scrollHeight : 0,
      ease: 'power4.out',
      onComplete: () => {
        const element2 = reference.current;
        if (isOpen && element2) {
          element2.style.height = 'auto';
        }
      },
    });
  }, [isOpen]);

  return (
    <div ref={reference} className="overflow-hidden">
      {children}
    </div>
  );
};

export default Collapsible;
