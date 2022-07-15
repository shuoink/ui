import type {FC} from 'react';
import {useToggle} from '../../_internal/hooks/useToggle.js';
import {Button} from '../buttons/Button.js';
import {Dropdown as Component} from './Dropdown.js';

const meta = {
  title: 'Base/Overlays/Dropdown',
  component: Component,
};

const menu = (
  <div className="border-2 bg-white shadow-lg p-4 w-48">
    this is a menu i guess. this is a menu i guess.
  </div>
);

export const OpenBottomLeft: FC = () => (
  <div className="text-center">
    <Component
      renderTrigger={({ref}) => <Button ref={ref}>Trigger</Button>}
      placement="bottom-start"
      isOpen
    >
      {menu}
    </Component>
  </div>
);

export const OpenBottomRight: FC = () => (
  <div className="text-center">
    <Component
      renderTrigger={({ref}) => <Button ref={ref}>Trigger</Button>}
      placement="bottom-end"
      isOpen
    >
      {menu}
    </Component>
  </div>
);

export const Closed: FC = () => (
  <div className="text-center">
    <Component
      renderTrigger={({ref}) => <Button ref={ref}>Trigger</Button>}
      placement="bottom-start"
    >
      {menu}
    </Component>
  </div>
);

export const Interactive: FC = () => {
  const [isOpen, , close, toggle] = useToggle();
  return (
    <div className="text-center">
      <Component
        renderTrigger={({ref}) => (
          <Button ref={ref} onClick={toggle}>
            Trigger (currently: {isOpen ? 'open' : 'closed'})
          </Button>
        )}
        placement="bottom-end"
        isOpen={isOpen}
        close={close}
      >
        {menu}
      </Component>
    </div>
  );
};

export default meta;
