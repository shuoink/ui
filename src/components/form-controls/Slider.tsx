import type {ReactNode, FC} from 'react';
import {useId} from 'react';
import type {FieldMeta} from '../../_internal/utils/types.js';

export const Slider: FC<
  JSX.IntrinsicElements['input'] & {
    meta?: FieldMeta;
    children?: ReactNode;
  }
> = ({children, ...rest}) => {
  const listId = useId();
  return (
    <>
      <input {...rest} type="range" list={listId} />
      <datalist id={listId}>{children}</datalist>
    </>
  );
};
