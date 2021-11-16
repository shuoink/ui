import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Button as ButtonComponent} from './Button';

const meta: Meta = {
  title: 'Buttons/Button',
  component: ButtonComponent,
};

export const Button: VFC = () => (
  <>
    <ButtonComponent>Button Text</ButtonComponent>
  </>
);

export default meta;
