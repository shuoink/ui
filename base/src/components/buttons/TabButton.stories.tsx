import type {Meta, Story} from '@storybook/react';
import {MdBrowserNotSupported} from 'react-icons/md';
import {TabButton as Component} from './TabButton';

const meta: Meta = {
  title: 'Base/Buttons/TabButton',
  component: Component,
  argTypes: {
    remove: {action: 'removed'},
  },
};

export const TabButton: Story<{remove: () => void}> = ({remove}) => (
  <Component>
    <MdBrowserNotSupported />
    Tab
  </Component>
);

export default meta;
