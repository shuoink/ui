import type {FC} from 'react';
import {getButtonClasses} from '../../utils/getButtonClasses';
import type {StyleableProps} from '../../types';
import {getClassName} from '../../utils/getClassName';
import {getStyle} from '../../utils/getStyle';
import type {DockConfig} from '../../utils/dock';

type StyleData = {
  dock?: DockConfig;
};

type Props = StyleableProps<JSX.IntrinsicElements['button'], StyleData> &
  StyleData & {remove?: () => void};

export const Button: FC<Props> = ({
  type = 'button',
  className: classNameProp,
  style: styleProp,
  dock,
  remove,
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
