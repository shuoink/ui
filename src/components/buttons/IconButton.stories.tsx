import type {FC} from 'react';
import {MdAdd} from 'react-icons/md/index.js';
import {IconButton as IconButtonComponent} from './IconButton.js';

const meta = {
  title: 'Base/Buttons/IconButton',
  component: IconButtonComponent,
};

export const IconButton: FC = () => (
  <IconButtonComponent title="Add">
    <MdAdd />
  </IconButtonComponent>
);

export default meta;
