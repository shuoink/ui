import type {ReactElement, ReactNode} from 'react';
import {isPortal} from 'react-is';

const isRenderedNode = (
  node: ReactNode,
): node is ReactElement | number | string | true =>
  !isPortal(node) && node !== false && node != null;

export default isRenderedNode;
