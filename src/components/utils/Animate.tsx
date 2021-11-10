import classNames from 'classnames';
import {gsap} from 'gsap';
import scrollTrigger from 'gsap/ScrollTrigger';
import type {FC} from 'react';
import {
  useState,
  Children,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useRef,
} from 'react';

gsap.registerPlugin(scrollTrigger);

/** animates opacity and y-position of children on scroll */
const Animate: FC<{
  delay?: number;
  from?: gsap.TweenVars;
}> = ({delay, from: fromProp = {y: 100}, children}) => {
  const reference = useRef<HTMLElement | null>();
  const [from] = useState(fromProp);

  useLayoutEffect(() => {
    const element = reference.current;
    if (!element) {
      return;
    }
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom bottom',
      },
      delay: delay != null ? delay / 1000 : 0,
      autoAlpha: 0,
      ...from,
    });
  }, [from, delay]);

  const child = Children.only(children);

  if (isValidElement(child)) {
    return cloneElement(child, {
      ref: reference,
      className: classNames(
        child.props.className as string | undefined,
        'invisible',
      ),
    });
  }

  return <>{children}</>;
};

export default Animate;
