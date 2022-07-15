import type {FC} from 'react';
import {useToggle} from '../../_internal/hooks/useToggle.js';
import Button from '../buttons/Button.js';
import Component from './Collapsible.js';

const meta = {
  title: 'Base/Layout/Collapsible',
  component: Component,
};

const CONTENT = 'This is the content '.repeat(20);

export const Collapsible: FC = () => {
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
