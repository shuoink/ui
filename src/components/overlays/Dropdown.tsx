import type {
  Dispatch,
  FC,
  ReactElement,
  ReactNode,
  SetStateAction,
} from 'react';
import {useState} from 'react';
import {usePopper} from 'react-popper';
import type {Options} from '@popperjs/core';
import {Backdrop} from './Backdrop.js';

type Props = {
  isOpen?: boolean;
  close?: () => void;
  placement?: Options['placement'];
  renderTrigger: ({
    ref,
  }: {
    ref: Dispatch<SetStateAction<HTMLElement | null>>;
  }) => ReactElement;
  children?: ReactNode;
};

export const Dropdown: FC<Props> = ({
  placement = 'bottom-start',
  isOpen,
  close,
  renderTrigger,
  children,
}) => {
  const [refEl, setRefEl] = useState<HTMLElement | null>(null);
  const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
  const {styles, attributes} = usePopper(refEl, popperEl, {
    placement,
  });
  return (
    <div className="inline-block relative">
      {renderTrigger({ref: setRefEl})}
      {isOpen && <Backdrop close={close} />}
      {isOpen && (
        <div ref={setPopperEl} {...attributes.popper} style={styles.popper}>
          {children}
        </div>
      )}
    </div>
  );
};
