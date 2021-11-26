import type {Meta, Story} from '@storybook/react';
import {Disclaimer as Component} from './Disclaimer';

const meta: Meta = {
  title: 'Base/Typography/Disclaimer',
  component: Component,
};

export const Disclaimer: Story = () => <Component>Stuff and such</Component>;

export default meta;
