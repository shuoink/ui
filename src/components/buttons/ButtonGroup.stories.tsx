import type {FC} from 'react';
import {ButtonGroup as Component} from './ButtonGroup.js';
import {Button} from './Button.js';

const meta = {
  title: 'Base/Buttons/ButtonGroup',
  component: Component,
};

export const ButtonGroup: FC = () => (
  <>
    <Component>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Component>
  </>
);

export default meta;
