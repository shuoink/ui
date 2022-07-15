import type {FC} from 'react';
import {Button as Component} from './Button.js';

const meta = {
  title: 'Base/Buttons/Button',
  component: Component,
};

export const Button: FC = () => (
  <>
    <Component>Button Text</Component>
  </>
);

export default meta;
