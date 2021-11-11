import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {useToggle} from '../../hooks/useToggle';
import {Button} from '../buttons/Button';
import {CollapsibleIcon as Component} from './CollapsibleIcon';

const meta: Meta = {
  title: 'Components/Collapsible Icon/Collapsible Icon',
  component: Component,
};

export const CollapsibleIcon: VFC = () => {
  // eslint-disable-next-line unicorn/no-unreadable-array-destructuring -- boo hiss. disable this rule
  const [isOpen, , , toggle] = useToggle();
  return (
    <div className="flex flex-wrap gap-2">
      <Button>
        Closed <Component />
      </Button>
      <Button>
        Open <Component isOpen />
      </Button>
      <Button
        className="flex border items-center"
        type="button"
        onClick={toggle}
      >
        Interactive (Currently: {isOpen ? 'open' : 'closed'}){' '}
        <Component isOpen={isOpen} />
      </Button>
    </div>
  );
};

export default meta;
