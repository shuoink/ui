import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {useToggle} from '../../hooks/useToggle';
import {Button} from '../buttons/Button';
import {Dropdown as Component} from './Dropdown';

const meta: Meta = {
  title: 'Overlays/Dropdown',
  component: Component,
};

const menu = (
  <div className="border-2 bg-white shadow-lg p-4 w-48">
    this is a menu i guess. this is a menu i guess.
  </div>
);

export const OpenBottomLeft: VFC = () => (
  <Component trigger={<Button>Trigger</Button>} placement="bottom-left" isOpen>
    {menu}
  </Component>
);

export const OpenBottomRight: VFC = () => (
  <Component trigger={<Button>Trigger</Button>} placement="bottom-right" isOpen>
    {menu}
  </Component>
);

export const Closed: VFC = () => (
  <Component trigger={<Button>Trigger</Button>} placement="bottom-left">
    {menu}
  </Component>
);

export const Interactive: VFC = () => {
  const [isOpen, , close, toggle] = useToggle();
  return (
    <Component
      trigger={
        <Button onClick={toggle}>
          Trigger (currently: {isOpen ? 'open' : 'closed'})
        </Button>
      }
      placement="bottom-right"
      isOpen={isOpen}
      close={close}
    >
      {menu}
    </Component>
  );
};

export default meta;
