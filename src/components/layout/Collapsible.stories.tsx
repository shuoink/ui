import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {useToggle} from '../../hooks/useToggle';
import {Button} from '../buttons/Button';
import {Collapsible as Component} from './Collapsible';

const meta: Meta = {
  title: 'Layout/Collapsible',
  component: Component,
};

const CONTENT = 'This is the content '.repeat(20);

export const Collapsible: VFC = () => {
  // eslint-disable-next-line unicorn/no-unreadable-array-destructuring -- disable this rule
  const [isOpen, , , toggle] = useToggle();
  return (
    <div className="flex flex-wrap gap-2">
      <div className="w-48">
        Closed:
        <Component>{CONTENT}</Component>
      </div>
      <div className="w-48">
        Open:
        <Component isOpen>{CONTENT}</Component>
      </div>
      <div className="w-48">
        Interactive: <Button onClick={toggle}>Toggle</Button>
        <Component isOpen={isOpen}>{CONTENT}</Component>
      </div>
    </div>
  );
};

export default meta;
