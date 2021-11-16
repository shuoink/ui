import type {VFC} from 'react';
import type {Meta, Story} from '@storybook/react';
import {within, fireEvent} from '@storybook/testing-library';
import {useToggle} from '../../hooks/useToggle';
import {Button} from '../buttons/Button';
import {CollapsibleIcon as Component} from './CollapsibleIcon';

const meta: Meta = {
  title: 'Icons/Collapsible Icon',
  component: Component,
};

export const Closed: VFC = () => (
  <Button>
    Closed <Component />
  </Button>
);

export const Open: VFC = () => (
  <Button>
    Open <Component isOpen />
  </Button>
);

export const Interactive: Story = () => {
  // eslint-disable-next-line unicorn/no-unreadable-array-destructuring -- boo hiss. disable this rule
  const [isOpen, , , toggle] = useToggle();
  return (
    <Button className="flex border items-center" type="button" onClick={toggle}>
      Interactive (Currently: {isOpen ? 'open' : 'closed'}){' '}
      <Component isOpen={isOpen} />
    </Button>
  );
};

Interactive.play = ({canvasElement}) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method -- false positive?
  const {getByRole} = within(canvasElement);
  const button = getByRole('button');
  fireEvent.click(button);
  fireEvent.click(button);
};

export default meta;
