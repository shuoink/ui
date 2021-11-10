import classNames from 'classnames';
import type {VFC} from 'react';
import {useLayoutEffect, useState} from 'react';

export const Overlay: VFC<{
  dark?: boolean;
  opaque?: boolean;
  close: () => void;
}> = ({dark, opaque, close}) => {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      role="none"
      className={classNames('fixed z-10 inset-0', {
        'bg-black': dark,
        'opacity-0': !visible,
        'opacity-50': visible && !opaque,
        'opacity-100': visible && opaque,
      })}
      onClick={close}
      onKeyDown={evemt => {
        if (evemt.key === 'Escape') {
          close();
        }
      }}
    />
  );
};
