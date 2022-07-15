import type {FC} from 'react';
import {useToggle} from '../../_internal/hooks/useToggle.js';
import Button from '../buttons/Button.js';
import Component from './CollapsibleIcon.js';

const meta = {
  title: 'Base/Icons/Collapsible Icon',
  component: Component,
};

export const Closed: FC = () => (
  <Button>
    Closed <Component />
  </Button>
);

export const Open: FC = () => (
  <Button>
    Open <Component isOpen />
  </Button>
);

export const Interactive: FC = () => {
  const [isOpen, , , toggle] = useToggle();
  return (
    <Button className="flex border items-center" type="button" onClick={toggle}>
      Interactive (Currently: {isOpen ? 'open' : 'closed'}){' '}
      <Component isOpen={isOpen} />
    </Button>
  );
};

export default meta;
