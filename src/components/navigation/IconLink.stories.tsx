import type {FC} from 'react';
import {MdAdd} from 'react-icons/md/index.js';
import {IconLink as Component} from './IconLink.js';

const meta = {
  title: 'Base/Navigation/Icon Link',
  component: Component,
};

export const IconLink: FC = () => (
  <Component title="Add" href="#">
    <MdAdd />
  </Component>
);

export default meta;
