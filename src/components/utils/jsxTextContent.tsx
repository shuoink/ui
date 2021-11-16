import {Children} from 'react';
import type {ReactNode} from 'react';
import {isFragment} from 'react-is';

export const jsxTextContent = (children: ReactNode): string =>
  Children.toArray(children)
    .flatMap(child => {
      if (typeof child === 'string' || typeof child === 'number') {
        return child;
      }
      if (isFragment(child)) {
        return jsxTextContent(child.props.children as ReactNode);
      }
      return [];
    })
    .join('');
