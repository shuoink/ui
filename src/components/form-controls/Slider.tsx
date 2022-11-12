import type {ReactNode} from 'react';
import {forwardRef, useId} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';

const Slider = forwardRef<
  HTMLInputElement,
  JSX.IntrinsicElements['input'] & {
    meta?: FieldMeta;
    children?: ReactNode;
  }
>(({children, ...rest}, ref) => {
  const listId = useId();
  return (
    <>
      <input {...rest} ref={ref} type="range" list={listId} />
      <datalist id={listId}>{children}</datalist>
    </>
  );
});

export default Slider;
