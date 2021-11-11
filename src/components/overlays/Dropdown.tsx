import type {FC, ReactNode} from 'react';
import classnames from 'classnames';
import {Backdrop} from './Backdrop';

type Props = {
  isOpen?: boolean;
  close?: () => void;
  placement?: 'bottom-left' | 'bottom-right';
  trigger: ReactNode;
};

export const Dropdown: FC<Props> = ({
  placement = 'bottom-left',
  isOpen,
  close,
  trigger,
  children,
}) => (
  <>
    <div className="inline-block relative">
      {trigger}
      {isOpen && <Backdrop close={close} />}
      {isOpen && (
        <div
          className={classnames('absolute min-w-full', {
            'hidden': !isOpen,
            'left-0': placement === 'bottom-left',
            'right-0': placement === 'bottom-right',
          })}
        >
          {children}
        </div>
      )}
    </div>
  </>
);
