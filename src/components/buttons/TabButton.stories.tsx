import type {FC} from 'react';
import {MdBrowserNotSupported} from 'react-icons/md/index.js';
import {TabButton as Component} from './TabButton.js';

const meta = {
  title: 'Base/Buttons/TabButton',
  component: Component,
};

export const TabButton: FC = () => (
  <Component>
    <MdBrowserNotSupported />
    Tab
  </Component>
);

export default meta;
