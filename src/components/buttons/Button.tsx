import type {FC} from 'react';
import {getButtonClasses} from '../../utils/getButtonClasses';
import type {DockConfig, StyleableProps} from '../../types';
import {getClassName} from '../../utils/getClassName';
import {getStyle} from '../../utils/getStyle';

type StyleData = {
  dock?: DockConfig;
};

type Props = StyleableProps<JSX.IntrinsicElements['button'], StyleData> &
  StyleData;

export const Button: FC<Props> = ({
  type = 'button',
  className: classNameProp,
  style: styleProp,
  dock,
  ...rest
}) => {
  const styleData = {dock};

  return (
    <button
      {...rest}
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
};
