import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Button as Component} from './Button';

const meta: Meta = {
  title: 'Base/Buttons/Button',
  component: Component,
};

export const Button: VFC = () => (
  <>
    <Component>Button Text</Component>
  </>
);

export default meta;
