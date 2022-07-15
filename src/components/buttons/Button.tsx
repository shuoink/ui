import {forwardRef} from 'react';
import {getButtonClasses} from '../../_internal/utils/getButtonClasses.js';
import type {StyleableProps} from '../../_internal/utils/types.js';
import {getClassName} from '../../_internal/utils/getClassName.js';
import {getStyle} from '../../_internal/utils/getStyle.js';
import type {DockConfig} from '../../_internal/utils/dock.js';

type StyleData = {
  dock?: DockConfig;
};

type Props = StyleableProps<JSX.IntrinsicElements['button'], StyleData> &
  StyleData & {remove?: () => void};

const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      type = 'button',
      className: classNameProp,
      style: styleProp,
      dock,
      remove,
      ...rest
    },
    ref,
  ) => {
    const styleData = {dock};

    return (
      <button
        {...rest}
        ref={ref}
        // eslint-disable-next-line react/button-has-type -- eslint wants a constant. sorry eslint.
        type={type}
        style={getStyle<StyleData>(styleProp, styleData)}
        className={getClassName<StyleData>(
          classNameProp,
          styleData,
          getButtonClasses(styleData),
        )}
      />
    );
  },
);

export default Button;
