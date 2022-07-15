import _clsx from 'clsx';
import {defaultImport} from 'default-import';
import type {FC} from 'react';
import {useLayoutEffect, useState} from 'react';

const clsx = defaultImport(_clsx);

const Backdrop: FC<{
  dark?: boolean;
  opaque?: boolean;
  close?: () => void;
}> = ({dark, opaque, close}) => {
  const [visible, setVisible] = useState(false);

  useLayoutEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div
      role="none"
      className={clsx('fixed z-10 inset-0', {
        'bg-black': dark,
        'opacity-0': !visible,
        'opacity-50': visible && !opaque,
        'opacity-100': visible && opaque,
      })}
      onClick={close}
      onKeyDown={evemt => {
        if (evemt.key === 'Escape') {
          close?.();
        }
      }}
    />
  );
};

export default Backdrop;
