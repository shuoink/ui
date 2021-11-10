import type {VFC} from 'react';
import {MdExpandMore} from 'react-icons/md';
import classNames from 'classnames';

export const CollapsibleIcon: VFC<{isOpen?: boolean}> = ({isOpen}) => (
  <MdExpandMore
    className={classNames('ml-2 duration-200 transform', {
      'rotate-180': isOpen,
    })}
  />
);
