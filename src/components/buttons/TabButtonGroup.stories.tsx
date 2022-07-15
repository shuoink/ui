import type {FC} from 'react';
import {MdClose} from 'react-icons/md/index.js';
import {Button} from './Button.js';
import {TabButtonGroup as Component} from './TabButtonGroup.js';

const meta = {
  title: 'Base/Buttons/TabButtonGroup',
  component: Component,
  argTypes: {
    remove: {action: 'removed'},
  },
};

export const TabButtonGroup: FC = () => (
  <Component>
    <Button>Tab</Button>
    <Button>
      <MdClose />
    </Button>
  </Component>
);

export default meta;
