import type {ComponentProps, FC, ReactNode} from 'react';
import ExitContext from '../../_internal/contexts/ExitContext.js';
import {useToggle} from '../../_internal/hooks/useToggle.js';
import CollapsibleIcon from '../icons/CollapsibleIcon.js';
import Dropdown from '../overlays/Dropdown.js';
import Button from './Button.js';

type Props = ComponentProps<typeof Button> &
  Omit<
    ComponentProps<typeof Dropdown>,
    'close' | 'isOpen' | 'renderTrigger'
  > & {
    label: ReactNode;
  };

const DropdownButton: FC<Props> = ({
  placement,
  children,
  label,
  ...buttonProps
}) => {
  const [isOpen, , close, toggle] = useToggle();
  return (
    <Dropdown
      isOpen={isOpen}
      close={close}
      renderTrigger={({ref}) => (
        <Button ref={ref as any} {...buttonProps} onClick={toggle}>
          {label} <CollapsibleIcon isOpen={isOpen} />
        </Button>
      )}
      placement={placement}
    >
      <ExitContext.Provider value={close}>{children}</ExitContext.Provider>
    </Dropdown>
  );
};

export default DropdownButton;
