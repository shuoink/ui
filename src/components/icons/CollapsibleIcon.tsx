import type {FC} from 'react';
import {MdExpandMore} from 'react-icons/md/index.js';
import _clsx from 'clsx';
import {defaultImport} from 'default-import';

const clsx = defaultImport(_clsx);

export const CollapsibleIcon: FC<{isOpen?: boolean}> = ({isOpen}) => (
  <MdExpandMore
    title="Expanded/Collapsed Icon"
    className={clsx('ml-2 duration-200 transform', {
      'rotate-180': isOpen,
    })}
  />
);
