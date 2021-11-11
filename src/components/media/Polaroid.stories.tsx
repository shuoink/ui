import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {Polaroid as Component} from './Polaroid';

const meta: Meta = {
  title: 'Components/Media/Polaroid',
  component: Component,
};

export const Polaroid: VFC = () => (
  <Component>
    <img src="https://www.fillmurray.com/300/300" alt="Bill Murray" />
  </Component>
);

export default meta;
