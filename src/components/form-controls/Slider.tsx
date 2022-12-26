import {clsx} from 'clsx';
import {cloneElement, forwardRef, useId} from 'react';
import {isElement} from 'react-is';
import withFieldGroup from '../../_internal/decorators/withFieldGroup.js';
import countChildren from '../../_internal/utils/countChildren.js';
import flattenChildren from '../../_internal/utils/flattenChildren.js';
import isEmptyOrNil from '../../_internal/utils/isEmptyOrNil.js';
import type {FieldMeta} from '../../_internal/utils/types.js';

type Props = JSX.IntrinsicElements['input'] & {
  showTicks?: boolean;
  meta?: FieldMeta;
};

const Slider = forwardRef<HTMLInputElement, Props>(
  ({children, showTicks, meta, ...rest}, ref) => {
    const listId = useId();
    const isValid = isEmptyOrNil(meta?.errors);
    return (
      <>
        <input
          {...rest}
          ref={ref}
          type="range"
          list={listId}
          className={clsx(
            'block w-full appearance-none bg-transparent focus:outline-none',
            [
              '[&::-webkit-slider-runnable-track]:appearance-none',
              '[&::-webkit-slider-runnable-track]:cursor-pointer',
              '[&::-webkit-slider-runnable-track]:w-full',
              '[&::-webkit-slider-runnable-track]:h-2',
              '[&::-webkit-slider-runnable-track]:shadow',
              {
                '[&::-webkit-slider-runnable-track]:bg-white': !meta?.touched,
                '[&::-webkit-slider-runnable-track]:bg-good-100':
                  meta?.touched && isValid,
                '[&::-webkit-slider-runnable-track]:bg-bad-100':
                  meta?.touched && !isValid,
              },
              '[&::-webkit-slider-runnable-track]:rounded',
              '[&::-webkit-slider-runnable-track]:border',
              '[&::-webkit-slider-runnable-track]:border-solid',
              {
                '[&::-webkit-slider-runnable-track]:border-gray-500':
                  !meta?.touched,
                '[&::-webkit-slider-runnable-track]:border-good-500':
                  meta?.touched && isValid,
                '[&::-webkit-slider-runnable-track]:border-bad-500':
                  meta?.touched && !isValid,
              },
            ],
            [
              '[&::-webkit-slider-thumb]:appearance-none',
              '[&::-webkit-slider-thumb]:focus:ring',
              '[&::-webkit-slider-thumb]:hover:scale-125',
              '[&::-webkit-slider-thumb]:border',
              '[&::-webkit-slider-thumb]:border-solid',
              {
                '[&::-webkit-slider-thumb]:border-gray-500': !meta?.touched,
                '[&::-webkit-slider-thumb]:border-good-500':
                  meta?.touched && isValid,
                '[&::-webkit-slider-thumb]:border-bad-500':
                  meta?.touched && !isValid,
              },
              '[&::-webkit-slider-thumb]:h-4',
              '[&::-webkit-slider-thumb]:-mt-1',
              '[&::-webkit-slider-thumb]:w-4',
              '[&::-webkit-slider-thumb]:rounded-full',
              '[&::-webkit-slider-thumb]:bg-white',
              {
                '[&::-webkit-slider-thumb]:bg-white': !meta?.touched,
                '[&::-webkit-slider-thumb]:bg-good-100':
                  meta?.touched && isValid,
                '[&::-webkit-slider-thumb]:bg-bad-100':
                  meta?.touched && !isValid,
              },
              '[&::-webkit-slider-thumb]:shadow',
            ],
          )}
        />
        <datalist
          id={listId}
          className={clsx({
            'grid justify-between justify-items-center w-full': showTicks,
          })}
          style={{
            gridTemplateColumns: `1fr repeat(${
              countChildren(children, true) - 2
            }, minmax(0, 2fr)) 1fr`,
          }}
        >
          {
            // eslint-disable-next-line no-confusing-arrow -- stuff
            flattenChildren(children, {strict: true}).map((child, index, all) =>
              !isElement(child)
                ? null
                : index === 0
                ? cloneElement(child, {className: 'justify-self-start'})
                : index === all.length - 1
                ? cloneElement(child, {className: 'justify-self-end'})
                : child,
            )
          }
        </datalist>
      </>
    );
  },
);

export const SliderGroup = withFieldGroup(Slider);

export default Slider;
