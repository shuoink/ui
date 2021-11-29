import type {Meta, Story} from '@storybook/react';
import {MdClose} from 'react-icons/md';
import {Button} from './Button';
import {TabButtonGroup as Component} from './TabButtonGroup';

const meta: Meta = {
  title: 'Base/Buttons/TabButtonGroup',
  component: Component,
  argTypes: {
    remove: {action: 'removed'},
  },
};

export const TabButtonGroup: Story<{remove: () => void}> = ({remove}) => (
  <Component>
    <Button>Tab</Button>
    <Button>
      <MdClose />
    </Button>
  </Component>
);

export default meta;
