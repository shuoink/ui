import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {MdAdd} from 'react-icons/md';
import {IconLink as Component} from './IconLink';

const meta: Meta = {
  title: 'Navigation/Icon Link',
  component: Component,
};

export const IconLink: VFC = () => (
  <Component title="Add" href="#">
    <MdAdd />
  </Component>
);

export default meta;
