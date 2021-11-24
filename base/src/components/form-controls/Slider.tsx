import {useId} from '@reach/auto-id';
import type {ReactNode, VFC} from 'react';
import type {FieldMeta} from '../../types';

export const Slider: VFC<
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
