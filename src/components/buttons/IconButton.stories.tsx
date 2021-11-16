import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {MdAdd} from 'react-icons/md';
import {IconButton as IconButtonComponent} from './IconButton';

const meta: Meta = {
  title: 'Buttons/IconButton',
  component: IconButtonComponent,
};

export const IconButton: VFC = () => (
  <IconButtonComponent title="Add">
    <MdAdd />
  </IconButtonComponent>
);

export default meta;
