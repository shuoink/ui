import type {VFC} from 'react';
import type {Meta} from '@storybook/react';
import {TabLink as Component} from './TabLink';

const meta: Meta = {
  title: 'Base/Navigation/TabLink',
  component: Component,
};

export const TabLink: VFC = () => (
  <>
    <Component href="#">TabLink Text</Component>
    <div className="border w-48 h-48" />
  </>
);

export default meta;
