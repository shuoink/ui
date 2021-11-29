import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {ButtonGroup as Component} from './ButtonGroup';
import {Button} from './Button';

const meta: Meta = {
  title: 'Base/Buttons/ButtonGroup',
  component: Component,
};

export const ButtonGroup: VFC = () => (
  <>
    <Component>
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Component>
  </>
);

export default meta;
