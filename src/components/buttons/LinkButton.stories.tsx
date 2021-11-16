import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {MdAdd} from 'react-icons/md';
import {LinkButton as LinkButtonComponent} from './LinkButton';

const meta: Meta = {
  title: 'Buttons/Link Button',
  component: LinkButtonComponent,
};

export const LinkButton: VFC = () => (
  <>
    I've got some peaches for sale!{' '}
    <LinkButtonComponent>Get you some!</LinkButtonComponent> They're running out
    quick!
  </>
);

export default meta;
