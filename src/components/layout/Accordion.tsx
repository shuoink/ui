import type {ComponentProps, FC, ReactElement, ReactNode} from 'react';
import {Children, cloneElement, isValidElement, useState} from 'react';
import AccordionSection from './AccordionSection.js';

const Accordion: FC<{children?: ReactNode}> = ({children}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const childArray = Children.toArray(children);
  return (
    <>
      {childArray.map((child, index) => {
        const isFirst = index === 0;
        const isLast = index === childArray.length - 1;
        const isOpen = activeIndex === index;
        if (isValidElement(child) && child.type === AccordionSection) {
          return cloneElement(
            child as ReactElement<ComponentProps<typeof AccordionSection>>,
            {
              isOpen,
              toggle: () =>
                setActiveIndex(activeIndex === index ? null : index),
              dock: {
                top: !isFirst,
                bottom: !isLast || isOpen,
              },
            },
          );
        }
        return child;
      })}
    </>
  );
};

export default Accordion;
