import type {ReactNode, ReactElement, ReactPortal, Key} from 'react';
import {Children, isValidElement, cloneElement} from 'react';
import {isFragment} from 'react-is';
import isRenderedNode from './isRenderedNode.js';

const flattenChildren = (
  children: ReactNode,
  {strict = false, _keys = []}: {strict?: boolean; _keys?: Array<Key>},
): Array<
  ReactElement | ReactPortal | boolean | number | string | null | undefined
> => {
  const all = Children.toArray(children).flatMap(
    (node: ReactNode, index: number) => {
      if (isFragment(node)) {
        return flattenChildren(node.props.children as ReactNode, {
          strict,
          _keys: [..._keys, node.key ?? index],
        });
      }
      if (isValidElement(node)) {
        return cloneElement(node, {
          key: [..._keys, String(node.key)].join('.'),
        });
      }
      if (typeof node === 'string' || typeof node === 'number') {
        return node;
      }
      return null;
    },
  );
  if (!strict) {
    return all;
  }
  return all.filter(isRenderedNode);
};

export default flattenChildren;
