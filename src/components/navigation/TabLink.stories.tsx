import type {FC} from 'react';
import {TabLink as Component} from './TabLink.js';

const meta = {
  title: 'Base/Navigation/TabLink',
  component: Component,
};

export const TabLink: FC = () => (
  <>
    <Component href="#">TabLink Text</Component>
    <div className="border w-48 h-48" />
  </>
);

export default meta;
