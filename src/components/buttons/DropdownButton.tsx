import type {ComponentProps, FC, ReactNode} from 'react';
import {ExitContext} from '../../contexts/ExitContext';
import {useToggle} from '../../hooks/useToggle';
import {CollapsibleIcon} from '../icons/CollapsibleIcon';
import {Dropdown} from '../overlays/Dropdown';
import {Button} from './Button';

type Props = ComponentProps<typeof Button> &
  Omit<ComponentProps<typeof Dropdown>, 'close' | 'isOpen' | 'trigger'> & {
    label: ReactNode;
  };

export const DropdownButton: FC<Props> = ({
  placement,
  children,
  label,
  ...buttonProps
}) => {
  const [isOpen, , close, toggle] = useToggle(false);
  return (
    <Dropdown
      isOpen={isOpen}
      close={close}
      trigger={
        <Button {...buttonProps} onClick={toggle}>
          {label} <CollapsibleIcon isOpen={isOpen} />
        </Button>
      }
      placement={placement}
    >
      <ExitContext.Provider value={close}>{children}</ExitContext.Provider>
    </Dropdown>
  );
};
